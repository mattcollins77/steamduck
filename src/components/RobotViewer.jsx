import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import URDFLoader from 'urdf-loader';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';

// Get electron process from window if available
const isElectron = window && window.electron;

const RobotViewer = forwardRef((props, ref) => {
    const mountRef = useRef(null);
    const robotRef = useRef(null);
    const [isDev, setIsDev] = useState(false);
    const [resourcesPath, setResourcesPath] = useState('');

    // Get environment info
    useEffect(() => {
        async function initEnvironment() {
            if (isElectron) {
                const devMode = await window.electron.isDev();
                const resources = await window.electron.getResourcesPath();
                console.log('Environment initialized:', { devMode, resources });
                setIsDev(devMode);
                setResourcesPath(resources);
            }
        }
        initEnvironment();
    }, []);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
        updatePosition: (x, y) => {
            if (robotRef.current) {
                robotRef.current.position.x += x * 0.1;
                robotRef.current.position.z -= y * 0.1;
            }
        },
        updateJoints: (motorData) => {
            if (robotRef.current) {
                motorData.forEach(motor => {
                    const jointName = motor.name;
                    if (robotRef.current.joints[jointName]) {
                        const joint = robotRef.current.joints[jointName];
                        let angle = motor.rad;
                        if (joint.limit) {
                            angle = Math.max(
                                joint.limit.lower,
                                Math.min(joint.limit.upper, angle)
                            );
                        }
                        if (joint.axis) {
                            const axis = new THREE.Vector3(...joint.axis);
                            const quaternion = new THREE.Quaternion();
                            quaternion.setFromAxisAngle(axis, angle);
                            joint.quaternion.copy(quaternion);
                        }
                    }
                });
            }
        },
        updateOrientation: (imuData) => {
            if (robotRef.current) {
                const euler = new THREE.Euler(
                    imuData.gyro.x,
                    imuData.gyro.y,
                    imuData.gyro.z,
                    'XYZ'
                );
                const quaternion = new THREE.Quaternion().setFromEuler(euler);
                robotRef.current.quaternion.copy(quaternion);
            }
        }
    }));

    useEffect(() => {
        if (!mountRef.current) return;
        console.log('Setting up scene with:', { isDev, resourcesPath });
        
        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a2e);

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // aspect ratio of 1 for square
        camera.position.set(0, 0.2, 0.5);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const width = window.innerWidth * 0.33;
        const height = width; // Make it square
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        mountRef.current.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 0.5;
        controls.maxDistance = 2.0;
        controls.update();

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(1, 1, 1);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const width = window.innerWidth * 0.33;
            const height = width; // Keep square aspect ratio
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Load URDF
        const loader = new URDFLoader();
        loader.loadMeshCb = (path, manager, done) => {
            // In production, use absolute paths from the resources directory
            const meshPath = isDev 
                ? path.replace('package://', '/go_bdx/')
                : path.replace('package://', `${resourcesPath}/public/go_bdx/`);
            
            console.log('Loading mesh:', meshPath, 'isDev:', isDev, 'resourcesPath:', resourcesPath);
            
            const loader = new STLLoader(manager);
            loader.load(meshPath, geom => {
                const material = new THREE.MeshStandardMaterial({
                    color: 0x00ff00,
                    metalness: 0.3,
                    roughness: 0.4,
                    emissive: 0x004400,
                    emissiveIntensity: 0.5
                });
                const mesh = new THREE.Mesh(geom, material);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                done(mesh);
            },
            // Add progress callback
            (xhr) => {
                console.log(`${meshPath}: ${(xhr.loaded / xhr.total * 100)}% loaded`);
            },
            // Add error callback
            (error) => {
                console.error('Error loading mesh:', meshPath, error);
                // Try alternate path if first attempt fails
                const altPath = meshPath.replace('/public/', '/');
                console.log('Trying alternate path:', altPath);
                loader.load(altPath, geom => {
                    const material = new THREE.MeshStandardMaterial({
                        color: 0x00ff00,
                        metalness: 0.3,
                        roughness: 0.4,
                        emissive: 0x004400,
                        emissiveIntensity: 0.5
                    });
                    const mesh = new THREE.Mesh(geom, material);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    done(mesh);
                });
            });
        };

        // Load the URDF file
        const urdfPath = isDev 
            ? '/go_bdx/go_bdx.urdf'
            : `${resourcesPath}/public/go_bdx/go_bdx.urdf`;
            
        console.log('Loading URDF from:', urdfPath, 'isDev:', isDev, 'resourcesPath:', resourcesPath);

        loader.load(urdfPath, (urdfRobot) => {
            if (robotRef.current) {
                scene.remove(robotRef.current);
            }
            
            robotRef.current = urdfRobot;
            scene.add(urdfRobot);
            
            // Center and adjust robot position
            const box = new THREE.Box3().setFromObject(urdfRobot);
            const center = box.getCenter(new THREE.Vector3());
            urdfRobot.position.x = -center.x;
            urdfRobot.position.y = -center.y - 0.25;
            urdfRobot.position.z = -center.z;
            
            // Rotate to stand upright and face forward
            urdfRobot.rotation.set(0, 0, 0);
            urdfRobot.rotateX(-Math.PI / 2);
            urdfRobot.rotateZ((240 * Math.PI) / 180);
            
            // Update controls target to robot center
            controls.target.set(0, 0.1, 0);
            controls.update();
        });

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [isDev, resourcesPath]);

    return <div ref={mountRef} style={{ 
        width: '100%', 
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }} />;
});

export default RobotViewer;
