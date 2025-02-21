(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Rg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zu={exports:{}},ha={},Ju={exports:{}},Ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function j0(){if(Ep)return Ht;Ep=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function x(B,Y,K){this.props=B,this.context=Y,this.refs=T,this.updater=K||S}x.prototype.isReactComponent={},x.prototype.setState=function(B,Y){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Y,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=x.prototype;function U(B,Y,K){this.props=B,this.context=Y,this.refs=T,this.updater=K||S}var R=U.prototype=new y;R.constructor=U,w(R,x.prototype),R.isPureReactComponent=!0;var I=Array.isArray,H=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function Z(B,Y,K){var re,ue={},he=null,Se=null;if(Y!=null)for(re in Y.ref!==void 0&&(Se=Y.ref),Y.key!==void 0&&(he=""+Y.key),Y)H.call(Y,re)&&!k.hasOwnProperty(re)&&(ue[re]=Y[re]);var ce=arguments.length-2;if(ce===1)ue.children=K;else if(1<ce){for(var Me=Array(ce),Te=0;Te<ce;Te++)Me[Te]=arguments[Te+2];ue.children=Me}if(B&&B.defaultProps)for(re in ce=B.defaultProps,ce)ue[re]===void 0&&(ue[re]=ce[re]);return{$$typeof:s,type:B,key:he,ref:Se,props:ue,_owner:O.current}}function b(B,Y){return{$$typeof:s,type:B.type,key:Y,ref:B.ref,props:B.props,_owner:B._owner}}function D(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function Q(B){var Y={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(K){return Y[K]})}var J=/\/+/g;function ge(B,Y){return typeof B=="object"&&B!==null&&B.key!=null?Q(""+B.key):Y.toString(36)}function j(B,Y,K,re,ue){var he=typeof B;(he==="undefined"||he==="boolean")&&(B=null);var Se=!1;if(B===null)Se=!0;else switch(he){case"string":case"number":Se=!0;break;case"object":switch(B.$$typeof){case s:case e:Se=!0}}if(Se)return Se=B,ue=ue(Se),B=re===""?"."+ge(Se,0):re,I(ue)?(K="",B!=null&&(K=B.replace(J,"$&/")+"/"),j(ue,Y,K,"",function(Te){return Te})):ue!=null&&(D(ue)&&(ue=b(ue,K+(!ue.key||Se&&Se.key===ue.key?"":(""+ue.key).replace(J,"$&/")+"/")+B)),Y.push(ue)),1;if(Se=0,re=re===""?".":re+":",I(B))for(var ce=0;ce<B.length;ce++){he=B[ce];var Me=re+ge(he,ce);Se+=j(he,Y,K,Me,ue)}else if(Me=v(B),typeof Me=="function")for(B=Me.call(B),ce=0;!(he=B.next()).done;)he=he.value,Me=re+ge(he,ce++),Se+=j(he,Y,K,Me,ue);else if(he==="object")throw Y=String(B),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Se}function se(B,Y,K){if(B==null)return B;var re=[],ue=0;return j(B,re,"","",function(he){return Y.call(K,he,ue++)}),re}function W(B){if(B._status===-1){var Y=B._result;Y=Y(),Y.then(function(K){(B._status===0||B._status===-1)&&(B._status=1,B._result=K)},function(K){(B._status===0||B._status===-1)&&(B._status=2,B._result=K)}),B._status===-1&&(B._status=0,B._result=Y)}if(B._status===1)return B._result.default;throw B._result}var de={current:null},X={transition:null},ie={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ht.Children={map:se,forEach:function(B,Y,K){se(B,function(){Y.apply(this,arguments)},K)},count:function(B){var Y=0;return se(B,function(){Y++}),Y},toArray:function(B){return se(B,function(Y){return Y})||[]},only:function(B){if(!D(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Ht.Component=x,Ht.Fragment=t,Ht.Profiler=a,Ht.PureComponent=U,Ht.StrictMode=r,Ht.Suspense=h,Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Ht.act=te,Ht.cloneElement=function(B,Y,K){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var re=w({},B.props),ue=B.key,he=B.ref,Se=B._owner;if(Y!=null){if(Y.ref!==void 0&&(he=Y.ref,Se=O.current),Y.key!==void 0&&(ue=""+Y.key),B.type&&B.type.defaultProps)var ce=B.type.defaultProps;for(Me in Y)H.call(Y,Me)&&!k.hasOwnProperty(Me)&&(re[Me]=Y[Me]===void 0&&ce!==void 0?ce[Me]:Y[Me])}var Me=arguments.length-2;if(Me===1)re.children=K;else if(1<Me){ce=Array(Me);for(var Te=0;Te<Me;Te++)ce[Te]=arguments[Te+2];re.children=ce}return{$$typeof:s,type:B.type,key:ue,ref:he,props:re,_owner:Se}},Ht.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},Ht.createElement=Z,Ht.createFactory=function(B){var Y=Z.bind(null,B);return Y.type=B,Y},Ht.createRef=function(){return{current:null}},Ht.forwardRef=function(B){return{$$typeof:u,render:B}},Ht.isValidElement=D,Ht.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:W}},Ht.memo=function(B,Y){return{$$typeof:p,type:B,compare:Y===void 0?null:Y}},Ht.startTransition=function(B){var Y=X.transition;X.transition={};try{B()}finally{X.transition=Y}},Ht.unstable_act=te,Ht.useCallback=function(B,Y){return de.current.useCallback(B,Y)},Ht.useContext=function(B){return de.current.useContext(B)},Ht.useDebugValue=function(){},Ht.useDeferredValue=function(B){return de.current.useDeferredValue(B)},Ht.useEffect=function(B,Y){return de.current.useEffect(B,Y)},Ht.useId=function(){return de.current.useId()},Ht.useImperativeHandle=function(B,Y,K){return de.current.useImperativeHandle(B,Y,K)},Ht.useInsertionEffect=function(B,Y){return de.current.useInsertionEffect(B,Y)},Ht.useLayoutEffect=function(B,Y){return de.current.useLayoutEffect(B,Y)},Ht.useMemo=function(B,Y){return de.current.useMemo(B,Y)},Ht.useReducer=function(B,Y,K){return de.current.useReducer(B,Y,K)},Ht.useRef=function(B){return de.current.useRef(B)},Ht.useState=function(B){return de.current.useState(B)},Ht.useSyncExternalStore=function(B,Y,K){return de.current.useSyncExternalStore(B,Y,K)},Ht.useTransition=function(){return de.current.useTransition()},Ht.version="18.3.1",Ht}var Tp;function Kf(){return Tp||(Tp=1,Ju.exports=j0()),Ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function q0(){if(wp)return ha;wp=1;var s=Kf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(u,h,p){var m,_={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)r.call(h,m)&&!l.hasOwnProperty(m)&&(_[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:u,key:v,ref:S,props:_,_owner:a.current}}return ha.Fragment=t,ha.jsx=f,ha.jsxs=f,ha}var Ap;function Y0(){return Ap||(Ap=1,Zu.exports=q0()),Zu.exports}var _t=Y0(),Wt=Kf();const K0=Rg(Wt);var Tl={},Qu={exports:{}},ai={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function $0(){return bp||(bp=1,function(s){function e(X,ie){var te=X.length;X.push(ie);e:for(;0<te;){var B=te-1>>>1,Y=X[B];if(0<a(Y,ie))X[B]=ie,X[te]=Y,te=B;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ie=X[0],te=X.pop();if(te!==ie){X[0]=te;e:for(var B=0,Y=X.length,K=Y>>>1;B<K;){var re=2*(B+1)-1,ue=X[re],he=re+1,Se=X[he];if(0>a(ue,te))he<Y&&0>a(Se,ue)?(X[B]=Se,X[he]=te,B=he):(X[B]=ue,X[re]=te,B=re);else if(he<Y&&0>a(Se,te))X[B]=Se,X[he]=te,B=he;else break e}}return ie}function a(X,ie){var te=X.sortIndex-ie.sortIndex;return te!==0?te:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,u=f.now();s.unstable_now=function(){return f.now()-u}}var h=[],p=[],m=1,_=null,v=3,S=!1,w=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(X){for(var ie=t(p);ie!==null;){if(ie.callback===null)r(p);else if(ie.startTime<=X)r(p),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=t(p)}}function I(X){if(T=!1,R(X),!w)if(t(h)!==null)w=!0,W(H);else{var ie=t(p);ie!==null&&de(I,ie.startTime-X)}}function H(X,ie){w=!1,T&&(T=!1,y(Z),Z=-1),S=!0;var te=v;try{for(R(ie),_=t(h);_!==null&&(!(_.expirationTime>ie)||X&&!Q());){var B=_.callback;if(typeof B=="function"){_.callback=null,v=_.priorityLevel;var Y=B(_.expirationTime<=ie);ie=s.unstable_now(),typeof Y=="function"?_.callback=Y:_===t(h)&&r(h),R(ie)}else r(h);_=t(h)}if(_!==null)var K=!0;else{var re=t(p);re!==null&&de(I,re.startTime-ie),K=!1}return K}finally{_=null,v=te,S=!1}}var O=!1,k=null,Z=-1,b=5,D=-1;function Q(){return!(s.unstable_now()-D<b)}function J(){if(k!==null){var X=s.unstable_now();D=X;var ie=!0;try{ie=k(!0,X)}finally{ie?ge():(O=!1,k=null)}}else O=!1}var ge;if(typeof U=="function")ge=function(){U(J)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,se=j.port2;j.port1.onmessage=J,ge=function(){se.postMessage(null)}}else ge=function(){x(J,0)};function W(X){k=X,O||(O=!0,ge())}function de(X,ie){Z=x(function(){X(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,W(H))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(X){switch(v){case 1:case 2:case 3:var ie=3;break;default:ie=v}var te=v;v=ie;try{return X()}finally{v=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var te=v;v=X;try{return ie()}finally{v=te}},s.unstable_scheduleCallback=function(X,ie,te){var B=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?B+te:B):te=B,X){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=te+Y,X={id:m++,callback:ie,priorityLevel:X,startTime:te,expirationTime:Y,sortIndex:-1},te>B?(X.sortIndex=te,e(p,X),t(h)===null&&X===t(p)&&(T?(y(Z),Z=-1):T=!0,de(I,te-B))):(X.sortIndex=Y,e(h,X),w||S||(w=!0,W(H))),X},s.unstable_shouldYield=Q,s.unstable_wrapCallback=function(X){var ie=v;return function(){var te=v;v=ie;try{return X.apply(this,arguments)}finally{v=te}}}}(tf)),tf}var Rp;function Z0(){return Rp||(Rp=1,ef.exports=$0()),ef.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function J0(){if(Cp)return ai;Cp=1;var s=Kf(),e=Z0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function v(n){return h.call(_,n)?!0:h.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,c,d,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,U);x[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,U);x[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,U);x[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),Q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,B;function Y(n){if(B===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var K=!1;function re(n,i){if(!n||K)return"";K=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var d=ve.stack.split(`
`),g=c.stack.split(`
`),A=d.length-1,G=g.length-1;1<=A&&0<=G&&d[A]!==g[G];)G--;for(;1<=A&&0<=G;A--,G--)if(d[A]!==g[G]){if(A!==1||G!==1)do if(A--,G--,0>G||d[A]!==g[G]){var $=`
`+d[A].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=A&&0<=G);break}}}finally{K=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Y(n):""}function ue(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case O:return"Portal";case b:return"Profiler";case Z:return"StrictMode";case ge:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Q:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Te(n){var i=Me(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function qe(n){n._valueTracker||(n._valueTracker=Te(n))}function oe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Me(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function et(n,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function at(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ce(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ve(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Pt(n,i){Ve(n,i);var o=ce(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?z(n,i.type,o):i.hasOwnProperty("defaultValue")&&z(n,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function vt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function z(n,i,o){(i!=="number"||Ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var L=Array.isArray;function fe(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ce(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Re(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ae(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(L(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ce(o)}}function Pe(n,i){var o=ce(i.value),c=ce(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function nt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ke(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ke(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var lt,Et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(lt=lt||document.createElement("div"),lt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nt=["Webkit","ms","Moz","O"];Object.keys(ft).forEach(function(n){Nt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ft[i]=ft[n]})});function Mt(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ft.hasOwnProperty(n)&&ft[n]?(""+i).trim():i+"px"}function ut(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Mt(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Xe=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function V(n,i){if(i){if(Xe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function Ye(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,q=null,Ie=null;function Be(n){if(n=Jo(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ba(i),Ce(n.stateNode,n.type,i))}}function gt(n){q?Ie?Ie.push(n):Ie=[n]:q=n}function ht(){if(q){var n=q,i=Ie;if(Ie=q=null,Be(n),i)for(n=0;n<i.length;n++)Be(i[n])}}function Dt(n,i){return n(i)}function It(){}var Bt=!1;function Qt(n,i,o){if(Bt)return n(i,o);Bt=!0;try{return Dt(n,i,o)}finally{Bt=!1,(q!==null||Ie!==null)&&(It(),ht())}}function Ot(n,i){var o=n.stateNode;if(o===null)return null;var c=Ba(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var nn=!1;if(u)try{var An={};Object.defineProperty(An,"passive",{get:function(){nn=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{nn=!1}function Ls(n,i,o,c,d,g,A,G,$){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(o,ve)}catch(Le){this.onError(Le)}}var Ji=!1,Ri=null,Vi=!1,Gi=null,Jr={onError:function(n){Ji=!0,Ri=n}};function Ps(n,i,o,c,d,g,A,G,$){Ji=!1,Ri=null,Ls.apply(Jr,arguments)}function zo(n,i,o,c,d,g,A,G,$){if(Ps.apply(this,arguments),Ji){if(Ji){var ve=Ri;Ji=!1,Ri=null}else throw Error(t(198));Vi||(Vi=!0,Gi=ve)}}function Ci(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ns(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function F(n){if(Ci(n)!==n)throw Error(t(188))}function ae(n){var i=n.alternate;if(!i){if(i=Ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return F(d),n;if(g===c)return F(d),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=g;else{for(var A=!1,G=d.child;G;){if(G===o){A=!0,o=d,c=g;break}if(G===c){A=!0,c=d,o=g;break}G=G.sibling}if(!A){for(G=g.child;G;){if(G===o){A=!0,o=g,c=d;break}if(G===c){A=!0,c=g,o=d;break}G=G.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ye(n){return n=ae(n),n!==null?xe(n):null}function xe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xe(n);if(i!==null)return i;n=n.sibling}return null}var _e=e.unstable_scheduleCallback,je=e.unstable_cancelCallback,Ke=e.unstable_shouldYield,pt=e.unstable_requestPaint,$e=e.unstable_now,Lt=e.unstable_getCurrentPriorityLevel,Tt=e.unstable_ImmediatePriority,wt=e.unstable_UserBlockingPriority,$t=e.unstable_NormalPriority,Nn=e.unstable_LowPriority,dn=e.unstable_IdlePriority,Dn=null,Gt=null;function At(n){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Dn,n,void 0,(n.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Qr,en=Math.log,Li=Math.LN2;function Qr(n){return n>>>=0,n===0?32:31-(en(n)/Li|0)|0}var vi=64,Wi=4194304;function cn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var G=A&~d;G!==0?c=cn(G):(g&=A,g!==0&&(c=cn(g)))}else A=o&~d,A!==0?c=cn(A):g!==0&&(c=cn(g));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(c&4&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-In(i),d=1<<o,c|=n[o],i&=~d;return c}function sn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-In(g),G=1<<A,$=d[A];$===-1?(!(G&o)||G&c)&&(d[A]=sn(G,i)):$<=i&&(n.expiredLanes|=G),g&=~G}}function Qi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function es(){var n=vi;return vi<<=1,!(vi&4194240)&&(vi=64),n}function er(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tr(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-In(i),n[i]=o}function Ds(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-In(o),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~g}}function Sr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-In(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var qt=0;function wa(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var yt,Mr,E,M,P,C=!1,N=[],me=null,Ee=null,Ge=null,Oe=new Map,He=new Map,Qe=[],Ne="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function st(n,i){switch(n){case"focusin":case"focusout":me=null;break;case"dragenter":case"dragleave":Ee=null;break;case"mouseover":case"mouseout":Ge=null;break;case"pointerover":case"pointerout":Oe.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":He.delete(i.pointerId)}}function Je(n,i,o,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Jo(i),i!==null&&Mr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function mt(n,i,o,c,d){switch(i){case"focusin":return me=Je(me,n,i,o,c,d),!0;case"dragenter":return Ee=Je(Ee,n,i,o,c,d),!0;case"mouseover":return Ge=Je(Ge,n,i,o,c,d),!0;case"pointerover":var g=d.pointerId;return Oe.set(g,Je(Oe.get(g)||null,n,i,o,c,d)),!0;case"gotpointercapture":return g=d.pointerId,He.set(g,Je(He.get(g)||null,n,i,o,c,d)),!0}return!1}function dt(n){var i=ts(n.target);if(i!==null){var o=Ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Ns(o),i!==null){n.blockedOn=i,P(n.priority,function(){E(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zt(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Tc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);rt=c,o.target.dispatchEvent(c),rt=null}else return i=Jo(o),i!==null&&Mr(i),n.blockedOn=o,!1;i.shift()}return!0}function Yt(n,i,o){Zt(n)&&o.delete(i)}function Xt(){C=!1,me!==null&&Zt(me)&&(me=null),Ee!==null&&Zt(Ee)&&(Ee=null),Ge!==null&&Zt(Ge)&&(Ge=null),Oe.forEach(Yt),He.forEach(Yt)}function zt(n,i){n.blockedOn===i&&(n.blockedOn=null,C||(C=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xt)))}function Yn(n){function i(d){return zt(d,n)}if(0<N.length){zt(N[0],n);for(var o=1;o<N.length;o++){var c=N[o];c.blockedOn===n&&(c.blockedOn=null)}}for(me!==null&&zt(me,n),Ee!==null&&zt(Ee,n),Ge!==null&&zt(Ge,n),Oe.forEach(i),He.forEach(i),o=0;o<Qe.length;o++)c=Qe[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qe.length&&(o=Qe[0],o.blockedOn===null);)dt(o),o.blockedOn===null&&Qe.shift()}var gn=I.ReactCurrentBatchConfig,Pi=!0;function Mc(n,i,o,c){var d=qt,g=gn.transition;gn.transition=null;try{qt=1,Ec(n,i,o,c)}finally{qt=d,gn.transition=g}}function Aa(n,i,o,c){var d=qt,g=gn.transition;gn.transition=null;try{qt=4,Ec(n,i,o,c)}finally{qt=d,gn.transition=g}}function Ec(n,i,o,c){if(Pi){var d=Tc(n,i,o,c);if(d===null)Hc(n,i,c,ba,o),st(n,c);else if(mt(d,n,i,o,c))c.stopPropagation();else if(st(n,c),i&4&&-1<Ne.indexOf(n)){for(;d!==null;){var g=Jo(d);if(g!==null&&yt(g),g=Tc(n,i,o,c),g===null&&Hc(n,i,c,ba,o),g===d)break;d=g}d!==null&&c.stopPropagation()}else Hc(n,i,c,null,o)}}var ba=null;function Tc(n,i,o,c){if(ba=null,n=Ye(c),n=ts(n),n!==null)if(i=Ci(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ns(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ba=n,null}function cd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lt()){case Tt:return 1;case wt:return 4;case $t:case Nn:return 16;case dn:return 536870912;default:return 16}default:return 16}}var Er=null,wc=null,Ra=null;function ud(){if(Ra)return Ra;var n,i=wc,o=i.length,c,d="value"in Er?Er.value:Er.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var A=o-n;for(c=1;c<=A&&i[o-c]===d[g-c];c++);return Ra=d.slice(n,1<c?1-c:void 0)}function Ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function La(){return!0}function fd(){return!1}function ci(n){function i(o,c,d,g,A){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var G in n)n.hasOwnProperty(G)&&(o=n[G],this[G]=o?o(g):g[G]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?La:fd,this.isPropagationStopped=fd,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),i}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=ci(Is),Ho=te({},Is,{view:0,detail:0}),y_=ci(Ho),bc,Rc,Vo,Pa=te({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vo&&(Vo&&n.type==="mousemove"?(bc=n.screenX-Vo.screenX,Rc=n.screenY-Vo.screenY):Rc=bc=0,Vo=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Rc}}),dd=ci(Pa),x_=te({},Pa,{dataTransfer:0}),S_=ci(x_),M_=te({},Ho,{relatedTarget:0}),Cc=ci(M_),E_=te({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),T_=ci(E_),w_=te({},Is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),A_=ci(w_),b_=te({},Is,{data:0}),hd=ci(b_),R_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=L_[n])?!!i[n]:!1}function Lc(){return P_}var N_=te({},Ho,{key:function(n){if(n.key){var i=R_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),D_=ci(N_),I_=te({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=ci(I_),U_=te({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),F_=ci(U_),O_=te({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),k_=ci(O_),B_=te({},Pa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),z_=ci(B_),H_=[9,13,27,32],Pc=u&&"CompositionEvent"in window,Go=null;u&&"documentMode"in document&&(Go=document.documentMode);var V_=u&&"TextEvent"in window&&!Go,md=u&&(!Pc||Go&&8<Go&&11>=Go),gd=" ",_d=!1;function vd(n,i){switch(n){case"keyup":return H_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function G_(n,i){switch(n){case"compositionend":return yd(i);case"keypress":return i.which!==32?null:(_d=!0,gd);case"textInput":return n=i.data,n===gd&&_d?null:n;default:return null}}function W_(n,i){if(Us)return n==="compositionend"||!Pc&&vd(n,i)?(n=ud(),Ra=wc=Er=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return md&&i.locale!=="ko"?null:i.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!X_[n.type]:i==="textarea"}function Sd(n,i,o,c){gt(c),i=Fa(i,"onChange"),0<i.length&&(o=new Ac("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Wo=null,Xo=null;function j_(n){Bd(n,0)}function Na(n){var i=zs(n);if(oe(i))return n}function q_(n,i){if(n==="change")return i}var Md=!1;if(u){var Nc;if(u){var Dc="oninput"in document;if(!Dc){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Dc=typeof Ed.oninput=="function"}Nc=Dc}else Nc=!1;Md=Nc&&(!document.documentMode||9<document.documentMode)}function Td(){Wo&&(Wo.detachEvent("onpropertychange",wd),Xo=Wo=null)}function wd(n){if(n.propertyName==="value"&&Na(Xo)){var i=[];Sd(i,Xo,n,Ye(n)),Qt(j_,i)}}function Y_(n,i,o){n==="focusin"?(Td(),Wo=i,Xo=o,Wo.attachEvent("onpropertychange",wd)):n==="focusout"&&Td()}function K_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Na(Xo)}function $_(n,i){if(n==="click")return Na(i)}function Z_(n,i){if(n==="input"||n==="change")return Na(i)}function J_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ni=typeof Object.is=="function"?Object.is:J_;function jo(n,i){if(Ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!Ni(n[d],i[d]))return!1}return!0}function Ad(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bd(n,i){var o=Ad(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ad(o)}}function Rd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Rd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cd(){for(var n=window,i=Ct();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ct(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Q_(n){var i=Cd(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Rd(o.ownerDocument.documentElement,o)){if(c!==null&&Ic(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=bd(o,g);var A=bd(o,c);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var e0=u&&"documentMode"in document&&11>=document.documentMode,Fs=null,Uc=null,qo=null,Fc=!1;function Ld(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Fc||Fs==null||Fs!==Ct(c)||(c=Fs,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&jo(qo,c)||(qo=c,c=Fa(Uc,"onSelect"),0<c.length&&(i=new Ac("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Fs)))}function Da(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Os={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Oc={},Pd={};u&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ia(n){if(Oc[n])return Oc[n];if(!Os[n])return n;var i=Os[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Pd)return Oc[n]=i[o];return n}var Nd=Ia("animationend"),Dd=Ia("animationiteration"),Id=Ia("animationstart"),Ud=Ia("transitionend"),Fd=new Map,Od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,i){Fd.set(n,i),l(i,[n])}for(var kc=0;kc<Od.length;kc++){var Bc=Od[kc],t0=Bc.toLowerCase(),n0=Bc[0].toUpperCase()+Bc.slice(1);Tr(t0,"on"+n0)}Tr(Nd,"onAnimationEnd"),Tr(Dd,"onAnimationIteration"),Tr(Id,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Ud,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function kd(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,zo(c,i,void 0,n),n.currentTarget=null}function Bd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var A=c.length-1;0<=A;A--){var G=c[A],$=G.instance,ve=G.currentTarget;if(G=G.listener,$!==g&&d.isPropagationStopped())break e;kd(d,G,ve),g=$}else for(A=0;A<c.length;A++){if(G=c[A],$=G.instance,ve=G.currentTarget,G=G.listener,$!==g&&d.isPropagationStopped())break e;kd(d,G,ve),g=$}}}if(Vi)throw n=Gi,Vi=!1,Gi=null,n}function on(n,i){var o=i[qc];o===void 0&&(o=i[qc]=new Set);var c=n+"__bubble";o.has(c)||(zd(i,n,2,!1),o.add(c))}function zc(n,i,o){var c=0;i&&(c|=4),zd(o,n,c,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[Ua]){n[Ua]=!0,r.forEach(function(o){o!=="selectionchange"&&(i0.has(o)||zc(o,!1,n),zc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,zc("selectionchange",!1,i))}}function zd(n,i,o,c){switch(cd(i)){case 1:var d=Mc;break;case 4:d=Aa;break;default:d=Ec}o=d.bind(null,i,o,n),d=void 0,!nn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Hc(n,i,o,c,d){var g=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var G=c.stateNode.containerInfo;if(G===d||G.nodeType===8&&G.parentNode===d)break;if(A===4)for(A=c.return;A!==null;){var $=A.tag;if(($===3||$===4)&&($=A.stateNode.containerInfo,$===d||$.nodeType===8&&$.parentNode===d))return;A=A.return}for(;G!==null;){if(A=ts(G),A===null)return;if($=A.tag,$===5||$===6){c=g=A;continue e}G=G.parentNode}}c=c.return}Qt(function(){var ve=g,Le=Ye(o),De=[];e:{var be=Fd.get(n);if(be!==void 0){var Ze=Ac,it=n;switch(n){case"keypress":if(Ca(o)===0)break e;case"keydown":case"keyup":Ze=D_;break;case"focusin":it="focus",Ze=Cc;break;case"focusout":it="blur",Ze=Cc;break;case"beforeblur":case"afterblur":Ze=Cc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=S_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=F_;break;case Nd:case Dd:case Id:Ze=T_;break;case Ud:Ze=k_;break;case"scroll":Ze=y_;break;case"wheel":Ze=z_;break;case"copy":case"cut":case"paste":Ze=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=pd}var ot=(i&4)!==0,_n=!ot&&n==="scroll",le=ot?be!==null?be+"Capture":null:be;ot=[];for(var ne=ve,pe;ne!==null;){pe=ne;var Fe=pe.stateNode;if(pe.tag===5&&Fe!==null&&(pe=Fe,le!==null&&(Fe=Ot(ne,le),Fe!=null&&ot.push($o(ne,Fe,pe)))),_n)break;ne=ne.return}0<ot.length&&(be=new Ze(be,it,null,o,Le),De.push({event:be,listeners:ot}))}}if(!(i&7)){e:{if(be=n==="mouseover"||n==="pointerover",Ze=n==="mouseout"||n==="pointerout",be&&o!==rt&&(it=o.relatedTarget||o.fromElement)&&(ts(it)||it[nr]))break e;if((Ze||be)&&(be=Le.window===Le?Le:(be=Le.ownerDocument)?be.defaultView||be.parentWindow:window,Ze?(it=o.relatedTarget||o.toElement,Ze=ve,it=it?ts(it):null,it!==null&&(_n=Ci(it),it!==_n||it.tag!==5&&it.tag!==6)&&(it=null)):(Ze=null,it=ve),Ze!==it)){if(ot=dd,Fe="onMouseLeave",le="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(ot=pd,Fe="onPointerLeave",le="onPointerEnter",ne="pointer"),_n=Ze==null?be:zs(Ze),pe=it==null?be:zs(it),be=new ot(Fe,ne+"leave",Ze,o,Le),be.target=_n,be.relatedTarget=pe,Fe=null,ts(Le)===ve&&(ot=new ot(le,ne+"enter",it,o,Le),ot.target=pe,ot.relatedTarget=_n,Fe=ot),_n=Fe,Ze&&it)t:{for(ot=Ze,le=it,ne=0,pe=ot;pe;pe=ks(pe))ne++;for(pe=0,Fe=le;Fe;Fe=ks(Fe))pe++;for(;0<ne-pe;)ot=ks(ot),ne--;for(;0<pe-ne;)le=ks(le),pe--;for(;ne--;){if(ot===le||le!==null&&ot===le.alternate)break t;ot=ks(ot),le=ks(le)}ot=null}else ot=null;Ze!==null&&Hd(De,be,Ze,ot,!1),it!==null&&_n!==null&&Hd(De,_n,it,ot,!0)}}e:{if(be=ve?zs(ve):window,Ze=be.nodeName&&be.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&be.type==="file")var ct=q_;else if(xd(be))if(Md)ct=Z_;else{ct=K_;var xt=Y_}else(Ze=be.nodeName)&&Ze.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(ct=$_);if(ct&&(ct=ct(n,ve))){Sd(De,ct,o,Le);break e}xt&&xt(n,be,ve),n==="focusout"&&(xt=be._wrapperState)&&xt.controlled&&be.type==="number"&&z(be,"number",be.value)}switch(xt=ve?zs(ve):window,n){case"focusin":(xd(xt)||xt.contentEditable==="true")&&(Fs=xt,Uc=ve,qo=null);break;case"focusout":qo=Uc=Fs=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Ld(De,o,Le);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":Ld(De,o,Le)}var St;if(Pc)e:{switch(n){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Us?vd(n,o)&&(bt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(bt="onCompositionStart");bt&&(md&&o.locale!=="ko"&&(Us||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Us&&(St=ud()):(Er=Le,wc="value"in Er?Er.value:Er.textContent,Us=!0)),xt=Fa(ve,bt),0<xt.length&&(bt=new hd(bt,n,null,o,Le),De.push({event:bt,listeners:xt}),St?bt.data=St:(St=yd(o),St!==null&&(bt.data=St)))),(St=V_?G_(n,o):W_(n,o))&&(ve=Fa(ve,"onBeforeInput"),0<ve.length&&(Le=new hd("onBeforeInput","beforeinput",null,o,Le),De.push({event:Le,listeners:ve}),Le.data=St))}Bd(De,i)})}function $o(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Fa(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Ot(n,o),g!=null&&c.unshift($o(n,g,d)),g=Ot(n,i),g!=null&&c.push($o(n,g,d))),n=n.return}return c}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hd(n,i,o,c,d){for(var g=i._reactName,A=[];o!==null&&o!==c;){var G=o,$=G.alternate,ve=G.stateNode;if($!==null&&$===c)break;G.tag===5&&ve!==null&&(G=ve,d?($=Ot(o,g),$!=null&&A.unshift($o(o,$,G))):d||($=Ot(o,g),$!=null&&A.push($o(o,$,G)))),o=o.return}A.length!==0&&n.push({event:i,listeners:A})}var r0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function Vd(n){return(typeof n=="string"?n:""+n).replace(r0,`
`).replace(s0,"")}function Oa(n,i,o){if(i=Vd(i),Vd(n)!==i&&o)throw Error(t(425))}function ka(){}var Vc=null,Gc=null;function Wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,a0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(n){return Gd.resolve(null).then(n).catch(l0)}:Xc;function l0(n){setTimeout(function(){throw n})}function jc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Yn(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Yn(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Wd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Xi="__reactFiber$"+Bs,Zo="__reactProps$"+Bs,nr="__reactContainer$"+Bs,qc="__reactEvents$"+Bs,c0="__reactListeners$"+Bs,u0="__reactHandles$"+Bs;function ts(n){var i=n[Xi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[nr]||o[Xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Wd(n);n!==null;){if(o=n[Xi])return o;n=Wd(n)}return i}n=o,o=n.parentNode}return null}function Jo(n){return n=n[Xi]||n[nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ba(n){return n[Zo]||null}var Yc=[],Hs=-1;function Ar(n){return{current:n}}function an(n){0>Hs||(n.current=Yc[Hs],Yc[Hs]=null,Hs--)}function rn(n,i){Hs++,Yc[Hs]=n.current,n.current=i}var br={},Bn=Ar(br),ni=Ar(!1),ns=br;function Vs(n,i){var o=n.type.contextTypes;if(!o)return br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in o)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function ii(n){return n=n.childContextTypes,n!=null}function za(){an(ni),an(Bn)}function Xd(n,i,o){if(Bn.current!==br)throw Error(t(168));rn(Bn,i),rn(ni,o)}function jd(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return te({},o,c)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||br,ns=Bn.current,rn(Bn,n),rn(ni,ni.current),!0}function qd(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=jd(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,an(ni),an(Bn),rn(Bn,n)):an(ni),rn(ni,o)}var ir=null,Va=!1,Kc=!1;function Yd(n){ir===null?ir=[n]:ir.push(n)}function f0(n){Va=!0,Yd(n)}function Rr(){if(!Kc&&ir!==null){Kc=!0;var n=0,i=qt;try{var o=ir;for(qt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ir=null,Va=!1}catch(d){throw ir!==null&&(ir=ir.slice(n+1)),_e(Tt,Rr),d}finally{qt=i,Kc=!1}}return null}var Gs=[],Ws=0,Ga=null,Wa=0,yi=[],xi=0,is=null,rr=1,sr="";function rs(n,i){Gs[Ws++]=Wa,Gs[Ws++]=Ga,Ga=n,Wa=i}function Kd(n,i,o){yi[xi++]=rr,yi[xi++]=sr,yi[xi++]=is,is=n;var c=rr;n=sr;var d=32-In(c)-1;c&=~(1<<d),o+=1;var g=32-In(i)+d;if(30<g){var A=d-d%5;g=(c&(1<<A)-1).toString(32),c>>=A,d-=A,rr=1<<32-In(i)+d|o<<d|c,sr=g+n}else rr=1<<g|o<<d|c,sr=n}function $c(n){n.return!==null&&(rs(n,1),Kd(n,1,0))}function Zc(n){for(;n===Ga;)Ga=Gs[--Ws],Gs[Ws]=null,Wa=Gs[--Ws],Gs[Ws]=null;for(;n===is;)is=yi[--xi],yi[xi]=null,sr=yi[--xi],yi[xi]=null,rr=yi[--xi],yi[xi]=null}var ui=null,fi=null,un=!1,Di=null;function $d(n,i){var o=Ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Zd(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ui=n,fi=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ui=n,fi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=is!==null?{id:rr,overflow:sr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ti(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ui=n,fi=null,!0):!1;default:return!1}}function Jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(un){var i=fi;if(i){var o=i;if(!Zd(n,i)){if(Jc(n))throw Error(t(418));i=wr(o.nextSibling);var c=ui;i&&Zd(n,i)?$d(c,o):(n.flags=n.flags&-4097|2,un=!1,ui=n)}}else{if(Jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,un=!1,ui=n}}}function Jd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function Xa(n){if(n!==ui)return!1;if(!un)return Jd(n),un=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Wc(n.type,n.memoizedProps)),i&&(i=fi)){if(Jc(n))throw Qd(),Error(t(418));for(;i;)$d(n,i),i=wr(i.nextSibling)}if(Jd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){fi=wr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}fi=null}}else fi=ui?wr(n.stateNode.nextSibling):null;return!0}function Qd(){for(var n=fi;n;)n=wr(n.nextSibling)}function Xs(){fi=ui=null,un=!1}function eu(n){Di===null?Di=[n]:Di.push(n)}var d0=I.ReactCurrentBatchConfig;function Qo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var G=d.refs;A===null?delete G[g]:G[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function eh(n){var i=n._init;return i(n._payload)}function th(n){function i(le,ne){if(n){var pe=le.deletions;pe===null?(le.deletions=[ne],le.flags|=16):pe.push(ne)}}function o(le,ne){if(!n)return null;for(;ne!==null;)i(le,ne),ne=ne.sibling;return null}function c(le,ne){for(le=new Map;ne!==null;)ne.key!==null?le.set(ne.key,ne):le.set(ne.index,ne),ne=ne.sibling;return le}function d(le,ne){return le=Fr(le,ne),le.index=0,le.sibling=null,le}function g(le,ne,pe){return le.index=pe,n?(pe=le.alternate,pe!==null?(pe=pe.index,pe<ne?(le.flags|=2,ne):pe):(le.flags|=2,ne)):(le.flags|=1048576,ne)}function A(le){return n&&le.alternate===null&&(le.flags|=2),le}function G(le,ne,pe,Fe){return ne===null||ne.tag!==6?(ne=Xu(pe,le.mode,Fe),ne.return=le,ne):(ne=d(ne,pe),ne.return=le,ne)}function $(le,ne,pe,Fe){var ct=pe.type;return ct===k?Le(le,ne,pe.props.children,Fe,pe.key):ne!==null&&(ne.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===W&&eh(ct)===ne.type)?(Fe=d(ne,pe.props),Fe.ref=Qo(le,ne,pe),Fe.return=le,Fe):(Fe=gl(pe.type,pe.key,pe.props,null,le.mode,Fe),Fe.ref=Qo(le,ne,pe),Fe.return=le,Fe)}function ve(le,ne,pe,Fe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==pe.containerInfo||ne.stateNode.implementation!==pe.implementation?(ne=ju(pe,le.mode,Fe),ne.return=le,ne):(ne=d(ne,pe.children||[]),ne.return=le,ne)}function Le(le,ne,pe,Fe,ct){return ne===null||ne.tag!==7?(ne=ds(pe,le.mode,Fe,ct),ne.return=le,ne):(ne=d(ne,pe),ne.return=le,ne)}function De(le,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Xu(""+ne,le.mode,pe),ne.return=le,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case H:return pe=gl(ne.type,ne.key,ne.props,null,le.mode,pe),pe.ref=Qo(le,null,ne),pe.return=le,pe;case O:return ne=ju(ne,le.mode,pe),ne.return=le,ne;case W:var Fe=ne._init;return De(le,Fe(ne._payload),pe)}if(L(ne)||ie(ne))return ne=ds(ne,le.mode,pe,null),ne.return=le,ne;ja(le,ne)}return null}function be(le,ne,pe,Fe){var ct=ne!==null?ne.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return ct!==null?null:G(le,ne,""+pe,Fe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case H:return pe.key===ct?$(le,ne,pe,Fe):null;case O:return pe.key===ct?ve(le,ne,pe,Fe):null;case W:return ct=pe._init,be(le,ne,ct(pe._payload),Fe)}if(L(pe)||ie(pe))return ct!==null?null:Le(le,ne,pe,Fe,null);ja(le,pe)}return null}function Ze(le,ne,pe,Fe,ct){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return le=le.get(pe)||null,G(ne,le,""+Fe,ct);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case H:return le=le.get(Fe.key===null?pe:Fe.key)||null,$(ne,le,Fe,ct);case O:return le=le.get(Fe.key===null?pe:Fe.key)||null,ve(ne,le,Fe,ct);case W:var xt=Fe._init;return Ze(le,ne,pe,xt(Fe._payload),ct)}if(L(Fe)||ie(Fe))return le=le.get(pe)||null,Le(ne,le,Fe,ct,null);ja(ne,Fe)}return null}function it(le,ne,pe,Fe){for(var ct=null,xt=null,St=ne,bt=ne=0,Ln=null;St!==null&&bt<pe.length;bt++){St.index>bt?(Ln=St,St=null):Ln=St.sibling;var Kt=be(le,St,pe[bt],Fe);if(Kt===null){St===null&&(St=Ln);break}n&&St&&Kt.alternate===null&&i(le,St),ne=g(Kt,ne,bt),xt===null?ct=Kt:xt.sibling=Kt,xt=Kt,St=Ln}if(bt===pe.length)return o(le,St),un&&rs(le,bt),ct;if(St===null){for(;bt<pe.length;bt++)St=De(le,pe[bt],Fe),St!==null&&(ne=g(St,ne,bt),xt===null?ct=St:xt.sibling=St,xt=St);return un&&rs(le,bt),ct}for(St=c(le,St);bt<pe.length;bt++)Ln=Ze(St,le,bt,pe[bt],Fe),Ln!==null&&(n&&Ln.alternate!==null&&St.delete(Ln.key===null?bt:Ln.key),ne=g(Ln,ne,bt),xt===null?ct=Ln:xt.sibling=Ln,xt=Ln);return n&&St.forEach(function(Or){return i(le,Or)}),un&&rs(le,bt),ct}function ot(le,ne,pe,Fe){var ct=ie(pe);if(typeof ct!="function")throw Error(t(150));if(pe=ct.call(pe),pe==null)throw Error(t(151));for(var xt=ct=null,St=ne,bt=ne=0,Ln=null,Kt=pe.next();St!==null&&!Kt.done;bt++,Kt=pe.next()){St.index>bt?(Ln=St,St=null):Ln=St.sibling;var Or=be(le,St,Kt.value,Fe);if(Or===null){St===null&&(St=Ln);break}n&&St&&Or.alternate===null&&i(le,St),ne=g(Or,ne,bt),xt===null?ct=Or:xt.sibling=Or,xt=Or,St=Ln}if(Kt.done)return o(le,St),un&&rs(le,bt),ct;if(St===null){for(;!Kt.done;bt++,Kt=pe.next())Kt=De(le,Kt.value,Fe),Kt!==null&&(ne=g(Kt,ne,bt),xt===null?ct=Kt:xt.sibling=Kt,xt=Kt);return un&&rs(le,bt),ct}for(St=c(le,St);!Kt.done;bt++,Kt=pe.next())Kt=Ze(St,le,bt,Kt.value,Fe),Kt!==null&&(n&&Kt.alternate!==null&&St.delete(Kt.key===null?bt:Kt.key),ne=g(Kt,ne,bt),xt===null?ct=Kt:xt.sibling=Kt,xt=Kt);return n&&St.forEach(function(X0){return i(le,X0)}),un&&rs(le,bt),ct}function _n(le,ne,pe,Fe){if(typeof pe=="object"&&pe!==null&&pe.type===k&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case H:e:{for(var ct=pe.key,xt=ne;xt!==null;){if(xt.key===ct){if(ct=pe.type,ct===k){if(xt.tag===7){o(le,xt.sibling),ne=d(xt,pe.props.children),ne.return=le,le=ne;break e}}else if(xt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===W&&eh(ct)===xt.type){o(le,xt.sibling),ne=d(xt,pe.props),ne.ref=Qo(le,xt,pe),ne.return=le,le=ne;break e}o(le,xt);break}else i(le,xt);xt=xt.sibling}pe.type===k?(ne=ds(pe.props.children,le.mode,Fe,pe.key),ne.return=le,le=ne):(Fe=gl(pe.type,pe.key,pe.props,null,le.mode,Fe),Fe.ref=Qo(le,ne,pe),Fe.return=le,le=Fe)}return A(le);case O:e:{for(xt=pe.key;ne!==null;){if(ne.key===xt)if(ne.tag===4&&ne.stateNode.containerInfo===pe.containerInfo&&ne.stateNode.implementation===pe.implementation){o(le,ne.sibling),ne=d(ne,pe.children||[]),ne.return=le,le=ne;break e}else{o(le,ne);break}else i(le,ne);ne=ne.sibling}ne=ju(pe,le.mode,Fe),ne.return=le,le=ne}return A(le);case W:return xt=pe._init,_n(le,ne,xt(pe._payload),Fe)}if(L(pe))return it(le,ne,pe,Fe);if(ie(pe))return ot(le,ne,pe,Fe);ja(le,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,ne!==null&&ne.tag===6?(o(le,ne.sibling),ne=d(ne,pe),ne.return=le,le=ne):(o(le,ne),ne=Xu(pe,le.mode,Fe),ne.return=le,le=ne),A(le)):o(le,ne)}return _n}var js=th(!0),nh=th(!1),qa=Ar(null),Ya=null,qs=null,tu=null;function nu(){tu=qs=Ya=null}function iu(n){var i=qa.current;an(qa),n._currentValue=i}function ru(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ys(n,i){Ya=n,tu=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(ri=!0),n.firstContext=null)}function Si(n){var i=n._currentValue;if(tu!==n)if(n={context:n,memoizedValue:i,next:null},qs===null){if(Ya===null)throw Error(t(308));qs=n,Ya.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return i}var ss=null;function su(n){ss===null?ss=[n]:ss.push(n)}function ih(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,su(i)):(o.next=d.next,d.next=o),i.interleaved=o,or(n,c)}function or(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Cr=!1;function ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,jt&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,or(n,o)}return d=c.interleaved,d===null?(i.next=i,su(c)):(i.next=d.next,d.next=i),c.interleaved=i,or(n,o)}function Ka(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Sr(n,o)}}function sh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?d=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function $a(n,i,o,c){var d=n.updateQueue;Cr=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,G=d.shared.pending;if(G!==null){d.shared.pending=null;var $=G,ve=$.next;$.next=null,A===null?g=ve:A.next=ve,A=$;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,G=Le.lastBaseUpdate,G!==A&&(G===null?Le.firstBaseUpdate=ve:G.next=ve,Le.lastBaseUpdate=$))}if(g!==null){var De=d.baseState;A=0,Le=ve=$=null,G=g;do{var be=G.lane,Ze=G.eventTime;if((c&be)===be){Le!==null&&(Le=Le.next={eventTime:Ze,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var it=n,ot=G;switch(be=i,Ze=o,ot.tag){case 1:if(it=ot.payload,typeof it=="function"){De=it.call(Ze,De,be);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=ot.payload,be=typeof it=="function"?it.call(Ze,De,be):it,be==null)break e;De=te({},De,be);break e;case 2:Cr=!0}}G.callback!==null&&G.lane!==0&&(n.flags|=64,be=d.effects,be===null?d.effects=[G]:be.push(G))}else Ze={eventTime:Ze,lane:be,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Le===null?(ve=Le=Ze,$=De):Le=Le.next=Ze,A|=be;if(G=G.next,G===null){if(G=d.shared.pending,G===null)break;be=G,G=be.next,be.next=null,d.lastBaseUpdate=be,d.shared.pending=null}}while(!0);if(Le===null&&($=De),d.baseState=$,d.firstBaseUpdate=ve,d.lastBaseUpdate=Le,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);ls|=A,n.lanes=A,n.memoizedState=De}}function oh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ea={},ji=Ar(ea),ta=Ar(ea),na=Ar(ea);function os(n){if(n===ea)throw Error(t(174));return n}function au(n,i){switch(rn(na,i),rn(ta,n),rn(ji,ea),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}an(ji),rn(ji,i)}function Ks(){an(ji),an(ta),an(na)}function ah(n){os(na.current);var i=os(ji.current),o=We(i,n.type);i!==o&&(rn(ta,n),rn(ji,o))}function lu(n){ta.current===n&&(an(ji),an(ta))}var hn=Ar(0);function Za(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cu=[];function uu(){for(var n=0;n<cu.length;n++)cu[n]._workInProgressVersionPrimary=null;cu.length=0}var Ja=I.ReactCurrentDispatcher,fu=I.ReactCurrentBatchConfig,as=0,pn=null,Mn=null,Rn=null,Qa=!1,ia=!1,ra=0,h0=0;function zn(){throw Error(t(321))}function du(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ni(n[o],i[o]))return!1;return!0}function hu(n,i,o,c,d,g){if(as=g,pn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ja.current=n===null||n.memoizedState===null?_0:v0,n=o(c,d),ia){g=0;do{if(ia=!1,ra=0,25<=g)throw Error(t(301));g+=1,Rn=Mn=null,i.updateQueue=null,Ja.current=y0,n=o(c,d)}while(ia)}if(Ja.current=nl,i=Mn!==null&&Mn.next!==null,as=0,Rn=Mn=pn=null,Qa=!1,i)throw Error(t(300));return n}function pu(){var n=ra!==0;return ra=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?pn.memoizedState=Rn=n:Rn=Rn.next=n,Rn}function Mi(){if(Mn===null){var n=pn.alternate;n=n!==null?n.memoizedState:null}else n=Mn.next;var i=Rn===null?pn.memoizedState:Rn.next;if(i!==null)Rn=i,Mn=n;else{if(n===null)throw Error(t(310));Mn=n,n={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Rn===null?pn.memoizedState=Rn=n:Rn=Rn.next=n}return Rn}function sa(n,i){return typeof i=="function"?i(n):i}function mu(n){var i=Mi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Mn,d=c.baseQueue,g=o.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}c.baseQueue=d=g,o.pending=null}if(d!==null){g=d.next,c=c.baseState;var G=A=null,$=null,ve=g;do{var Le=ve.lane;if((as&Le)===Le)$!==null&&($=$.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var De={lane:Le,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};$===null?(G=$=De,A=c):$=$.next=De,pn.lanes|=Le,ls|=Le}ve=ve.next}while(ve!==null&&ve!==g);$===null?A=c:$.next=G,Ni(c,i.memoizedState)||(ri=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=$,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do g=d.lane,pn.lanes|=g,ls|=g,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function gu(n){var i=Mi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);Ni(g,i.memoizedState)||(ri=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function lh(){}function ch(n,i){var o=pn,c=Mi(),d=i(),g=!Ni(c.memoizedState,d);if(g&&(c.memoizedState=d,ri=!0),c=c.queue,_u(dh.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||Rn!==null&&Rn.memoizedState.tag&1){if(o.flags|=2048,oa(9,fh.bind(null,o,c,d,i),void 0,null),Cn===null)throw Error(t(349));as&30||uh(o,i,d)}return d}function uh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=pn.updateQueue,i===null?(i={lastEffect:null,stores:null},pn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function fh(n,i,o,c){i.value=o,i.getSnapshot=c,hh(i)&&ph(n)}function dh(n,i,o){return o(function(){hh(i)&&ph(n)})}function hh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ni(n,o)}catch{return!0}}function ph(n){var i=or(n,1);i!==null&&Oi(i,n,1,-1)}function mh(n){var i=qi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},i.queue=n,n=n.dispatch=g0.bind(null,pn,n),[i.memoizedState,n]}function oa(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=pn.updateQueue,i===null?(i={lastEffect:null,stores:null},pn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function gh(){return Mi().memoizedState}function el(n,i,o,c){var d=qi();pn.flags|=n,d.memoizedState=oa(1|i,o,void 0,c===void 0?null:c)}function tl(n,i,o,c){var d=Mi();c=c===void 0?null:c;var g=void 0;if(Mn!==null){var A=Mn.memoizedState;if(g=A.destroy,c!==null&&du(c,A.deps)){d.memoizedState=oa(i,o,g,c);return}}pn.flags|=n,d.memoizedState=oa(1|i,o,g,c)}function _h(n,i){return el(8390656,8,n,i)}function _u(n,i){return tl(2048,8,n,i)}function vh(n,i){return tl(4,2,n,i)}function yh(n,i){return tl(4,4,n,i)}function xh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Sh(n,i,o){return o=o!=null?o.concat([n]):null,tl(4,4,xh.bind(null,i,n),o)}function vu(){}function Mh(n,i){var o=Mi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&du(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Eh(n,i){var o=Mi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&du(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Th(n,i,o){return as&21?(Ni(o,i)||(o=es(),pn.lanes|=o,ls|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=o)}function p0(n,i){var o=qt;qt=o!==0&&4>o?o:4,n(!0);var c=fu.transition;fu.transition={};try{n(!1),i()}finally{qt=o,fu.transition=c}}function wh(){return Mi().memoizedState}function m0(n,i,o){var c=Ir(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Ah(n))bh(i,o);else if(o=ih(n,i,o,c),o!==null){var d=$n();Oi(o,n,c,d),Rh(o,i,c)}}function g0(n,i,o){var c=Ir(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ah(n))bh(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,G=g(A,o);if(d.hasEagerState=!0,d.eagerState=G,Ni(G,A)){var $=i.interleaved;$===null?(d.next=d,su(i)):(d.next=$.next,$.next=d),i.interleaved=d;return}}catch{}finally{}o=ih(n,i,d,c),o!==null&&(d=$n(),Oi(o,n,c,d),Rh(o,i,c))}}function Ah(n){var i=n.alternate;return n===pn||i!==null&&i===pn}function bh(n,i){ia=Qa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Rh(n,i,o){if(o&4194240){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Sr(n,o)}}var nl={readContext:Si,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},_0={readContext:Si,useCallback:function(n,i){return qi().memoizedState=[n,i===void 0?null:i],n},useContext:Si,useEffect:_h,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,el(4194308,4,xh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var o=qi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=qi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=m0.bind(null,pn,n),[c.memoizedState,n]},useRef:function(n){var i=qi();return n={current:n},i.memoizedState=n},useState:mh,useDebugValue:vu,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=mh(!1),i=n[0];return n=p0.bind(null,n[1]),qi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=pn,d=qi();if(un){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Cn===null)throw Error(t(349));as&30||uh(c,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,_h(dh.bind(null,c,g,n),[n]),c.flags|=2048,oa(9,fh.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=qi(),i=Cn.identifierPrefix;if(un){var o=sr,c=rr;o=(c&~(1<<32-In(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=ra++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=h0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},v0={readContext:Si,useCallback:Mh,useContext:Si,useEffect:_u,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:Eh,useReducer:mu,useRef:gh,useState:function(){return mu(sa)},useDebugValue:vu,useDeferredValue:function(n){var i=Mi();return Th(i,Mn.memoizedState,n)},useTransition:function(){var n=mu(sa)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:lh,useSyncExternalStore:ch,useId:wh,unstable_isNewReconciler:!1},y0={readContext:Si,useCallback:Mh,useContext:Si,useEffect:_u,useImperativeHandle:Sh,useInsertionEffect:vh,useLayoutEffect:yh,useMemo:Eh,useReducer:gu,useRef:gh,useState:function(){return gu(sa)},useDebugValue:vu,useDeferredValue:function(n){var i=Mi();return Mn===null?i.memoizedState=n:Th(i,Mn.memoizedState,n)},useTransition:function(){var n=gu(sa)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:lh,useSyncExternalStore:ch,useId:wh,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function yu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:te({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var il={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=$n(),d=Ir(n),g=ar(c,d);g.payload=i,o!=null&&(g.callback=o),i=Lr(n,g,d),i!==null&&(Oi(i,n,d,c),Ka(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=$n(),d=Ir(n),g=ar(c,d);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=Lr(n,g,d),i!==null&&(Oi(i,n,d,c),Ka(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=$n(),c=Ir(n),d=ar(o,c);d.tag=2,i!=null&&(d.callback=i),i=Lr(n,d,c),i!==null&&(Oi(i,n,c,o),Ka(i,n,c))}};function Ch(n,i,o,c,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):i.prototype&&i.prototype.isPureReactComponent?!jo(o,c)||!jo(d,g):!0}function Lh(n,i,o){var c=!1,d=br,g=i.contextType;return typeof g=="object"&&g!==null?g=Si(g):(d=ii(i)?ns:Bn.current,c=i.contextTypes,g=(c=c!=null)?Vs(n,d):br),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ph(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function xu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},ou(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Si(g):(g=ii(i)?ns:Bn.current,d.context=Vs(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(yu(n,i,g,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&il.enqueueReplaceState(d,d.state,null),$a(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var o="",c=i;do o+=ue(c),c=c.return;while(c);var d=o}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Su(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function Nh(n,i,o){o=ar(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){ul||(ul=!0,Ou=c),Mu(n,i)},o}function Dh(n,i,o){o=ar(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Mu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Mu(n,i),typeof c!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),o}function Ih(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new x0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=I0.bind(null,n,i,o),i.then(n,n))}function Uh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Fh(n,i,o,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ar(-1,1),i.tag=2,Lr(o,i,1))),o.lanes|=1),n)}var S0=I.ReactCurrentOwner,ri=!1;function Kn(n,i,o,c){i.child=n===null?nh(i,null,o,c):js(i,n.child,o,c)}function Oh(n,i,o,c,d){o=o.render;var g=i.ref;return Ys(i,d),c=hu(n,i,o,c,g,d),o=pu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,lr(n,i,d)):(un&&o&&$c(i),i.flags|=1,Kn(n,i,c,d),i.child)}function kh(n,i,o,c,d){if(n===null){var g=o.type;return typeof g=="function"&&!Wu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Bh(n,i,g,c,d)):(n=gl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:jo,o(A,c)&&n.ref===i.ref)return lr(n,i,d)}return i.flags|=1,n=Fr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Bh(n,i,o,c,d){if(n!==null){var g=n.memoizedProps;if(jo(g,c)&&n.ref===i.ref)if(ri=!1,i.pendingProps=c=g,(n.lanes&d)!==0)n.flags&131072&&(ri=!0);else return i.lanes=n.lanes,lr(n,i,d)}return Eu(n,i,o,c,d)}function zh(n,i,o){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},rn(Js,di),di|=o;else{if(!(o&1073741824))return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,rn(Js,di),di|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,rn(Js,di),di|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,rn(Js,di),di|=c;return Kn(n,i,d,o),i.child}function Hh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Eu(n,i,o,c,d){var g=ii(o)?ns:Bn.current;return g=Vs(i,g),Ys(i,d),o=hu(n,i,o,c,g,d),c=pu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,lr(n,i,d)):(un&&c&&$c(i),i.flags|=1,Kn(n,i,o,d),i.child)}function Vh(n,i,o,c,d){if(ii(o)){var g=!0;Ha(i)}else g=!1;if(Ys(i,d),i.stateNode===null)sl(n,i),Lh(i,o,c),xu(i,o,c,d),c=!0;else if(n===null){var A=i.stateNode,G=i.memoizedProps;A.props=G;var $=A.context,ve=o.contextType;typeof ve=="object"&&ve!==null?ve=Si(ve):(ve=ii(o)?ns:Bn.current,ve=Vs(i,ve));var Le=o.getDerivedStateFromProps,De=typeof Le=="function"||typeof A.getSnapshotBeforeUpdate=="function";De||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(G!==c||$!==ve)&&Ph(i,A,c,ve),Cr=!1;var be=i.memoizedState;A.state=be,$a(i,c,A,d),$=i.memoizedState,G!==c||be!==$||ni.current||Cr?(typeof Le=="function"&&(yu(i,o,Le,c),$=i.memoizedState),(G=Cr||Ch(i,o,G,c,be,$,ve))?(De||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=$),A.props=c,A.state=$,A.context=ve,c=G):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,rh(n,i),G=i.memoizedProps,ve=i.type===i.elementType?G:Ii(i.type,G),A.props=ve,De=i.pendingProps,be=A.context,$=o.contextType,typeof $=="object"&&$!==null?$=Si($):($=ii(o)?ns:Bn.current,$=Vs(i,$));var Ze=o.getDerivedStateFromProps;(Le=typeof Ze=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(G!==De||be!==$)&&Ph(i,A,c,$),Cr=!1,be=i.memoizedState,A.state=be,$a(i,c,A,d);var it=i.memoizedState;G!==De||be!==it||ni.current||Cr?(typeof Ze=="function"&&(yu(i,o,Ze,c),it=i.memoizedState),(ve=Cr||Ch(i,o,ve,c,be,it,$)||!1)?(Le||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,it,$),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,it,$)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||G===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),A.props=c,A.state=it,A.context=$,c=ve):(typeof A.componentDidUpdate!="function"||G===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),c=!1)}return Tu(n,i,o,c,g,d)}function Tu(n,i,o,c,d,g){Hh(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return d&&qd(i,o,!1),lr(n,i,g);c=i.stateNode,S0.current=i;var G=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=js(i,n.child,null,g),i.child=js(i,null,G,g)):Kn(n,i,G,g),i.memoizedState=c.state,d&&qd(i,o,!0),i.child}function Gh(n){var i=n.stateNode;i.pendingContext?Xd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Xd(n,i.context,!1),au(n,i.containerInfo)}function Wh(n,i,o,c,d){return Xs(),eu(d),i.flags|=256,Kn(n,i,o,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Au(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xh(n,i,o){var c=i.pendingProps,d=hn.current,g=!1,A=(i.flags&128)!==0,G;if((G=A)||(G=n!==null&&n.memoizedState===null?!1:(d&2)!==0),G?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),rn(hn,d&1),n===null)return Qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(A=c.children,n=c.fallback,g?(c=i.mode,g=i.child,A={mode:"hidden",children:A},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=A):g=_l(A,c,0,null),n=ds(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Au(o),i.memoizedState=wu,n):bu(i,A));if(d=n.memoizedState,d!==null&&(G=d.dehydrated,G!==null))return M0(n,i,A,c,G,d,o);if(g){g=c.fallback,A=i.mode,d=n.child,G=d.sibling;var $={mode:"hidden",children:c.children};return!(A&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=$,i.deletions=null):(c=Fr(d,$),c.subtreeFlags=d.subtreeFlags&14680064),G!==null?g=Fr(G,g):(g=ds(g,A,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,A=n.child.memoizedState,A=A===null?Au(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,i.memoizedState=wu,c}return g=n.child,n=g.sibling,c=Fr(g,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function bu(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,o,c){return c!==null&&eu(c),js(i,n.child,null,o),n=bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function M0(n,i,o,c,d,g,A){if(o)return i.flags&256?(i.flags&=-257,c=Su(Error(t(422))),rl(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=_l({mode:"visible",children:c.children},d,0,null),g=ds(g,d,A,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,i.mode&1&&js(i,n.child,null,A),i.child.memoizedState=Au(A),i.memoizedState=wu,g);if(!(i.mode&1))return rl(n,i,A,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var G=c.dgst;return c=G,g=Error(t(419)),c=Su(g,c,void 0),rl(n,i,A,c)}if(G=(A&n.childLanes)!==0,ri||G){if(c=Cn,c!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|A)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,or(n,d),Oi(c,n,d,-1))}return Gu(),c=Su(Error(t(421))),rl(n,i,A,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=U0.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,fi=wr(d.nextSibling),ui=i,un=!0,Di=null,n!==null&&(yi[xi++]=rr,yi[xi++]=sr,yi[xi++]=is,rr=n.id,sr=n.overflow,is=i),i=bu(i,c.children),i.flags|=4096,i)}function jh(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ru(n.return,i,o)}function Ru(n,i,o,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=d)}function qh(n,i,o){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Kn(n,i,c.children,o),c=hn.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jh(n,o,i);else if(n.tag===19)jh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(rn(hn,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Za(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Ru(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Za(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Ru(i,!0,o,null,g);break;case"together":Ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function lr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function E0(n,i,o){switch(i.tag){case 3:Gh(i),Xs();break;case 5:ah(i);break;case 1:ii(i.type)&&Ha(i);break;case 4:au(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;rn(qa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(rn(hn,hn.current&1),i.flags|=128,null):o&i.child.childLanes?Xh(n,i,o):(rn(hn,hn.current&1),n=lr(n,i,o),n!==null?n.sibling:null);rn(hn,hn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,n.flags&128){if(c)return qh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),rn(hn,hn.current),c)break;return null;case 22:case 23:return i.lanes=0,zh(n,i,o)}return lr(n,i,o)}var Yh,Cu,Kh,$h;Yh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Cu=function(){},Kh=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,os(ji.current);var g=null;switch(o){case"input":d=et(n,d),c=et(n,c),g=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),g=[];break;case"textarea":d=Re(n,d),c=Re(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ka)}V(o,c);var A;o=null;for(ve in d)if(!c.hasOwnProperty(ve)&&d.hasOwnProperty(ve)&&d[ve]!=null)if(ve==="style"){var G=d[ve];for(A in G)G.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(a.hasOwnProperty(ve)?g||(g=[]):(g=g||[]).push(ve,null));for(ve in c){var $=c[ve];if(G=d!=null?d[ve]:void 0,c.hasOwnProperty(ve)&&$!==G&&($!=null||G!=null))if(ve==="style")if(G){for(A in G)!G.hasOwnProperty(A)||$&&$.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in $)$.hasOwnProperty(A)&&G[A]!==$[A]&&(o||(o={}),o[A]=$[A])}else o||(g||(g=[]),g.push(ve,o)),o=$;else ve==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,G=G?G.__html:void 0,$!=null&&G!==$&&(g=g||[]).push(ve,$)):ve==="children"?typeof $!="string"&&typeof $!="number"||(g=g||[]).push(ve,""+$):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(a.hasOwnProperty(ve)?($!=null&&ve==="onScroll"&&on("scroll",n),g||G===$||(g=[])):(g=g||[]).push(ve,$))}o&&(g=g||[]).push("style",o);var ve=g;(i.updateQueue=ve)&&(i.flags|=4)}},$h=function(n,i,o,c){o!==c&&(i.flags|=4)};function aa(n,i){if(!un)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function T0(n,i,o){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(i),null;case 1:return ii(i.type)&&za(),Hn(i),null;case 3:return c=i.stateNode,Ks(),an(ni),an(Bn),uu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Di!==null&&(zu(Di),Di=null))),Cu(n,i),Hn(i),null;case 5:lu(i);var d=os(na.current);if(o=i.type,n!==null&&i.stateNode!=null)Kh(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Hn(i),null}if(n=os(ji.current),Xa(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[Xi]=i,c[Zo]=g,n=(i.mode&1)!==0,o){case"dialog":on("cancel",c),on("close",c);break;case"iframe":case"object":case"embed":on("load",c);break;case"video":case"audio":for(d=0;d<Yo.length;d++)on(Yo[d],c);break;case"source":on("error",c);break;case"img":case"image":case"link":on("error",c),on("load",c);break;case"details":on("toggle",c);break;case"input":at(c,g),on("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},on("invalid",c);break;case"textarea":Ae(c,g),on("invalid",c)}V(o,g),d=null;for(var A in g)if(g.hasOwnProperty(A)){var G=g[A];A==="children"?typeof G=="string"?c.textContent!==G&&(g.suppressHydrationWarning!==!0&&Oa(c.textContent,G,n),d=["children",G]):typeof G=="number"&&c.textContent!==""+G&&(g.suppressHydrationWarning!==!0&&Oa(c.textContent,G,n),d=["children",""+G]):a.hasOwnProperty(A)&&G!=null&&A==="onScroll"&&on("scroll",c)}switch(o){case"input":qe(c),vt(c,g,!0);break;case"textarea":qe(c),nt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ka)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ke(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[Xi]=i,n[Zo]=c,Yh(n,i,!1,!1),i.stateNode=n;e:{switch(A=Ue(o,c),o){case"dialog":on("cancel",n),on("close",n),d=c;break;case"iframe":case"object":case"embed":on("load",n),d=c;break;case"video":case"audio":for(d=0;d<Yo.length;d++)on(Yo[d],n);d=c;break;case"source":on("error",n),d=c;break;case"img":case"image":case"link":on("error",n),on("load",n),d=c;break;case"details":on("toggle",n),d=c;break;case"input":at(n,c),d=et(n,c),on("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),on("invalid",n);break;case"textarea":Ae(n,c),d=Re(n,c),on("invalid",n);break;default:d=c}V(o,d),G=d;for(g in G)if(G.hasOwnProperty(g)){var $=G[g];g==="style"?ut(n,$):g==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Et(n,$)):g==="children"?typeof $=="string"?(o!=="textarea"||$!=="")&&we(n,$):typeof $=="number"&&we(n,""+$):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?$!=null&&g==="onScroll"&&on("scroll",n):$!=null&&R(n,g,$,A))}switch(o){case"input":qe(n),vt(n,c,!1);break;case"textarea":qe(n),nt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ce(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?fe(n,!!c.multiple,g,!1):c.defaultValue!=null&&fe(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ka)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Hn(i),null;case 6:if(n&&i.stateNode!=null)$h(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=os(na.current),os(ji.current),Xa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Xi]=i,(g=c.nodeValue!==o)&&(n=ui,n!==null))switch(n.tag){case 3:Oa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Xi]=i,i.stateNode=c}return Hn(i),null;case 13:if(an(hn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&fi!==null&&i.mode&1&&!(i.flags&128))Qd(),Xs(),i.flags|=98560,g=!1;else if(g=Xa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Xi]=i}else Xs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Hn(i),g=!1}else Di!==null&&(zu(Di),Di=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||hn.current&1?En===0&&(En=3):Gu())),i.updateQueue!==null&&(i.flags|=4),Hn(i),null);case 4:return Ks(),Cu(n,i),n===null&&Ko(i.stateNode.containerInfo),Hn(i),null;case 10:return iu(i.type._context),Hn(i),null;case 17:return ii(i.type)&&za(),Hn(i),null;case 19:if(an(hn),g=i.memoizedState,g===null)return Hn(i),null;if(c=(i.flags&128)!==0,A=g.rendering,A===null)if(c)aa(g,!1);else{if(En!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(A=Za(n),A!==null){for(i.flags|=128,aa(g,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return rn(hn,hn.current&1|2),i.child}n=n.sibling}g.tail!==null&&$e()>Qs&&(i.flags|=128,c=!0,aa(g,!1),i.lanes=4194304)}else{if(!c)if(n=Za(A),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),aa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!un)return Hn(i),null}else 2*$e()-g.renderingStartTime>Qs&&o!==1073741824&&(i.flags|=128,c=!0,aa(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(o=g.last,o!==null?o.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=$e(),i.sibling=null,o=hn.current,rn(hn,c?o&1|2:o&1),i):(Hn(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?di&1073741824&&(Hn(i),i.subtreeFlags&6&&(i.flags|=8192)):Hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function w0(n,i){switch(Zc(i),i.tag){case 1:return ii(i.type)&&za(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),an(ni),an(Bn),uu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return lu(i),null;case 13:if(an(hn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return an(hn),null;case 4:return Ks(),null;case 10:return iu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var ol=!1,Vn=!1,A0=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Zs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){mn(n,i,c)}else o.current=null}function Lu(n,i,o){try{o()}catch(c){mn(n,i,c)}}var Zh=!1;function b0(n,i){if(Vc=Pi,n=Cd(),Ic(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,G=-1,$=-1,ve=0,Le=0,De=n,be=null;t:for(;;){for(var Ze;De!==o||d!==0&&De.nodeType!==3||(G=A+d),De!==g||c!==0&&De.nodeType!==3||($=A+c),De.nodeType===3&&(A+=De.nodeValue.length),(Ze=De.firstChild)!==null;)be=De,De=Ze;for(;;){if(De===n)break t;if(be===o&&++ve===d&&(G=A),be===g&&++Le===c&&($=A),(Ze=De.nextSibling)!==null)break;De=be,be=De.parentNode}De=Ze}o=G===-1||$===-1?null:{start:G,end:$}}else o=null}o=o||{start:0,end:0}}else o=null;for(Gc={focusedElem:n,selectionRange:o},Pi=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var it=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var ot=it.memoizedProps,_n=it.memoizedState,le=i.stateNode,ne=le.getSnapshotBeforeUpdate(i.elementType===i.type?ot:Ii(i.type,ot),_n);le.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){mn(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return it=Zh,Zh=!1,it}function la(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Lu(i,o,g)}d=d.next}while(d!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Pu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Jh(n){var i=n.alternate;i!==null&&(n.alternate=null,Jh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Xi],delete i[Zo],delete i[qc],delete i[c0],delete i[u0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qh(n){return n.tag===5||n.tag===3||n.tag===4}function ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ka));else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,o),n=n.sibling;n!==null;)Nu(n,i,o),n=n.sibling}function Du(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,o),n=n.sibling;n!==null;)Du(n,i,o),n=n.sibling}var Un=null,Ui=!1;function Pr(n,i,o){for(o=o.child;o!==null;)tp(n,i,o),o=o.sibling}function tp(n,i,o){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Dn,o)}catch{}switch(o.tag){case 5:Vn||Zs(o,i);case 6:var c=Un,d=Ui;Un=null,Pr(n,i,o),Un=c,Ui=d,Un!==null&&(Ui?(n=Un,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Un.removeChild(o.stateNode));break;case 18:Un!==null&&(Ui?(n=Un,o=o.stateNode,n.nodeType===8?jc(n.parentNode,o):n.nodeType===1&&jc(n,o),Yn(n)):jc(Un,o.stateNode));break;case 4:c=Un,d=Ui,Un=o.stateNode.containerInfo,Ui=!0,Pr(n,i,o),Un=c,Ui=d;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,A=g.destroy;g=g.tag,A!==void 0&&(g&2||g&4)&&Lu(o,i,A),d=d.next}while(d!==c)}Pr(n,i,o);break;case 1:if(!Vn&&(Zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(G){mn(o,i,G)}Pr(n,i,o);break;case 21:Pr(n,i,o);break;case 22:o.mode&1?(Vn=(c=Vn)||o.memoizedState!==null,Pr(n,i,o),Vn=c):Pr(n,i,o);break;default:Pr(n,i,o)}}function np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new A0),i.forEach(function(c){var d=F0.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Fi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var g=n,A=i,G=A;e:for(;G!==null;){switch(G.tag){case 5:Un=G.stateNode,Ui=!1;break e;case 3:Un=G.stateNode.containerInfo,Ui=!0;break e;case 4:Un=G.stateNode.containerInfo,Ui=!0;break e}G=G.return}if(Un===null)throw Error(t(160));tp(g,A,d),Un=null,Ui=!1;var $=d.alternate;$!==null&&($.return=null),d.return=null}catch(ve){mn(d,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ip(i,n),i=i.sibling}function ip(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),Yi(n),c&4){try{la(3,n,n.return),al(3,n)}catch(ot){mn(n,n.return,ot)}try{la(5,n,n.return)}catch(ot){mn(n,n.return,ot)}}break;case 1:Fi(i,n),Yi(n),c&512&&o!==null&&Zs(o,o.return);break;case 5:if(Fi(i,n),Yi(n),c&512&&o!==null&&Zs(o,o.return),n.flags&32){var d=n.stateNode;try{we(d,"")}catch(ot){mn(n,n.return,ot)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,G=n.type,$=n.updateQueue;if(n.updateQueue=null,$!==null)try{G==="input"&&g.type==="radio"&&g.name!=null&&Ve(d,g),Ue(G,A);var ve=Ue(G,g);for(A=0;A<$.length;A+=2){var Le=$[A],De=$[A+1];Le==="style"?ut(d,De):Le==="dangerouslySetInnerHTML"?Et(d,De):Le==="children"?we(d,De):R(d,Le,De,ve)}switch(G){case"input":Pt(d,g);break;case"textarea":Pe(d,g);break;case"select":var be=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ze=g.value;Ze!=null?fe(d,!!g.multiple,Ze,!1):be!==!!g.multiple&&(g.defaultValue!=null?fe(d,!!g.multiple,g.defaultValue,!0):fe(d,!!g.multiple,g.multiple?[]:"",!1))}d[Zo]=g}catch(ot){mn(n,n.return,ot)}}break;case 6:if(Fi(i,n),Yi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ot){mn(n,n.return,ot)}}break;case 3:if(Fi(i,n),Yi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Yn(i.containerInfo)}catch(ot){mn(n,n.return,ot)}break;case 4:Fi(i,n),Yi(n);break;case 13:Fi(i,n),Yi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Fu=$e())),c&4&&np(n);break;case 22:if(Le=o!==null&&o.memoizedState!==null,n.mode&1?(Vn=(ve=Vn)||Le,Fi(i,n),Vn=ve):Fi(i,n),Yi(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Le&&n.mode&1)for(tt=n,Le=n.child;Le!==null;){for(De=tt=Le;tt!==null;){switch(be=tt,Ze=be.child,be.tag){case 0:case 11:case 14:case 15:la(4,be,be.return);break;case 1:Zs(be,be.return);var it=be.stateNode;if(typeof it.componentWillUnmount=="function"){c=be,o=be.return;try{i=c,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(ot){mn(c,o,ot)}}break;case 5:Zs(be,be.return);break;case 22:if(be.memoizedState!==null){op(De);continue}}Ze!==null?(Ze.return=be,tt=Ze):op(De)}Le=Le.sibling}e:for(Le=null,De=n;;){if(De.tag===5){if(Le===null){Le=De;try{d=De.stateNode,ve?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(G=De.stateNode,$=De.memoizedProps.style,A=$!=null&&$.hasOwnProperty("display")?$.display:null,G.style.display=Mt("display",A))}catch(ot){mn(n,n.return,ot)}}}else if(De.tag===6){if(Le===null)try{De.stateNode.nodeValue=ve?"":De.memoizedProps}catch(ot){mn(n,n.return,ot)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;Le===De&&(Le=null),De=De.return}Le===De&&(Le=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Fi(i,n),Yi(n),c&4&&np(n);break;case 21:break;default:Fi(i,n),Yi(n)}}function Yi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Qh(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(we(d,""),c.flags&=-33);var g=ep(n);Du(n,g,d);break;case 3:case 4:var A=c.stateNode.containerInfo,G=ep(n);Nu(n,G,A);break;default:throw Error(t(161))}}catch($){mn(n,n.return,$)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function R0(n,i,o){tt=n,rp(n)}function rp(n,i,o){for(var c=(n.mode&1)!==0;tt!==null;){var d=tt,g=d.child;if(d.tag===22&&c){var A=d.memoizedState!==null||ol;if(!A){var G=d.alternate,$=G!==null&&G.memoizedState!==null||Vn;G=ol;var ve=Vn;if(ol=A,(Vn=$)&&!ve)for(tt=d;tt!==null;)A=tt,$=A.child,A.tag===22&&A.memoizedState!==null?ap(d):$!==null?($.return=A,tt=$):ap(d);for(;g!==null;)tt=g,rp(g),g=g.sibling;tt=d,ol=G,Vn=ve}sp(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,tt=g):sp(n)}}function sp(n){for(;tt!==null;){var i=tt;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Vn||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ii(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&oh(i,g,c);break;case 3:var A=i.updateQueue;if(A!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}oh(i,A,o)}break;case 5:var G=i.stateNode;if(o===null&&i.flags&4){o=G;var $=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&o.focus();break;case"img":$.src&&(o.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Le=ve.memoizedState;if(Le!==null){var De=Le.dehydrated;De!==null&&Yn(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||i.flags&512&&Pu(i)}catch(be){mn(i,i.return,be)}}if(i===n){tt=null;break}if(o=i.sibling,o!==null){o.return=i.return,tt=o;break}tt=i.return}}function op(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var o=i.sibling;if(o!==null){o.return=i.return,tt=o;break}tt=i.return}}function ap(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{al(4,i)}catch($){mn(i,o,$)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch($){mn(i,d,$)}}var g=i.return;try{Pu(i)}catch($){mn(i,g,$)}break;case 5:var A=i.return;try{Pu(i)}catch($){mn(i,A,$)}}}catch($){mn(i,i.return,$)}if(i===n){tt=null;break}var G=i.sibling;if(G!==null){G.return=i.return,tt=G;break}tt=i.return}}var C0=Math.ceil,ll=I.ReactCurrentDispatcher,Iu=I.ReactCurrentOwner,Ei=I.ReactCurrentBatchConfig,jt=0,Cn=null,xn=null,Fn=0,di=0,Js=Ar(0),En=0,ca=null,ls=0,cl=0,Uu=0,ua=null,si=null,Fu=0,Qs=1/0,cr=null,ul=!1,Ou=null,Nr=null,fl=!1,Dr=null,dl=0,fa=0,ku=null,hl=-1,pl=0;function $n(){return jt&6?$e():hl!==-1?hl:hl=$e()}function Ir(n){return n.mode&1?jt&2&&Fn!==0?Fn&-Fn:d0.transition!==null?(pl===0&&(pl=es()),pl):(n=qt,n!==0||(n=window.event,n=n===void 0?16:cd(n.type)),n):1}function Oi(n,i,o,c){if(50<fa)throw fa=0,ku=null,Error(t(185));tr(n,o,c),(!(jt&2)||n!==Cn)&&(n===Cn&&(!(jt&2)&&(cl|=o),En===4&&Ur(n,Fn)),oi(n,c),o===1&&jt===0&&!(i.mode&1)&&(Qs=$e()+500,Va&&Rr()))}function oi(n,i){var o=n.callbackNode;bn(n,i);var c=qn(n,n===Cn?Fn:0);if(c===0)o!==null&&je(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&je(o),i===1)n.tag===0?f0(cp.bind(null,n)):Yd(cp.bind(null,n)),a0(function(){!(jt&6)&&Rr()}),o=null;else{switch(wa(c)){case 1:o=Tt;break;case 4:o=wt;break;case 16:o=$t;break;case 536870912:o=dn;break;default:o=$t}o=_p(o,lp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function lp(n,i){if(hl=-1,pl=0,jt&6)throw Error(t(327));var o=n.callbackNode;if(eo()&&n.callbackNode!==o)return null;var c=qn(n,n===Cn?Fn:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=ml(n,c);else{i=c;var d=jt;jt|=2;var g=fp();(Cn!==n||Fn!==i)&&(cr=null,Qs=$e()+500,us(n,i));do try{N0();break}catch(G){up(n,G)}while(!0);nu(),ll.current=g,jt=d,xn!==null?i=0:(Cn=null,Fn=0,i=En)}if(i!==0){if(i===2&&(d=Qi(n),d!==0&&(c=d,i=Bu(n,d))),i===1)throw o=ca,us(n,0),Ur(n,c),oi(n,$e()),o;if(i===6)Ur(n,c);else{if(d=n.current.alternate,!(c&30)&&!L0(d)&&(i=ml(n,c),i===2&&(g=Qi(n),g!==0&&(c=g,i=Bu(n,g))),i===1))throw o=ca,us(n,0),Ur(n,c),oi(n,$e()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:fs(n,si,cr);break;case 3:if(Ur(n,c),(c&130023424)===c&&(i=Fu+500-$e(),10<i)){if(qn(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$n(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Xc(fs.bind(null,n,si,cr),i);break}fs(n,si,cr);break;case 4:if(Ur(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var A=31-In(c);g=1<<A,A=i[A],A>d&&(d=A),c&=~g}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*C0(c/1960))-c,10<c){n.timeoutHandle=Xc(fs.bind(null,n,si,cr),c);break}fs(n,si,cr);break;case 5:fs(n,si,cr);break;default:throw Error(t(329))}}}return oi(n,$e()),n.callbackNode===o?lp.bind(null,n):null}function Bu(n,i){var o=ua;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=ml(n,i),n!==2&&(i=si,si=o,i!==null&&zu(i)),n}function zu(n){si===null?si=n:si.push.apply(si,n)}function L0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],g=d.getSnapshot;d=d.value;try{if(!Ni(g(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(n,i){for(i&=~Uu,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-In(i),c=1<<o;n[o]=-1,i&=~c}}function cp(n){if(jt&6)throw Error(t(327));eo();var i=qn(n,0);if(!(i&1))return oi(n,$e()),null;var o=ml(n,i);if(n.tag!==0&&o===2){var c=Qi(n);c!==0&&(i=c,o=Bu(n,c))}if(o===1)throw o=ca,us(n,0),Ur(n,i),oi(n,$e()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,fs(n,si,cr),oi(n,$e()),null}function Hu(n,i){var o=jt;jt|=1;try{return n(i)}finally{jt=o,jt===0&&(Qs=$e()+500,Va&&Rr())}}function cs(n){Dr!==null&&Dr.tag===0&&!(jt&6)&&eo();var i=jt;jt|=1;var o=Ei.transition,c=qt;try{if(Ei.transition=null,qt=1,n)return n()}finally{qt=c,Ei.transition=o,jt=i,!(jt&6)&&Rr()}}function Vu(){di=Js.current,an(Js)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,o0(o)),xn!==null)for(o=xn.return;o!==null;){var c=o;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&za();break;case 3:Ks(),an(ni),an(Bn),uu();break;case 5:lu(c);break;case 4:Ks();break;case 13:an(hn);break;case 19:an(hn);break;case 10:iu(c.type._context);break;case 22:case 23:Vu()}o=o.return}if(Cn=n,xn=n=Fr(n.current,null),Fn=di=i,En=0,ca=null,Uu=cl=ls=0,si=ua=null,ss!==null){for(i=0;i<ss.length;i++)if(o=ss[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,g=o.pending;if(g!==null){var A=g.next;g.next=d,c.next=A}o.pending=c}ss=null}return n}function up(n,i){do{var o=xn;try{if(nu(),Ja.current=nl,Qa){for(var c=pn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Qa=!1}if(as=0,Rn=Mn=pn=null,ia=!1,ra=0,Iu.current=null,o===null||o.return===null){En=1,ca=i,xn=null;break}e:{var g=n,A=o.return,G=o,$=i;if(i=Fn,G.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var ve=$,Le=G,De=Le.tag;if(!(Le.mode&1)&&(De===0||De===11||De===15)){var be=Le.alternate;be?(Le.updateQueue=be.updateQueue,Le.memoizedState=be.memoizedState,Le.lanes=be.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Ze=Uh(A);if(Ze!==null){Ze.flags&=-257,Fh(Ze,A,G,g,i),Ze.mode&1&&Ih(g,ve,i),i=Ze,$=ve;var it=i.updateQueue;if(it===null){var ot=new Set;ot.add($),i.updateQueue=ot}else it.add($);break e}else{if(!(i&1)){Ih(g,ve,i),Gu();break e}$=Error(t(426))}}else if(un&&G.mode&1){var _n=Uh(A);if(_n!==null){!(_n.flags&65536)&&(_n.flags|=256),Fh(_n,A,G,g,i),eu($s($,G));break e}}g=$=$s($,G),En!==4&&(En=2),ua===null?ua=[g]:ua.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var le=Nh(g,$,i);sh(g,le);break e;case 1:G=$;var ne=g.type,pe=g.stateNode;if(!(g.flags&128)&&(typeof ne.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Nr===null||!Nr.has(pe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Fe=Dh(g,G,i);sh(g,Fe);break e}}g=g.return}while(g!==null)}hp(o)}catch(ct){i=ct,xn===o&&o!==null&&(xn=o=o.return);continue}break}while(!0)}function fp(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Gu(){(En===0||En===3||En===2)&&(En=4),Cn===null||!(ls&268435455)&&!(cl&268435455)||Ur(Cn,Fn)}function ml(n,i){var o=jt;jt|=2;var c=fp();(Cn!==n||Fn!==i)&&(cr=null,us(n,i));do try{P0();break}catch(d){up(n,d)}while(!0);if(nu(),jt=o,ll.current=c,xn!==null)throw Error(t(261));return Cn=null,Fn=0,En}function P0(){for(;xn!==null;)dp(xn)}function N0(){for(;xn!==null&&!Ke();)dp(xn)}function dp(n){var i=gp(n.alternate,n,di);n.memoizedProps=n.pendingProps,i===null?hp(n):xn=i,Iu.current=null}function hp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=w0(o,i),o!==null){o.flags&=32767,xn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{En=6,xn=null;return}}else if(o=T0(o,i,di),o!==null){xn=o;return}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);En===0&&(En=5)}function fs(n,i,o){var c=qt,d=Ei.transition;try{Ei.transition=null,qt=1,D0(n,i,o,c)}finally{Ei.transition=d,qt=c}return null}function D0(n,i,o,c){do eo();while(Dr!==null);if(jt&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ds(n,g),n===Cn&&(xn=Cn=null,Fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||fl||(fl=!0,_p($t,function(){return eo(),null})),g=(o.flags&15990)!==0,o.subtreeFlags&15990||g){g=Ei.transition,Ei.transition=null;var A=qt;qt=1;var G=jt;jt|=4,Iu.current=null,b0(n,o),ip(o,n),Q_(Gc),Pi=!!Vc,Gc=Vc=null,n.current=o,R0(o),pt(),jt=G,qt=A,Ei.transition=g}else n.current=o;if(fl&&(fl=!1,Dr=n,dl=d),g=n.pendingLanes,g===0&&(Nr=null),At(o.stateNode),oi(n,$e()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(ul)throw ul=!1,n=Ou,Ou=null,n;return dl&1&&n.tag!==0&&eo(),g=n.pendingLanes,g&1?n===ku?fa++:(fa=0,ku=n):fa=0,Rr(),null}function eo(){if(Dr!==null){var n=wa(dl),i=Ei.transition,o=qt;try{if(Ei.transition=null,qt=16>n?16:n,Dr===null)var c=!1;else{if(n=Dr,Dr=null,dl=0,jt&6)throw Error(t(331));var d=jt;for(jt|=4,tt=n.current;tt!==null;){var g=tt,A=g.child;if(tt.flags&16){var G=g.deletions;if(G!==null){for(var $=0;$<G.length;$++){var ve=G[$];for(tt=ve;tt!==null;){var Le=tt;switch(Le.tag){case 0:case 11:case 15:la(8,Le,g)}var De=Le.child;if(De!==null)De.return=Le,tt=De;else for(;tt!==null;){Le=tt;var be=Le.sibling,Ze=Le.return;if(Jh(Le),Le===ve){tt=null;break}if(be!==null){be.return=Ze,tt=be;break}tt=Ze}}}var it=g.alternate;if(it!==null){var ot=it.child;if(ot!==null){it.child=null;do{var _n=ot.sibling;ot.sibling=null,ot=_n}while(ot!==null)}}tt=g}}if(g.subtreeFlags&2064&&A!==null)A.return=g,tt=A;else e:for(;tt!==null;){if(g=tt,g.flags&2048)switch(g.tag){case 0:case 11:case 15:la(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,tt=le;break e}tt=g.return}}var ne=n.current;for(tt=ne;tt!==null;){A=tt;var pe=A.child;if(A.subtreeFlags&2064&&pe!==null)pe.return=A,tt=pe;else e:for(A=ne;tt!==null;){if(G=tt,G.flags&2048)try{switch(G.tag){case 0:case 11:case 15:al(9,G)}}catch(ct){mn(G,G.return,ct)}if(G===A){tt=null;break e}var Fe=G.sibling;if(Fe!==null){Fe.return=G.return,tt=Fe;break e}tt=G.return}}if(jt=d,Rr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Dn,n)}catch{}c=!0}return c}finally{qt=o,Ei.transition=i}}return!1}function pp(n,i,o){i=$s(o,i),i=Nh(n,i,1),n=Lr(n,i,1),i=$n(),n!==null&&(tr(n,1,i),oi(n,i))}function mn(n,i,o){if(n.tag===3)pp(n,n,o);else for(;i!==null;){if(i.tag===3){pp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Nr===null||!Nr.has(c))){n=$s(o,n),n=Dh(i,n,1),i=Lr(i,n,1),n=$n(),i!==null&&(tr(i,1,n),oi(i,n));break}}i=i.return}}function I0(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=$n(),n.pingedLanes|=n.suspendedLanes&o,Cn===n&&(Fn&o)===o&&(En===4||En===3&&(Fn&130023424)===Fn&&500>$e()-Fu?us(n,0):Uu|=o),oi(n,i)}function mp(n,i){i===0&&(n.mode&1?(i=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):i=1);var o=$n();n=or(n,i),n!==null&&(tr(n,i,o),oi(n,o))}function U0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),mp(n,o)}function F0(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),mp(n,o)}var gp;gp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return ri=!1,E0(n,i,o);ri=!!(n.flags&131072)}else ri=!1,un&&i.flags&1048576&&Kd(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sl(n,i),n=i.pendingProps;var d=Vs(i,Bn.current);Ys(i,o),d=hu(null,i,c,n,d,o);var g=pu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(c)?(g=!0,Ha(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ou(i),d.updater=il,i.stateNode=d,d._reactInternals=i,xu(i,c,n,o),i=Tu(null,i,c,!0,g,o)):(i.tag=0,un&&g&&$c(i),Kn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=k0(c),n=Ii(c,n),d){case 0:i=Eu(null,i,c,n,o);break e;case 1:i=Vh(null,i,c,n,o);break e;case 11:i=Oh(null,i,c,n,o);break e;case 14:i=kh(null,i,c,Ii(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ii(c,d),Eu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ii(c,d),Vh(n,i,c,d,o);case 3:e:{if(Gh(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,rh(n,i),$a(i,c,null,o);var A=i.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=$s(Error(t(423)),i),i=Wh(n,i,c,o,d);break e}else if(c!==d){d=$s(Error(t(424)),i),i=Wh(n,i,c,o,d);break e}else for(fi=wr(i.stateNode.containerInfo.firstChild),ui=i,un=!0,Di=null,o=nh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Xs(),c===d){i=lr(n,i,o);break e}Kn(n,i,c,o)}i=i.child}return i;case 5:return ah(i),n===null&&Qc(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,A=d.children,Wc(c,d)?A=null:g!==null&&Wc(c,g)&&(i.flags|=32),Hh(n,i),Kn(n,i,A,o),i.child;case 6:return n===null&&Qc(i),null;case 13:return Xh(n,i,o);case 4:return au(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,o):Kn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ii(c,d),Oh(n,i,c,d,o);case 7:return Kn(n,i,i.pendingProps,o),i.child;case 8:return Kn(n,i,i.pendingProps.children,o),i.child;case 12:return Kn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,A=d.value,rn(qa,c._currentValue),c._currentValue=A,g!==null)if(Ni(g.value,A)){if(g.children===d.children&&!ni.current){i=lr(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var G=g.dependencies;if(G!==null){A=g.child;for(var $=G.firstContext;$!==null;){if($.context===c){if(g.tag===1){$=ar(-1,o&-o),$.tag=2;var ve=g.updateQueue;if(ve!==null){ve=ve.shared;var Le=ve.pending;Le===null?$.next=$:($.next=Le.next,Le.next=$),ve.pending=$}}g.lanes|=o,$=g.alternate,$!==null&&($.lanes|=o),ru(g.return,o,i),G.lanes|=o;break}$=$.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,G=A.alternate,G!==null&&(G.lanes|=o),ru(A,o,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}Kn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ys(i,o),d=Si(d),c=c(d),i.flags|=1,Kn(n,i,c,o),i.child;case 14:return c=i.type,d=Ii(c,i.pendingProps),d=Ii(c.type,d),kh(n,i,c,d,o);case 15:return Bh(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ii(c,d),sl(n,i),i.tag=1,ii(c)?(n=!0,Ha(i)):n=!1,Ys(i,o),Lh(i,c,d),xu(i,c,d,o),Tu(null,i,c,!0,n,o);case 19:return qh(n,i,o);case 22:return zh(n,i,o)}throw Error(t(156,i.tag))};function _p(n,i){return _e(n,i)}function O0(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(n,i,o,c){return new O0(n,i,o,c)}function Wu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function k0(n){if(typeof n=="function")return Wu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===se)return 14}return 2}function Fr(n,i){var o=n.alternate;return o===null?(o=Ti(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function gl(n,i,o,c,d,g){var A=2;if(c=n,typeof n=="function")Wu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return ds(o.children,d,g,i);case Z:A=8,d|=8;break;case b:return n=Ti(12,o,i,d|2),n.elementType=b,n.lanes=g,n;case ge:return n=Ti(13,o,i,d),n.elementType=ge,n.lanes=g,n;case j:return n=Ti(19,o,i,d),n.elementType=j,n.lanes=g,n;case de:return _l(o,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:A=10;break e;case Q:A=9;break e;case J:A=11;break e;case se:A=14;break e;case W:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ti(A,o,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function ds(n,i,o,c){return n=Ti(7,n,c,i),n.lanes=o,n}function _l(n,i,o,c){return n=Ti(22,n,c,i),n.elementType=de,n.lanes=o,n.stateNode={isHidden:!1},n}function Xu(n,i,o){return n=Ti(6,n,null,i),n.lanes=o,n}function ju(n,i,o){return i=Ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function B0(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=er(0),this.expirationTimes=er(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function qu(n,i,o,c,d,g,A,G,$){return n=new B0(n,i,o,G,$),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ti(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(g),n}function z0(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function vp(n){if(!n)return br;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(ii(o))return jd(n,o,i)}return i}function yp(n,i,o,c,d,g,A,G,$){return n=qu(o,c,!0,n,d,g,A,G,$),n.context=vp(null),o=n.current,c=$n(),d=Ir(o),g=ar(c,d),g.callback=i??null,Lr(o,g,d),n.current.lanes=d,tr(n,d,c),oi(n,c),n}function vl(n,i,o,c){var d=i.current,g=$n(),A=Ir(d);return o=vp(o),i.context===null?i.context=o:i.pendingContext=o,i=ar(g,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Lr(d,i,A),n!==null&&(Oi(n,d,A,g),Ka(n,d,A)),A}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Yu(n,i){xp(n,i),(n=n.alternate)&&xp(n,i)}function H0(){return null}var Sp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ku(n){this._internalRoot=n}xl.prototype.render=Ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},xl.prototype.unmount=Ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){vl(null,n,null,null)}),i[nr]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=M();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Qe.length&&i!==0&&i<Qe[o].priority;o++);Qe.splice(o,0,n),o===0&&dt(n)}};function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function V0(n,i,o,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var ve=yl(A);g.call(ve)}}var A=yp(i,c,n,0,null,!1,!1,"",Mp);return n._reactRootContainer=A,n[nr]=A.current,Ko(n.nodeType===8?n.parentNode:n),cs(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var G=c;c=function(){var ve=yl($);G.call(ve)}}var $=qu(n,0,!1,null,null,!1,!1,"",Mp);return n._reactRootContainer=$,n[nr]=$.current,Ko(n.nodeType===8?n.parentNode:n),cs(function(){vl(i,$,o,c)}),$}function Ml(n,i,o,c,d){var g=o._reactRootContainer;if(g){var A=g;if(typeof d=="function"){var G=d;d=function(){var $=yl(A);G.call($)}}vl(i,A,n,d)}else A=V0(o,i,n,d,c);return yl(A)}yt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=cn(i.pendingLanes);o!==0&&(Sr(i,o|1),oi(i,$e()),!(jt&6)&&(Qs=$e()+500,Rr()))}break;case 13:cs(function(){var c=or(n,1);if(c!==null){var d=$n();Oi(c,n,1,d)}}),Yu(n,1)}},Mr=function(n){if(n.tag===13){var i=or(n,134217728);if(i!==null){var o=$n();Oi(i,n,134217728,o)}Yu(n,134217728)}},E=function(n){if(n.tag===13){var i=Ir(n),o=or(n,i);if(o!==null){var c=$n();Oi(o,n,i,c)}Yu(n,i)}},M=function(){return qt},P=function(n,i){var o=qt;try{return qt=n,i()}finally{qt=o}},Ce=function(n,i,o){switch(i){case"input":if(Pt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ba(c);if(!d)throw Error(t(90));oe(c),Pt(c,d)}}}break;case"textarea":Pe(n,o);break;case"select":i=o.value,i!=null&&fe(n,!!o.multiple,i,!1)}},Dt=Hu,It=cs;var G0={usingClientEntryPoint:!1,Events:[Jo,zs,Ba,gt,ht,Hu]},da={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W0={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ye(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Dn=El.inject(W0),Gt=El}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0,ai.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(i))throw Error(t(200));return z0(n,i,null,o)},ai.createRoot=function(n,i){if(!$u(n))throw Error(t(299));var o=!1,c="",d=Sp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=qu(n,1,!1,null,null,o,!1,c,d),n[nr]=i.current,Ko(n.nodeType===8?n.parentNode:n),new Ku(i)},ai.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ye(i),n=n===null?null:n.stateNode,n},ai.flushSync=function(n){return cs(n)},ai.hydrate=function(n,i,o){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!0,o)},ai.hydrateRoot=function(n,i,o){if(!$u(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,g="",A=Sp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),i=yp(i,null,n,1,o??null,d,!1,g,A),n[nr]=i.current,Ko(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new xl(i)},ai.render=function(n,i,o){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!1,o)},ai.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[nr]=null})}),!0):!1},ai.unstable_batchedUpdates=Hu,ai.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Sl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,o,!1,c)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var Lp;function Q0(){if(Lp)return Qu.exports;Lp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Qu.exports=J0(),Qu.exports}var Pp;function ev(){if(Pp)return Tl;Pp=1;var s=Q0();return Tl.createRoot=s.createRoot,Tl.hydrateRoot=s.hydrateRoot,Tl}var tv=ev();const nv=Rg(tv);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="160",to={ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iv=0,Np=1,rv=2,Cg=1,sv=2,gr=3,yr=0,li=1,$i=2,jr=0,Ao=1,Dp=2,Ip=3,Up=4,ov=5,vs=100,av=101,lv=102,Fp=103,Op=104,cv=200,uv=201,fv=202,dv=203,zf=204,Hf=205,hv=206,pv=207,mv=208,gv=209,_v=210,vv=211,yv=212,xv=213,Sv=214,Mv=0,Ev=1,Tv=2,nc=3,wv=4,Av=5,bv=6,Rv=7,hc=0,Cv=1,Lv=2,qr=0,Pv=1,Nv=2,Dv=3,Iv=4,Uv=5,Fv=6,kp="attached",Ov="detached",Lg=300,Ro=301,Co=302,Vf=303,Gf=304,pc=306,xs=1e3,ei=1001,Wf=1002,On=1003,Bp=1004,nf=1005,Qn=1006,kv=1007,Ts=1008,Yr=1009,Bv=1010,zv=1011,Zf=1012,Pg=1013,Xr=1014,_r=1015,Ea=1016,Ng=1017,Dg=1018,Ss=1020,Hv=1021,Ai=1023,Vv=1024,Gv=1025,Ms=1026,Lo=1027,Wv=1028,Ig=1029,Xv=1030,Ug=1031,Fg=1033,rf=33776,sf=33777,of=33778,af=33779,zp=35840,Hp=35841,Vp=35842,Gp=35843,Og=36196,Wp=37492,Xp=37496,jp=37808,qp=37809,Yp=37810,Kp=37811,$p=37812,Zp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,lf=36492,om=36494,am=36495,jv=36283,lm=36284,cm=36285,um=36286,ic=2300,rc=2301,cf=2302,fm=2400,dm=2401,hm=2402,qv=2500,kg=3e3,Es=3001,Yv=3200,Kv=3201,mc=0,$v=1,bi="",vn="srgb",xr="srgb-linear",Jf="display-p3",gc="display-p3-linear",sc="linear",ln="srgb",oc="rec709",ac="p3",io=7680,pm=519,Zv=512,Jv=513,Qv=514,Bg=515,ey=516,ty=517,ny=518,iy=519,mm=35044,gm="300 es",Xf=1035,vr=2e3,lc=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _m=1234567;const ya=Math.PI/180,Po=180/Math.PI;function $r(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Xn(s,e,t){return Math.max(e,Math.min(t,s))}function Qf(s,e){return(s%e+e)%e}function ry(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function sy(s,e,t){return s!==e?(t-s)/(e-s):0}function xa(s,e,t){return(1-t)*s+t*e}function oy(s,e,t,r){return xa(s,e,1-Math.exp(-t*r))}function ay(s,e=1){return e-Math.abs(Qf(s,e*2)-e)}function ly(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function uy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fy(s,e){return s+Math.random()*(e-s)}function dy(s){return s*(.5-Math.random())}function hy(s){s!==void 0&&(_m=s);let e=_m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function py(s){return s*ya}function my(s){return s*Po}function jf(s){return(s&s-1)===0&&s!==0}function gy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _y(s,e,t,r,a){const l=Math.cos,f=Math.sin,u=l(t/2),h=f(t/2),p=l((e+r)/2),m=f((e+r)/2),_=l((e-r)/2),v=f((e-r)/2),S=l((r-e)/2),w=f((r-e)/2);switch(a){case"XYX":s.set(u*m,h*_,h*v,u*p);break;case"YZY":s.set(h*v,u*m,h*_,u*p);break;case"ZXZ":s.set(h*_,h*v,u*m,u*p);break;case"XZX":s.set(u*m,h*w,h*S,u*p);break;case"YXY":s.set(h*S,u*m,h*w,u*p);break;case"ZYZ":s.set(h*w,h*S,u*m,u*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function So(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mo={DEG2RAD:ya,RAD2DEG:Po,generateUUID:$r,clamp:Xn,euclideanModulo:Qf,mapLinear:ry,inverseLerp:sy,lerp:xa,damp:oy,pingpong:ay,smoothstep:ly,smootherstep:cy,randInt:uy,randFloat:fy,randFloatSpread:dy,seededRandom:hy,degToRad:py,radToDeg:my,isPowerOfTwo:jf,ceilPowerOfTwo:gy,floorPowerOfTwo:cc,setQuaternionFromProperEuler:_y,normalize:Zn,denormalize:So};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(e,t,r,a,l,f,u,h,p){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,u,h,p)}set(e,t,r,a,l,f,u,h,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=l,m[5]=h,m[6]=r,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],u=r[3],h=r[6],p=r[1],m=r[4],_=r[7],v=r[2],S=r[5],w=r[8],T=a[0],x=a[3],y=a[6],U=a[1],R=a[4],I=a[7],H=a[2],O=a[5],k=a[8];return l[0]=f*T+u*U+h*H,l[3]=f*x+u*R+h*O,l[6]=f*y+u*I+h*k,l[1]=p*T+m*U+_*H,l[4]=p*x+m*R+_*O,l[7]=p*y+m*I+_*k,l[2]=v*T+S*U+w*H,l[5]=v*x+S*R+w*O,l[8]=v*y+S*I+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],m=e[8];return t*f*m-t*u*p-r*l*m+r*u*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],m=e[8],_=m*f-u*p,v=u*h-m*l,S=p*l-f*h,w=t*_+r*v+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(a*p-m*r)*T,e[2]=(u*r-a*f)*T,e[3]=v*T,e[4]=(m*t-a*h)*T,e[5]=(a*l-u*t)*T,e[6]=S*T,e[7]=(r*h-p*t)*T,e[8]=(f*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,u){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*f+p*u)+f+e,-a*p,a*h,-a*(-p*f+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new Vt;function zg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vy(){const s=Ta("canvas");return s.style.display="block",s}const vm={};function Sa(s){s in vm||(vm[s]=!0,console.warn(s))}const ym=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xm=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wl={[xr]:{transfer:sc,primaries:oc,toReference:s=>s,fromReference:s=>s},[vn]:{transfer:ln,primaries:oc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[gc]:{transfer:sc,primaries:ac,toReference:s=>s.applyMatrix3(xm),fromReference:s=>s.applyMatrix3(ym)},[Jf]:{transfer:ln,primaries:ac,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xm),fromReference:s=>s.applyMatrix3(ym).convertLinearToSRGB()}},yy=new Set([xr,gc]),Jt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!yy.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=wl[e].toReference,a=wl[t].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wl[s].primaries},getTransfer:function(s){return s===bi?sc:wl[s].transfer}};function bo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ff(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ro;class Hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=Ta("canvas")),ro.width=e.width,ro.height=e.height;const r=ro.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=bo(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(bo(t[r]/255)*255):t[r]=bo(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xy=0;class Vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=$r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,u=a.length;f<u;f++)a[f].isDataTexture?l.push(df(a[f].image)):l.push(df(a[f]))}else l=df(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function df(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sy=0;class ti extends bs{constructor(e=ti.DEFAULT_IMAGE,t=ti.DEFAULT_MAPPING,r=ei,a=ei,l=Qn,f=Ts,u=Ai,h=Yr,p=ti.DEFAULT_ANISOTROPY,m=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=$r(),this.name="",this.source=new Vg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Es?vn:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vn?Es:kg}set encoding(e){Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Es?vn:bi}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Lg;ti.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,r=0,a=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],m=h[4],_=h[8],v=h[1],S=h[5],w=h[9],T=h[2],x=h[6],y=h[10];if(Math.abs(m-v)<.01&&Math.abs(_-T)<.01&&Math.abs(w-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+T)<.1&&Math.abs(w+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,I=(S+1)/2,H=(y+1)/2,O=(m+v)/4,k=(_+T)/4,Z=(w+x)/4;return R>I&&R>H?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=O/r,l=k/r):I>H?I<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(I),r=O/a,l=Z/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=k/l,a=Z/l),this.set(r,a,l,t),this}let U=Math.sqrt((x-w)*(x-w)+(_-T)*(_-T)+(v-m)*(v-m));return Math.abs(U)<.001&&(U=1),this.x=(x-w)/U,this.y=(_-T)/U,this.z=(v-m)/U,this.w=Math.acos((p+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends bs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const a={width:e,height:t,depth:1};r.encoding!==void 0&&(Sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Es?vn:bi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new ti(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends My{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Gg extends ti{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=On,this.minFilter=On,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ey extends ti{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=On,this.minFilter=On,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,u){let h=r[a+0],p=r[a+1],m=r[a+2],_=r[a+3];const v=l[f+0],S=l[f+1],w=l[f+2],T=l[f+3];if(u===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(u===1){e[t+0]=v,e[t+1]=S,e[t+2]=w,e[t+3]=T;return}if(_!==T||h!==v||p!==S||m!==w){let x=1-u;const y=h*v+p*S+m*w+_*T,U=y>=0?1:-1,R=1-y*y;if(R>Number.EPSILON){const H=Math.sqrt(R),O=Math.atan2(H,y*U);x=Math.sin(x*O)/H,u=Math.sin(u*O)/H}const I=u*U;if(h=h*x+v*I,p=p*x+S*I,m=m*x+w*I,_=_*x+T*I,x===1-u){const H=1/Math.sqrt(h*h+p*p+m*m+_*_);h*=H,p*=H,m*=H,_*=H}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,f){const u=r[a],h=r[a+1],p=r[a+2],m=r[a+3],_=l[f],v=l[f+1],S=l[f+2],w=l[f+3];return e[t]=u*w+m*_+h*S-p*v,e[t+1]=h*w+m*v+p*_-u*S,e[t+2]=p*w+m*S+u*v-h*_,e[t+3]=m*w-u*_-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,u=Math.cos,h=Math.sin,p=u(r/2),m=u(a/2),_=u(l/2),v=h(r/2),S=h(a/2),w=h(l/2);switch(f){case"XYZ":this._x=v*m*_+p*S*w,this._y=p*S*_-v*m*w,this._z=p*m*w+v*S*_,this._w=p*m*_-v*S*w;break;case"YXZ":this._x=v*m*_+p*S*w,this._y=p*S*_-v*m*w,this._z=p*m*w-v*S*_,this._w=p*m*_+v*S*w;break;case"ZXY":this._x=v*m*_-p*S*w,this._y=p*S*_+v*m*w,this._z=p*m*w+v*S*_,this._w=p*m*_-v*S*w;break;case"ZYX":this._x=v*m*_-p*S*w,this._y=p*S*_+v*m*w,this._z=p*m*w-v*S*_,this._w=p*m*_+v*S*w;break;case"YZX":this._x=v*m*_+p*S*w,this._y=p*S*_+v*m*w,this._z=p*m*w-v*S*_,this._w=p*m*_-v*S*w;break;case"XZY":this._x=v*m*_-p*S*w,this._y=p*S*_-v*m*w,this._z=p*m*w+v*S*_,this._w=p*m*_+v*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],u=t[5],h=t[9],p=t[2],m=t[6],_=t[10],v=r+u+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(r>u&&r>_){const S=2*Math.sqrt(1+r-u-_);this._w=(m-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(u>_){const S=2*Math.sqrt(1+u-r-_);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+_-r-u);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,u=t._x,h=t._y,p=t._z,m=t._w;return this._x=r*m+f*u+a*p-l*h,this._y=a*m+f*h+l*u-r*p,this._z=l*m+f*p+r*h-a*u,this._w=f*m-r*u-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let u=f*e._w+r*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,u),_=Math.sin((1-t)*m)/p,v=Math.sin(t*m)/p;return this._w=f*_+this._w*v,this._x=r*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),r*Math.sin(l),r*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,u=e.z,h=e.w,p=2*(f*a-u*r),m=2*(u*t-l*a),_=2*(l*r-f*t);return this.x=t+h*p+f*_-u*m,this.y=r+h*m+u*p-l*_,this.z=a+h*_+l*m-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,u=t.y,h=t.z;return this.x=a*h-l*u,this.y=l*f-r*h,this.z=r*u-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new ee,Sm=new gi;class Rs{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=l.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,ki):ki.fromBufferAttribute(l,f),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),bl.subVectors(this.max,pa),so.subVectors(e.a,pa),oo.subVectors(e.b,pa),ao.subVectors(e.c,pa),kr.subVectors(oo,so),Br.subVectors(ao,oo),hs.subVectors(so,ao);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-hs.z,hs.y,kr.z,0,-kr.x,Br.z,0,-Br.x,hs.z,0,-hs.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-hs.y,hs.x,0];return!pf(t,so,oo,ao,bl)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,so,oo,ao,bl))?!1:(Rl.crossVectors(kr,Br),t=[Rl.x,Rl.y,Rl.z],pf(t,so,oo,ao,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ur=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ki=new ee,Al=new Rs,so=new ee,oo=new ee,ao=new ee,kr=new ee,Br=new ee,hs=new ee,pa=new ee,bl=new ee,Rl=new ee,ps=new ee;function pf(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){ps.fromArray(s,l);const u=a.x*Math.abs(ps.x)+a.y*Math.abs(ps.y)+a.z*Math.abs(ps.z),h=e.dot(ps),p=t.dot(ps),m=r.dot(ps);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>u)return!1}return!0}const Ty=new Rs,ma=new ee,mf=new ee;class Io{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ty.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ma,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(mf)),this.expandByPoint(ma.copy(e.center).sub(mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new ee,gf=new ee,Cl=new ee,zr=new ee,_f=new ee,Ll=new ee,vf=new ee;class _c{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){gf.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(gf);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Cl),u=zr.dot(this.direction),h=-zr.dot(Cl),p=zr.lengthSq(),m=Math.abs(1-f*f);let _,v,S,w;if(m>0)if(_=f*h-u,v=f*u-h,w=l*m,_>=0)if(v>=-w)if(v<=w){const T=1/m;_*=T,v*=T,S=_*(_+f*v+2*u)+v*(f*_+v+2*h)+p}else v=l,_=Math.max(0,-(f*v+u)),S=-_*_+v*(v+2*h)+p;else v=-l,_=Math.max(0,-(f*v+u)),S=-_*_+v*(v+2*h)+p;else v<=-w?(_=Math.max(0,-(-f*l+u)),v=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+v*(v+2*h)+p):v<=w?(_=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(_=Math.max(0,-(f*l+u)),v=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+v*(v+2*h)+p);else v=f>0?-l:l,_=Math.max(0,-(f*v+u)),S=-_*_+v*(v+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(gf).addScaledVector(Cl,v),S}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const r=fr.dot(this.direction),a=fr.dot(fr)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),u=r-f,h=r+f;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,u,h;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),m>=0?(l=(e.min.y-v.y)*m,f=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,f=(e.min.y-v.y)*m),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),_>=0?(u=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(u=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),r>h||u>a)||((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,r,a,l){_f.subVectors(t,e),Ll.subVectors(r,e),vf.crossVectors(_f,Ll);let f=this.direction.dot(vf),u;if(f>0){if(a)return null;u=1}else if(f<0)u=-1,f=-f;else return null;zr.subVectors(this.origin,e);const h=u*this.direction.dot(Ll.crossVectors(zr,Ll));if(h<0)return null;const p=u*this.direction.dot(_f.cross(zr));if(p<0||h+p>f)return null;const m=-u*zr.dot(vf);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,r,a,l,f,u,h,p,m,_,v,S,w,T,x){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,u,h,p,m,_,v,S,w,T,x)}set(e,t,r,a,l,f,u,h,p,m,_,v,S,w,T,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=f,y[9]=u,y[13]=h,y[2]=p,y[6]=m,y[10]=_,y[14]=v,y[3]=S,y[7]=w,y[11]=T,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/lo.setFromMatrixColumn(e,0).length(),l=1/lo.setFromMatrixColumn(e,1).length(),f=1/lo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),u=Math.sin(r),h=Math.cos(a),p=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=f*m,S=f*_,w=u*m,T=u*_;t[0]=h*m,t[4]=-h*_,t[8]=p,t[1]=S+w*p,t[5]=v-T*p,t[9]=-u*h,t[2]=T-v*p,t[6]=w+S*p,t[10]=f*h}else if(e.order==="YXZ"){const v=h*m,S=h*_,w=p*m,T=p*_;t[0]=v+T*u,t[4]=w*u-S,t[8]=f*p,t[1]=f*_,t[5]=f*m,t[9]=-u,t[2]=S*u-w,t[6]=T+v*u,t[10]=f*h}else if(e.order==="ZXY"){const v=h*m,S=h*_,w=p*m,T=p*_;t[0]=v-T*u,t[4]=-f*_,t[8]=w+S*u,t[1]=S+w*u,t[5]=f*m,t[9]=T-v*u,t[2]=-f*p,t[6]=u,t[10]=f*h}else if(e.order==="ZYX"){const v=f*m,S=f*_,w=u*m,T=u*_;t[0]=h*m,t[4]=w*p-S,t[8]=v*p+T,t[1]=h*_,t[5]=T*p+v,t[9]=S*p-w,t[2]=-p,t[6]=u*h,t[10]=f*h}else if(e.order==="YZX"){const v=f*h,S=f*p,w=u*h,T=u*p;t[0]=h*m,t[4]=T-v*_,t[8]=w*_+S,t[1]=_,t[5]=f*m,t[9]=-u*m,t[2]=-p*m,t[6]=S*_+w,t[10]=v-T*_}else if(e.order==="XZY"){const v=f*h,S=f*p,w=u*h,T=u*p;t[0]=h*m,t[4]=-_,t[8]=p*m,t[1]=v*_+T,t[5]=f*m,t[9]=S*_-w,t[2]=w*_-S,t[6]=u*m,t[10]=T*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ay)}lookAt(e,t,r){const a=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Hr.crossVectors(r,hi),Hr.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Hr.crossVectors(r,hi)),Hr.normalize(),Pl.crossVectors(hi,Hr),a[0]=Hr.x,a[4]=Pl.x,a[8]=hi.x,a[1]=Hr.y,a[5]=Pl.y,a[9]=hi.y,a[2]=Hr.z,a[6]=Pl.z,a[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],u=r[4],h=r[8],p=r[12],m=r[1],_=r[5],v=r[9],S=r[13],w=r[2],T=r[6],x=r[10],y=r[14],U=r[3],R=r[7],I=r[11],H=r[15],O=a[0],k=a[4],Z=a[8],b=a[12],D=a[1],Q=a[5],J=a[9],ge=a[13],j=a[2],se=a[6],W=a[10],de=a[14],X=a[3],ie=a[7],te=a[11],B=a[15];return l[0]=f*O+u*D+h*j+p*X,l[4]=f*k+u*Q+h*se+p*ie,l[8]=f*Z+u*J+h*W+p*te,l[12]=f*b+u*ge+h*de+p*B,l[1]=m*O+_*D+v*j+S*X,l[5]=m*k+_*Q+v*se+S*ie,l[9]=m*Z+_*J+v*W+S*te,l[13]=m*b+_*ge+v*de+S*B,l[2]=w*O+T*D+x*j+y*X,l[6]=w*k+T*Q+x*se+y*ie,l[10]=w*Z+T*J+x*W+y*te,l[14]=w*b+T*ge+x*de+y*B,l[3]=U*O+R*D+I*j+H*X,l[7]=U*k+R*Q+I*se+H*ie,l[11]=U*Z+R*J+I*W+H*te,l[15]=U*b+R*ge+I*de+H*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],u=e[5],h=e[9],p=e[13],m=e[2],_=e[6],v=e[10],S=e[14],w=e[3],T=e[7],x=e[11],y=e[15];return w*(+l*h*_-a*p*_-l*u*v+r*p*v+a*u*S-r*h*S)+T*(+t*h*S-t*p*v+l*f*v-a*f*S+a*p*m-l*h*m)+x*(+t*p*_-t*u*S-l*f*_+r*f*S+l*u*m-r*p*m)+y*(-a*u*m-t*h*_+t*u*v+a*f*_-r*f*v+r*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],u=e[5],h=e[6],p=e[7],m=e[8],_=e[9],v=e[10],S=e[11],w=e[12],T=e[13],x=e[14],y=e[15],U=_*x*p-T*v*p+T*h*S-u*x*S-_*h*y+u*v*y,R=w*v*p-m*x*p-w*h*S+f*x*S+m*h*y-f*v*y,I=m*T*p-w*_*p+w*u*S-f*T*S-m*u*y+f*_*y,H=w*_*h-m*T*h-w*u*v+f*T*v+m*u*x-f*_*x,O=t*U+r*R+a*I+l*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=U*k,e[1]=(T*v*l-_*x*l-T*a*S+r*x*S+_*a*y-r*v*y)*k,e[2]=(u*x*l-T*h*l+T*a*p-r*x*p-u*a*y+r*h*y)*k,e[3]=(_*h*l-u*v*l-_*a*p+r*v*p+u*a*S-r*h*S)*k,e[4]=R*k,e[5]=(m*x*l-w*v*l+w*a*S-t*x*S-m*a*y+t*v*y)*k,e[6]=(w*h*l-f*x*l-w*a*p+t*x*p+f*a*y-t*h*y)*k,e[7]=(f*v*l-m*h*l+m*a*p-t*v*p-f*a*S+t*h*S)*k,e[8]=I*k,e[9]=(w*_*l-m*T*l-w*r*S+t*T*S+m*r*y-t*_*y)*k,e[10]=(f*T*l-w*u*l+w*r*p-t*T*p-f*r*y+t*u*y)*k,e[11]=(m*u*l-f*_*l-m*r*p+t*_*p+f*r*S-t*u*S)*k,e[12]=H*k,e[13]=(m*T*a-w*_*a+w*r*v-t*T*v-m*r*x+t*_*x)*k,e[14]=(w*u*a-f*T*a-w*r*h+t*T*h+f*r*x-t*u*x)*k,e[15]=(f*_*a-m*u*a+m*r*h-t*_*h-f*r*v+t*u*v)*k,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,u=e.y,h=e.z,p=l*f,m=l*u;return this.set(p*f+r,p*u-a*h,p*h+a*u,0,p*u+a*h,m*u+r,m*h-a*f,0,p*h-a*u,m*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,u=t._z,h=t._w,p=l+l,m=f+f,_=u+u,v=l*p,S=l*m,w=l*_,T=f*m,x=f*_,y=u*_,U=h*p,R=h*m,I=h*_,H=r.x,O=r.y,k=r.z;return a[0]=(1-(T+y))*H,a[1]=(S+I)*H,a[2]=(w-R)*H,a[3]=0,a[4]=(S-I)*O,a[5]=(1-(v+y))*O,a[6]=(x+U)*O,a[7]=0,a[8]=(w+R)*k,a[9]=(x-U)*k,a[10]=(1-(v+T))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=lo.set(a[0],a[1],a[2]).length();const f=lo.set(a[4],a[5],a[6]).length(),u=lo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Bi.copy(this);const p=1/l,m=1/f,_=1/u;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=m,Bi.elements[5]*=m,Bi.elements[6]*=m,Bi.elements[8]*=_,Bi.elements[9]*=_,Bi.elements[10]*=_,t.setFromRotationMatrix(Bi),r.x=l,r.y=f,r.z=u,this}makePerspective(e,t,r,a,l,f,u=vr){const h=this.elements,p=2*l/(t-e),m=2*l/(r-a),_=(t+e)/(t-e),v=(r+a)/(r-a);let S,w;if(u===vr)S=-(f+l)/(f-l),w=-2*f*l/(f-l);else if(u===lc)S=-f/(f-l),w=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,u=vr){const h=this.elements,p=1/(t-e),m=1/(r-a),_=1/(f-l),v=(t+e)*p,S=(r+a)*m;let w,T;if(u===vr)w=(f+l)*_,T=-2*_;else if(u===lc)w=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const lo=new ee,Bi=new Ut,wy=new ee(0,0,0),Ay=new ee(1,1,1),Hr=new ee,Pl=new ee,hi=new ee,Mm=new Ut,Em=new gi;class Cs{constructor(e=0,t=0,r=0,a=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],u=a[8],h=a[1],p=a[5],m=a[9],_=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Xn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Xn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Xn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class Wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let by=0;const Tm=new ee,co=new gi,dr=new Ut,Nl=new ee,ga=new ee,Ry=new ee,Cy=new gi,wm=new ee(1,0,0),Am=new ee(0,1,0),bm=new ee(0,0,1),Ly={type:"added"},Py={type:"removed"};class yn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new ee,t=new Cs,r=new gi,a=new ee(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Vt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ga,Nl,this.up):dr.lookAt(Nl,ga,this.up),this.quaternion.setFromRotationMatrix(dr),a&&(dr.extractRotation(a.matrixWorld),co.setFromRotationMatrix(dr),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ly)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Py)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(l(e.materials,this.material[h]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(l(e.animations,h))}}if(t){const u=f(e.geometries),h=f(e.materials),p=f(e.textures),m=f(e.images),_=f(e.shapes),v=f(e.skeletons),S=f(e.animations),w=f(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}yn.DEFAULT_UP=new ee(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new ee,hr=new ee,yf=new ee,pr=new ee,uo=new ee,fo=new ee,Rm=new ee,xf=new ee,Sf=new ee,Mf=new ee;let Dl=!1;class Hi{constructor(e=new ee,t=new ee,r=new ee){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),zi.subVectors(e,t),a.cross(zi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){zi.subVectors(a,t),hr.subVectors(r,t),yf.subVectors(e,t);const f=zi.dot(zi),u=zi.dot(hr),h=zi.dot(yf),p=hr.dot(hr),m=hr.dot(yf),_=f*p-u*u;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*h-u*m)*v,w=(f*m-u*h)*v;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getUV(e,t,r,a,l,f,u,h){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),this.getInterpolation(e,t,r,a,l,f,u,h)}static getInterpolation(e,t,r,a,l,f,u,h){return this.getBarycoord(e,t,r,a,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,pr.x),h.addScaledVector(f,pr.y),h.addScaledVector(u,pr.z),h)}static isFrontFacing(e,t,r,a){return zi.subVectors(r,t),hr.subVectors(e,t),zi.cross(hr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),zi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,a,l){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),Hi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}getInterpolation(e,t,r,a,l){return Hi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,u;uo.subVectors(a,r),fo.subVectors(l,r),xf.subVectors(e,r);const h=uo.dot(xf),p=fo.dot(xf);if(h<=0&&p<=0)return t.copy(r);Sf.subVectors(e,a);const m=uo.dot(Sf),_=fo.dot(Sf);if(m>=0&&_<=m)return t.copy(a);const v=h*_-m*p;if(v<=0&&h>=0&&m<=0)return f=h/(h-m),t.copy(r).addScaledVector(uo,f);Mf.subVectors(e,l);const S=uo.dot(Mf),w=fo.dot(Mf);if(w>=0&&S<=w)return t.copy(l);const T=S*p-h*w;if(T<=0&&p>=0&&w<=0)return u=p/(p-w),t.copy(r).addScaledVector(fo,u);const x=m*w-S*_;if(x<=0&&_-m>=0&&S-w>=0)return Rm.subVectors(l,a),u=(_-m)/(_-m+(S-w)),t.copy(a).addScaledVector(Rm,u);const y=1/(x+T+v);return f=T*y,u=v*y,t.copy(r).addScaledVector(uo,f).addScaledVector(fo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Ef(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Jt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Jt.workingColorSpace){if(e=Qf(e,1),t=Xn(t,0,1),r=Xn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Ef(f,l,e+1/3),this.g=Ef(f,l,e),this.b=Ef(f,l,e-1/3)}return Jt.toWorkingColorSpace(this,a),this}setStyle(e,t=vn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],u=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const r=Xg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}copyLinearToSRGB(e){return this.r=ff(e.r),this.g=ff(e.g),this.b=ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Jt.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Xn(Wn.r*255,0,255))*65536+Math.round(Xn(Wn.g*255,0,255))*256+Math.round(Xn(Wn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Wn.copy(this),t);const r=Wn.r,a=Wn.g,l=Wn.b,f=Math.max(r,a,l),u=Math.min(r,a,l);let h,p;const m=(u+f)/2;if(u===f)h=0,p=0;else{const _=f-u;switch(p=m<=.5?_/(f+u):_/(2-f-u),f){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=vn){Jt.fromWorkingColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,a=Wn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Il);const r=xa(Vr.h,Il.h,t),a=xa(Vr.s,Il.s,t),l=xa(Vr.l,Il.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ft;Ft.NAMES=Xg;let Ny=0;class Zr extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Ao,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Hf,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zf&&(r.blendSrc=this.blendSrc),this.blendDst!==Hf&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==nc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(r.stencilFail=this.stencilFail),this.stencilZFail!==io&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const u in l){const h=l[u];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uc extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new ee,Ul=new Rt;class mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=So(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=So(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=So(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=So(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array),a=Zn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array),a=Zn(a,this.array),l=Zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class jg extends mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class qg extends mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class fn extends mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Dy=0;const wi=new Ut,Tf=new yn,ho=new ee,pi=new Rs,_a=new Rs,Pn=new ee;class _i extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?qg:jg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,r){return wi.makeTranslation(e,t,r),this.applyMatrix4(wi),this}scale(e,t,r){return wi.makeScale(e,t,r),this.applyMatrix4(wi),this}lookAt(e){return Tf.lookAt(e),Tf.updateMatrix(),this.applyMatrix4(Tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const u=t[l];_a.setFromBufferAttribute(u),this.morphTargetsRelative?(Pn.addVectors(pi.min,_a.min),pi.expandByPoint(Pn),Pn.addVectors(pi.max,_a.max),pi.expandByPoint(Pn)):(pi.expandByPoint(_a.min),pi.expandByPoint(_a.max))}pi.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)Pn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Pn));if(t)for(let l=0,f=t.length;l<f;l++){const u=t[l],h=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)Pn.fromBufferAttribute(u,p),h&&(ho.fromBufferAttribute(e,p),Pn.add(ho)),a=Math.max(a,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=t.position.array,l=t.normal.array,f=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,p=[],m=[];for(let D=0;D<u;D++)p[D]=new ee,m[D]=new ee;const _=new ee,v=new ee,S=new ee,w=new Rt,T=new Rt,x=new Rt,y=new ee,U=new ee;function R(D,Q,J){_.fromArray(a,D*3),v.fromArray(a,Q*3),S.fromArray(a,J*3),w.fromArray(f,D*2),T.fromArray(f,Q*2),x.fromArray(f,J*2),v.sub(_),S.sub(_),T.sub(w),x.sub(w);const ge=1/(T.x*x.y-x.x*T.y);isFinite(ge)&&(y.copy(v).multiplyScalar(x.y).addScaledVector(S,-T.y).multiplyScalar(ge),U.copy(S).multiplyScalar(T.x).addScaledVector(v,-x.x).multiplyScalar(ge),p[D].add(y),p[Q].add(y),p[J].add(y),m[D].add(U),m[Q].add(U),m[J].add(U))}let I=this.groups;I.length===0&&(I=[{start:0,count:r.length}]);for(let D=0,Q=I.length;D<Q;++D){const J=I[D],ge=J.start,j=J.count;for(let se=ge,W=ge+j;se<W;se+=3)R(r[se+0],r[se+1],r[se+2])}const H=new ee,O=new ee,k=new ee,Z=new ee;function b(D){k.fromArray(l,D*3),Z.copy(k);const Q=p[D];H.copy(Q),H.sub(k.multiplyScalar(k.dot(Q))).normalize(),O.crossVectors(Z,Q);const ge=O.dot(m[D])<0?-1:1;h[D*4]=H.x,h[D*4+1]=H.y,h[D*4+2]=H.z,h[D*4+3]=ge}for(let D=0,Q=I.length;D<Q;++D){const J=I[D],ge=J.start,j=J.count;for(let se=ge,W=ge+j;se<W;se+=3)b(r[se+0]),b(r[se+1]),b(r[se+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new ee,l=new ee,f=new ee,u=new ee,h=new ee,p=new ee,m=new ee,_=new ee;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),T=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,T),f.fromBufferAttribute(t,x),m.subVectors(f,l),_.subVectors(a,l),m.cross(_),u.fromBufferAttribute(r,w),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,x),u.add(m),h.add(m),p.add(m),r.setXYZ(w,u.x,u.y,u.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),f.fromBufferAttribute(t,v+2),m.subVectors(f,l),_.subVectors(a,l),m.cross(_),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(u,h){const p=u.array,m=u.itemSize,_=u.normalized,v=new p.constructor(h.length*m);let S=0,w=0;for(let T=0,x=h.length;T<x;T++){u.isInterleavedBufferAttribute?S=h[T]*u.data.stride+u.offset:S=h[T]*m;for(let y=0;y<m;y++)v[w++]=p[S++]}return new mi(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,r=this.index.array,a=this.attributes;for(const u in a){const h=a[u],p=e(h,r);t.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const h=[],p=l[u];for(let m=0,_=p.length;m<_;m++){const v=p[m],S=e(v,r);h.push(S)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,h=f.length;u<h;u++){const p=f[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];m.push(S.toJSON(e.data))}m.length>0&&(a[h]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let v=0,S=_.length;v<S;v++)m.push(_[v].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new Ut,ms=new _c,Fl=new Io,Lm=new ee,po=new ee,mo=new ee,go=new ee,wf=new ee,Ol=new ee,kl=new Rt,Bl=new Rt,zl=new Rt,Pm=new ee,Nm=new ee,Dm=new ee,Hl=new ee,Vl=new ee;class kn extends yn{constructor(e=new _i,t=new uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){Ol.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=u[h],_=l[h];m!==0&&(wf.fromBufferAttribute(_,e),f?Ol.addScaledVector(wf,m):Ol.addScaledVector(wf.sub(t),m))}t.add(Ol)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Fl.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Fl,Lm)===null||ms.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Cm.copy(l).invert(),ms.copy(e.ray).applyMatrix4(Cm),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,u=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(f))for(let w=0,T=v.length;w<T;w++){const x=v[w],y=f[x.materialIndex],U=Math.max(x.start,S.start),R=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let I=U,H=R;I<H;I+=3){const O=u.getX(I),k=u.getX(I+1),Z=u.getX(I+2);a=Gl(this,y,e,r,p,m,_,O,k,Z),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(u.count,S.start+S.count);for(let x=w,y=T;x<y;x+=3){const U=u.getX(x),R=u.getX(x+1),I=u.getX(x+2);a=Gl(this,f,e,r,p,m,_,U,R,I),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let w=0,T=v.length;w<T;w++){const x=v[w],y=f[x.materialIndex],U=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let I=U,H=R;I<H;I+=3){const O=I,k=I+1,Z=I+2;a=Gl(this,y,e,r,p,m,_,O,k,Z),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let x=w,y=T;x<y;x+=3){const U=x,R=x+1,I=x+2;a=Gl(this,f,e,r,p,m,_,U,R,I),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Iy(s,e,t,r,a,l,f,u){let h;if(e.side===li?h=r.intersectTriangle(f,l,a,!0,u):h=r.intersectTriangle(a,l,f,e.side===yr,u),h===null)return null;Vl.copy(u),Vl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Vl);return p<t.near||p>t.far?null:{distance:p,point:Vl.clone(),object:s}}function Gl(s,e,t,r,a,l,f,u,h,p){s.getVertexPosition(u,po),s.getVertexPosition(h,mo),s.getVertexPosition(p,go);const m=Iy(s,e,t,r,po,mo,go,Hl);if(m){a&&(kl.fromBufferAttribute(a,u),Bl.fromBufferAttribute(a,h),zl.fromBufferAttribute(a,p),m.uv=Hi.getInterpolation(Hl,po,mo,go,kl,Bl,zl,new Rt)),l&&(kl.fromBufferAttribute(l,u),Bl.fromBufferAttribute(l,h),zl.fromBufferAttribute(l,p),m.uv1=Hi.getInterpolation(Hl,po,mo,go,kl,Bl,zl,new Rt),m.uv2=m.uv1),f&&(Pm.fromBufferAttribute(f,u),Nm.fromBufferAttribute(f,h),Dm.fromBufferAttribute(f,p),m.normal=Hi.getInterpolation(Hl,po,mo,go,Pm,Nm,Dm,new ee),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:h,c:p,normal:new ee,materialIndex:0};Hi.getNormal(po,mo,go,_.normal),m.face=_}return m}class Uo extends _i{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const u=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],m=[],_=[];let v=0,S=0;w("z","y","x",-1,-1,r,t,e,f,l,0),w("z","y","x",1,-1,r,t,-e,f,l,1),w("x","z","y",1,1,e,r,t,a,f,2),w("x","z","y",1,-1,e,r,-t,a,f,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(m,3)),this.setAttribute("uv",new fn(_,2));function w(T,x,y,U,R,I,H,O,k,Z,b){const D=I/k,Q=H/Z,J=I/2,ge=H/2,j=O/2,se=k+1,W=Z+1;let de=0,X=0;const ie=new ee;for(let te=0;te<W;te++){const B=te*Q-ge;for(let Y=0;Y<se;Y++){const K=Y*D-J;ie[T]=K*U,ie[x]=B*R,ie[y]=j,p.push(ie.x,ie.y,ie.z),ie[T]=0,ie[x]=0,ie[y]=O>0?1:-1,m.push(ie.x,ie.y,ie.z),_.push(Y/k),_.push(1-te/Z),de+=1}}for(let te=0;te<Z;te++)for(let B=0;B<k;B++){const Y=v+B+se*te,K=v+B+se*(te+1),re=v+(B+1)+se*(te+1),ue=v+(B+1)+se*te;h.push(Y,K,ue),h.push(K,re,ue),X+=6}u.addGroup(S,X,b),S+=X,v+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function No(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=No(s[t]);for(const a in r)e[a]=r[a]}return e}function Uy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yg(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const Fy={clone:No,merge:Jn};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class As extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=Uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Kg extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends Kg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _o=-90,vo=1;class By extends yn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(_o,vo,e,t);a.layers=this.layers,this.add(a);const l=new jn(_o,vo,e,t);l.layers=this.layers,this.add(l);const f=new jn(_o,vo,e,t);f.layers=this.layers,this.add(f);const u=new jn(_o,vo,e,t);u.layers=this.layers,this.add(u);const h=new jn(_o,vo,e,t);h.layers=this.layers,this.add(h);const p=new jn(_o,vo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,u,h]=t;for(const p of t)this.remove(p);if(e===vr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,u,h,p,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,u),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(t,m),e.setRenderTarget(_,v,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class $g extends ti{constructor(e,t,r,a,l,f,u,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Ro,super(e,t,r,a,l,f,u,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zy extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];t.encoding!==void 0&&(Sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Es?vn:bi),this.texture=new $g(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Uo(5,5,5),l=new As({name:"CubemapFromEquirect",uniforms:No(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:jr});l.uniforms.tEquirect.value=t;const f=new kn(a,l),u=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Qn),new By(1,10,this).update(e,f),t.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}const Af=new ee,Hy=new ee,Vy=new Vt;class Wr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Af.subVectors(r,t).cross(Hy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Af),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Vy.getNormalMatrix(e),a=this.coplanarPoint(Af).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Io,Wl=new ee;class ed{constructor(e=new Wr,t=new Wr,r=new Wr,a=new Wr,l=new Wr,f=new Wr){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(a),u[4].copy(l),u[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=vr){const r=this.planes,a=e.elements,l=a[0],f=a[1],u=a[2],h=a[3],p=a[4],m=a[5],_=a[6],v=a[7],S=a[8],w=a[9],T=a[10],x=a[11],y=a[12],U=a[13],R=a[14],I=a[15];if(r[0].setComponents(h-l,v-p,x-S,I-y).normalize(),r[1].setComponents(h+l,v+p,x+S,I+y).normalize(),r[2].setComponents(h+f,v+m,x+w,I+U).normalize(),r[3].setComponents(h-f,v-m,x-w,I-U).normalize(),r[4].setComponents(h-u,v-_,x-T,I-R).normalize(),t===vr)r[5].setComponents(h+u,v+_,x+T,I+R).normalize();else if(t===lc)r[5].setComponents(u,_,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Wl.x=a.normal.x>0?e.max.x:e.min.x,Wl.y=a.normal.y>0?e.max.y:e.min.y,Wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zg(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Gy(s,e){const t=e.isWebGL2,r=new WeakMap;function a(p,m){const _=p.array,v=p.usage,S=_.byteLength,w=s.createBuffer();s.bindBuffer(m,w),s.bufferData(m,_,v),p.onUploadCallback();let T;if(_ instanceof Float32Array)T=s.FLOAT;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)T=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=s.SHORT;else if(_ instanceof Uint32Array)T=s.UNSIGNED_INT;else if(_ instanceof Int32Array)T=s.INT;else if(_ instanceof Int8Array)T=s.BYTE;else if(_ instanceof Uint8Array)T=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:w,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version,size:S}}function l(p,m,_){const v=m.array,S=m._updateRange,w=m.updateRanges;if(s.bindBuffer(_,p),S.count===-1&&w.length===0&&s.bufferSubData(_,0,v),w.length!==0){for(let T=0,x=w.length;T<x;T++){const y=w[T];t?s.bufferSubData(_,y.start*v.BYTES_PER_ELEMENT,v,y.start,y.count):s.bufferSubData(_,y.start*v.BYTES_PER_ELEMENT,v.subarray(y.start,y.start+y.count))}m.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(_,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):s.bufferSubData(_,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=r.get(p);m&&(s.deleteBuffer(m.buffer),r.delete(p))}function h(p,m){if(p.isGLBufferAttribute){const v=r.get(p);(!v||v.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);if(_===void 0)r.set(p,a(p,m));else if(_.version<p.version){if(_.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(_.buffer,p,m),_.version=p.version}}return{get:f,remove:u,update:h}}class td extends _i{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,u=Math.floor(r),h=Math.floor(a),p=u+1,m=h+1,_=e/u,v=t/h,S=[],w=[],T=[],x=[];for(let y=0;y<m;y++){const U=y*v-f;for(let R=0;R<p;R++){const I=R*_-l;w.push(I,-U,0),T.push(0,0,1),x.push(R/u),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let U=0;U<u;U++){const R=U+p*y,I=U+p*(y+1),H=U+1+p*(y+1),O=U+1+p*y;S.push(R,I,O),S.push(I,H,O)}this.setIndex(S),this.setAttribute("position",new fn(w,3)),this.setAttribute("normal",new fn(T,3)),this.setAttribute("uv",new fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ES=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$S=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:jy,alphamap_pars_fragment:qy,alphatest_fragment:Yy,alphatest_pars_fragment:Ky,aomap_fragment:$y,aomap_pars_fragment:Zy,batching_pars_vertex:Jy,batching_vertex:Qy,begin_vertex:ex,beginnormal_vertex:tx,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:rx,clipping_planes_fragment:sx,clipping_planes_pars_fragment:ox,clipping_planes_pars_vertex:ax,clipping_planes_vertex:lx,color_fragment:cx,color_pars_fragment:ux,color_pars_vertex:fx,color_vertex:dx,common:hx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:gx,displacementmap_vertex:_x,emissivemap_fragment:vx,emissivemap_pars_fragment:yx,colorspace_fragment:xx,colorspace_pars_fragment:Sx,envmap_fragment:Mx,envmap_common_pars_fragment:Ex,envmap_pars_fragment:Tx,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Ox,envmap_vertex:Ax,fog_vertex:bx,fog_pars_vertex:Rx,fog_fragment:Cx,fog_pars_fragment:Lx,gradientmap_pars_fragment:Px,lightmap_fragment:Nx,lightmap_pars_fragment:Dx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Ux,lights_pars_begin:Fx,lights_toon_fragment:kx,lights_toon_pars_fragment:Bx,lights_phong_fragment:zx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Wx,lights_fragment_maps:Xx,lights_fragment_end:jx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Yx,logdepthbuf_pars_vertex:Kx,logdepthbuf_vertex:$x,map_fragment:Zx,map_pars_fragment:Jx,map_particle_fragment:Qx,map_particle_pars_fragment:eS,metalnessmap_fragment:tS,metalnessmap_pars_fragment:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:fS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:hS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:_S,packing:vS,premultiplied_alpha_fragment:yS,project_vertex:xS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:ES,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:AS,shadowmap_vertex:bS,shadowmask_pars_fragment:RS,skinbase_vertex:CS,skinning_pars_vertex:LS,skinning_vertex:PS,skinnormal_vertex:NS,specularmap_fragment:DS,specularmap_pars_fragment:IS,tonemapping_fragment:US,tonemapping_pars_fragment:FS,transmission_fragment:OS,transmission_pars_fragment:kS,uv_pars_fragment:BS,uv_pars_vertex:zS,uv_vertex:HS,worldpos_vertex:VS,background_vert:GS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:jS,cube_vert:qS,cube_frag:YS,depth_vert:KS,depth_frag:$S,distanceRGBA_vert:ZS,distanceRGBA_frag:JS,equirect_vert:QS,equirect_frag:eM,linedashed_vert:tM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:fM,meshphong_frag:dM,meshphysical_vert:hM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:gM,points_vert:_M,points_frag:vM,shadow_vert:yM,shadow_frag:xM,sprite_vert:SM,sprite_frag:MM},ze={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ki={basic:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ft(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Jn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Jn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ft(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Jn([ze.points,ze.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Jn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Jn([ze.common,ze.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Jn([ze.sprite,ze.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Jn([ze.common,ze.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Jn([ze.lights,ze.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ki.physical={uniforms:Jn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Xl={r:0,b:0,g:0};function EM(s,e,t,r,a,l,f){const u=new Ft(0);let h=l===!0?0:1,p,m,_=null,v=0,S=null;function w(x,y){let U=!1,R=y.isScene===!0?y.background:null;R&&R.isTexture&&(R=(y.backgroundBlurriness>0?t:e).get(R)),R===null?T(u,h):R&&R.isColor&&(T(R,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===pc)?(m===void 0&&(m=new kn(new Uo(1,1,1),new As({name:"BackgroundCubeMaterial",uniforms:No(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ln,(_!==R||v!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=R,v=R.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new kn(new td(2,2),new As({name:"BackgroundMaterial",uniforms:No(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ln,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,S=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function T(x,y){x.getRGB(Xl,Yg(s)),r.buffers.color.setClear(Xl.r,Xl.g,Xl.b,y,f)}return{getClearColor:function(){return u},setClearColor:function(x,y=1){u.set(x),h=y,T(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,T(u,h)},render:w}}function TM(s,e,t,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,u={},h=x(null);let p=h,m=!1;function _(j,se,W,de,X){let ie=!1;if(f){const te=T(de,W,se);p!==te&&(p=te,S(p.object)),ie=y(j,de,W,X),ie&&U(j,de,W,X)}else{const te=se.wireframe===!0;(p.geometry!==de.id||p.program!==W.id||p.wireframe!==te)&&(p.geometry=de.id,p.program=W.id,p.wireframe=te,ie=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(ie||m)&&(m=!1,Z(j,se,W,de),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function v(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(j){return r.isWebGL2?s.bindVertexArray(j):l.bindVertexArrayOES(j)}function w(j){return r.isWebGL2?s.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function T(j,se,W){const de=W.wireframe===!0;let X=u[j.id];X===void 0&&(X={},u[j.id]=X);let ie=X[se.id];ie===void 0&&(ie={},X[se.id]=ie);let te=ie[de];return te===void 0&&(te=x(v()),ie[de]=te),te}function x(j){const se=[],W=[],de=[];for(let X=0;X<a;X++)se[X]=0,W[X]=0,de[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:W,attributeDivisors:de,object:j,attributes:{},index:null}}function y(j,se,W,de){const X=p.attributes,ie=se.attributes;let te=0;const B=W.getAttributes();for(const Y in B)if(B[Y].location>=0){const re=X[Y];let ue=ie[Y];if(ue===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(ue=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(ue=j.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;te++}return p.attributesNum!==te||p.index!==de}function U(j,se,W,de){const X={},ie=se.attributes;let te=0;const B=W.getAttributes();for(const Y in B)if(B[Y].location>=0){let re=ie[Y];re===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(re=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(re=j.instanceColor));const ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),X[Y]=ue,te++}p.attributes=X,p.attributesNum=te,p.index=de}function R(){const j=p.newAttributes;for(let se=0,W=j.length;se<W;se++)j[se]=0}function I(j){H(j,0)}function H(j,se){const W=p.newAttributes,de=p.enabledAttributes,X=p.attributeDivisors;W[j]=1,de[j]===0&&(s.enableVertexAttribArray(j),de[j]=1),X[j]!==se&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,se),X[j]=se)}function O(){const j=p.newAttributes,se=p.enabledAttributes;for(let W=0,de=se.length;W<de;W++)se[W]!==j[W]&&(s.disableVertexAttribArray(W),se[W]=0)}function k(j,se,W,de,X,ie,te){te===!0?s.vertexAttribIPointer(j,se,W,X,ie):s.vertexAttribPointer(j,se,W,de,X,ie)}function Z(j,se,W,de){if(r.isWebGL2===!1&&(j.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const X=de.attributes,ie=W.getAttributes(),te=se.defaultAttributeValues;for(const B in ie){const Y=ie[B];if(Y.location>=0){let K=X[B];if(K===void 0&&(B==="instanceMatrix"&&j.instanceMatrix&&(K=j.instanceMatrix),B==="instanceColor"&&j.instanceColor&&(K=j.instanceColor)),K!==void 0){const re=K.normalized,ue=K.itemSize,he=t.get(K);if(he===void 0)continue;const Se=he.buffer,ce=he.type,Me=he.bytesPerElement,Te=r.isWebGL2===!0&&(ce===s.INT||ce===s.UNSIGNED_INT||K.gpuType===Pg);if(K.isInterleavedBufferAttribute){const qe=K.data,oe=qe.stride,Ct=K.offset;if(qe.isInstancedInterleavedBuffer){for(let et=0;et<Y.locationSize;et++)H(Y.location+et,qe.meshPerAttribute);j.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let et=0;et<Y.locationSize;et++)I(Y.location+et);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let et=0;et<Y.locationSize;et++)k(Y.location+et,ue/Y.locationSize,ce,re,oe*Me,(Ct+ue/Y.locationSize*et)*Me,Te)}else{if(K.isInstancedBufferAttribute){for(let qe=0;qe<Y.locationSize;qe++)H(Y.location+qe,K.meshPerAttribute);j.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let qe=0;qe<Y.locationSize;qe++)I(Y.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let qe=0;qe<Y.locationSize;qe++)k(Y.location+qe,ue/Y.locationSize,ce,re,ue*Me,ue/Y.locationSize*qe*Me,Te)}}else if(te!==void 0){const re=te[B];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(Y.location,re);break;case 3:s.vertexAttrib3fv(Y.location,re);break;case 4:s.vertexAttrib4fv(Y.location,re);break;default:s.vertexAttrib1fv(Y.location,re)}}}}O()}function b(){J();for(const j in u){const se=u[j];for(const W in se){const de=se[W];for(const X in de)w(de[X].object),delete de[X];delete se[W]}delete u[j]}}function D(j){if(u[j.id]===void 0)return;const se=u[j.id];for(const W in se){const de=se[W];for(const X in de)w(de[X].object),delete de[X];delete se[W]}delete u[j.id]}function Q(j){for(const se in u){const W=u[se];if(W[j.id]===void 0)continue;const de=W[j.id];for(const X in de)w(de[X].object),delete de[X];delete W[j.id]}}function J(){ge(),m=!0,p!==h&&(p=h,S(p.object))}function ge(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:_,reset:J,resetDefaultState:ge,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:Q,initAttributes:R,enableAttribute:I,disableUnusedAttributes:O}}function wM(s,e,t,r){const a=r.isWebGL2;let l;function f(m){l=m}function u(m,_){s.drawArrays(l,m,_),t.update(_,l,1)}function h(m,_,v){if(v===0)return;let S,w;if(a)S=s,w="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](l,m,_,v),t.update(_,l,v)}function p(m,_,v){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<v;w++)this.render(m[w],_[w]);else{S.multiDrawArraysWEBGL(l,m,0,_,0,v);let w=0;for(let T=0;T<v;T++)w+=_[T];t.update(w,l,1)}}this.setMode=f,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function AM(s,e,t){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),w=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),T=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,I=f||e.has("OES_texture_float"),H=R&&I,O=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:w,maxAttributes:T,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:U,vertexTextures:R,floatFragmentTextures:I,floatVertexTextures:H,maxSamples:O}}function bM(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new Wr,u=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||a;return a=v,r=_.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,S){const w=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!a||w===null||w.length===0||l&&!x)l?m(null):p();else{const U=l?0:r,R=U*4;let I=y.clippingState||null;h.value=I,I=m(w,v,R,S);for(let H=0;H!==R;++H)I[H]=t[H];y.clippingState=I,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(_,v,S,w){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=h.value,w!==!0||x===null){const y=S+T*4,U=v.matrixWorldInverse;u.getNormalMatrix(U),(x===null||x.length<y)&&(x=new Float32Array(y));for(let R=0,I=S;R!==T;++R,I+=4)f.copy(_[R]).applyMatrix4(U,u),f.normal.toArray(x,I),x[I+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function RM(s){let e=new WeakMap;function t(f,u){return u===Vf?f.mapping=Ro:u===Gf&&(f.mapping=Co),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Vf||u===Gf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new zy(h.height/2);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const u=f.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class nd extends Kg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,u=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,f,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Eo=4,Im=[.125,.215,.35,.446,.526,.582],ys=20,bf=new nd,Um=new Ft;let Rf=null,Cf=0,Lf=0;const _s=(1+Math.sqrt(5))/2,yo=1/_s,Fm=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,_s,yo),new ee(0,_s,-yo),new ee(yo,0,_s),new ee(-yo,0,_s),new ee(_s,yo,0),new ee(-_s,yo,0)];class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Cf,Lf),e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ea,format:Ai,colorSpace:xr,depthBuffer:!1},a=km(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CM(l)),this._blurMaterial=LM(l,e,t)}return a}_compileMaterial(e){const t=new kn(this._lodPlanes[0],e);this._renderer.compile(t,bf)}_sceneToCubeUV(e,t,r,a){const u=new jn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Um),m.toneMapping=qr,m.autoClear=!1;const S=new uc({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),w=new kn(new Uo,S);let T=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,T=!0):(S.color.copy(Um),T=!0);for(let y=0;y<6;y++){const U=y%3;U===0?(u.up.set(0,h[y],0),u.lookAt(p[y],0,0)):U===1?(u.up.set(0,0,h[y]),u.lookAt(0,p[y],0)):(u.up.set(0,h[y],0),u.lookAt(0,0,p[y]));const R=this._cubeSize;jl(a,U*R,y>2?R:0,R,R),m.setRenderTarget(a),T&&m.render(w,u),m.render(e,u)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ro||e.mapping===Co;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new kn(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const h=this._cubeSize;jl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,bf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Fm[(a-1)%Fm.length];this._blur(e,a-1,a,l,f)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,u){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new kn(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ys-1),T=l/w,x=isFinite(l)?1+Math.floor(m*T):ys;x>ys&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);const y=[];let U=0;for(let k=0;k<ys;++k){const Z=k/T,b=Math.exp(-Z*Z/2);y.push(b),k===0?U+=b:k<x&&(U+=2*b)}for(let k=0;k<y.length;k++)y[k]=y[k]/U;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=f==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:R}=this;v.dTheta.value=w,v.mipInt.value=R-r;const I=this._sizeLods[a],H=3*I*(a>R-Eo?a-R+Eo:0),O=4*(this._cubeSize-I);jl(t,H,O,3*I,2*I),h.setRenderTarget(t),h.render(_,bf)}}function CM(s){const e=[],t=[],r=[];let a=s;const l=s-Eo+1+Im.length;for(let f=0;f<l;f++){const u=Math.pow(2,a);t.push(u);let h=1/u;f>s-Eo?h=Im[f-s+Eo-1]:f===0&&(h=0),r.push(h);const p=1/(u-2),m=-p,_=1+p,v=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,w=6,T=3,x=2,y=1,U=new Float32Array(T*w*S),R=new Float32Array(x*w*S),I=new Float32Array(y*w*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,Z=O>2?0:-1,b=[k,Z,0,k+2/3,Z,0,k+2/3,Z+1,0,k,Z,0,k+2/3,Z+1,0,k,Z+1,0];U.set(b,T*w*O),R.set(v,x*w*O);const D=[O,O,O,O,O,O];I.set(D,y*w*O)}const H=new _i;H.setAttribute("position",new mi(U,T)),H.setAttribute("uv",new mi(R,x)),H.setAttribute("faceIndex",new mi(I,y)),e.push(H),a>Eo&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function km(s,e,t){const r=new ws(s,e,t);return r.texture.mapping=pc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function jl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function LM(s,e,t){const r=new Float32Array(ys),a=new ee(0,1,0);return new As({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Bm(){return new As({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function zm(){return new As({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PM(s){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const h=u.mapping,p=h===Vf||h===Gf,m=h===Ro||h===Co;if(p||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let _=e.get(u);return t===null&&(t=new Om(s)),_=p?t.fromEquirectangular(u,_):t.fromCubemap(u,_),e.set(u,_),_.texture}else{if(e.has(u))return e.get(u).texture;{const _=u.image;if(p&&_&&_.height>0||m&&_&&a(_)){t===null&&(t=new Om(s));const v=p?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,v),u.addEventListener("dispose",l),v.texture}else return null}}}return u}function a(u){let h=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&h++;return h===p}function l(u){const h=u.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function NM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function DM(s,e,t,r){const a={},l=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);for(const w in v.morphAttributes){const T=v.morphAttributes[w];for(let x=0,y=T.length;x<y;x++)e.remove(T[x])}v.removeEventListener("dispose",f),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(_,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const w in v)e.update(v[w],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const w in S){const T=S[w];for(let x=0,y=T.length;x<y;x++)e.update(T[x],s.ARRAY_BUFFER)}}function p(_){const v=[],S=_.index,w=_.attributes.position;let T=0;if(S!==null){const U=S.array;T=S.version;for(let R=0,I=U.length;R<I;R+=3){const H=U[R+0],O=U[R+1],k=U[R+2];v.push(H,O,O,k,k,H)}}else if(w!==void 0){const U=w.array;T=w.version;for(let R=0,I=U.length/3-1;R<I;R+=3){const H=R+0,O=R+1,k=R+2;v.push(H,O,O,k,k,H)}}else return;const x=new(zg(v)?qg:jg)(v,1);x.version=T;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function m(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:u,update:h,getWireframeAttribute:m}}function IM(s,e,t,r){const a=r.isWebGL2;let l;function f(S){l=S}let u,h;function p(S){u=S.type,h=S.bytesPerElement}function m(S,w){s.drawElements(l,w,u,S*h),t.update(w,l,1)}function _(S,w,T){if(T===0)return;let x,y;if(a)x=s,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](l,w,u,S*h,T),t.update(w,l,T)}function v(S,w,T){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<T;y++)this.render(S[y]/h,w[y]);else{x.multiDrawElementsWEBGL(l,w,0,u,S,0,T);let y=0;for(let U=0;U<T;U++)y+=w[U];t.update(y,l,1)}}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=_,this.renderMultiDraw=v}function UM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,u){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=u*(l/3);break;case s.LINES:t.lines+=u*(l/2);break;case s.LINE_STRIP:t.lines+=u*(l-1);break;case s.LINE_LOOP:t.lines+=u*l;break;case s.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function FM(s,e){return s[0]-e[0]}function OM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function kM(s,e,t){const r={},a=new Float32Array(8),l=new WeakMap,f=new tn,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function h(p,m,_){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const w=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,T=w!==void 0?w.length:0;let x=l.get(m);if(x===void 0||x.count!==T){let se=function(){ge.dispose(),l.delete(m),m.removeEventListener("dispose",se)};var S=se;x!==void 0&&x.texture.dispose();const R=m.morphAttributes.position!==void 0,I=m.morphAttributes.normal!==void 0,H=m.morphAttributes.color!==void 0,O=m.morphAttributes.position||[],k=m.morphAttributes.normal||[],Z=m.morphAttributes.color||[];let b=0;R===!0&&(b=1),I===!0&&(b=2),H===!0&&(b=3);let D=m.attributes.position.count*b,Q=1;D>e.maxTextureSize&&(Q=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const J=new Float32Array(D*Q*4*T),ge=new Gg(J,D,Q,T);ge.type=_r,ge.needsUpdate=!0;const j=b*4;for(let W=0;W<T;W++){const de=O[W],X=k[W],ie=Z[W],te=D*Q*4*W;for(let B=0;B<de.count;B++){const Y=B*j;R===!0&&(f.fromBufferAttribute(de,B),J[te+Y+0]=f.x,J[te+Y+1]=f.y,J[te+Y+2]=f.z,J[te+Y+3]=0),I===!0&&(f.fromBufferAttribute(X,B),J[te+Y+4]=f.x,J[te+Y+5]=f.y,J[te+Y+6]=f.z,J[te+Y+7]=0),H===!0&&(f.fromBufferAttribute(ie,B),J[te+Y+8]=f.x,J[te+Y+9]=f.y,J[te+Y+10]=f.z,J[te+Y+11]=ie.itemSize===4?f.w:1)}}x={count:T,texture:ge,size:new Rt(D,Q)},l.set(m,x),m.addEventListener("dispose",se)}let y=0;for(let R=0;R<v.length;R++)y+=v[R];const U=m.morphTargetsRelative?1:1-y;_.getUniforms().setValue(s,"morphTargetBaseInfluence",U),_.getUniforms().setValue(s,"morphTargetInfluences",v),_.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),_.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const w=v===void 0?0:v.length;let T=r[m.id];if(T===void 0||T.length!==w){T=[];for(let I=0;I<w;I++)T[I]=[I,0];r[m.id]=T}for(let I=0;I<w;I++){const H=T[I];H[0]=I,H[1]=v[I]}T.sort(OM);for(let I=0;I<8;I++)I<w&&T[I][1]?(u[I][0]=T[I][0],u[I][1]=T[I][1]):(u[I][0]=Number.MAX_SAFE_INTEGER,u[I][1]=0);u.sort(FM);const x=m.morphAttributes.position,y=m.morphAttributes.normal;let U=0;for(let I=0;I<8;I++){const H=u[I],O=H[0],k=H[1];O!==Number.MAX_SAFE_INTEGER&&k?(x&&m.getAttribute("morphTarget"+I)!==x[O]&&m.setAttribute("morphTarget"+I,x[O]),y&&m.getAttribute("morphNormal"+I)!==y[O]&&m.setAttribute("morphNormal"+I,y[O]),a[I]=k,U+=k):(x&&m.hasAttribute("morphTarget"+I)===!0&&m.deleteAttribute("morphTarget"+I),y&&m.hasAttribute("morphNormal"+I)===!0&&m.deleteAttribute("morphNormal"+I),a[I]=0)}const R=m.morphTargetsRelative?1:1-U;_.getUniforms().setValue(s,"morphTargetBaseInfluence",R),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function BM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,m=h.geometry,_=e.get(h,m);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return _}function f(){a=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}class Jg extends ti{constructor(e,t,r,a,l,f,u,h,p,m){if(m=m!==void 0?m:Ms,m!==Ms&&m!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Ms&&(r=Xr),r===void 0&&m===Lo&&(r=Ss),super(null,a,l,f,u,h,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:On,this.minFilter=h!==void 0?h:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qg=new ti,e_=new Jg(1,1);e_.compareFunction=Bg;const t_=new Gg,n_=new Ey,i_=new $g,Hm=[],Vm=[],Gm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function Fo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Hm[a];if(l===void 0&&(l=new Float32Array(a),Hm[a]=l),e!==0){r.toArray(l,0);for(let f=1,u=0;f!==e;++f)u+=t,s[f].toArray(l,u)}return l}function Tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function vc(s,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function WM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;Xm.set(r),s.uniformMatrix2fv(this.addr,!1,Xm),wn(t,r)}}function XM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),wn(t,r)}}function jM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;Gm.set(r),s.uniformMatrix4fv(this.addr,!1,Gm),wn(t,r)}}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function ZM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function tE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?e_:Qg;t.setTexture2D(e||l,a)}function nE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||n_,a)}function iE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||i_,a)}function rE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||t_,a)}function sE(s){switch(s){case 5126:return zM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return KM;case 35669:case 35673:return $M;case 5125:return ZM;case 36294:return JM;case 36295:return QM;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return rE}}function oE(s,e){s.uniform1fv(this.addr,e)}function aE(s,e){const t=Fo(e,this.size,2);s.uniform2fv(this.addr,t)}function lE(s,e){const t=Fo(e,this.size,3);s.uniform3fv(this.addr,t)}function cE(s,e){const t=Fo(e,this.size,4);s.uniform4fv(this.addr,t)}function uE(s,e){const t=Fo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fE(s,e){const t=Fo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dE(s,e){const t=Fo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hE(s,e){s.uniform1iv(this.addr,e)}function pE(s,e){s.uniform2iv(this.addr,e)}function mE(s,e){s.uniform3iv(this.addr,e)}function gE(s,e){s.uniform4iv(this.addr,e)}function _E(s,e){s.uniform1uiv(this.addr,e)}function vE(s,e){s.uniform2uiv(this.addr,e)}function yE(s,e){s.uniform3uiv(this.addr,e)}function xE(s,e){s.uniform4uiv(this.addr,e)}function SE(s,e,t){const r=this.cache,a=e.length,l=vc(t,a);Tn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||Qg,l[f])}function ME(s,e,t){const r=this.cache,a=e.length,l=vc(t,a);Tn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||n_,l[f])}function EE(s,e,t){const r=this.cache,a=e.length,l=vc(t,a);Tn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||i_,l[f])}function TE(s,e,t){const r=this.cache,a=e.length,l=vc(t,a);Tn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||t_,l[f])}function wE(s){switch(s){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return hE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return _E;case 36294:return vE;case 36295:return yE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return TE}}class AE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=sE(t.type)}}class bE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wE(t.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const u=a[l];u.setValue(e,t[u.id],r)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function jm(s,e){s.seq.push(e),s.map[e.id]=e}function CE(s,e,t){const r=s.name,a=r.length;for(Pf.lastIndex=0;;){const l=Pf.exec(r),f=Pf.lastIndex;let u=l[1];const h=l[2]==="]",p=l[3];if(h&&(u=u|0),p===void 0||p==="["&&f+2===a){jm(t,p===void 0?new AE(u,s,e):new bE(u,s,e));break}else{let _=t.map[u];_===void 0&&(_=new RE(u),jm(t,_)),t=_}}}class tc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);CE(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const u=t[l],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function qm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const LE=37297;let PE=0;function NE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${t[f]}`)}return r.join(`
`)}function DE(s){const e=Jt.getPrimaries(Jt.workingColorSpace),t=Jt.getPrimaries(s);let r;switch(e===t?r="":e===ac&&t===oc?r="LinearDisplayP3ToLinearSRGB":e===oc&&t===ac&&(r="LinearSRGBToLinearDisplayP3"),s){case xr:case gc:return[r,"LinearTransferOETF"];case vn:case Jf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Ym(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+NE(s.getShaderSource(e),f)}else return a}function IE(s,e){const t=DE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function UE(s,e){let t;switch(e){case Pv:t="Linear";break;case Nv:t="Reinhard";break;case Dv:t="OptimizedCineon";break;case Iv:t="ACESFilmic";break;case Fv:t="AgX";break;case Uv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function FE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(To).join(`
`)}function OE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(To).join(`
`)}function kE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function BE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:u}}return t}function To(s){return s!==""}function Km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(s){return s.replace(zE,VE)}const HE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VE(s,e){let t=kt[e];if(t===void 0){const r=HE.get(e);if(r!==void 0)t=kt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(t)}const GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(s){return s.replace(GE,WE)}function WE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Jm(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gr&&(e="SHADOWMAP_TYPE_VSM"),e}function jE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ro:case Co:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function YE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hc:e="ENVMAP_BLENDING_MULTIPLY";break;case Cv:e="ENVMAP_BLENDING_MIX";break;case Lv:e="ENVMAP_BLENDING_ADD";break}return e}function KE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function $E(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,u=t.fragmentShader;const h=XE(t),p=jE(t),m=qE(t),_=YE(t),v=KE(t),S=t.isWebGL2?"":FE(t),w=OE(t),T=kE(l),x=a.createProgram();let y,U,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(To).join(`
`),y.length>0&&(y+=`
`),U=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(To).join(`
`),U.length>0&&(U+=`
`)):(y=[Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),U=[S,Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?kt.tonemapping_pars_fragment:"",t.toneMapping!==qr?UE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,IE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),f=qf(f),f=Km(f,t),f=$m(f,t),u=qf(u),u=Km(u,t),u=$m(u,t),f=Zm(f),u=Zm(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,U=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const I=R+y+f,H=R+U+u,O=qm(a,a.VERTEX_SHADER,I),k=qm(a,a.FRAGMENT_SHADER,H);a.attachShader(x,O),a.attachShader(x,k),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function Z(J){if(s.debug.checkShaderErrors){const ge=a.getProgramInfoLog(x).trim(),j=a.getShaderInfoLog(O).trim(),se=a.getShaderInfoLog(k).trim();let W=!0,de=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,O,k);else{const X=Ym(a,O,"vertex"),ie=Ym(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Program Info Log: `+ge+`
`+X+`
`+ie)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(j===""||se==="")&&(de=!1);de&&(J.diagnostics={runnable:W,programLog:ge,vertexShader:{log:j,prefix:y},fragmentShader:{log:se,prefix:U}})}a.deleteShader(O),a.deleteShader(k),b=new tc(a,x),D=BE(a,x)}let b;this.getUniforms=function(){return b===void 0&&Z(this),b};let D;this.getAttributes=function(){return D===void 0&&Z(this),D};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=a.getProgramParameter(x,LE)),Q},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=k,this}let ZE=0;class JE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new QE(e),t.set(e,r)),r}}class QE{constructor(e){this.id=ZE++,this.code=e,this.usedTimes=0}}function eT(s,e,t,r,a,l,f){const u=new Wg,h=new JE,p=[],m=a.isWebGL2,_=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return b===0?"uv":`uv${b}`}function x(b,D,Q,J,ge){const j=J.fog,se=ge.geometry,W=b.isMeshStandardMaterial?J.environment:null,de=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),X=de&&de.mapping===pc?de.image.height:null,ie=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const te=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,B=te!==void 0?te.length:0;let Y=0;se.morphAttributes.position!==void 0&&(Y=1),se.morphAttributes.normal!==void 0&&(Y=2),se.morphAttributes.color!==void 0&&(Y=3);let K,re,ue,he;if(ie){const Qt=Ki[ie];K=Qt.vertexShader,re=Qt.fragmentShader}else K=b.vertexShader,re=b.fragmentShader,h.update(b),ue=h.getVertexShaderID(b),he=h.getFragmentShaderID(b);const Se=s.getRenderTarget(),ce=ge.isInstancedMesh===!0,Me=ge.isBatchedMesh===!0,Te=!!b.map,qe=!!b.matcap,oe=!!de,Ct=!!b.aoMap,et=!!b.lightMap,at=!!b.bumpMap,Ve=!!b.normalMap,Pt=!!b.displacementMap,vt=!!b.emissiveMap,z=!!b.metalnessMap,L=!!b.roughnessMap,fe=b.anisotropy>0,Re=b.clearcoat>0,Ae=b.iridescence>0,Pe=b.sheen>0,nt=b.transmission>0,ke=fe&&!!b.anisotropyMap,We=Re&&!!b.clearcoatMap,lt=Re&&!!b.clearcoatNormalMap,Et=Re&&!!b.clearcoatRoughnessMap,we=Ae&&!!b.iridescenceMap,ft=Ae&&!!b.iridescenceThicknessMap,Nt=Pe&&!!b.sheenColorMap,Mt=Pe&&!!b.sheenRoughnessMap,ut=!!b.specularMap,Xe=!!b.specularColorMap,V=!!b.specularIntensityMap,Ue=nt&&!!b.transmissionMap,rt=nt&&!!b.thicknessMap,Ye=!!b.gradientMap,Ce=!!b.alphaMap,q=b.alphaTest>0,Ie=!!b.alphaHash,Be=!!b.extensions,gt=!!se.attributes.uv1,ht=!!se.attributes.uv2,Dt=!!se.attributes.uv3;let It=qr;return b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(It=s.toneMapping),{isWebGL2:m,shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:re,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Me,instancing:ce,instancingColor:ce&&ge.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:xr,map:Te,matcap:qe,envMap:oe,envMapMode:oe&&de.mapping,envMapCubeUVHeight:X,aoMap:Ct,lightMap:et,bumpMap:at,normalMap:Ve,displacementMap:v&&Pt,emissiveMap:vt,normalMapObjectSpace:Ve&&b.normalMapType===$v,normalMapTangentSpace:Ve&&b.normalMapType===mc,metalnessMap:z,roughnessMap:L,anisotropy:fe,anisotropyMap:ke,clearcoat:Re,clearcoatMap:We,clearcoatNormalMap:lt,clearcoatRoughnessMap:Et,iridescence:Ae,iridescenceMap:we,iridescenceThicknessMap:ft,sheen:Pe,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:Xe,specularIntensityMap:V,transmission:nt,transmissionMap:Ue,thicknessMap:rt,gradientMap:Ye,opaque:b.transparent===!1&&b.blending===Ao,alphaMap:Ce,alphaTest:q,alphaHash:Ie,combine:b.combine,mapUv:Te&&T(b.map.channel),aoMapUv:Ct&&T(b.aoMap.channel),lightMapUv:et&&T(b.lightMap.channel),bumpMapUv:at&&T(b.bumpMap.channel),normalMapUv:Ve&&T(b.normalMap.channel),displacementMapUv:Pt&&T(b.displacementMap.channel),emissiveMapUv:vt&&T(b.emissiveMap.channel),metalnessMapUv:z&&T(b.metalnessMap.channel),roughnessMapUv:L&&T(b.roughnessMap.channel),anisotropyMapUv:ke&&T(b.anisotropyMap.channel),clearcoatMapUv:We&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:lt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&T(b.sheenRoughnessMap.channel),specularMapUv:ut&&T(b.specularMap.channel),specularColorMapUv:Xe&&T(b.specularColorMap.channel),specularIntensityMapUv:V&&T(b.specularIntensityMap.channel),transmissionMapUv:Ue&&T(b.transmissionMap.channel),thicknessMapUv:rt&&T(b.thicknessMap.channel),alphaMapUv:Ce&&T(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ve||fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,vertexUv1s:gt,vertexUv2s:ht,vertexUv3s:Dt,pointsUvs:ge.isPoints===!0&&!!se.attributes.uv&&(Te||Ce),fog:!!j,useFog:b.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:ge.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&Q.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===ln,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$i,flipSided:b.side===li,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Be&&b.extensions.derivatives===!0,extensionFragDepth:Be&&b.extensions.fragDepth===!0,extensionDrawBuffers:Be&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Be&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Be&&b.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function y(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Q in b.defines)D.push(Q),D.push(b.defines[Q]);return b.isRawShaderMaterial===!1&&(U(D,b),R(D,b),D.push(s.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function U(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function R(b,D){u.disableAll(),D.isWebGL2&&u.enable(0),D.supportsVertexTextures&&u.enable(1),D.instancing&&u.enable(2),D.instancingColor&&u.enable(3),D.matcap&&u.enable(4),D.envMap&&u.enable(5),D.normalMapObjectSpace&&u.enable(6),D.normalMapTangentSpace&&u.enable(7),D.clearcoat&&u.enable(8),D.iridescence&&u.enable(9),D.alphaTest&&u.enable(10),D.vertexColors&&u.enable(11),D.vertexAlphas&&u.enable(12),D.vertexUv1s&&u.enable(13),D.vertexUv2s&&u.enable(14),D.vertexUv3s&&u.enable(15),D.vertexTangents&&u.enable(16),D.anisotropy&&u.enable(17),D.alphaHash&&u.enable(18),D.batching&&u.enable(19),b.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.skinning&&u.enable(4),D.morphTargets&&u.enable(5),D.morphNormals&&u.enable(6),D.morphColors&&u.enable(7),D.premultipliedAlpha&&u.enable(8),D.shadowMapEnabled&&u.enable(9),D.useLegacyLights&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),b.push(u.mask)}function I(b){const D=w[b.type];let Q;if(D){const J=Ki[D];Q=Fy.clone(J.uniforms)}else Q=b.uniforms;return Q}function H(b,D){let Q;for(let J=0,ge=p.length;J<ge;J++){const j=p[J];if(j.cacheKey===D){Q=j,++Q.usedTimes;break}}return Q===void 0&&(Q=new $E(s,D,b,l),p.push(Q)),Q}function O(b){if(--b.usedTimes===0){const D=p.indexOf(b);p[D]=p[p.length-1],p.pop(),b.destroy()}}function k(b){h.remove(b)}function Z(){h.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:I,acquireProgram:H,releaseProgram:O,releaseShaderCache:k,programs:p,dispose:Z}}function tT(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,u){s.get(l)[f]=u}function a(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:a}}function nT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(_,v,S,w,T,x){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:w,renderOrder:_.renderOrder,z:T,group:x},s[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=w,y.renderOrder=_.renderOrder,y.z=T,y.group=x),e++,y}function u(_,v,S,w,T,x){const y=f(_,v,S,w,T,x);S.transmission>0?r.push(y):S.transparent===!0?a.push(y):t.push(y)}function h(_,v,S,w,T,x){const y=f(_,v,S,w,T,x);S.transmission>0?r.unshift(y):S.transparent===!0?a.unshift(y):t.unshift(y)}function p(_,v){t.length>1&&t.sort(_||nT),r.length>1&&r.sort(v||Qm),a.length>1&&a.sort(v||Qm)}function m(){for(let _=e,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:u,unshift:h,finish:m,sort:p}}function iT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new eg,s.set(r,[f])):a>=l.length?(f=new eg,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function rT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Ft};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=t,t}}}function sT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let oT=0;function aT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lT(s,e){const t=new rT,r=sT(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new ee);const l=new ee,f=new Ut,u=new Ut;function h(m,_){let v=0,S=0,w=0;for(let J=0;J<9;J++)a.probe[J].set(0,0,0);let T=0,x=0,y=0,U=0,R=0,I=0,H=0,O=0,k=0,Z=0,b=0;m.sort(aT);const D=_===!0?Math.PI:1;for(let J=0,ge=m.length;J<ge;J++){const j=m[J],se=j.color,W=j.intensity,de=j.distance,X=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=se.r*W*D,S+=se.g*W*D,w+=se.b*W*D;else if(j.isLightProbe){for(let ie=0;ie<9;ie++)a.probe[ie].addScaledVector(j.sh.coefficients[ie],W);b++}else if(j.isDirectionalLight){const ie=t.get(j);if(ie.color.copy(j.color).multiplyScalar(j.intensity*D),j.castShadow){const te=j.shadow,B=r.get(j);B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,a.directionalShadow[T]=B,a.directionalShadowMap[T]=X,a.directionalShadowMatrix[T]=j.shadow.matrix,I++}a.directional[T]=ie,T++}else if(j.isSpotLight){const ie=t.get(j);ie.position.setFromMatrixPosition(j.matrixWorld),ie.color.copy(se).multiplyScalar(W*D),ie.distance=de,ie.coneCos=Math.cos(j.angle),ie.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ie.decay=j.decay,a.spot[y]=ie;const te=j.shadow;if(j.map&&(a.spotLightMap[k]=j.map,k++,te.updateMatrices(j),j.castShadow&&Z++),a.spotLightMatrix[y]=te.matrix,j.castShadow){const B=r.get(j);B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,a.spotShadow[y]=B,a.spotShadowMap[y]=X,O++}y++}else if(j.isRectAreaLight){const ie=t.get(j);ie.color.copy(se).multiplyScalar(W),ie.halfWidth.set(j.width*.5,0,0),ie.halfHeight.set(0,j.height*.5,0),a.rectArea[U]=ie,U++}else if(j.isPointLight){const ie=t.get(j);if(ie.color.copy(j.color).multiplyScalar(j.intensity*D),ie.distance=j.distance,ie.decay=j.decay,j.castShadow){const te=j.shadow,B=r.get(j);B.shadowBias=te.bias,B.shadowNormalBias=te.normalBias,B.shadowRadius=te.radius,B.shadowMapSize=te.mapSize,B.shadowCameraNear=te.camera.near,B.shadowCameraFar=te.camera.far,a.pointShadow[x]=B,a.pointShadowMap[x]=X,a.pointShadowMatrix[x]=j.shadow.matrix,H++}a.point[x]=ie,x++}else if(j.isHemisphereLight){const ie=t.get(j);ie.skyColor.copy(j.color).multiplyScalar(W*D),ie.groundColor.copy(j.groundColor).multiplyScalar(W*D),a.hemi[R]=ie,R++}}U>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=S,a.ambient[2]=w;const Q=a.hash;(Q.directionalLength!==T||Q.pointLength!==x||Q.spotLength!==y||Q.rectAreaLength!==U||Q.hemiLength!==R||Q.numDirectionalShadows!==I||Q.numPointShadows!==H||Q.numSpotShadows!==O||Q.numSpotMaps!==k||Q.numLightProbes!==b)&&(a.directional.length=T,a.spot.length=y,a.rectArea.length=U,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=H,a.pointShadowMap.length=H,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=H,a.spotLightMatrix.length=O+k-Z,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=Z,a.numLightProbes=b,Q.directionalLength=T,Q.pointLength=x,Q.spotLength=y,Q.rectAreaLength=U,Q.hemiLength=R,Q.numDirectionalShadows=I,Q.numPointShadows=H,Q.numSpotShadows=O,Q.numSpotMaps=k,Q.numLightProbes=b,a.version=oT++)}function p(m,_){let v=0,S=0,w=0,T=0,x=0;const y=_.matrixWorldInverse;for(let U=0,R=m.length;U<R;U++){const I=m[U];if(I.isDirectionalLight){const H=a.directional[v];H.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(y),v++}else if(I.isSpotLight){const H=a.spot[w];H.position.setFromMatrixPosition(I.matrixWorld),H.position.applyMatrix4(y),H.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(y),w++}else if(I.isRectAreaLight){const H=a.rectArea[T];H.position.setFromMatrixPosition(I.matrixWorld),H.position.applyMatrix4(y),u.identity(),f.copy(I.matrixWorld),f.premultiply(y),u.extractRotation(f),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),H.halfWidth.applyMatrix4(u),H.halfHeight.applyMatrix4(u),T++}else if(I.isPointLight){const H=a.point[S];H.position.setFromMatrixPosition(I.matrixWorld),H.position.applyMatrix4(y),S++}else if(I.isHemisphereLight){const H=a.hemi[x];H.direction.setFromMatrixPosition(I.matrixWorld),H.direction.transformDirection(y),x++}}}return{setup:h,setupView:p,state:a}}function tg(s,e){const t=new lT(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function f(_){r.push(_)}function u(_){a.push(_)}function h(_){t.setup(r,_)}function p(_){t.setupView(r,_)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:u}}function cT(s,e){let t=new WeakMap;function r(l,f=0){const u=t.get(l);let h;return u===void 0?(h=new tg(s,e),t.set(l,[h])):f>=u.length?(h=new tg(s,e),u.push(h)):h=u[f],h}function a(){t=new WeakMap}return{get:r,dispose:a}}class uT extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fT extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pT(s,e,t){let r=new ed;const a=new Rt,l=new Rt,f=new tn,u=new uT({depthPacking:Kv}),h=new fT,p={},m=t.maxTextureSize,_={[yr]:li,[li]:yr,[$i]:$i},v=new As({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:dT,fragmentShader:hT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new _i;w.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new kn(w,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cg;let y=this.type;this.render=function(O,k,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),D=s.getActiveCubeFace(),Q=s.getActiveMipmapLevel(),J=s.state;J.setBlending(jr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ge=y!==gr&&this.type===gr,j=y===gr&&this.type!==gr;for(let se=0,W=O.length;se<W;se++){const de=O[se],X=de.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const ie=X.getFrameExtents();if(a.multiply(ie),l.copy(X.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ie.x),a.x=l.x*ie.x,X.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ie.y),a.y=l.y*ie.y,X.mapSize.y=l.y)),X.map===null||ge===!0||j===!0){const B=this.type!==gr?{minFilter:On,magFilter:On}:{};X.map!==null&&X.map.dispose(),X.map=new ws(a.x,a.y,B),X.map.texture.name=de.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const te=X.getViewportCount();for(let B=0;B<te;B++){const Y=X.getViewport(B);f.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),J.viewport(f),X.updateMatrices(de,B),r=X.getFrustum(),I(k,Z,X.camera,de,this.type)}X.isPointLightShadow!==!0&&this.type===gr&&U(X,Z),X.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(b,D,Q)};function U(O,k){const Z=e.update(T);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ws(a.x,a.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,Z,v,T,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,Z,S,T,null)}function R(O,k,Z,b){let D=null;const Q=Z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(Q!==void 0)D=Q;else if(D=Z.isPointLight===!0?h:u,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const J=D.uuid,ge=k.uuid;let j=p[J];j===void 0&&(j={},p[J]=j);let se=j[ge];se===void 0&&(se=D.clone(),j[ge]=se,k.addEventListener("dispose",H)),D=se}if(D.visible=k.visible,D.wireframe=k.wireframe,b===gr?D.side=k.shadowSide!==null?k.shadowSide:k.side:D.side=k.shadowSide!==null?k.shadowSide:_[k.side],D.alphaMap=k.alphaMap,D.alphaTest=k.alphaTest,D.map=k.map,D.clipShadows=k.clipShadows,D.clippingPlanes=k.clippingPlanes,D.clipIntersection=k.clipIntersection,D.displacementMap=k.displacementMap,D.displacementScale=k.displacementScale,D.displacementBias=k.displacementBias,D.wireframeLinewidth=k.wireframeLinewidth,D.linewidth=k.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const J=s.properties.get(D);J.light=Z}return D}function I(O,k,Z,b,D){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===gr)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,O.matrixWorld);const ge=e.update(O),j=O.material;if(Array.isArray(j)){const se=ge.groups;for(let W=0,de=se.length;W<de;W++){const X=se[W],ie=j[X.materialIndex];if(ie&&ie.visible){const te=R(O,ie,b,D);O.onBeforeShadow(s,O,k,Z,ge,te,X),s.renderBufferDirect(Z,null,ge,te,O,X),O.onAfterShadow(s,O,k,Z,ge,te,X)}}}else if(j.visible){const se=R(O,j,b,D);O.onBeforeShadow(s,O,k,Z,ge,se,null),s.renderBufferDirect(Z,null,ge,se,O,null),O.onAfterShadow(s,O,k,Z,ge,se,null)}}const J=O.children;for(let ge=0,j=J.length;ge<j;ge++)I(J[ge],k,Z,b,D)}function H(O){O.target.removeEventListener("dispose",H);for(const Z in p){const b=p[Z],D=O.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function mT(s,e,t){const r=t.isWebGL2;function a(){let q=!1;const Ie=new tn;let Be=null;const gt=new tn(0,0,0,0);return{setMask:function(ht){Be!==ht&&!q&&(s.colorMask(ht,ht,ht,ht),Be=ht)},setLocked:function(ht){q=ht},setClear:function(ht,Dt,It,Bt,Qt){Qt===!0&&(ht*=Bt,Dt*=Bt,It*=Bt),Ie.set(ht,Dt,It,Bt),gt.equals(Ie)===!1&&(s.clearColor(ht,Dt,It,Bt),gt.copy(Ie))},reset:function(){q=!1,Be=null,gt.set(-1,0,0,0)}}}function l(){let q=!1,Ie=null,Be=null,gt=null;return{setTest:function(ht){ht?Me(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(ht){Ie!==ht&&!q&&(s.depthMask(ht),Ie=ht)},setFunc:function(ht){if(Be!==ht){switch(ht){case Mv:s.depthFunc(s.NEVER);break;case Ev:s.depthFunc(s.ALWAYS);break;case Tv:s.depthFunc(s.LESS);break;case nc:s.depthFunc(s.LEQUAL);break;case wv:s.depthFunc(s.EQUAL);break;case Av:s.depthFunc(s.GEQUAL);break;case bv:s.depthFunc(s.GREATER);break;case Rv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ht}},setLocked:function(ht){q=ht},setClear:function(ht){gt!==ht&&(s.clearDepth(ht),gt=ht)},reset:function(){q=!1,Ie=null,Be=null,gt=null}}}function f(){let q=!1,Ie=null,Be=null,gt=null,ht=null,Dt=null,It=null,Bt=null,Qt=null;return{setTest:function(Ot){q||(Ot?Me(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ot){Ie!==Ot&&!q&&(s.stencilMask(Ot),Ie=Ot)},setFunc:function(Ot,nn,An){(Be!==Ot||gt!==nn||ht!==An)&&(s.stencilFunc(Ot,nn,An),Be=Ot,gt=nn,ht=An)},setOp:function(Ot,nn,An){(Dt!==Ot||It!==nn||Bt!==An)&&(s.stencilOp(Ot,nn,An),Dt=Ot,It=nn,Bt=An)},setLocked:function(Ot){q=Ot},setClear:function(Ot){Qt!==Ot&&(s.clearStencil(Ot),Qt=Ot)},reset:function(){q=!1,Ie=null,Be=null,gt=null,ht=null,Dt=null,It=null,Bt=null,Qt=null}}}const u=new a,h=new l,p=new f,m=new WeakMap,_=new WeakMap;let v={},S={},w=new WeakMap,T=[],x=null,y=!1,U=null,R=null,I=null,H=null,O=null,k=null,Z=null,b=new Ft(0,0,0),D=0,Q=!1,J=null,ge=null,j=null,se=null,W=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=ie>=1):te.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=ie>=2);let B=null,Y={};const K=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),ue=new tn().fromArray(K),he=new tn().fromArray(re);function Se(q,Ie,Be,gt){const ht=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(q,Dt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<Be;It++)r&&(q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY)?s.texImage3D(Ie,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(Ie+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return Dt}const ce={};ce[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ce[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Me(s.DEPTH_TEST),h.setFunc(nc),vt(!1),z(Np),Me(s.CULL_FACE),Ve(jr);function Me(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function Te(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function qe(q,Ie){return S[q]!==Ie?(s.bindFramebuffer(q,Ie),S[q]=Ie,r&&(q===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Ie),q===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function oe(q,Ie){let Be=T,gt=!1;if(q)if(Be=w.get(Ie),Be===void 0&&(Be=[],w.set(Ie,Be)),q.isWebGLMultipleRenderTargets){const ht=q.texture;if(Be.length!==ht.length||Be[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,It=ht.length;Dt<It;Dt++)Be[Dt]=s.COLOR_ATTACHMENT0+Dt;Be.length=ht.length,gt=!0}}else Be[0]!==s.COLOR_ATTACHMENT0&&(Be[0]=s.COLOR_ATTACHMENT0,gt=!0);else Be[0]!==s.BACK&&(Be[0]=s.BACK,gt=!0);gt&&(t.isWebGL2?s.drawBuffers(Be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Be))}function Ct(q){return x!==q?(s.useProgram(q),x=q,!0):!1}const et={[vs]:s.FUNC_ADD,[av]:s.FUNC_SUBTRACT,[lv]:s.FUNC_REVERSE_SUBTRACT};if(r)et[Fp]=s.MIN,et[Op]=s.MAX;else{const q=e.get("EXT_blend_minmax");q!==null&&(et[Fp]=q.MIN_EXT,et[Op]=q.MAX_EXT)}const at={[cv]:s.ZERO,[uv]:s.ONE,[fv]:s.SRC_COLOR,[zf]:s.SRC_ALPHA,[_v]:s.SRC_ALPHA_SATURATE,[mv]:s.DST_COLOR,[hv]:s.DST_ALPHA,[dv]:s.ONE_MINUS_SRC_COLOR,[Hf]:s.ONE_MINUS_SRC_ALPHA,[gv]:s.ONE_MINUS_DST_COLOR,[pv]:s.ONE_MINUS_DST_ALPHA,[vv]:s.CONSTANT_COLOR,[yv]:s.ONE_MINUS_CONSTANT_COLOR,[xv]:s.CONSTANT_ALPHA,[Sv]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(q,Ie,Be,gt,ht,Dt,It,Bt,Qt,Ot){if(q===jr){y===!0&&(Te(s.BLEND),y=!1);return}if(y===!1&&(Me(s.BLEND),y=!0),q!==ov){if(q!==U||Ot!==Q){if((R!==vs||O!==vs)&&(s.blendEquation(s.FUNC_ADD),R=vs,O=vs),Ot)switch(q){case Ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.ONE,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Up:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}I=null,H=null,k=null,Z=null,b.set(0,0,0),D=0,U=q,Q=Ot}return}ht=ht||Ie,Dt=Dt||Be,It=It||gt,(Ie!==R||ht!==O)&&(s.blendEquationSeparate(et[Ie],et[ht]),R=Ie,O=ht),(Be!==I||gt!==H||Dt!==k||It!==Z)&&(s.blendFuncSeparate(at[Be],at[gt],at[Dt],at[It]),I=Be,H=gt,k=Dt,Z=It),(Bt.equals(b)===!1||Qt!==D)&&(s.blendColor(Bt.r,Bt.g,Bt.b,Qt),b.copy(Bt),D=Qt),U=q,Q=!1}function Pt(q,Ie){q.side===$i?Te(s.CULL_FACE):Me(s.CULL_FACE);let Be=q.side===li;Ie&&(Be=!Be),vt(Be),q.blending===Ao&&q.transparent===!1?Ve(jr):Ve(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),u.setMask(q.colorWrite);const gt=q.stencilWrite;p.setTest(gt),gt&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),fe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(q){J!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),J=q)}function z(q){q!==iv?(Me(s.CULL_FACE),q!==ge&&(q===Np?s.cullFace(s.BACK):q===rv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),ge=q}function L(q){q!==j&&(X&&s.lineWidth(q),j=q)}function fe(q,Ie,Be){q?(Me(s.POLYGON_OFFSET_FILL),(se!==Ie||W!==Be)&&(s.polygonOffset(Ie,Be),se=Ie,W=Be)):Te(s.POLYGON_OFFSET_FILL)}function Re(q){q?Me(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function Ae(q){q===void 0&&(q=s.TEXTURE0+de-1),B!==q&&(s.activeTexture(q),B=q)}function Pe(q,Ie,Be){Be===void 0&&(B===null?Be=s.TEXTURE0+de-1:Be=B);let gt=Y[Be];gt===void 0&&(gt={type:void 0,texture:void 0},Y[Be]=gt),(gt.type!==q||gt.texture!==Ie)&&(B!==Be&&(s.activeTexture(Be),B=Be),s.bindTexture(q,Ie||ce[q]),gt.type=q,gt.texture=Ie)}function nt(){const q=Y[B];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ke(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Nt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function V(q){ue.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ue.copy(q))}function Ue(q){he.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),he.copy(q))}function rt(q,Ie){let Be=_.get(Ie);Be===void 0&&(Be=new WeakMap,_.set(Ie,Be));let gt=Be.get(q);gt===void 0&&(gt=s.getUniformBlockIndex(Ie,q.name),Be.set(q,gt))}function Ye(q,Ie){const gt=_.get(Ie).get(q);m.get(Ie)!==gt&&(s.uniformBlockBinding(Ie,gt,q.__bindingPointIndex),m.set(Ie,gt))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},B=null,Y={},S={},w=new WeakMap,T=[],x=null,y=!1,U=null,R=null,I=null,H=null,O=null,k=null,Z=null,b=new Ft(0,0,0),D=0,Q=!1,J=null,ge=null,j=null,se=null,W=null,ue.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:Me,disable:Te,bindFramebuffer:qe,drawBuffers:oe,useProgram:Ct,setBlending:Ve,setMaterial:Pt,setFlipSided:vt,setCullFace:z,setLineWidth:L,setPolygonOffset:fe,setScissorTest:Re,activeTexture:Ae,bindTexture:Pe,unbindTexture:nt,compressedTexImage2D:ke,compressedTexImage3D:We,texImage2D:ut,texImage3D:Xe,updateUBOMapping:rt,uniformBlockBinding:Ye,texStorage2D:Nt,texStorage3D:Mt,texSubImage2D:lt,texSubImage3D:Et,compressedTexSubImage2D:we,compressedTexSubImage3D:ft,scissor:V,viewport:Ue,reset:Ce}}function gT(s,e,t,r,a,l,f){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(z,L){return S?new OffscreenCanvas(z,L):Ta("canvas")}function T(z,L,fe,Re){let Ae=1;if((z.width>Re||z.height>Re)&&(Ae=Re/Math.max(z.width,z.height)),Ae<1||L===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Pe=L?cc:Math.floor,nt=Pe(Ae*z.width),ke=Pe(Ae*z.height);_===void 0&&(_=w(nt,ke));const We=fe?w(nt,ke):_;return We.width=nt,We.height=ke,We.getContext("2d").drawImage(z,0,0,nt,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+nt+"x"+ke+")."),We}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function x(z){return jf(z.width)&&jf(z.height)}function y(z){return u?!1:z.wrapS!==ei||z.wrapT!==ei||z.minFilter!==On&&z.minFilter!==Qn}function U(z,L){return z.generateMipmaps&&L&&z.minFilter!==On&&z.minFilter!==Qn}function R(z){s.generateMipmap(z)}function I(z,L,fe,Re,Ae=!1){if(u===!1)return L;if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Pe=L;if(L===s.RED&&(fe===s.FLOAT&&(Pe=s.R32F),fe===s.HALF_FLOAT&&(Pe=s.R16F),fe===s.UNSIGNED_BYTE&&(Pe=s.R8)),L===s.RED_INTEGER&&(fe===s.UNSIGNED_BYTE&&(Pe=s.R8UI),fe===s.UNSIGNED_SHORT&&(Pe=s.R16UI),fe===s.UNSIGNED_INT&&(Pe=s.R32UI),fe===s.BYTE&&(Pe=s.R8I),fe===s.SHORT&&(Pe=s.R16I),fe===s.INT&&(Pe=s.R32I)),L===s.RG&&(fe===s.FLOAT&&(Pe=s.RG32F),fe===s.HALF_FLOAT&&(Pe=s.RG16F),fe===s.UNSIGNED_BYTE&&(Pe=s.RG8)),L===s.RGBA){const nt=Ae?sc:Jt.getTransfer(Re);fe===s.FLOAT&&(Pe=s.RGBA32F),fe===s.HALF_FLOAT&&(Pe=s.RGBA16F),fe===s.UNSIGNED_BYTE&&(Pe=nt===ln?s.SRGB8_ALPHA8:s.RGBA8),fe===s.UNSIGNED_SHORT_4_4_4_4&&(Pe=s.RGBA4),fe===s.UNSIGNED_SHORT_5_5_5_1&&(Pe=s.RGB5_A1)}return(Pe===s.R16F||Pe===s.R32F||Pe===s.RG16F||Pe===s.RG32F||Pe===s.RGBA16F||Pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Pe}function H(z,L,fe){return U(z,fe)===!0||z.isFramebufferTexture&&z.minFilter!==On&&z.minFilter!==Qn?Math.log2(Math.max(L.width,L.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?L.mipmaps.length:1}function O(z){return z===On||z===Bp||z===nf?s.NEAREST:s.LINEAR}function k(z){const L=z.target;L.removeEventListener("dispose",k),b(L),L.isVideoTexture&&m.delete(L)}function Z(z){const L=z.target;L.removeEventListener("dispose",Z),Q(L)}function b(z){const L=r.get(z);if(L.__webglInit===void 0)return;const fe=z.source,Re=v.get(fe);if(Re){const Ae=Re[L.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&D(z),Object.keys(Re).length===0&&v.delete(fe)}r.remove(z)}function D(z){const L=r.get(z);s.deleteTexture(L.__webglTexture);const fe=z.source,Re=v.get(fe);delete Re[L.__cacheKey],f.memory.textures--}function Q(z){const L=z.texture,fe=r.get(z),Re=r.get(L);if(Re.__webglTexture!==void 0&&(s.deleteTexture(Re.__webglTexture),f.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++){if(Array.isArray(fe.__webglFramebuffer[Ae]))for(let Pe=0;Pe<fe.__webglFramebuffer[Ae].length;Pe++)s.deleteFramebuffer(fe.__webglFramebuffer[Ae][Pe]);else s.deleteFramebuffer(fe.__webglFramebuffer[Ae]);fe.__webglDepthbuffer&&s.deleteRenderbuffer(fe.__webglDepthbuffer[Ae])}else{if(Array.isArray(fe.__webglFramebuffer))for(let Ae=0;Ae<fe.__webglFramebuffer.length;Ae++)s.deleteFramebuffer(fe.__webglFramebuffer[Ae]);else s.deleteFramebuffer(fe.__webglFramebuffer);if(fe.__webglDepthbuffer&&s.deleteRenderbuffer(fe.__webglDepthbuffer),fe.__webglMultisampledFramebuffer&&s.deleteFramebuffer(fe.__webglMultisampledFramebuffer),fe.__webglColorRenderbuffer)for(let Ae=0;Ae<fe.__webglColorRenderbuffer.length;Ae++)fe.__webglColorRenderbuffer[Ae]&&s.deleteRenderbuffer(fe.__webglColorRenderbuffer[Ae]);fe.__webglDepthRenderbuffer&&s.deleteRenderbuffer(fe.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let Ae=0,Pe=L.length;Ae<Pe;Ae++){const nt=r.get(L[Ae]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),f.memory.textures--),r.remove(L[Ae])}r.remove(L),r.remove(z)}let J=0;function ge(){J=0}function j(){const z=J;return z>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+a.maxTextures),J+=1,z}function se(z){const L=[];return L.push(z.wrapS),L.push(z.wrapT),L.push(z.wrapR||0),L.push(z.magFilter),L.push(z.minFilter),L.push(z.anisotropy),L.push(z.internalFormat),L.push(z.format),L.push(z.type),L.push(z.generateMipmaps),L.push(z.premultiplyAlpha),L.push(z.flipY),L.push(z.unpackAlignment),L.push(z.colorSpace),L.join()}function W(z,L){const fe=r.get(z);if(z.isVideoTexture&&Pt(z),z.isRenderTargetTexture===!1&&z.version>0&&fe.__version!==z.version){const Re=z.image;if(Re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(fe,z,L);return}}t.bindTexture(s.TEXTURE_2D,fe.__webglTexture,s.TEXTURE0+L)}function de(z,L){const fe=r.get(z);if(z.version>0&&fe.__version!==z.version){ue(fe,z,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,fe.__webglTexture,s.TEXTURE0+L)}function X(z,L){const fe=r.get(z);if(z.version>0&&fe.__version!==z.version){ue(fe,z,L);return}t.bindTexture(s.TEXTURE_3D,fe.__webglTexture,s.TEXTURE0+L)}function ie(z,L){const fe=r.get(z);if(z.version>0&&fe.__version!==z.version){he(fe,z,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture,s.TEXTURE0+L)}const te={[xs]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[Wf]:s.MIRRORED_REPEAT},B={[On]:s.NEAREST,[Bp]:s.NEAREST_MIPMAP_NEAREST,[nf]:s.NEAREST_MIPMAP_LINEAR,[Qn]:s.LINEAR,[kv]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},Y={[Zv]:s.NEVER,[iy]:s.ALWAYS,[Jv]:s.LESS,[Bg]:s.LEQUAL,[Qv]:s.EQUAL,[ny]:s.GEQUAL,[ey]:s.GREATER,[ty]:s.NOTEQUAL};function K(z,L,fe){if(fe?(s.texParameteri(z,s.TEXTURE_WRAP_S,te[L.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,te[L.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,te[L.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,B[L.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,B[L.minFilter])):(s.texParameteri(z,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(z,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(L.wrapS!==ei||L.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(z,s.TEXTURE_MAG_FILTER,O(L.magFilter)),s.texParameteri(z,s.TEXTURE_MIN_FILTER,O(L.minFilter)),L.minFilter!==On&&L.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,Y[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Re=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===On||L.minFilter!==nf&&L.minFilter!==Ts||L.type===_r&&e.has("OES_texture_float_linear")===!1||u===!1&&L.type===Ea&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||r.get(L).__currentAnisotropy)&&(s.texParameterf(z,Re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,a.getMaxAnisotropy())),r.get(L).__currentAnisotropy=L.anisotropy)}}function re(z,L){let fe=!1;z.__webglInit===void 0&&(z.__webglInit=!0,L.addEventListener("dispose",k));const Re=L.source;let Ae=v.get(Re);Ae===void 0&&(Ae={},v.set(Re,Ae));const Pe=se(L);if(Pe!==z.__cacheKey){Ae[Pe]===void 0&&(Ae[Pe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,fe=!0),Ae[Pe].usedTimes++;const nt=Ae[z.__cacheKey];nt!==void 0&&(Ae[z.__cacheKey].usedTimes--,nt.usedTimes===0&&D(L)),z.__cacheKey=Pe,z.__webglTexture=Ae[Pe].texture}return fe}function ue(z,L,fe){let Re=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(Re=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(Re=s.TEXTURE_3D);const Ae=re(z,L),Pe=L.source;t.bindTexture(Re,z.__webglTexture,s.TEXTURE0+fe);const nt=r.get(Pe);if(Pe.version!==nt.__version||Ae===!0){t.activeTexture(s.TEXTURE0+fe);const ke=Jt.getPrimaries(Jt.workingColorSpace),We=L.colorSpace===bi?null:Jt.getPrimaries(L.colorSpace),lt=L.colorSpace===bi||ke===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Et=y(L)&&x(L.image)===!1;let we=T(L.image,Et,!1,a.maxTextureSize);we=vt(L,we);const ft=x(we)||u,Nt=l.convert(L.format,L.colorSpace);let Mt=l.convert(L.type),ut=I(L.internalFormat,Nt,Mt,L.colorSpace,L.isVideoTexture);K(Re,L,ft);let Xe;const V=L.mipmaps,Ue=u&&L.isVideoTexture!==!0&&ut!==Og,rt=nt.__version===void 0||Ae===!0,Ye=H(L,we,ft);if(L.isDepthTexture)ut=s.DEPTH_COMPONENT,u?L.type===_r?ut=s.DEPTH_COMPONENT32F:L.type===Xr?ut=s.DEPTH_COMPONENT24:L.type===Ss?ut=s.DEPTH24_STENCIL8:ut=s.DEPTH_COMPONENT16:L.type===_r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Ms&&ut===s.DEPTH_COMPONENT&&L.type!==Zf&&L.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Xr,Mt=l.convert(L.type)),L.format===Lo&&ut===s.DEPTH_COMPONENT&&(ut=s.DEPTH_STENCIL,L.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ss,Mt=l.convert(L.type))),rt&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,ut,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,ut,we.width,we.height,0,Nt,Mt,null));else if(L.isDataTexture)if(V.length>0&&ft){Ue&&rt&&t.texStorage2D(s.TEXTURE_2D,Ye,ut,V[0].width,V[0].height);for(let Ce=0,q=V.length;Ce<q;Ce++)Xe=V[Ce],Ue?t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,Xe.width,Xe.height,Nt,Mt,Xe.data):t.texImage2D(s.TEXTURE_2D,Ce,ut,Xe.width,Xe.height,0,Nt,Mt,Xe.data);L.generateMipmaps=!1}else Ue?(rt&&t.texStorage2D(s.TEXTURE_2D,Ye,ut,we.width,we.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,Nt,Mt,we.data)):t.texImage2D(s.TEXTURE_2D,0,ut,we.width,we.height,0,Nt,Mt,we.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Ue&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,ut,V[0].width,V[0].height,we.depth);for(let Ce=0,q=V.length;Ce<q;Ce++)Xe=V[Ce],L.format!==Ai?Nt!==null?Ue?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,Xe.width,Xe.height,we.depth,Nt,Xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ce,ut,Xe.width,Xe.height,we.depth,0,Xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,Xe.width,Xe.height,we.depth,Nt,Mt,Xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ce,ut,Xe.width,Xe.height,we.depth,0,Nt,Mt,Xe.data)}else{Ue&&rt&&t.texStorage2D(s.TEXTURE_2D,Ye,ut,V[0].width,V[0].height);for(let Ce=0,q=V.length;Ce<q;Ce++)Xe=V[Ce],L.format!==Ai?Nt!==null?Ue?t.compressedTexSubImage2D(s.TEXTURE_2D,Ce,0,0,Xe.width,Xe.height,Nt,Xe.data):t.compressedTexImage2D(s.TEXTURE_2D,Ce,ut,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,Xe.width,Xe.height,Nt,Mt,Xe.data):t.texImage2D(s.TEXTURE_2D,Ce,ut,Xe.width,Xe.height,0,Nt,Mt,Xe.data)}else if(L.isDataArrayTexture)Ue?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,ut,we.width,we.height,we.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Nt,Mt,we.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,we.width,we.height,we.depth,0,Nt,Mt,we.data);else if(L.isData3DTexture)Ue?(rt&&t.texStorage3D(s.TEXTURE_3D,Ye,ut,we.width,we.height,we.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Nt,Mt,we.data)):t.texImage3D(s.TEXTURE_3D,0,ut,we.width,we.height,we.depth,0,Nt,Mt,we.data);else if(L.isFramebufferTexture){if(rt)if(Ue)t.texStorage2D(s.TEXTURE_2D,Ye,ut,we.width,we.height);else{let Ce=we.width,q=we.height;for(let Ie=0;Ie<Ye;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,ut,Ce,q,0,Nt,Mt,null),Ce>>=1,q>>=1}}else if(V.length>0&&ft){Ue&&rt&&t.texStorage2D(s.TEXTURE_2D,Ye,ut,V[0].width,V[0].height);for(let Ce=0,q=V.length;Ce<q;Ce++)Xe=V[Ce],Ue?t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,Nt,Mt,Xe):t.texImage2D(s.TEXTURE_2D,Ce,ut,Nt,Mt,Xe);L.generateMipmaps=!1}else Ue?(rt&&t.texStorage2D(s.TEXTURE_2D,Ye,ut,we.width,we.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Mt,we)):t.texImage2D(s.TEXTURE_2D,0,ut,Nt,Mt,we);U(L,ft)&&R(Re),nt.__version=Pe.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function he(z,L,fe){if(L.image.length!==6)return;const Re=re(z,L),Ae=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+fe);const Pe=r.get(Ae);if(Ae.version!==Pe.__version||Re===!0){t.activeTexture(s.TEXTURE0+fe);const nt=Jt.getPrimaries(Jt.workingColorSpace),ke=L.colorSpace===bi?null:Jt.getPrimaries(L.colorSpace),We=L.colorSpace===bi||nt===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const lt=L.isCompressedTexture||L.image[0].isCompressedTexture,Et=L.image[0]&&L.image[0].isDataTexture,we=[];for(let Ce=0;Ce<6;Ce++)!lt&&!Et?we[Ce]=T(L.image[Ce],!1,!0,a.maxCubemapSize):we[Ce]=Et?L.image[Ce].image:L.image[Ce],we[Ce]=vt(L,we[Ce]);const ft=we[0],Nt=x(ft)||u,Mt=l.convert(L.format,L.colorSpace),ut=l.convert(L.type),Xe=I(L.internalFormat,Mt,ut,L.colorSpace),V=u&&L.isVideoTexture!==!0,Ue=Pe.__version===void 0||Re===!0;let rt=H(L,ft,Nt);K(s.TEXTURE_CUBE_MAP,L,Nt);let Ye;if(lt){V&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Xe,ft.width,ft.height);for(let Ce=0;Ce<6;Ce++){Ye=we[Ce].mipmaps;for(let q=0;q<Ye.length;q++){const Ie=Ye[q];L.format!==Ai?Mt!==null?V?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q,0,0,Ie.width,Ie.height,Mt,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q,Xe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q,0,0,Ie.width,Ie.height,Mt,ut,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q,Xe,Ie.width,Ie.height,0,Mt,ut,Ie.data)}}}else{Ye=L.mipmaps,V&&Ue&&(Ye.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Xe,we[0].width,we[0].height));for(let Ce=0;Ce<6;Ce++)if(Et){V?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,we[Ce].width,we[Ce].height,Mt,ut,we[Ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Xe,we[Ce].width,we[Ce].height,0,Mt,ut,we[Ce].data);for(let q=0;q<Ye.length;q++){const Be=Ye[q].image[Ce].image;V?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q+1,0,0,Be.width,Be.height,Mt,ut,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q+1,Xe,Be.width,Be.height,0,Mt,ut,Be.data)}}else{V?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Mt,ut,we[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Xe,Mt,ut,we[Ce]);for(let q=0;q<Ye.length;q++){const Ie=Ye[q];V?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q+1,0,0,Mt,ut,Ie.image[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,q+1,Xe,Mt,ut,Ie.image[Ce])}}}U(L,Nt)&&R(s.TEXTURE_CUBE_MAP),Pe.__version=Ae.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version}function Se(z,L,fe,Re,Ae,Pe){const nt=l.convert(fe.format,fe.colorSpace),ke=l.convert(fe.type),We=I(fe.internalFormat,nt,ke,fe.colorSpace);if(!r.get(L).__hasExternalTextures){const Et=Math.max(1,L.width>>Pe),we=Math.max(1,L.height>>Pe);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?t.texImage3D(Ae,Pe,We,Et,we,L.depth,0,nt,ke,null):t.texImage2D(Ae,Pe,We,Et,we,0,nt,ke,null)}t.bindFramebuffer(s.FRAMEBUFFER,z),Ve(L)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,Ae,r.get(fe).__webglTexture,0,at(L)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Re,Ae,r.get(fe).__webglTexture,Pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(z,L,fe){if(s.bindRenderbuffer(s.RENDERBUFFER,z),L.depthBuffer&&!L.stencilBuffer){let Re=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(fe||Ve(L)){const Ae=L.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===_r?Re=s.DEPTH_COMPONENT32F:Ae.type===Xr&&(Re=s.DEPTH_COMPONENT24));const Pe=at(L);Ve(L)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,Re,L.width,L.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Re,L.width,L.height)}else s.renderbufferStorage(s.RENDERBUFFER,Re,L.width,L.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,z)}else if(L.depthBuffer&&L.stencilBuffer){const Re=at(L);fe&&Ve(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,s.DEPTH24_STENCIL8,L.width,L.height):Ve(L)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,s.DEPTH24_STENCIL8,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,z)}else{const Re=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Ae=0;Ae<Re.length;Ae++){const Pe=Re[Ae],nt=l.convert(Pe.format,Pe.colorSpace),ke=l.convert(Pe.type),We=I(Pe.internalFormat,nt,ke,Pe.colorSpace),lt=at(L);fe&&Ve(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,We,L.width,L.height):Ve(L)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,We,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,We,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,z),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),W(L.depthTexture,0);const Re=r.get(L.depthTexture).__webglTexture,Ae=at(L);if(L.depthTexture.format===Ms)Ve(L)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Re,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Re,0);else if(L.depthTexture.format===Lo)Ve(L)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Re,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Re,0);else throw new Error("Unknown depthTexture format")}function Te(z){const L=r.get(z),fe=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!L.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");Me(L.__webglFramebuffer,z)}else if(fe){L.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[Re]),L.__webglDepthbuffer[Re]=s.createRenderbuffer(),ce(L.__webglDepthbuffer[Re],z,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),ce(L.__webglDepthbuffer,z,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(z,L,fe){const Re=r.get(z);L!==void 0&&Se(Re.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),fe!==void 0&&Te(z)}function oe(z){const L=z.texture,fe=r.get(z),Re=r.get(L);z.addEventListener("dispose",Z),z.isWebGLMultipleRenderTargets!==!0&&(Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture()),Re.__version=L.version,f.memory.textures++);const Ae=z.isWebGLCubeRenderTarget===!0,Pe=z.isWebGLMultipleRenderTargets===!0,nt=x(z)||u;if(Ae){fe.__webglFramebuffer=[];for(let ke=0;ke<6;ke++)if(u&&L.mipmaps&&L.mipmaps.length>0){fe.__webglFramebuffer[ke]=[];for(let We=0;We<L.mipmaps.length;We++)fe.__webglFramebuffer[ke][We]=s.createFramebuffer()}else fe.__webglFramebuffer[ke]=s.createFramebuffer()}else{if(u&&L.mipmaps&&L.mipmaps.length>0){fe.__webglFramebuffer=[];for(let ke=0;ke<L.mipmaps.length;ke++)fe.__webglFramebuffer[ke]=s.createFramebuffer()}else fe.__webglFramebuffer=s.createFramebuffer();if(Pe)if(a.drawBuffers){const ke=z.texture;for(let We=0,lt=ke.length;We<lt;We++){const Et=r.get(ke[We]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&z.samples>0&&Ve(z)===!1){const ke=Pe?L:[L];fe.__webglMultisampledFramebuffer=s.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let We=0;We<ke.length;We++){const lt=ke[We];fe.__webglColorRenderbuffer[We]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,fe.__webglColorRenderbuffer[We]);const Et=l.convert(lt.format,lt.colorSpace),we=l.convert(lt.type),ft=I(lt.internalFormat,Et,we,lt.colorSpace,z.isXRRenderTarget===!0),Nt=at(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,ft,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,fe.__webglColorRenderbuffer[We])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(fe.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(fe.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),K(s.TEXTURE_CUBE_MAP,L,nt);for(let ke=0;ke<6;ke++)if(u&&L.mipmaps&&L.mipmaps.length>0)for(let We=0;We<L.mipmaps.length;We++)Se(fe.__webglFramebuffer[ke][We],z,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ke,We);else Se(fe.__webglFramebuffer[ke],z,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0);U(L,nt)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){const ke=z.texture;for(let We=0,lt=ke.length;We<lt;We++){const Et=ke[We],we=r.get(Et);t.bindTexture(s.TEXTURE_2D,we.__webglTexture),K(s.TEXTURE_2D,Et,nt),Se(fe.__webglFramebuffer,z,Et,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,0),U(Et,nt)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ke=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(u?ke=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ke,Re.__webglTexture),K(ke,L,nt),u&&L.mipmaps&&L.mipmaps.length>0)for(let We=0;We<L.mipmaps.length;We++)Se(fe.__webglFramebuffer[We],z,L,s.COLOR_ATTACHMENT0,ke,We);else Se(fe.__webglFramebuffer,z,L,s.COLOR_ATTACHMENT0,ke,0);U(L,nt)&&R(ke),t.unbindTexture()}z.depthBuffer&&Te(z)}function Ct(z){const L=x(z)||u,fe=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let Re=0,Ae=fe.length;Re<Ae;Re++){const Pe=fe[Re];if(U(Pe,L)){const nt=z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ke=r.get(Pe).__webglTexture;t.bindTexture(nt,ke),R(nt),t.unbindTexture()}}}function et(z){if(u&&z.samples>0&&Ve(z)===!1){const L=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],fe=z.width,Re=z.height;let Ae=s.COLOR_BUFFER_BIT;const Pe=[],nt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(z),We=z.isWebGLMultipleRenderTargets===!0;if(We)for(let lt=0;lt<L.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let lt=0;lt<L.length;lt++){Pe.push(s.COLOR_ATTACHMENT0+lt),z.depthBuffer&&Pe.push(nt);const Et=ke.__ignoreDepthValues!==void 0?ke.__ignoreDepthValues:!1;if(Et===!1&&(z.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),We&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[lt]),Et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[nt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[nt])),We){const we=r.get(L[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,fe,Re,0,0,fe,Re,Ae,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),We)for(let lt=0;lt<L.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,ke.__webglColorRenderbuffer[lt]);const Et=r.get(L[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}}function at(z){return Math.min(a.maxSamples,z.samples)}function Ve(z){const L=r.get(z);return u&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Pt(z){const L=f.render.frame;m.get(z)!==L&&(m.set(z,L),z.update())}function vt(z,L){const fe=z.colorSpace,Re=z.format,Ae=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===Xf||fe!==xr&&fe!==bi&&(Jt.getTransfer(fe)===ln?u===!1?e.has("EXT_sRGB")===!0&&Re===Ai?(z.format=Xf,z.minFilter=Qn,z.generateMipmaps=!1):L=Hg.sRGBToLinear(L):(Re!==Ai||Ae!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",fe)),L}this.allocateTextureUnit=j,this.resetTextureUnits=ge,this.setTexture2D=W,this.setTexture2DArray=de,this.setTexture3D=X,this.setTextureCube=ie,this.rebindTextures=qe,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ve}function _T(s,e,t){const r=t.isWebGL2;function a(l,f=bi){let u;const h=Jt.getTransfer(f);if(l===Yr)return s.UNSIGNED_BYTE;if(l===Ng)return s.UNSIGNED_SHORT_4_4_4_4;if(l===Dg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===Bv)return s.BYTE;if(l===zv)return s.SHORT;if(l===Zf)return s.UNSIGNED_SHORT;if(l===Pg)return s.INT;if(l===Xr)return s.UNSIGNED_INT;if(l===_r)return s.FLOAT;if(l===Ea)return r?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===Hv)return s.ALPHA;if(l===Ai)return s.RGBA;if(l===Vv)return s.LUMINANCE;if(l===Gv)return s.LUMINANCE_ALPHA;if(l===Ms)return s.DEPTH_COMPONENT;if(l===Lo)return s.DEPTH_STENCIL;if(l===Xf)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===Wv)return s.RED;if(l===Ig)return s.RED_INTEGER;if(l===Xv)return s.RG;if(l===Ug)return s.RG_INTEGER;if(l===Fg)return s.RGBA_INTEGER;if(l===rf||l===sf||l===of||l===af)if(h===ln)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===rf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===sf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===of)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===af)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===rf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===sf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===of)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===af)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===zp||l===Hp||l===Vp||l===Gp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===zp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Hp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Vp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Gp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Og)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Wp||l===Xp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Wp)return h===ln?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Xp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===jp||l===qp||l===Yp||l===Kp||l===$p||l===Zp||l===Jp||l===Qp||l===em||l===tm||l===nm||l===im||l===rm||l===sm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===jp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===qp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Yp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Kp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===$p)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Zp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Jp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Qp)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===em)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===tm)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===nm)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===im)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===rm)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===sm)return h===ln?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===lf||l===om||l===am)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===lf)return h===ln?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===om)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===am)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===jv||l===lm||l===cm||l===um)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===lf)return u.COMPRESSED_RED_RGTC1_EXT;if(l===lm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===cm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===um)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Ss?r?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class vT extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wo extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,r),y=this._getHandJoint(p,T);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=m.position.distanceTo(_.position),S=.02,w=.005;p.inputState.pinching&&v>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new wo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class xT extends bs{constructor(e,t){super();const r=this;let a=null,l=1,f=null,u="local-floor",h=1,p=null,m=null,_=null,v=null,S=null,w=null;const T=t.getContextAttributes();let x=null,y=null;const U=[],R=[],I=new Rt;let H=null;const O=new jn;O.layers.enable(1),O.viewport=new tn;const k=new jn;k.layers.enable(2),k.viewport=new tn;const Z=[O,k],b=new vT;b.layers.enable(1),b.layers.enable(2);let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=U[K];return re===void 0&&(re=new Nf,U[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=U[K];return re===void 0&&(re=new Nf,U[K]=re),re.getGripSpace()},this.getHand=function(K){let re=U[K];return re===void 0&&(re=new Nf,U[K]=re),re.getHandSpace()};function J(K){const re=R.indexOf(K.inputSource);if(re===-1)return;const ue=U[re];ue!==void 0&&(ue.update(K.inputSource,K.frame,p||f),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function ge(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",ge),a.removeEventListener("inputsourceschange",j);for(let K=0;K<U.length;K++){const re=R[K];re!==null&&(R[K]=null,U[K].disconnect(re))}D=null,Q=null,e.setRenderTarget(x),S=null,v=null,_=null,a=null,y=null,Y.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",ge),a.addEventListener("inputsourceschange",j),T.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(I),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:a.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,re),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),y=new ws(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:Yr,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let re=null,ue=null,he=null;T.depth&&(he=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=T.stencil?Lo:Ms,ue=T.stencil?Ss:Xr);const Se={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:l};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Se),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),y=new ws(v.textureWidth,v.textureHeight,{format:Ai,type:Yr,depthTexture:new Jg(v.textureWidth,v.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const ce=e.properties.get(y);ce.__ignoreDepthValues=v.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(u),Y.setContext(a),Y.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function j(K){for(let re=0;re<K.removed.length;re++){const ue=K.removed[re],he=R.indexOf(ue);he>=0&&(R[he]=null,U[he].disconnect(ue))}for(let re=0;re<K.added.length;re++){const ue=K.added[re];let he=R.indexOf(ue);if(he===-1){for(let ce=0;ce<U.length;ce++)if(ce>=R.length){R.push(ue),he=ce;break}else if(R[ce]===null){R[ce]=ue,he=ce;break}if(he===-1)break}const Se=U[he];Se&&Se.connect(ue)}}const se=new ee,W=new ee;function de(K,re,ue){se.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const he=se.distanceTo(W),Se=re.projectionMatrix.elements,ce=ue.projectionMatrix.elements,Me=Se[14]/(Se[10]-1),Te=Se[14]/(Se[10]+1),qe=(Se[9]+1)/Se[5],oe=(Se[9]-1)/Se[5],Ct=(Se[8]-1)/Se[0],et=(ce[8]+1)/ce[0],at=Me*Ct,Ve=Me*et,Pt=he/(-Ct+et),vt=Pt*-Ct;re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const z=Me+Pt,L=Te+Pt,fe=at-vt,Re=Ve+(he-vt),Ae=qe*Te/L*z,Pe=oe*Te/L*z;K.projectionMatrix.makePerspective(fe,Re,Ae,Pe,z,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function X(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;b.near=k.near=O.near=K.near,b.far=k.far=O.far=K.far,(D!==b.near||Q!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,Q=b.far);const re=K.parent,ue=b.cameras;X(b,re);for(let he=0;he<ue.length;he++)X(ue[he],re);ue.length===2?de(b,O,k):b.projectionMatrix.copy(O.projectionMatrix),ie(K,b,re)};function ie(K,re,ue){ue===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Po*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(K){h=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)};let te=null;function B(K,re){if(m=re.getViewerPose(p||f),w=re,m!==null){const ue=m.views;S!==null&&(e.setRenderTargetFramebuffer(y,S.framebuffer),e.setRenderTarget(y));let he=!1;ue.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Se=0;Se<ue.length;Se++){const ce=ue[Se];let Me=null;if(S!==null)Me=S.getViewport(ce);else{const qe=_.getViewSubImage(v,ce);Me=qe.viewport,Se===0&&(e.setRenderTargetTextures(y,qe.colorTexture,v.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(y))}let Te=Z[Se];Te===void 0&&(Te=new jn,Te.layers.enable(Se),Te.viewport=new tn,Z[Se]=Te),Te.matrix.fromArray(ce.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ce.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Me.x,Me.y,Me.width,Me.height),Se===0&&(b.matrix.copy(Te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(Te)}}for(let ue=0;ue<U.length;ue++){const he=R[ue],Se=U[ue];he!==null&&Se!==void 0&&Se.update(he,re,p||f)}te&&te(K,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),w=null}const Y=new Zg;Y.setAnimationLoop(B),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}function ST(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Yg(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function a(x,y,U,R,I){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,I)):y.isMeshMatcapMaterial?(l(x,y),w(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),T(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&u(x,y)):y.isPointsMaterial?h(x,y,U,R):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===li&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===li&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const U=e.get(y).envMap;if(U&&(x.envMap.value=U,x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap){x.lightMap.value=y.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=y.lightMapIntensity*R,t(y.lightMap,x.lightMapTransform)}y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function u(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,U,R){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*U,x.scale.value=R*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),e.get(y).envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,U){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===li&&x.clearcoatNormalScale.value.negate())),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,y){y.matcap&&(x.matcap.value=y.matcap)}function T(x,y){const U=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function MT(s,e,t,r){let a={},l={},f=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(U,R){const I=R.program;r.uniformBlockBinding(U,I)}function p(U,R){let I=a[U.id];I===void 0&&(w(U),I=m(U),a[U.id]=I,U.addEventListener("dispose",x));const H=R.program;r.updateUBOMapping(U,H);const O=e.render.frame;l[U.id]!==O&&(v(U),l[U.id]=O)}function m(U){const R=_();U.__bindingPointIndex=R;const I=s.createBuffer(),H=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,I),I}function _(){for(let U=0;U<u;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=a[U.id],I=U.uniforms,H=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let O=0,k=I.length;O<k;O++){const Z=Array.isArray(I[O])?I[O]:[I[O]];for(let b=0,D=Z.length;b<D;b++){const Q=Z[b];if(S(Q,O,b,H)===!0){const J=Q.__offset,ge=Array.isArray(Q.value)?Q.value:[Q.value];let j=0;for(let se=0;se<ge.length;se++){const W=ge[se],de=T(W);typeof W=="number"||typeof W=="boolean"?(Q.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,J+j,Q.__data)):W.isMatrix3?(Q.__data[0]=W.elements[0],Q.__data[1]=W.elements[1],Q.__data[2]=W.elements[2],Q.__data[3]=0,Q.__data[4]=W.elements[3],Q.__data[5]=W.elements[4],Q.__data[6]=W.elements[5],Q.__data[7]=0,Q.__data[8]=W.elements[6],Q.__data[9]=W.elements[7],Q.__data[10]=W.elements[8],Q.__data[11]=0):(W.toArray(Q.__data,j),j+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,Q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,R,I,H){const O=U.value,k=R+"_"+I;if(H[k]===void 0)return typeof O=="number"||typeof O=="boolean"?H[k]=O:H[k]=O.clone(),!0;{const Z=H[k];if(typeof O=="number"||typeof O=="boolean"){if(Z!==O)return H[k]=O,!0}else if(Z.equals(O)===!1)return Z.copy(O),!0}return!1}function w(U){const R=U.uniforms;let I=0;const H=16;for(let k=0,Z=R.length;k<Z;k++){const b=Array.isArray(R[k])?R[k]:[R[k]];for(let D=0,Q=b.length;D<Q;D++){const J=b[D],ge=Array.isArray(J.value)?J.value:[J.value];for(let j=0,se=ge.length;j<se;j++){const W=ge[j],de=T(W),X=I%H;X!==0&&H-X<de.boundary&&(I+=H-X),J.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=I,I+=de.storage}}}const O=I%H;return O>0&&(I+=H-O),U.__size=I,U.__cache={},this}function T(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function x(U){const R=U.target;R.removeEventListener("dispose",x);const I=f.indexOf(R.__bindingPointIndex);f.splice(I,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function y(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},l={}}return{bind:h,update:p,dispose:y}}class r_{constructor(e={}){const{canvas:t=vy(),context:r=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;r!==null?v=r.getContextAttributes().alpha:v=f;const S=new Uint32Array(4),w=new Int32Array(4);let T=null,x=null;const y=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=qr,this.toneMappingExposure=1;const R=this;let I=!1,H=0,O=0,k=null,Z=-1,b=null;const D=new tn,Q=new tn;let J=null;const ge=new Ft(0);let j=0,se=t.width,W=t.height,de=1,X=null,ie=null;const te=new tn(0,0,se,W),B=new tn(0,0,se,W);let Y=!1;const K=new ed;let re=!1,ue=!1,he=null;const Se=new Ut,ce=new Rt,Me=new ee,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return k===null?de:1}let oe=r;function Ct(F,ae){for(let ye=0;ye<F.length;ye++){const xe=F[ye],_e=t.getContext(xe,ae);if(_e!==null)return _e}return null}try{const F={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$f}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),oe===null){const ae=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&ae.shift(),oe=Ct(ae,F),oe===null)throw Ct(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&oe instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),oe.getShaderPrecisionFormat===void 0&&(oe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let et,at,Ve,Pt,vt,z,L,fe,Re,Ae,Pe,nt,ke,We,lt,Et,we,ft,Nt,Mt,ut,Xe,V,Ue;function rt(){et=new NM(oe),at=new AM(oe,et,e),et.init(at),Xe=new _T(oe,et,at),Ve=new mT(oe,et,at),Pt=new UM(oe),vt=new tT,z=new gT(oe,et,Ve,vt,at,Xe,Pt),L=new RM(R),fe=new PM(R),Re=new Gy(oe,at),V=new TM(oe,et,Re,at),Ae=new DM(oe,Re,Pt,V),Pe=new BM(oe,Ae,Re,Pt),Nt=new kM(oe,at,z),Et=new bM(vt),nt=new eT(R,L,fe,et,at,V,Et),ke=new ST(R,vt),We=new iT,lt=new cT(et,at),ft=new EM(R,L,fe,Ve,Pe,v,h),we=new pT(R,Pe,at),Ue=new MT(oe,Pt,at,Ve),Mt=new wM(oe,et,Pt,at),ut=new IM(oe,et,Pt,at),Pt.programs=nt.programs,R.capabilities=at,R.extensions=et,R.properties=vt,R.renderLists=We,R.shadowMap=we,R.state=Ve,R.info=Pt}rt();const Ye=new xT(R,oe);this.xr=Ye,this.getContext=function(){return oe},this.getContextAttributes=function(){return oe.getContextAttributes()},this.forceContextLoss=function(){const F=et.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=et.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(F){F!==void 0&&(de=F,this.setSize(se,W,!1))},this.getSize=function(F){return F.set(se,W)},this.setSize=function(F,ae,ye=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=F,W=ae,t.width=Math.floor(F*de),t.height=Math.floor(ae*de),ye===!0&&(t.style.width=F+"px",t.style.height=ae+"px"),this.setViewport(0,0,F,ae)},this.getDrawingBufferSize=function(F){return F.set(se*de,W*de).floor()},this.setDrawingBufferSize=function(F,ae,ye){se=F,W=ae,de=ye,t.width=Math.floor(F*ye),t.height=Math.floor(ae*ye),this.setViewport(0,0,F,ae)},this.getCurrentViewport=function(F){return F.copy(D)},this.getViewport=function(F){return F.copy(te)},this.setViewport=function(F,ae,ye,xe){F.isVector4?te.set(F.x,F.y,F.z,F.w):te.set(F,ae,ye,xe),Ve.viewport(D.copy(te).multiplyScalar(de).floor())},this.getScissor=function(F){return F.copy(B)},this.setScissor=function(F,ae,ye,xe){F.isVector4?B.set(F.x,F.y,F.z,F.w):B.set(F,ae,ye,xe),Ve.scissor(Q.copy(B).multiplyScalar(de).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(F){Ve.setScissorTest(Y=F)},this.setOpaqueSort=function(F){X=F},this.setTransparentSort=function(F){ie=F},this.getClearColor=function(F){return F.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(F=!0,ae=!0,ye=!0){let xe=0;if(F){let _e=!1;if(k!==null){const je=k.texture.format;_e=je===Fg||je===Ug||je===Ig}if(_e){const je=k.texture.type,Ke=je===Yr||je===Xr||je===Zf||je===Ss||je===Ng||je===Dg,pt=ft.getClearColor(),$e=ft.getClearAlpha(),Lt=pt.r,Tt=pt.g,wt=pt.b;Ke?(S[0]=Lt,S[1]=Tt,S[2]=wt,S[3]=$e,oe.clearBufferuiv(oe.COLOR,0,S)):(w[0]=Lt,w[1]=Tt,w[2]=wt,w[3]=$e,oe.clearBufferiv(oe.COLOR,0,w))}else xe|=oe.COLOR_BUFFER_BIT}ae&&(xe|=oe.DEPTH_BUFFER_BIT),ye&&(xe|=oe.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe.clear(xe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),We.dispose(),lt.dispose(),vt.dispose(),L.dispose(),fe.dispose(),Pe.dispose(),V.dispose(),Ue.dispose(),nt.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Qt),Ye.removeEventListener("sessionend",Ot),he&&(he.dispose(),he=null),nn.stop()};function Ce(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const F=Pt.autoReset,ae=we.enabled,ye=we.autoUpdate,xe=we.needsUpdate,_e=we.type;rt(),Pt.autoReset=F,we.enabled=ae,we.autoUpdate=ye,we.needsUpdate=xe,we.type=_e}function Ie(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Be(F){const ae=F.target;ae.removeEventListener("dispose",Be),gt(ae)}function gt(F){ht(F),vt.remove(F)}function ht(F){const ae=vt.get(F).programs;ae!==void 0&&(ae.forEach(function(ye){nt.releaseProgram(ye)}),F.isShaderMaterial&&nt.releaseShaderCache(F))}this.renderBufferDirect=function(F,ae,ye,xe,_e,je){ae===null&&(ae=Te);const Ke=_e.isMesh&&_e.matrixWorld.determinant()<0,pt=zo(F,ae,ye,xe,_e);Ve.setMaterial(xe,Ke);let $e=ye.index,Lt=1;if(xe.wireframe===!0){if($e=Ae.getWireframeAttribute(ye),$e===void 0)return;Lt=2}const Tt=ye.drawRange,wt=ye.attributes.position;let $t=Tt.start*Lt,Nn=(Tt.start+Tt.count)*Lt;je!==null&&($t=Math.max($t,je.start*Lt),Nn=Math.min(Nn,(je.start+je.count)*Lt)),$e!==null?($t=Math.max($t,0),Nn=Math.min(Nn,$e.count)):wt!=null&&($t=Math.max($t,0),Nn=Math.min(Nn,wt.count));const dn=Nn-$t;if(dn<0||dn===1/0)return;V.setup(_e,xe,pt,ye,$e);let Dn,Gt=Mt;if($e!==null&&(Dn=Re.get($e),Gt=ut,Gt.setIndex(Dn)),_e.isMesh)xe.wireframe===!0?(Ve.setLineWidth(xe.wireframeLinewidth*qe()),Gt.setMode(oe.LINES)):Gt.setMode(oe.TRIANGLES);else if(_e.isLine){let At=xe.linewidth;At===void 0&&(At=1),Ve.setLineWidth(At*qe()),_e.isLineSegments?Gt.setMode(oe.LINES):_e.isLineLoop?Gt.setMode(oe.LINE_LOOP):Gt.setMode(oe.LINE_STRIP)}else _e.isPoints?Gt.setMode(oe.POINTS):_e.isSprite&&Gt.setMode(oe.TRIANGLES);if(_e.isBatchedMesh)Gt.renderMultiDraw(_e._multiDrawStarts,_e._multiDrawCounts,_e._multiDrawCount);else if(_e.isInstancedMesh)Gt.renderInstances($t,dn,_e.count);else if(ye.isInstancedBufferGeometry){const At=ye._maxInstanceCount!==void 0?ye._maxInstanceCount:1/0,In=Math.min(ye.instanceCount,At);Gt.renderInstances($t,dn,In)}else Gt.render($t,dn)};function Dt(F,ae,ye){F.transparent===!0&&F.side===$i&&F.forceSinglePass===!1?(F.side=li,F.needsUpdate=!0,Gi(F,ae,ye),F.side=yr,F.needsUpdate=!0,Gi(F,ae,ye),F.side=$i):Gi(F,ae,ye)}this.compile=function(F,ae,ye=null){ye===null&&(ye=F),x=lt.get(ye),x.init(),U.push(x),ye.traverseVisible(function(_e){_e.isLight&&_e.layers.test(ae.layers)&&(x.pushLight(_e),_e.castShadow&&x.pushShadow(_e))}),F!==ye&&F.traverseVisible(function(_e){_e.isLight&&_e.layers.test(ae.layers)&&(x.pushLight(_e),_e.castShadow&&x.pushShadow(_e))}),x.setupLights(R._useLegacyLights);const xe=new Set;return F.traverse(function(_e){const je=_e.material;if(je)if(Array.isArray(je))for(let Ke=0;Ke<je.length;Ke++){const pt=je[Ke];Dt(pt,ye,_e),xe.add(pt)}else Dt(je,ye,_e),xe.add(je)}),U.pop(),x=null,xe},this.compileAsync=function(F,ae,ye=null){const xe=this.compile(F,ae,ye);return new Promise(_e=>{function je(){if(xe.forEach(function(Ke){vt.get(Ke).currentProgram.isReady()&&xe.delete(Ke)}),xe.size===0){_e(F);return}setTimeout(je,10)}et.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let It=null;function Bt(F){It&&It(F)}function Qt(){nn.stop()}function Ot(){nn.start()}const nn=new Zg;nn.setAnimationLoop(Bt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(F){It=F,Ye.setAnimationLoop(F),F===null?nn.stop():nn.start()},Ye.addEventListener("sessionstart",Qt),Ye.addEventListener("sessionend",Ot),this.render=function(F,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(ae),ae=Ye.getCamera()),F.isScene===!0&&F.onBeforeRender(R,F,ae,k),x=lt.get(F,U.length),x.init(),U.push(x),Se.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),K.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,re=Et.init(this.clippingPlanes,ue),T=We.get(F,y.length),T.init(),y.push(T),An(F,ae,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(X,ie),this.info.render.frame++,re===!0&&Et.beginShadows();const ye=x.state.shadowsArray;if(we.render(ye,F,ae),re===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(T,F),x.setupLights(R._useLegacyLights),ae.isArrayCamera){const xe=ae.cameras;for(let _e=0,je=xe.length;_e<je;_e++){const Ke=xe[_e];Ls(T,F,Ke,Ke.viewport)}}else Ls(T,F,ae);k!==null&&(z.updateMultisampleRenderTarget(k),z.updateRenderTargetMipmap(k)),F.isScene===!0&&F.onAfterRender(R,F,ae),V.resetDefaultState(),Z=-1,b=null,U.pop(),U.length>0?x=U[U.length-1]:x=null,y.pop(),y.length>0?T=y[y.length-1]:T=null};function An(F,ae,ye,xe){if(F.visible===!1)return;if(F.layers.test(ae.layers)){if(F.isGroup)ye=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ae);else if(F.isLight)x.pushLight(F),F.castShadow&&x.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||K.intersectsSprite(F)){xe&&Me.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Se);const Ke=Pe.update(F),pt=F.material;pt.visible&&T.push(F,Ke,pt,ye,Me.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||K.intersectsObject(F))){const Ke=Pe.update(F),pt=F.material;if(xe&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Me.copy(F.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Me.copy(Ke.boundingSphere.center)),Me.applyMatrix4(F.matrixWorld).applyMatrix4(Se)),Array.isArray(pt)){const $e=Ke.groups;for(let Lt=0,Tt=$e.length;Lt<Tt;Lt++){const wt=$e[Lt],$t=pt[wt.materialIndex];$t&&$t.visible&&T.push(F,Ke,$t,ye,Me.z,wt)}}else pt.visible&&T.push(F,Ke,pt,ye,Me.z,null)}}const je=F.children;for(let Ke=0,pt=je.length;Ke<pt;Ke++)An(je[Ke],ae,ye,xe)}function Ls(F,ae,ye,xe){const _e=F.opaque,je=F.transmissive,Ke=F.transparent;x.setupLightsView(ye),re===!0&&Et.setGlobalState(R.clippingPlanes,ye),je.length>0&&Ji(_e,je,ae,ye),xe&&Ve.viewport(D.copy(xe)),_e.length>0&&Ri(_e,ae,ye),je.length>0&&Ri(je,ae,ye),Ke.length>0&&Ri(Ke,ae,ye),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ji(F,ae,ye,xe){if((ye.isScene===!0?ye.overrideMaterial:null)!==null)return;const je=at.isWebGL2;he===null&&(he=new ws(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?Ea:Yr,minFilter:Ts,samples:je?4:0})),R.getDrawingBufferSize(ce),je?he.setSize(ce.x,ce.y):he.setSize(cc(ce.x),cc(ce.y));const Ke=R.getRenderTarget();R.setRenderTarget(he),R.getClearColor(ge),j=R.getClearAlpha(),j<1&&R.setClearColor(16777215,.5),R.clear();const pt=R.toneMapping;R.toneMapping=qr,Ri(F,ye,xe),z.updateMultisampleRenderTarget(he),z.updateRenderTargetMipmap(he);let $e=!1;for(let Lt=0,Tt=ae.length;Lt<Tt;Lt++){const wt=ae[Lt],$t=wt.object,Nn=wt.geometry,dn=wt.material,Dn=wt.group;if(dn.side===$i&&$t.layers.test(xe.layers)){const Gt=dn.side;dn.side=li,dn.needsUpdate=!0,Vi($t,ye,xe,Nn,dn,Dn),dn.side=Gt,dn.needsUpdate=!0,$e=!0}}$e===!0&&(z.updateMultisampleRenderTarget(he),z.updateRenderTargetMipmap(he)),R.setRenderTarget(Ke),R.setClearColor(ge,j),R.toneMapping=pt}function Ri(F,ae,ye){const xe=ae.isScene===!0?ae.overrideMaterial:null;for(let _e=0,je=F.length;_e<je;_e++){const Ke=F[_e],pt=Ke.object,$e=Ke.geometry,Lt=xe===null?Ke.material:xe,Tt=Ke.group;pt.layers.test(ye.layers)&&Vi(pt,ae,ye,$e,Lt,Tt)}}function Vi(F,ae,ye,xe,_e,je){F.onBeforeRender(R,ae,ye,xe,_e,je),F.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),_e.onBeforeRender(R,ae,ye,xe,F,je),_e.transparent===!0&&_e.side===$i&&_e.forceSinglePass===!1?(_e.side=li,_e.needsUpdate=!0,R.renderBufferDirect(ye,ae,xe,_e,F,je),_e.side=yr,_e.needsUpdate=!0,R.renderBufferDirect(ye,ae,xe,_e,F,je),_e.side=$i):R.renderBufferDirect(ye,ae,xe,_e,F,je),F.onAfterRender(R,ae,ye,xe,_e,je)}function Gi(F,ae,ye){ae.isScene!==!0&&(ae=Te);const xe=vt.get(F),_e=x.state.lights,je=x.state.shadowsArray,Ke=_e.state.version,pt=nt.getParameters(F,_e.state,je,ae,ye),$e=nt.getProgramCacheKey(pt);let Lt=xe.programs;xe.environment=F.isMeshStandardMaterial?ae.environment:null,xe.fog=ae.fog,xe.envMap=(F.isMeshStandardMaterial?fe:L).get(F.envMap||xe.environment),Lt===void 0&&(F.addEventListener("dispose",Be),Lt=new Map,xe.programs=Lt);let Tt=Lt.get($e);if(Tt!==void 0){if(xe.currentProgram===Tt&&xe.lightsStateVersion===Ke)return Ps(F,pt),Tt}else pt.uniforms=nt.getUniforms(F),F.onBuild(ye,pt,R),F.onBeforeCompile(pt,R),Tt=nt.acquireProgram(pt,$e),Lt.set($e,Tt),xe.uniforms=pt.uniforms;const wt=xe.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(wt.clippingPlanes=Et.uniform),Ps(F,pt),xe.needsLights=Ns(F),xe.lightsStateVersion=Ke,xe.needsLights&&(wt.ambientLightColor.value=_e.state.ambient,wt.lightProbe.value=_e.state.probe,wt.directionalLights.value=_e.state.directional,wt.directionalLightShadows.value=_e.state.directionalShadow,wt.spotLights.value=_e.state.spot,wt.spotLightShadows.value=_e.state.spotShadow,wt.rectAreaLights.value=_e.state.rectArea,wt.ltc_1.value=_e.state.rectAreaLTC1,wt.ltc_2.value=_e.state.rectAreaLTC2,wt.pointLights.value=_e.state.point,wt.pointLightShadows.value=_e.state.pointShadow,wt.hemisphereLights.value=_e.state.hemi,wt.directionalShadowMap.value=_e.state.directionalShadowMap,wt.directionalShadowMatrix.value=_e.state.directionalShadowMatrix,wt.spotShadowMap.value=_e.state.spotShadowMap,wt.spotLightMatrix.value=_e.state.spotLightMatrix,wt.spotLightMap.value=_e.state.spotLightMap,wt.pointShadowMap.value=_e.state.pointShadowMap,wt.pointShadowMatrix.value=_e.state.pointShadowMatrix),xe.currentProgram=Tt,xe.uniformsList=null,Tt}function Jr(F){if(F.uniformsList===null){const ae=F.currentProgram.getUniforms();F.uniformsList=tc.seqWithValue(ae.seq,F.uniforms)}return F.uniformsList}function Ps(F,ae){const ye=vt.get(F);ye.outputColorSpace=ae.outputColorSpace,ye.batching=ae.batching,ye.instancing=ae.instancing,ye.instancingColor=ae.instancingColor,ye.skinning=ae.skinning,ye.morphTargets=ae.morphTargets,ye.morphNormals=ae.morphNormals,ye.morphColors=ae.morphColors,ye.morphTargetsCount=ae.morphTargetsCount,ye.numClippingPlanes=ae.numClippingPlanes,ye.numIntersection=ae.numClipIntersection,ye.vertexAlphas=ae.vertexAlphas,ye.vertexTangents=ae.vertexTangents,ye.toneMapping=ae.toneMapping}function zo(F,ae,ye,xe,_e){ae.isScene!==!0&&(ae=Te),z.resetTextureUnits();const je=ae.fog,Ke=xe.isMeshStandardMaterial?ae.environment:null,pt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:xr,$e=(xe.isMeshStandardMaterial?fe:L).get(xe.envMap||Ke),Lt=xe.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,Tt=!!ye.attributes.tangent&&(!!xe.normalMap||xe.anisotropy>0),wt=!!ye.morphAttributes.position,$t=!!ye.morphAttributes.normal,Nn=!!ye.morphAttributes.color;let dn=qr;xe.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(dn=R.toneMapping);const Dn=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,Gt=Dn!==void 0?Dn.length:0,At=vt.get(xe),In=x.state.lights;if(re===!0&&(ue===!0||F!==b)){const bn=F===b&&xe.id===Z;Et.setState(xe,F,bn)}let en=!1;xe.version===At.__version?(At.needsLights&&At.lightsStateVersion!==In.state.version||At.outputColorSpace!==pt||_e.isBatchedMesh&&At.batching===!1||!_e.isBatchedMesh&&At.batching===!0||_e.isInstancedMesh&&At.instancing===!1||!_e.isInstancedMesh&&At.instancing===!0||_e.isSkinnedMesh&&At.skinning===!1||!_e.isSkinnedMesh&&At.skinning===!0||_e.isInstancedMesh&&At.instancingColor===!0&&_e.instanceColor===null||_e.isInstancedMesh&&At.instancingColor===!1&&_e.instanceColor!==null||At.envMap!==$e||xe.fog===!0&&At.fog!==je||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Et.numPlanes||At.numIntersection!==Et.numIntersection)||At.vertexAlphas!==Lt||At.vertexTangents!==Tt||At.morphTargets!==wt||At.morphNormals!==$t||At.morphColors!==Nn||At.toneMapping!==dn||at.isWebGL2===!0&&At.morphTargetsCount!==Gt)&&(en=!0):(en=!0,At.__version=xe.version);let Li=At.currentProgram;en===!0&&(Li=Gi(xe,ae,_e));let Qr=!1,vi=!1,Wi=!1;const cn=Li.getUniforms(),qn=At.uniforms;if(Ve.useProgram(Li.program)&&(Qr=!0,vi=!0,Wi=!0),xe.id!==Z&&(Z=xe.id,vi=!0),Qr||b!==F){cn.setValue(oe,"projectionMatrix",F.projectionMatrix),cn.setValue(oe,"viewMatrix",F.matrixWorldInverse);const bn=cn.map.cameraPosition;bn!==void 0&&bn.setValue(oe,Me.setFromMatrixPosition(F.matrixWorld)),at.logarithmicDepthBuffer&&cn.setValue(oe,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshLambertMaterial||xe.isMeshBasicMaterial||xe.isMeshStandardMaterial||xe.isShaderMaterial)&&cn.setValue(oe,"isOrthographic",F.isOrthographicCamera===!0),b!==F&&(b=F,vi=!0,Wi=!0)}if(_e.isSkinnedMesh){cn.setOptional(oe,_e,"bindMatrix"),cn.setOptional(oe,_e,"bindMatrixInverse");const bn=_e.skeleton;bn&&(at.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),cn.setValue(oe,"boneTexture",bn.boneTexture,z)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}_e.isBatchedMesh&&(cn.setOptional(oe,_e,"batchingTexture"),cn.setValue(oe,"batchingTexture",_e._matricesTexture,z));const sn=ye.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0&&at.isWebGL2===!0)&&Nt.update(_e,ye,Li),(vi||At.receiveShadow!==_e.receiveShadow)&&(At.receiveShadow=_e.receiveShadow,cn.setValue(oe,"receiveShadow",_e.receiveShadow)),xe.isMeshGouraudMaterial&&xe.envMap!==null&&(qn.envMap.value=$e,qn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),vi&&(cn.setValue(oe,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&Ci(qn,Wi),je&&xe.fog===!0&&ke.refreshFogUniforms(qn,je),ke.refreshMaterialUniforms(qn,xe,de,W,he),tc.upload(oe,Jr(At),qn,z)),xe.isShaderMaterial&&xe.uniformsNeedUpdate===!0&&(tc.upload(oe,Jr(At),qn,z),xe.uniformsNeedUpdate=!1),xe.isSpriteMaterial&&cn.setValue(oe,"center",_e.center),cn.setValue(oe,"modelViewMatrix",_e.modelViewMatrix),cn.setValue(oe,"normalMatrix",_e.normalMatrix),cn.setValue(oe,"modelMatrix",_e.matrixWorld),xe.isShaderMaterial||xe.isRawShaderMaterial){const bn=xe.uniformsGroups;for(let Qi=0,es=bn.length;Qi<es;Qi++)if(at.isWebGL2){const er=bn[Qi];Ue.update(er,Li),Ue.bind(er,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Ci(F,ae){F.ambientLightColor.needsUpdate=ae,F.lightProbe.needsUpdate=ae,F.directionalLights.needsUpdate=ae,F.directionalLightShadows.needsUpdate=ae,F.pointLights.needsUpdate=ae,F.pointLightShadows.needsUpdate=ae,F.spotLights.needsUpdate=ae,F.spotLightShadows.needsUpdate=ae,F.rectAreaLights.needsUpdate=ae,F.hemisphereLights.needsUpdate=ae}function Ns(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(F,ae,ye){vt.get(F.texture).__webglTexture=ae,vt.get(F.depthTexture).__webglTexture=ye;const xe=vt.get(F);xe.__hasExternalTextures=!0,xe.__hasExternalTextures&&(xe.__autoAllocateDepthBuffer=ye===void 0,xe.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,ae){const ye=vt.get(F);ye.__webglFramebuffer=ae,ye.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(F,ae=0,ye=0){k=F,H=ae,O=ye;let xe=!0,_e=null,je=!1,Ke=!1;if(F){const $e=vt.get(F);$e.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(oe.FRAMEBUFFER,null),xe=!1):$e.__webglFramebuffer===void 0?z.setupRenderTarget(F):$e.__hasExternalTextures&&z.rebindTextures(F,vt.get(F.texture).__webglTexture,vt.get(F.depthTexture).__webglTexture);const Lt=F.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Ke=!0);const Tt=vt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Tt[ae])?_e=Tt[ae][ye]:_e=Tt[ae],je=!0):at.isWebGL2&&F.samples>0&&z.useMultisampledRTT(F)===!1?_e=vt.get(F).__webglMultisampledFramebuffer:Array.isArray(Tt)?_e=Tt[ye]:_e=Tt,D.copy(F.viewport),Q.copy(F.scissor),J=F.scissorTest}else D.copy(te).multiplyScalar(de).floor(),Q.copy(B).multiplyScalar(de).floor(),J=Y;if(Ve.bindFramebuffer(oe.FRAMEBUFFER,_e)&&at.drawBuffers&&xe&&Ve.drawBuffers(F,_e),Ve.viewport(D),Ve.scissor(Q),Ve.setScissorTest(J),je){const $e=vt.get(F.texture);oe.framebufferTexture2D(oe.FRAMEBUFFER,oe.COLOR_ATTACHMENT0,oe.TEXTURE_CUBE_MAP_POSITIVE_X+ae,$e.__webglTexture,ye)}else if(Ke){const $e=vt.get(F.texture),Lt=ae||0;oe.framebufferTextureLayer(oe.FRAMEBUFFER,oe.COLOR_ATTACHMENT0,$e.__webglTexture,ye||0,Lt)}Z=-1},this.readRenderTargetPixels=function(F,ae,ye,xe,_e,je,Ke){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=vt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ke!==void 0&&(pt=pt[Ke]),pt){Ve.bindFramebuffer(oe.FRAMEBUFFER,pt);try{const $e=F.texture,Lt=$e.format,Tt=$e.type;if(Lt!==Ai&&Xe.convert(Lt)!==oe.getParameter(oe.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=Tt===Ea&&(et.has("EXT_color_buffer_half_float")||at.isWebGL2&&et.has("EXT_color_buffer_float"));if(Tt!==Yr&&Xe.convert(Tt)!==oe.getParameter(oe.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Tt===_r&&(at.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=F.width-xe&&ye>=0&&ye<=F.height-_e&&oe.readPixels(ae,ye,xe,_e,Xe.convert(Lt),Xe.convert(Tt),je)}finally{const $e=k!==null?vt.get(k).__webglFramebuffer:null;Ve.bindFramebuffer(oe.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(F,ae,ye=0){const xe=Math.pow(2,-ye),_e=Math.floor(ae.image.width*xe),je=Math.floor(ae.image.height*xe);z.setTexture2D(ae,0),oe.copyTexSubImage2D(oe.TEXTURE_2D,ye,0,0,F.x,F.y,_e,je),Ve.unbindTexture()},this.copyTextureToTexture=function(F,ae,ye,xe=0){const _e=ae.image.width,je=ae.image.height,Ke=Xe.convert(ye.format),pt=Xe.convert(ye.type);z.setTexture2D(ye,0),oe.pixelStorei(oe.UNPACK_FLIP_Y_WEBGL,ye.flipY),oe.pixelStorei(oe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ye.premultiplyAlpha),oe.pixelStorei(oe.UNPACK_ALIGNMENT,ye.unpackAlignment),ae.isDataTexture?oe.texSubImage2D(oe.TEXTURE_2D,xe,F.x,F.y,_e,je,Ke,pt,ae.image.data):ae.isCompressedTexture?oe.compressedTexSubImage2D(oe.TEXTURE_2D,xe,F.x,F.y,ae.mipmaps[0].width,ae.mipmaps[0].height,Ke,ae.mipmaps[0].data):oe.texSubImage2D(oe.TEXTURE_2D,xe,F.x,F.y,Ke,pt,ae.image),xe===0&&ye.generateMipmaps&&oe.generateMipmap(oe.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(F,ae,ye,xe,_e=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const je=F.max.x-F.min.x+1,Ke=F.max.y-F.min.y+1,pt=F.max.z-F.min.z+1,$e=Xe.convert(xe.format),Lt=Xe.convert(xe.type);let Tt;if(xe.isData3DTexture)z.setTexture3D(xe,0),Tt=oe.TEXTURE_3D;else if(xe.isDataArrayTexture||xe.isCompressedArrayTexture)z.setTexture2DArray(xe,0),Tt=oe.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}oe.pixelStorei(oe.UNPACK_FLIP_Y_WEBGL,xe.flipY),oe.pixelStorei(oe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),oe.pixelStorei(oe.UNPACK_ALIGNMENT,xe.unpackAlignment);const wt=oe.getParameter(oe.UNPACK_ROW_LENGTH),$t=oe.getParameter(oe.UNPACK_IMAGE_HEIGHT),Nn=oe.getParameter(oe.UNPACK_SKIP_PIXELS),dn=oe.getParameter(oe.UNPACK_SKIP_ROWS),Dn=oe.getParameter(oe.UNPACK_SKIP_IMAGES),Gt=ye.isCompressedTexture?ye.mipmaps[_e]:ye.image;oe.pixelStorei(oe.UNPACK_ROW_LENGTH,Gt.width),oe.pixelStorei(oe.UNPACK_IMAGE_HEIGHT,Gt.height),oe.pixelStorei(oe.UNPACK_SKIP_PIXELS,F.min.x),oe.pixelStorei(oe.UNPACK_SKIP_ROWS,F.min.y),oe.pixelStorei(oe.UNPACK_SKIP_IMAGES,F.min.z),ye.isDataTexture||ye.isData3DTexture?oe.texSubImage3D(Tt,_e,ae.x,ae.y,ae.z,je,Ke,pt,$e,Lt,Gt.data):ye.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),oe.compressedTexSubImage3D(Tt,_e,ae.x,ae.y,ae.z,je,Ke,pt,$e,Gt.data)):oe.texSubImage3D(Tt,_e,ae.x,ae.y,ae.z,je,Ke,pt,$e,Lt,Gt),oe.pixelStorei(oe.UNPACK_ROW_LENGTH,wt),oe.pixelStorei(oe.UNPACK_IMAGE_HEIGHT,$t),oe.pixelStorei(oe.UNPACK_SKIP_PIXELS,Nn),oe.pixelStorei(oe.UNPACK_SKIP_ROWS,dn),oe.pixelStorei(oe.UNPACK_SKIP_IMAGES,Dn),_e===0&&xe.generateMipmaps&&oe.generateMipmap(Tt),Ve.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?z.setTextureCube(F,0):F.isData3DTexture?z.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?z.setTexture2DArray(F,0):z.setTexture2D(F,0),Ve.unbindTexture()},this.resetState=function(){H=0,O=0,k=null,Ve.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jf?"display-p3":"srgb",t.unpackColorSpace=Jt.workingColorSpace===gc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vn?Es:kg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Es?vn:xr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ET extends r_{}ET.prototype.isWebGL1Renderer=!0;class s_ extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const ng=new ee,ig=new tn,rg=new tn,TT=new ee,sg=new Ut,ql=new ee,Df=new Io,og=new Ut,If=new _c;class wT extends kn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kp,this.bindMatrix=new Ut,this.bindMatrixInverse=new Ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,ql),this.boundingBox.expandByPoint(ql)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Io),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,ql),this.boundingSphere.expandByPoint(ql)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,a=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Df.copy(this.boundingSphere),Df.applyMatrix4(a),e.ray.intersectsSphere(Df)!==!1&&(og.copy(a).invert(),If.copy(e.ray).applyMatrix4(og),!(this.boundingBox!==null&&If.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,If)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tn,t=this.geometry.attributes.skinWeight;for(let r=0,a=t.count;r<a;r++){e.fromBufferAttribute(t,r);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ov?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,a=this.geometry;ig.fromBufferAttribute(a.attributes.skinIndex,e),rg.fromBufferAttribute(a.attributes.skinWeight,e),ng.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const f=rg.getComponent(l);if(f!==0){const u=ig.getComponent(l);sg.multiplyMatrices(r.bones[u].matrixWorld,r.boneInverses[u]),t.addScaledVector(TT.copy(ng).applyMatrix4(sg),f)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class o_ extends yn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class a_ extends ti{constructor(e=null,t=1,r=1,a,l,f,u,h,p=On,m=On,_,v){super(null,f,u,h,p,m,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ag=new Ut,AT=new Ut;class rd{constructor(e=[],t=[]){this.uuid=$r(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new Ut;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let l=0,f=e.length;l<f;l++){const u=e[l]?e[l].matrixWorld:AT;ag.multiplyMatrices(u,t[l]),ag.toArray(r,l*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new rd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new a_(t,e,e,Ai,_r);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,a=e.bones.length;r<a;r++){const l=e.bones[r];let f=t[l];f===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),f=new o_),this.bones.push(f),this.boneInverses.push(new Ut().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let a=0,l=t.length;a<l;a++){const f=t[a];e.bones.push(f.uuid);const u=r[a];e.boneInverses.push(u.toArray())}return e}}class Yf extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lg=new ee,cg=new ee,ug=new Ut,Uf=new _c,Yl=new Io;class l_ extends yn{constructor(e=new _i,t=new Yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)lg.fromBufferAttribute(t,a-1),cg.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=lg.distanceTo(cg);e.setAttribute("lineDistance",new fn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(a),Yl.radius+=l,e.ray.intersectsSphere(Yl)===!1)return;ug.copy(a).invert(),Uf.copy(e.ray).applyMatrix4(ug);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,p=new ee,m=new ee,_=new ee,v=new ee,S=this.isLineSegments?2:1,w=r.index,x=r.attributes.position;if(w!==null){const y=Math.max(0,f.start),U=Math.min(w.count,f.start+f.count);for(let R=y,I=U-1;R<I;R+=S){const H=w.getX(R),O=w.getX(R+1);if(p.fromBufferAttribute(x,H),m.fromBufferAttribute(x,O),Uf.distanceSqToSegment(p,m,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const Z=e.ray.origin.distanceTo(v);Z<e.near||Z>e.far||t.push({distance:Z,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,f.start),U=Math.min(x.count,f.start+f.count);for(let R=y,I=U-1;R<I;R+=S){if(p.fromBufferAttribute(x,R),m.fromBufferAttribute(x,R+1),Uf.distanceSqToSegment(p,m,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(v);O<e.near||O>e.far||t.push({distance:O,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}const fg=new ee,dg=new ee;class bT extends l_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)fg.fromBufferAttribute(t,a),dg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+fg.distanceTo(dg);e.setAttribute("lineDistance",new fn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends _i{constructor(e=1,t=1,r=1,a=32,l=1,f=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:f,thetaStart:u,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const m=[],_=[],v=[],S=[];let w=0;const T=[],x=r/2;let y=0;U(),f===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(m),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(S,2));function U(){const I=new ee,H=new ee;let O=0;const k=(t-e)/r;for(let Z=0;Z<=l;Z++){const b=[],D=Z/l,Q=D*(t-e)+e;for(let J=0;J<=a;J++){const ge=J/a,j=ge*h+u,se=Math.sin(j),W=Math.cos(j);H.x=Q*se,H.y=-D*r+x,H.z=Q*W,_.push(H.x,H.y,H.z),I.set(se,k,W).normalize(),v.push(I.x,I.y,I.z),S.push(ge,1-D),b.push(w++)}T.push(b)}for(let Z=0;Z<a;Z++)for(let b=0;b<l;b++){const D=T[b][Z],Q=T[b+1][Z],J=T[b+1][Z+1],ge=T[b][Z+1];m.push(D,Q,ge),m.push(Q,J,ge),O+=6}p.addGroup(y,O,0),y+=O}function R(I){const H=w,O=new Rt,k=new ee;let Z=0;const b=I===!0?e:t,D=I===!0?1:-1;for(let J=1;J<=a;J++)_.push(0,x*D,0),v.push(0,D,0),S.push(.5,.5),w++;const Q=w;for(let J=0;J<=a;J++){const j=J/a*h+u,se=Math.cos(j),W=Math.sin(j);k.x=b*W,k.y=x*D,k.z=b*se,_.push(k.x,k.y,k.z),v.push(0,D,0),O.x=se*.5+.5,O.y=W*.5*D+.5,S.push(O.x,O.y),w++}for(let J=0;J<a;J++){const ge=H+J,j=Q+J;I===!0?m.push(j,j+1,ge):m.push(j+1,j,ge),Z+=3}p.addGroup(y,Z,I===!0?1:2),y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class od extends _i{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+u,Math.PI);let p=0;const m=[],_=new ee,v=new ee,S=[],w=[],T=[],x=[];for(let y=0;y<=r;y++){const U=[],R=y/r;let I=0;y===0&&f===0?I=.5/t:y===r&&h===Math.PI&&(I=-.5/t);for(let H=0;H<=t;H++){const O=H/t;_.x=-e*Math.cos(a+O*l)*Math.sin(f+R*u),_.y=e*Math.cos(f+R*u),_.z=e*Math.sin(a+O*l)*Math.sin(f+R*u),w.push(_.x,_.y,_.z),v.copy(_).normalize(),T.push(v.x,v.y,v.z),x.push(O+I,1-R),U.push(p++)}m.push(U)}for(let y=0;y<r;y++)for(let U=0;U<t;U++){const R=m[y][U+1],I=m[y][U],H=m[y+1][U],O=m[y+1][U+1];(y!==0||f>0)&&S.push(R,I,O),(y!==r-1||h<Math.PI)&&S.push(I,H,O)}this.setIndex(S),this.setAttribute("position",new fn(w,3)),this.setAttribute("normal",new fn(T,3)),this.setAttribute("uv",new fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hg extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ma extends Zr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RT extends Zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Kl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function CT(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function LT(s){function e(a,l){return s[a]-s[l]}const t=s.length,r=new Array(t);for(let a=0;a!==t;++a)r[a]=a;return r.sort(e),r}function pg(s,e,t){const r=s.length,a=new s.constructor(r);for(let l=0,f=0;f!==r;++l){const u=t[l]*e;for(let h=0;h!==e;++h)a[f++]=s[u+h]}return a}function c_(s,e,t,r){let a=1,l=s[0];for(;l!==void 0&&l[r]===void 0;)l=s[a++];if(l===void 0)return;let f=l[r];if(f!==void 0)if(Array.isArray(f))do f=l[r],f!==void 0&&(e.push(l.time),t.push.apply(t,f)),l=s[a++];while(l!==void 0);else if(f.toArray!==void 0)do f=l[r],f!==void 0&&(e.push(l.time),f.toArray(t,t.length)),l=s[a++];while(l!==void 0);else do f=l[r],f!==void 0&&(e.push(l.time),t.push(f)),l=s[a++];while(l!==void 0)}class yc{constructor(e,t,r,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,a=t[r],l=t[r-1];e:{t:{let f;n:{i:if(!(e<a)){for(let u=r+2;;){if(a===void 0){if(e<l)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===u)break;if(l=a,a=t[++r],e<a)break t}f=t.length;break n}if(!(e>=l)){const u=t[1];e<u&&(r=2,l=u);for(let h=r-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===h)break;if(a=l,l=t[--r-1],e>=l)break t}f=r,r=0;break n}break e}for(;r<f;){const u=r+f>>>1;e<t[u]?f=u:r=u+1}if(a=t[r],l=t[r-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,l,a)}return this.interpolate_(r,l,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a;for(let f=0;f!==a;++f)t[f]=r[l+f];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class PT extends yc{constructor(e,t,r,a){super(e,t,r,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fm,endingEnd:fm}}intervalChanged_(e,t,r){const a=this.parameterPositions;let l=e-2,f=e+1,u=a[l],h=a[f];if(u===void 0)switch(this.getSettings_().endingStart){case dm:l=e,u=2*t-r;break;case hm:l=a.length-2,u=t+a[l]-a[l+1];break;default:l=e,u=r}if(h===void 0)switch(this.getSettings_().endingEnd){case dm:f=e,h=2*r-t;break;case hm:f=1,h=r+a[1]-a[0];break;default:f=e-1,h=t}const p=(r-t)*.5,m=this.valueSize;this._weightPrev=p/(t-u),this._weightNext=p/(h-r),this._offsetPrev=l*m,this._offsetNext=f*m}interpolate_(e,t,r,a){const l=this.resultBuffer,f=this.sampleValues,u=this.valueSize,h=e*u,p=h-u,m=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,S=this._weightNext,w=(r-t)/(a-t),T=w*w,x=T*w,y=-v*x+2*v*T-v*w,U=(1+v)*x+(-1.5-2*v)*T+(-.5+v)*w+1,R=(-1-S)*x+(1.5+S)*T+.5*w,I=S*x-S*T;for(let H=0;H!==u;++H)l[H]=y*f[m+H]+U*f[p+H]+R*f[h+H]+I*f[_+H];return l}}class NT extends yc{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e,t,r,a){const l=this.resultBuffer,f=this.sampleValues,u=this.valueSize,h=e*u,p=h-u,m=(r-t)/(a-t),_=1-m;for(let v=0;v!==u;++v)l[v]=f[p+v]*_+f[h+v]*m;return l}}class DT extends yc{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zi{constructor(e,t,r,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kl(t,this.TimeBufferType),this.values=Kl(r,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Kl(e.times,Array),values:Kl(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(r.interpolation=a)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new DT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new NT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new PT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ic:t=this.InterpolantFactoryMethodDiscrete;break;case rc:t=this.InterpolantFactoryMethodLinear;break;case cf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ic;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return cf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,a=t.length;r!==a;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,a=t.length;r!==a;++r)t[r]*=e}return this}trim(e,t){const r=this.times,a=r.length;let l=0,f=a-1;for(;l!==a&&r[l]<e;)++l;for(;f!==-1&&r[f]>t;)--f;if(++f,l!==0||f!==a){l>=f&&(f=Math.max(f,1),l=f-1);const u=this.getValueSize();this.times=r.slice(l,f),this.values=this.values.slice(l*u,f*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,a=this.values,l=r.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let f=null;for(let u=0;u!==l;u++){const h=r[u];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,h),e=!1;break}if(f!==null&&f>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,h,f),e=!1;break}f=h}if(a!==void 0&&CT(a))for(let u=0,h=a.length;u!==h;++u){const p=a[u];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,p),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),a=this.getInterpolation()===cf,l=e.length-1;let f=1;for(let u=1;u<l;++u){let h=!1;const p=e[u],m=e[u+1];if(p!==m&&(u!==1||p!==e[0]))if(a)h=!0;else{const _=u*r,v=_-r,S=_+r;for(let w=0;w!==r;++w){const T=t[_+w];if(T!==t[v+w]||T!==t[S+w]){h=!0;break}}}if(h){if(u!==f){e[f]=e[u];const _=u*r,v=f*r;for(let S=0;S!==r;++S)t[v+S]=t[_+S]}++f}}if(l>0){e[f]=e[l];for(let u=l*r,h=f*r,p=0;p!==r;++p)t[h+p]=t[u+p];++f}return f!==e.length?(this.times=e.slice(0,f),this.values=t.slice(0,f*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,a=new r(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=rc;class Oo extends Zi{}Oo.prototype.ValueTypeName="bool";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=ic;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class u_ extends Zi{}u_.prototype.ValueTypeName="color";class fc extends Zi{}fc.prototype.ValueTypeName="number";class IT extends yc{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e,t,r,a){const l=this.resultBuffer,f=this.sampleValues,u=this.valueSize,h=(r-t)/(a-t);let p=e*u;for(let m=p+u;p!==m;p+=4)gi.slerpFlat(l,0,f,p-u,f,p,h);return l}}class ko extends Zi{InterpolantFactoryMethodLinear(e){return new IT(this.times,this.values,this.getValueSize(),e)}}ko.prototype.ValueTypeName="quaternion";ko.prototype.DefaultInterpolation=rc;ko.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends Zi{}Bo.prototype.ValueTypeName="string";Bo.prototype.ValueBufferType=Array;Bo.prototype.DefaultInterpolation=ic;Bo.prototype.InterpolantFactoryMethodLinear=void 0;Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Zi{}Do.prototype.ValueTypeName="vector";class mg{constructor(e,t=-1,r,a=qv){this.name=e,this.tracks=r,this.duration=t,this.blendMode=a,this.uuid=$r(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,a=1/(e.fps||1);for(let f=0,u=r.length;f!==u;++f)t.push(FT(r[f]).scale(a));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],r=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,f=r.length;l!==f;++l)t.push(Zi.toJSON(r[l]));return a}static CreateFromMorphTargetSequence(e,t,r,a){const l=t.length,f=[];for(let u=0;u<l;u++){let h=[],p=[];h.push((u+l-1)%l,u,(u+1)%l),p.push(0,1,0);const m=LT(h);h=pg(h,1,m),p=pg(p,1,m),!a&&h[0]===0&&(h.push(l),p.push(p[0])),f.push(new fc(".morphTargetInfluences["+t[u].name+"]",h,p).scale(1/r))}return new this(e,-1,f)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const a=e;r=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<r.length;a++)if(r[a].name===t)return r[a];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const a={},l=/^([\w-]*?)([\d]+)$/;for(let u=0,h=e.length;u<h;u++){const p=e[u],m=p.name.match(l);if(m&&m.length>1){const _=m[1];let v=a[_];v||(a[_]=v=[]),v.push(p)}}const f=[];for(const u in a)f.push(this.CreateFromMorphTargetSequence(u,a[u],t,r));return f}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(_,v,S,w,T){if(S.length!==0){const x=[],y=[];c_(S,x,y,w),x.length!==0&&T.push(new _(v,x,y))}},a=[],l=e.name||"default",f=e.fps||30,u=e.blendMode;let h=e.length||-1;const p=e.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const S={};let w;for(w=0;w<v.length;w++)if(v[w].morphTargets)for(let T=0;T<v[w].morphTargets.length;T++)S[v[w].morphTargets[T]]=-1;for(const T in S){const x=[],y=[];for(let U=0;U!==v[w].morphTargets.length;++U){const R=v[w];x.push(R.time),y.push(R.morphTarget===T?1:0)}a.push(new fc(".morphTargetInfluence["+T+"]",x,y))}h=S.length*f}else{const S=".bones["+t[_].name+"]";r(Do,S+".position",v,"pos",a),r(ko,S+".quaternion",v,"rot",a),r(Do,S+".scale",v,"scl",a)}}return a.length===0?null:new this(l,h,a,u)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,a=e.length;r!==a;++r){const l=this.tracks[r];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function UT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fc;case"vector":case"vector2":case"vector3":case"vector4":return Do;case"color":return u_;case"quaternion":return ko;case"bool":case"boolean":return Oo;case"string":return Bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function FT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=UT(s.type);if(s.times===void 0){const t=[],r=[];c_(s.keys,t,r,"value"),s.times=t,s.values=r}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const dc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class OT{constructor(e,t,r){const a=this;let l=!1,f=0,u=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){u++,l===!1&&a.onStart!==void 0&&a.onStart(m,f,u),l=!0},this.itemEnd=function(m){f++,a.onProgress!==void 0&&a.onProgress(m,f,u),f===u&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],w=p[_+1];if(S.global&&(S.lastIndex=0),S.test(m))return w}return null}}}const f_=new OT;class Kr{constructor(e){this.manager=e!==void 0?e:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const mr={};class kT extends Error{constructor(e,t){super(e),this.response=t}}class ad extends Kr{constructor(e){super(e)}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=dc.get(e);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(mr[e]!==void 0){mr[e].push({onLoad:t,onProgress:r,onError:a});return}mr[e]=[],mr[e].push({onLoad:t,onProgress:r,onError:a});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,h=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const m=mr[e],_=p.body.getReader(),v=p.headers.get("Content-Length")||p.headers.get("X-File-Size"),S=v?parseInt(v):0,w=S!==0;let T=0;const x=new ReadableStream({start(y){U();function U(){_.read().then(({done:R,value:I})=>{if(R)y.close();else{T+=I.byteLength;const H=new ProgressEvent("progress",{lengthComputable:w,loaded:T,total:S});for(let O=0,k=m.length;O<k;O++){const Z=m[O];Z.onProgress&&Z.onProgress(H)}y.enqueue(I),U()}})}}});return new Response(x)}else throw new kT(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return p.json();default:if(u===void 0)return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(u),v=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(w=>S.decode(w))}}}).then(p=>{dc.add(e,p);const m=mr[e];delete mr[e];for(let _=0,v=m.length;_<v;_++){const S=m[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const m=mr[e];if(m===void 0)throw this.manager.itemError(e),p;delete mr[e];for(let _=0,v=m.length;_<v;_++){const S=m[_];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class BT extends Kr{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,f=dc.get(e);if(f!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(f),l.manager.itemEnd(e)},0),f;const u=Ta("img");function h(){m(),dc.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(_){m(),a&&a(_),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){u.removeEventListener("load",h,!1),u.removeEventListener("error",p,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),l.manager.itemStart(e),u.src=e,u}}class zT extends Kr{constructor(e){super(e)}load(e,t,r,a){const l=this,f=new a_,u=new ad(this.manager);return u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setPath(this.path),u.setWithCredentials(l.withCredentials),u.load(e,function(h){let p;try{p=l.parse(h)}catch(m){if(a!==void 0)a(m);else{console.error(m);return}}p.image!==void 0?f.image=p.image:p.data!==void 0&&(f.image.width=p.width,f.image.height=p.height,f.image.data=p.data),f.wrapS=p.wrapS!==void 0?p.wrapS:ei,f.wrapT=p.wrapT!==void 0?p.wrapT:ei,f.magFilter=p.magFilter!==void 0?p.magFilter:Qn,f.minFilter=p.minFilter!==void 0?p.minFilter:Qn,f.anisotropy=p.anisotropy!==void 0?p.anisotropy:1,p.colorSpace!==void 0?f.colorSpace=p.colorSpace:p.encoding!==void 0&&(f.encoding=p.encoding),p.flipY!==void 0&&(f.flipY=p.flipY),p.format!==void 0&&(f.format=p.format),p.type!==void 0&&(f.type=p.type),p.mipmaps!==void 0&&(f.mipmaps=p.mipmaps,f.minFilter=Ts),p.mipmapCount===1&&(f.minFilter=Qn),p.generateMipmaps!==void 0&&(f.generateMipmaps=p.generateMipmaps),f.needsUpdate=!0,t&&t(f,p)},r,a),f}}class d_ extends Kr{constructor(e){super(e)}load(e,t,r,a){const l=new ti,f=new BT(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(u){l.image=u,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class xc extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ff=new Ut,gg=new ee,_g=new ee;class ld{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ed,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(gg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),Ff.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HT extends ld{constructor(){super(new jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Po*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class VT extends xc{constructor(e,t,r=0,a=Math.PI/3,l=0,f=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=r,this.angle=a,this.penumbra=l,this.decay=f,this.map=null,this.shadow=new HT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vg=new Ut,va=new ee,Of=new ee;class GT extends ld{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new tn(2,1,1,1),new tn(0,1,1,1),new tn(3,1,1,1),new tn(1,1,1,1),new tn(3,0,1,1),new tn(1,0,1,1)],this._cubeDirections=[new ee(1,0,0),new ee(-1,0,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,1,0),new ee(0,-1,0)],this._cubeUps=[new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,0,1),new ee(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),r.position.copy(va),Of.copy(r.position),Of.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Of),r.updateMatrixWorld(),a.makeTranslation(-va.x,-va.y,-va.z),vg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vg)}}class WT extends xc{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new GT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class XT extends ld{constructor(){super(new nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h_ extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new XT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class p_ extends xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class m_{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,a=e.length;r<a;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yg{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Xn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);const xg={type:"change"},kf={type:"start"},Sg={type:"end"},$l=new _c,Mg=new Wr,jT=Math.cos(70*Mo.DEG2RAD);class qT extends bs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",lt),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",lt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(xg),r.update(),l=a.NONE},this.update=function(){const V=new ee,Ue=new gi().setFromUnitVectors(e.up,new ee(0,1,0)),rt=Ue.clone().invert(),Ye=new ee,Ce=new gi,q=new ee,Ie=2*Math.PI;return function(gt=null){const ht=r.object.position;V.copy(ht).sub(r.target),V.applyQuaternion(Ue),u.setFromVector3(V),r.autoRotate&&l===a.NONE&&J(D(gt)),r.enableDamping?(u.theta+=h.theta*r.dampingFactor,u.phi+=h.phi*r.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let Dt=r.minAzimuthAngle,It=r.maxAzimuthAngle;isFinite(Dt)&&isFinite(It)&&(Dt<-Math.PI?Dt+=Ie:Dt>Math.PI&&(Dt-=Ie),It<-Math.PI?It+=Ie:It>Math.PI&&(It-=Ie),Dt<=It?u.theta=Math.max(Dt,Math.min(It,u.theta)):u.theta=u.theta>(Dt+It)/2?Math.max(Dt,u.theta):Math.min(It,u.theta)),u.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,u.phi)),u.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(m,r.dampingFactor):r.target.add(m),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&O||r.object.isOrthographicCamera?u.radius=te(u.radius):u.radius=te(u.radius*p),V.setFromSpherical(u),V.applyQuaternion(rt),ht.copy(r.target).add(V),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,m.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),m.set(0,0,0));let Bt=!1;if(r.zoomToCursor&&O){let Qt=null;if(r.object.isPerspectiveCamera){const Ot=V.length();Qt=te(Ot*p);const nn=Ot-Qt;r.object.position.addScaledVector(I,nn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Ot=new ee(H.x,H.y,0);Ot.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),Bt=!0;const nn=new ee(H.x,H.y,0);nn.unproject(r.object),r.object.position.sub(nn).add(Ot),r.object.updateMatrixWorld(),Qt=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Qt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Qt).add(r.object.position):($l.origin.copy(r.object.position),$l.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot($l.direction))<jT?e.lookAt(r.target):(Mg.setFromNormalAndCoplanarPoint(r.object.up,r.target),$l.intersectPlane(Mg,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),Bt=!0);return p=1,O=!1,Bt||Ye.distanceToSquared(r.object.position)>f||8*(1-Ce.dot(r.object.quaternion))>f||q.distanceToSquared(r.target)>0?(r.dispatchEvent(xg),Ye.copy(r.object.position),Ce.copy(r.object.quaternion),q.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ft),r.domElement.removeEventListener("pointerdown",z),r.domElement.removeEventListener("pointercancel",fe),r.domElement.removeEventListener("wheel",Pe),r.domElement.removeEventListener("pointermove",L),r.domElement.removeEventListener("pointerup",fe),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",lt),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const f=1e-6,u=new yg,h=new yg;let p=1;const m=new ee,_=new Rt,v=new Rt,S=new Rt,w=new Rt,T=new Rt,x=new Rt,y=new Rt,U=new Rt,R=new Rt,I=new ee,H=new Rt;let O=!1;const k=[],Z={};let b=!1;function D(V){return V!==null?2*Math.PI/60*r.autoRotateSpeed*V:2*Math.PI/60/60*r.autoRotateSpeed}function Q(V){const Ue=Math.abs(V*.01);return Math.pow(.95,r.zoomSpeed*Ue)}function J(V){h.theta-=V}function ge(V){h.phi-=V}const j=function(){const V=new ee;return function(rt,Ye){V.setFromMatrixColumn(Ye,0),V.multiplyScalar(-rt),m.add(V)}}(),se=function(){const V=new ee;return function(rt,Ye){r.screenSpacePanning===!0?V.setFromMatrixColumn(Ye,1):(V.setFromMatrixColumn(Ye,0),V.crossVectors(r.object.up,V)),V.multiplyScalar(rt),m.add(V)}}(),W=function(){const V=new ee;return function(rt,Ye){const Ce=r.domElement;if(r.object.isPerspectiveCamera){const q=r.object.position;V.copy(q).sub(r.target);let Ie=V.length();Ie*=Math.tan(r.object.fov/2*Math.PI/180),j(2*rt*Ie/Ce.clientHeight,r.object.matrix),se(2*Ye*Ie/Ce.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(j(rt*(r.object.right-r.object.left)/r.object.zoom/Ce.clientWidth,r.object.matrix),se(Ye*(r.object.top-r.object.bottom)/r.object.zoom/Ce.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function de(V){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function X(V){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ie(V,Ue){if(!r.zoomToCursor)return;O=!0;const rt=r.domElement.getBoundingClientRect(),Ye=V-rt.left,Ce=Ue-rt.top,q=rt.width,Ie=rt.height;H.x=Ye/q*2-1,H.y=-(Ce/Ie)*2+1,I.set(H.x,H.y,1).unproject(r.object).sub(r.object.position).normalize()}function te(V){return Math.max(r.minDistance,Math.min(r.maxDistance,V))}function B(V){_.set(V.clientX,V.clientY)}function Y(V){ie(V.clientX,V.clientX),y.set(V.clientX,V.clientY)}function K(V){w.set(V.clientX,V.clientY)}function re(V){v.set(V.clientX,V.clientY),S.subVectors(v,_).multiplyScalar(r.rotateSpeed);const Ue=r.domElement;J(2*Math.PI*S.x/Ue.clientHeight),ge(2*Math.PI*S.y/Ue.clientHeight),_.copy(v),r.update()}function ue(V){U.set(V.clientX,V.clientY),R.subVectors(U,y),R.y>0?de(Q(R.y)):R.y<0&&X(Q(R.y)),y.copy(U),r.update()}function he(V){T.set(V.clientX,V.clientY),x.subVectors(T,w).multiplyScalar(r.panSpeed),W(x.x,x.y),w.copy(T),r.update()}function Se(V){ie(V.clientX,V.clientY),V.deltaY<0?X(Q(V.deltaY)):V.deltaY>0&&de(Q(V.deltaY)),r.update()}function ce(V){let Ue=!1;switch(V.code){case r.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?ge(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):W(0,r.keyPanSpeed),Ue=!0;break;case r.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?ge(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):W(0,-r.keyPanSpeed),Ue=!0;break;case r.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?J(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):W(r.keyPanSpeed,0),Ue=!0;break;case r.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?J(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):W(-r.keyPanSpeed,0),Ue=!0;break}Ue&&(V.preventDefault(),r.update())}function Me(V){if(k.length===1)_.set(V.pageX,V.pageY);else{const Ue=Xe(V),rt=.5*(V.pageX+Ue.x),Ye=.5*(V.pageY+Ue.y);_.set(rt,Ye)}}function Te(V){if(k.length===1)w.set(V.pageX,V.pageY);else{const Ue=Xe(V),rt=.5*(V.pageX+Ue.x),Ye=.5*(V.pageY+Ue.y);w.set(rt,Ye)}}function qe(V){const Ue=Xe(V),rt=V.pageX-Ue.x,Ye=V.pageY-Ue.y,Ce=Math.sqrt(rt*rt+Ye*Ye);y.set(0,Ce)}function oe(V){r.enableZoom&&qe(V),r.enablePan&&Te(V)}function Ct(V){r.enableZoom&&qe(V),r.enableRotate&&Me(V)}function et(V){if(k.length==1)v.set(V.pageX,V.pageY);else{const rt=Xe(V),Ye=.5*(V.pageX+rt.x),Ce=.5*(V.pageY+rt.y);v.set(Ye,Ce)}S.subVectors(v,_).multiplyScalar(r.rotateSpeed);const Ue=r.domElement;J(2*Math.PI*S.x/Ue.clientHeight),ge(2*Math.PI*S.y/Ue.clientHeight),_.copy(v)}function at(V){if(k.length===1)T.set(V.pageX,V.pageY);else{const Ue=Xe(V),rt=.5*(V.pageX+Ue.x),Ye=.5*(V.pageY+Ue.y);T.set(rt,Ye)}x.subVectors(T,w).multiplyScalar(r.panSpeed),W(x.x,x.y),w.copy(T)}function Ve(V){const Ue=Xe(V),rt=V.pageX-Ue.x,Ye=V.pageY-Ue.y,Ce=Math.sqrt(rt*rt+Ye*Ye);U.set(0,Ce),R.set(0,Math.pow(U.y/y.y,r.zoomSpeed)),de(R.y),y.copy(U);const q=(V.pageX+Ue.x)*.5,Ie=(V.pageY+Ue.y)*.5;ie(q,Ie)}function Pt(V){r.enableZoom&&Ve(V),r.enablePan&&at(V)}function vt(V){r.enableZoom&&Ve(V),r.enableRotate&&et(V)}function z(V){r.enabled!==!1&&(k.length===0&&(r.domElement.setPointerCapture(V.pointerId),r.domElement.addEventListener("pointermove",L),r.domElement.addEventListener("pointerup",fe)),Nt(V),V.pointerType==="touch"?Et(V):Re(V))}function L(V){r.enabled!==!1&&(V.pointerType==="touch"?we(V):Ae(V))}function fe(V){Mt(V),k.length===0&&(r.domElement.releasePointerCapture(V.pointerId),r.domElement.removeEventListener("pointermove",L),r.domElement.removeEventListener("pointerup",fe)),r.dispatchEvent(Sg),l=a.NONE}function Re(V){let Ue;switch(V.button){case 0:Ue=r.mouseButtons.LEFT;break;case 1:Ue=r.mouseButtons.MIDDLE;break;case 2:Ue=r.mouseButtons.RIGHT;break;default:Ue=-1}switch(Ue){case to.DOLLY:if(r.enableZoom===!1)return;Y(V),l=a.DOLLY;break;case to.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(r.enablePan===!1)return;K(V),l=a.PAN}else{if(r.enableRotate===!1)return;B(V),l=a.ROTATE}break;case to.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(r.enableRotate===!1)return;B(V),l=a.ROTATE}else{if(r.enablePan===!1)return;K(V),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(kf)}function Ae(V){switch(l){case a.ROTATE:if(r.enableRotate===!1)return;re(V);break;case a.DOLLY:if(r.enableZoom===!1)return;ue(V);break;case a.PAN:if(r.enablePan===!1)return;he(V);break}}function Pe(V){r.enabled===!1||r.enableZoom===!1||l!==a.NONE||(V.preventDefault(),r.dispatchEvent(kf),Se(nt(V)),r.dispatchEvent(Sg))}function nt(V){const Ue=V.deltaMode,rt={clientX:V.clientX,clientY:V.clientY,deltaY:V.deltaY};switch(Ue){case 1:rt.deltaY*=16;break;case 2:rt.deltaY*=100;break}return V.ctrlKey&&!b&&(rt.deltaY*=10),rt}function ke(V){V.key==="Control"&&(b=!0,document.addEventListener("keyup",We,{passive:!0,capture:!0}))}function We(V){V.key==="Control"&&(b=!1,document.removeEventListener("keyup",We,{passive:!0,capture:!0}))}function lt(V){r.enabled===!1||r.enablePan===!1||ce(V)}function Et(V){switch(ut(V),k.length){case 1:switch(r.touches.ONE){case no.ROTATE:if(r.enableRotate===!1)return;Me(V),l=a.TOUCH_ROTATE;break;case no.PAN:if(r.enablePan===!1)return;Te(V),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(r.touches.TWO){case no.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;oe(V),l=a.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ct(V),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(kf)}function we(V){switch(ut(V),l){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;et(V),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;at(V),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Pt(V),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;vt(V),r.update();break;default:l=a.NONE}}function ft(V){r.enabled!==!1&&V.preventDefault()}function Nt(V){k.push(V.pointerId)}function Mt(V){delete Z[V.pointerId];for(let Ue=0;Ue<k.length;Ue++)if(k[Ue]==V.pointerId){k.splice(Ue,1);return}}function ut(V){let Ue=Z[V.pointerId];Ue===void 0&&(Ue=new Rt,Z[V.pointerId]=Ue),Ue.set(V.pageX,V.pageY)}function Xe(V){const Ue=V.pointerId===k[0]?k[1]:k[0];return Z[Ue]}r.domElement.addEventListener("contextmenu",ft),r.domElement.addEventListener("pointerdown",z),r.domElement.addEventListener("pointercancel",fe),r.domElement.addEventListener("wheel",Pe,{passive:!1}),document.addEventListener("keydown",ke,{passive:!0,capture:!0}),this.update()}}class g_ extends Kr{constructor(e){super(e)}load(e,t,r,a){const l=this,f=new ad(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(u){try{t(l.parse(u))}catch(h){a?a(h):console.error(h),l.manager.itemError(e)}},r,a)}parse(e){function t(p){const m=new DataView(p),_=32/8*3+32/8*3*3+16/8,v=m.getUint32(80,!0);if(80+32/8+v*_===m.byteLength)return!0;const w=[115,111,108,105,100];for(let T=0;T<5;T++)if(r(w,m,T))return!1;return!0}function r(p,m,_){for(let v=0,S=p.length;v<S;v++)if(p[v]!==m.getUint8(_+v))return!1;return!0}function a(p){const m=new DataView(p),_=m.getUint32(80,!0);let v,S,w,T=!1,x,y,U,R,I;for(let Q=0;Q<70;Q++)m.getUint32(Q,!1)==1129270351&&m.getUint8(Q+4)==82&&m.getUint8(Q+5)==61&&(T=!0,x=new Float32Array(_*3*3),y=m.getUint8(Q+6)/255,U=m.getUint8(Q+7)/255,R=m.getUint8(Q+8)/255,I=m.getUint8(Q+9)/255);const H=84,O=12*4+2,k=new _i,Z=new Float32Array(_*3*3),b=new Float32Array(_*3*3),D=new Ft;for(let Q=0;Q<_;Q++){const J=H+Q*O,ge=m.getFloat32(J,!0),j=m.getFloat32(J+4,!0),se=m.getFloat32(J+8,!0);if(T){const W=m.getUint16(J+48,!0);W&32768?(v=y,S=U,w=R):(v=(W&31)/31,S=(W>>5&31)/31,w=(W>>10&31)/31)}for(let W=1;W<=3;W++){const de=J+W*12,X=Q*3*3+(W-1)*3;Z[X]=m.getFloat32(de,!0),Z[X+1]=m.getFloat32(de+4,!0),Z[X+2]=m.getFloat32(de+8,!0),b[X]=ge,b[X+1]=j,b[X+2]=se,T&&(D.set(v,S,w).convertSRGBToLinear(),x[X]=D.r,x[X+1]=D.g,x[X+2]=D.b)}}return k.setAttribute("position",new mi(Z,3)),k.setAttribute("normal",new mi(b,3)),T&&(k.setAttribute("color",new mi(x,3)),k.hasColors=!0,k.alpha=I),k}function l(p){const m=new _i,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let w=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+T+T+T,"g"),y=new RegExp("normal"+T+T+T,"g"),U=[],R=[],I=[],H=new ee;let O,k=0,Z=0,b=0;for(;(O=_.exec(p))!==null;){Z=b;const D=O[0],Q=(O=S.exec(D))!==null?O[1]:"";for(I.push(Q);(O=v.exec(D))!==null;){let j=0,se=0;const W=O[0];for(;(O=y.exec(W))!==null;)H.x=parseFloat(O[1]),H.y=parseFloat(O[2]),H.z=parseFloat(O[3]),se++;for(;(O=x.exec(W))!==null;)U.push(parseFloat(O[1]),parseFloat(O[2]),parseFloat(O[3])),R.push(H.x,H.y,H.z),j++,b++;se!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+w),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+w),w++}const J=Z,ge=b-Z;m.userData.groupNames=I,m.addGroup(J,ge,k),k++}return m.setAttribute("position",new fn(U,3)),m.setAttribute("normal",new fn(R,3)),m}function f(p){return typeof p!="string"?new TextDecoder().decode(p):p}function u(p){if(typeof p=="string"){const m=new Uint8Array(p.length);for(let _=0;_<p.length;_++)m[_]=p.charCodeAt(_)&255;return m.buffer||m}else return p}const h=u(e);return t(h)?a(h):l(f(e))}}class Eg extends zT{constructor(e){super(e)}parse(e){function t(W){switch(W.image_type){case v:case T:if(W.colormap_length>256||W.colormap_size!==24||W.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case S:case w:case x:case y:if(W.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case _:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+W.image_type)}if(W.width<=0||W.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(W.pixel_size!==8&&W.pixel_size!==16&&W.pixel_size!==24&&W.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+W.pixel_size)}function r(W,de,X,ie,te){let B,Y;const K=X.pixel_size>>3,re=X.width*X.height*K;if(de&&(Y=te.subarray(ie,ie+=X.colormap_length*(X.colormap_size>>3))),W){B=new Uint8Array(re);let ue,he,Se,ce=0;const Me=new Uint8Array(K);for(;ce<re;)if(ue=te[ie++],he=(ue&127)+1,ue&128){for(Se=0;Se<K;++Se)Me[Se]=te[ie++];for(Se=0;Se<he;++Se)B.set(Me,ce+Se*K);ce+=K*he}else{for(he*=K,Se=0;Se<he;++Se)B[ce+Se]=te[ie++];ce+=he}}else B=te.subarray(ie,ie+=de?X.width*X.height:re);return{pixel_data:B,palettes:Y}}function a(W,de,X,ie,te,B,Y,K,re){const ue=re;let he,Se=0,ce,Me;const Te=D.width;for(Me=de;Me!==ie;Me+=X)for(ce=te;ce!==Y;ce+=B,Se++)he=K[Se],W[(ce+Te*Me)*4+3]=255,W[(ce+Te*Me)*4+2]=ue[he*3+0],W[(ce+Te*Me)*4+1]=ue[he*3+1],W[(ce+Te*Me)*4+0]=ue[he*3+2];return W}function l(W,de,X,ie,te,B,Y,K){let re,ue=0,he,Se;const ce=D.width;for(Se=de;Se!==ie;Se+=X)for(he=te;he!==Y;he+=B,ue+=2)re=K[ue+0]+(K[ue+1]<<8),W[(he+ce*Se)*4+0]=(re&31744)>>7,W[(he+ce*Se)*4+1]=(re&992)>>2,W[(he+ce*Se)*4+2]=(re&31)<<3,W[(he+ce*Se)*4+3]=re&32768?0:255;return W}function f(W,de,X,ie,te,B,Y,K){let re=0,ue,he;const Se=D.width;for(he=de;he!==ie;he+=X)for(ue=te;ue!==Y;ue+=B,re+=3)W[(ue+Se*he)*4+3]=255,W[(ue+Se*he)*4+2]=K[re+0],W[(ue+Se*he)*4+1]=K[re+1],W[(ue+Se*he)*4+0]=K[re+2];return W}function u(W,de,X,ie,te,B,Y,K){let re=0,ue,he;const Se=D.width;for(he=de;he!==ie;he+=X)for(ue=te;ue!==Y;ue+=B,re+=4)W[(ue+Se*he)*4+2]=K[re+0],W[(ue+Se*he)*4+1]=K[re+1],W[(ue+Se*he)*4+0]=K[re+2],W[(ue+Se*he)*4+3]=K[re+3];return W}function h(W,de,X,ie,te,B,Y,K){let re,ue=0,he,Se;const ce=D.width;for(Se=de;Se!==ie;Se+=X)for(he=te;he!==Y;he+=B,ue++)re=K[ue],W[(he+ce*Se)*4+0]=re,W[(he+ce*Se)*4+1]=re,W[(he+ce*Se)*4+2]=re,W[(he+ce*Se)*4+3]=255;return W}function p(W,de,X,ie,te,B,Y,K){let re=0,ue,he;const Se=D.width;for(he=de;he!==ie;he+=X)for(ue=te;ue!==Y;ue+=B,re+=2)W[(ue+Se*he)*4+0]=K[re+0],W[(ue+Se*he)*4+1]=K[re+0],W[(ue+Se*he)*4+2]=K[re+0],W[(ue+Se*he)*4+3]=K[re+1];return W}function m(W,de,X,ie,te){let B,Y,K,re,ue,he;switch((D.flags&U)>>R){default:case O:B=0,K=1,ue=de,Y=0,re=1,he=X;break;case I:B=0,K=1,ue=de,Y=X-1,re=-1,he=-1;break;case k:B=de-1,K=-1,ue=-1,Y=0,re=1,he=X;break;case H:B=de-1,K=-1,ue=-1,Y=X-1,re=-1,he=-1;break}if(ge)switch(D.pixel_size){case 8:h(W,Y,re,he,B,K,ue,ie);break;case 16:p(W,Y,re,he,B,K,ue,ie);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(D.pixel_size){case 8:a(W,Y,re,he,B,K,ue,ie,te);break;case 16:l(W,Y,re,he,B,K,ue,ie);break;case 24:f(W,Y,re,he,B,K,ue,ie);break;case 32:u(W,Y,re,he,B,K,ue,ie);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return W}const _=0,v=1,S=2,w=3,T=9,x=10,y=11,U=48,R=4,I=0,H=1,O=2,k=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let Z=0;const b=new Uint8Array(e),D={id_length:b[Z++],colormap_type:b[Z++],image_type:b[Z++],colormap_index:b[Z++]|b[Z++]<<8,colormap_length:b[Z++]|b[Z++]<<8,colormap_size:b[Z++],origin:[b[Z++]|b[Z++]<<8,b[Z++]|b[Z++]<<8],width:b[Z++]|b[Z++]<<8,height:b[Z++]|b[Z++]<<8,pixel_size:b[Z++],flags:b[Z++]};if(t(D),D.id_length+Z>e.length)throw new Error("THREE.TGALoader: No data.");Z+=D.id_length;let Q=!1,J=!1,ge=!1;switch(D.image_type){case T:Q=!0,J=!0;break;case v:J=!0;break;case x:Q=!0;break;case S:break;case y:Q=!0,ge=!0;break;case w:ge=!0;break}const j=new Uint8Array(D.width*D.height*4),se=r(Q,J,D,Z,b);return m(j,D.width,D.height,se.pixel_data,se.palettes),{data:j,width:D.width,height:D.height,flipY:!0,generateMipmaps:!0,minFilter:Ts}}}class YT extends Kr{load(e,t,r,a){const l=this,f=l.path===""?m_.extractUrlBase(e):l.path,u=new ad(l.manager);u.setPath(l.path),u.setRequestHeader(l.requestHeader),u.setWithCredentials(l.withCredentials),u.load(e,function(h){try{t(l.parse(h,f))}catch(p){a?a(p):console.error(p),l.manager.itemError(e)}},r,a)}parse(e,t){function r(E,M){const P=[],C=E.childNodes;for(let N=0,me=C.length;N<me;N++){const Ee=C[N];Ee.nodeName===M&&P.push(Ee)}return P}function a(E){if(E.length===0)return[];const M=E.trim().split(/\s+/),P=new Array(M.length);for(let C=0,N=M.length;C<N;C++)P[C]=M[C];return P}function l(E){if(E.length===0)return[];const M=E.trim().split(/\s+/),P=new Array(M.length);for(let C=0,N=M.length;C<N;C++)P[C]=parseFloat(M[C]);return P}function f(E){if(E.length===0)return[];const M=E.trim().split(/\s+/),P=new Array(M.length);for(let C=0,N=M.length;C<N;C++)P[C]=parseInt(M[C]);return P}function u(E){return E.substring(1)}function h(){return"three_default_"+wa++}function p(E){return Object.keys(E).length===0}function m(E){return{unit:_(r(E,"unit")[0]),upAxis:v(r(E,"up_axis")[0])}}function _(E){return E!==void 0&&E.hasAttribute("meter")===!0?parseFloat(E.getAttribute("meter")):1}function v(E){return E!==void 0?E.textContent:"Y_UP"}function S(E,M,P,C){const N=r(E,M)[0];if(N!==void 0){const me=r(N,P);for(let Ee=0;Ee<me.length;Ee++)C(me[Ee])}}function w(E,M){for(const P in E){const C=E[P];C.build=M(E[P])}}function T(E,M){return E.build!==void 0||(E.build=M(E)),E.build}function x(E){const M={sources:{},samplers:{},channels:{}};let P=!1;for(let C=0,N=E.childNodes.length;C<N;C++){const me=E.childNodes[C];if(me.nodeType!==1)continue;let Ee;switch(me.nodeName){case"source":Ee=me.getAttribute("id"),M.sources[Ee]=q(me);break;case"sampler":Ee=me.getAttribute("id"),M.samplers[Ee]=y(me);break;case"channel":Ee=me.getAttribute("target"),M.channels[Ee]=U(me);break;case"animation":x(me),P=!0;break;default:console.log(me)}}P===!1&&(yt.animations[E.getAttribute("id")||Mo.generateUUID()]=M)}function y(E){const M={inputs:{}};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"input":const me=u(N.getAttribute("source")),Ee=N.getAttribute("semantic");M.inputs[Ee]=me;break}}return M}function U(E){const M={};let C=E.getAttribute("target").split("/");const N=C.shift();let me=C.shift();const Ee=me.indexOf("(")!==-1,Ge=me.indexOf(".")!==-1;if(Ge)C=me.split("."),me=C.shift(),M.member=C.shift();else if(Ee){const Oe=me.split("(");me=Oe.shift();for(let He=0;He<Oe.length;He++)Oe[He]=parseInt(Oe[He].replace(/\)/,""));M.indices=Oe}return M.id=N,M.sid=me,M.arraySyntax=Ee,M.memberSyntax=Ge,M.sampler=u(E.getAttribute("source")),M}function R(E){const M=[],P=E.channels,C=E.samplers,N=E.sources;for(const me in P)if(P.hasOwnProperty(me)){const Ee=P[me],Ge=C[Ee.sampler],Oe=Ge.inputs.INPUT,He=Ge.inputs.OUTPUT,Qe=N[Oe],Ne=N[He],st=H(Ee,Qe,Ne);D(st,M)}return M}function I(E){return T(yt.animations[E],R)}function H(E,M,P){const C=yt.nodes[E.id],N=At(C.id),me=C.transforms[E.sid],Ee=C.matrix.clone().transpose();let Ge,Oe,He,Qe,Ne,st;const Je={};switch(me){case"matrix":for(He=0,Qe=M.array.length;He<Qe;He++)if(Ge=M.array[He],Oe=He*P.stride,Je[Ge]===void 0&&(Je[Ge]={}),E.arraySyntax===!0){const Zt=P.array[Oe],Yt=E.indices[0]+4*E.indices[1];Je[Ge][Yt]=Zt}else for(Ne=0,st=P.stride;Ne<st;Ne++)Je[Ge][Ne]=P.array[Oe+Ne];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',me);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',me);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',me);break}const mt=O(Je,Ee);return{name:N.uuid,keyframes:mt}}function O(E,M){const P=[];for(const N in E)P.push({time:parseFloat(N),value:E[N]});P.sort(C);for(let N=0;N<16;N++)Q(P,N,M.elements[N]);return P;function C(N,me){return N.time-me.time}}const k=new ee,Z=new ee,b=new gi;function D(E,M){const P=E.keyframes,C=E.name,N=[],me=[],Ee=[],Ge=[];for(let Oe=0,He=P.length;Oe<He;Oe++){const Qe=P[Oe],Ne=Qe.time,st=Qe.value;Ke.fromArray(st).transpose(),Ke.decompose(k,b,Z),N.push(Ne),me.push(k.x,k.y,k.z),Ee.push(b.x,b.y,b.z,b.w),Ge.push(Z.x,Z.y,Z.z)}return me.length>0&&M.push(new Do(C+".position",N,me)),Ee.length>0&&M.push(new ko(C+".quaternion",N,Ee)),Ge.length>0&&M.push(new Do(C+".scale",N,Ge)),M}function Q(E,M,P){let C,N=!0,me,Ee;for(me=0,Ee=E.length;me<Ee;me++)C=E[me],C.value[M]===void 0?C.value[M]=null:N=!1;if(N===!0)for(me=0,Ee=E.length;me<Ee;me++)C=E[me],C.value[M]=P;else J(E,M)}function J(E,M){let P,C;for(let N=0,me=E.length;N<me;N++){const Ee=E[N];if(Ee.value[M]===null){if(P=ge(E,N,M),C=j(E,N,M),P===null){Ee.value[M]=C.value[M];continue}if(C===null){Ee.value[M]=P.value[M];continue}se(Ee,P,C,M)}}}function ge(E,M,P){for(;M>=0;){const C=E[M];if(C.value[P]!==null)return C;M--}return null}function j(E,M,P){for(;M<E.length;){const C=E[M];if(C.value[P]!==null)return C;M++}return null}function se(E,M,P,C){if(P.time-M.time===0){E.value[C]=M.value[C];return}E.value[C]=(E.time-M.time)*(P.value[C]-M.value[C])/(P.time-M.time)+M.value[C]}function W(E){const M={name:E.getAttribute("id")||"default",start:parseFloat(E.getAttribute("start")||0),end:parseFloat(E.getAttribute("end")||0),animations:[]};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"instance_animation":M.animations.push(u(N.getAttribute("url")));break}}yt.clips[E.getAttribute("id")]=M}function de(E){const M=[],P=E.name,C=E.end-E.start||-1,N=E.animations;for(let me=0,Ee=N.length;me<Ee;me++){const Ge=I(N[me]);for(let Oe=0,He=Ge.length;Oe<He;Oe++)M.push(Ge[Oe])}return new mg(P,C,M)}function X(E){return T(yt.clips[E],de)}function ie(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"skin":M.id=u(N.getAttribute("source")),M.skin=te(N);break;case"morph":M.id=u(N.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}yt.controllers[E.getAttribute("id")]=M}function te(E){const M={sources:{}};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"bind_shape_matrix":M.bindShapeMatrix=l(N.textContent);break;case"source":const me=N.getAttribute("id");M.sources[me]=q(N);break;case"joints":M.joints=B(N);break;case"vertex_weights":M.vertexWeights=Y(N);break}}return M}function B(E){const M={inputs:{}};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"input":const me=N.getAttribute("semantic"),Ee=u(N.getAttribute("source"));M.inputs[me]=Ee;break}}return M}function Y(E){const M={inputs:{}};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"input":const me=N.getAttribute("semantic"),Ee=u(N.getAttribute("source")),Ge=parseInt(N.getAttribute("offset"));M.inputs[me]={id:Ee,offset:Ge};break;case"vcount":M.vcount=f(N.textContent);break;case"v":M.v=f(N.textContent);break}}return M}function K(E){const M={id:E.id},P=yt.geometries[M.id];return E.skin!==void 0&&(M.skin=re(E.skin),P.sources.skinIndices=M.skin.indices,P.sources.skinWeights=M.skin.weights),M}function re(E){const P={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},C=E.sources,N=E.vertexWeights,me=N.vcount,Ee=N.v,Ge=N.inputs.JOINT.offset,Oe=N.inputs.WEIGHT.offset,He=E.sources[E.joints.inputs.JOINT],Qe=E.sources[E.joints.inputs.INV_BIND_MATRIX],Ne=C[N.inputs.WEIGHT.id].array;let st=0,Je,mt,dt;for(Je=0,dt=me.length;Je<dt;Je++){const Yt=me[Je],Xt=[];for(mt=0;mt<Yt;mt++){const zt=Ee[st+Ge],Yn=Ee[st+Oe],gn=Ne[Yn];Xt.push({index:zt,weight:gn}),st+=2}for(Xt.sort(Zt),mt=0;mt<4;mt++){const zt=Xt[mt];zt!==void 0?(P.indices.array.push(zt.index),P.weights.array.push(zt.weight)):(P.indices.array.push(0),P.weights.array.push(0))}}for(E.bindShapeMatrix?P.bindMatrix=new Ut().fromArray(E.bindShapeMatrix).transpose():P.bindMatrix=new Ut().identity(),Je=0,dt=He.array.length;Je<dt;Je++){const Yt=He.array[Je],Xt=new Ut().fromArray(Qe.array,Je*Qe.stride).transpose();P.joints.push({name:Yt,boneInverse:Xt})}return P;function Zt(Yt,Xt){return Xt.weight-Yt.weight}}function ue(E){return T(yt.controllers[E],K)}function he(E){const M={init_from:r(E,"init_from")[0].textContent};yt.images[E.getAttribute("id")]=M}function Se(E){return E.build!==void 0?E.build:E.init_from}function ce(E){const M=yt.images[E];return M!==void 0?T(M,Se):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",E),null)}function Me(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"profile_COMMON":M.profile=Te(N);break}}yt.effects[E.getAttribute("id")]=M}function Te(E){const M={surfaces:{},samplers:{}};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"newparam":qe(N,M);break;case"technique":M.technique=et(N);break;case"extra":M.extra=L(N);break}}return M}function qe(E,M){const P=E.getAttribute("sid");for(let C=0,N=E.childNodes.length;C<N;C++){const me=E.childNodes[C];if(me.nodeType===1)switch(me.nodeName){case"surface":M.surfaces[P]=oe(me);break;case"sampler2D":M.samplers[P]=Ct(me);break}}}function oe(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"init_from":M.init_from=N.textContent;break}}return M}function Ct(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"source":M.source=N.textContent;break}}return M}function et(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"constant":case"lambert":case"blinn":case"phong":M.type=N.nodeName,M.parameters=at(N);break;case"extra":M.extra=L(N);break}}return M}function at(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":M[N.nodeName]=Ve(N);break;case"transparent":M[N.nodeName]={opaque:N.hasAttribute("opaque")?N.getAttribute("opaque"):"A_ONE",data:Ve(N)};break}}return M}function Ve(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"color":M[N.nodeName]=l(N.textContent);break;case"float":M[N.nodeName]=parseFloat(N.textContent);break;case"texture":M[N.nodeName]={id:N.getAttribute("texture"),extra:Pt(N)};break}}return M}function Pt(E){const M={technique:{}};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"extra":vt(N,M);break}}return M}function vt(E,M){for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"technique":z(N,M);break}}}function z(E,M){for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":M.technique[N.nodeName]=parseFloat(N.textContent);break;case"wrapU":case"wrapV":N.textContent.toUpperCase()==="TRUE"?M.technique[N.nodeName]=1:N.textContent.toUpperCase()==="FALSE"?M.technique[N.nodeName]=0:M.technique[N.nodeName]=parseInt(N.textContent);break;case"bump":M[N.nodeName]=Re(N);break}}}function L(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"technique":M.technique=fe(N);break}}return M}function fe(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"double_sided":M[N.nodeName]=parseInt(N.textContent);break;case"bump":M[N.nodeName]=Re(N);break}}return M}function Re(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"texture":M[N.nodeName]={id:N.getAttribute("texture"),texcoord:N.getAttribute("texcoord"),extra:Pt(N)};break}}return M}function Ae(E){return E}function Pe(E){return T(yt.effects[E],Ae)}function nt(E){const M={name:E.getAttribute("name")};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"instance_effect":M.url=u(N.getAttribute("url"));break}}yt.materials[E.getAttribute("id")]=M}function ke(E){let M,P=E.slice((E.lastIndexOf(".")-1>>>0)+2);switch(P=P.toLowerCase(),P){case"tga":M=tr;break;default:M=er}return M}function We(E){const M=Pe(E.url),P=M.profile.technique;let C;switch(P.type){case"phong":case"blinn":C=new Ma;break;case"lambert":C=new RT;break;default:C=new uc;break}C.name=E.name||"";function N(Oe,He=null){const Qe=M.profile.samplers[Oe.id];let Ne=null;if(Qe!==void 0){const st=M.profile.surfaces[Qe.source];Ne=ce(st.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Ne=ce(Oe.id);if(Ne!==null){const st=ke(Ne);if(st!==void 0){const Je=st.load(Ne),mt=Oe.extra;if(mt!==void 0&&mt.technique!==void 0&&p(mt.technique)===!1){const dt=mt.technique;Je.wrapS=dt.wrapU?xs:ei,Je.wrapT=dt.wrapV?xs:ei,Je.offset.set(dt.offsetU||0,dt.offsetV||0),Je.repeat.set(dt.repeatU||1,dt.repeatV||1)}else Je.wrapS=xs,Je.wrapT=xs;return He!==null&&(Je.colorSpace=He),Je}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Ne),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Oe.id),null}const me=P.parameters;for(const Oe in me){const He=me[Oe];switch(Oe){case"diffuse":He.color&&C.color.fromArray(He.color),He.texture&&(C.map=N(He.texture,vn));break;case"specular":He.color&&C.specular&&C.specular.fromArray(He.color),He.texture&&(C.specularMap=N(He.texture));break;case"bump":He.texture&&(C.normalMap=N(He.texture));break;case"ambient":He.texture&&(C.lightMap=N(He.texture,vn));break;case"shininess":He.float&&C.shininess&&(C.shininess=He.float);break;case"emission":He.color&&C.emissive&&C.emissive.fromArray(He.color),He.texture&&(C.emissiveMap=N(He.texture,vn));break}}C.color.convertSRGBToLinear(),C.specular&&C.specular.convertSRGBToLinear(),C.emissive&&C.emissive.convertSRGBToLinear();let Ee=me.transparent,Ge=me.transparency;if(Ge===void 0&&Ee&&(Ge={float:1}),Ee===void 0&&Ge&&(Ee={opaque:"A_ONE",data:{color:[1,1,1,1]}}),Ee&&Ge)if(Ee.data.texture)C.transparent=!0;else{const Oe=Ee.data.color;switch(Ee.opaque){case"A_ONE":C.opacity=Oe[3]*Ge.float;break;case"RGB_ZERO":C.opacity=1-Oe[0]*Ge.float;break;case"A_ZERO":C.opacity=1-Oe[3]*Ge.float;break;case"RGB_ONE":C.opacity=Oe[0]*Ge.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',Ee.opaque)}C.opacity<1&&(C.transparent=!0)}if(P.extra!==void 0&&P.extra.technique!==void 0){const Oe=P.extra.technique;for(const He in Oe){const Qe=Oe[He];switch(He){case"double_sided":C.side=Qe===1?$i:yr;break;case"bump":C.normalMap=N(Qe.texture),C.normalScale=new Rt(1,1);break}}}return C}function lt(E){return T(yt.materials[E],We)}function Et(E){const M={name:E.getAttribute("name")};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"optics":M.optics=we(N);break}}yt.cameras[E.getAttribute("id")]=M}function we(E){for(let M=0;M<E.childNodes.length;M++){const P=E.childNodes[M];switch(P.nodeName){case"technique_common":return ft(P)}}return{}}function ft(E){const M={};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];switch(C.nodeName){case"perspective":case"orthographic":M.technique=C.nodeName,M.parameters=Nt(C);break}}return M}function Nt(E){const M={};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];switch(C.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":M[C.nodeName]=parseFloat(C.textContent);break}}return M}function Mt(E){let M;switch(E.optics.technique){case"perspective":M=new jn(E.optics.parameters.yfov,E.optics.parameters.aspect_ratio,E.optics.parameters.znear,E.optics.parameters.zfar);break;case"orthographic":let P=E.optics.parameters.ymag,C=E.optics.parameters.xmag;const N=E.optics.parameters.aspect_ratio;C=C===void 0?P*N:C,P=P===void 0?C/N:P,C*=.5,P*=.5,M=new nd(-C,C,P,-P,E.optics.parameters.znear,E.optics.parameters.zfar);break;default:M=new jn;break}return M.name=E.name||"",M}function ut(E){const M=yt.cameras[E];return M!==void 0?T(M,Mt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",E),null)}function Xe(E){let M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"technique_common":M=V(N);break}}yt.lights[E.getAttribute("id")]=M}function V(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"directional":case"point":case"spot":case"ambient":M.technique=N.nodeName,M.parameters=Ue(N)}}return M}function Ue(E){const M={};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"color":const me=l(N.textContent);M.color=new Ft().fromArray(me).convertSRGBToLinear();break;case"falloff_angle":M.falloffAngle=parseFloat(N.textContent);break;case"quadratic_attenuation":const Ee=parseFloat(N.textContent);M.distance=Ee?Math.sqrt(1/Ee):0;break}}return M}function rt(E){let M;switch(E.technique){case"directional":M=new h_;break;case"point":M=new WT;break;case"spot":M=new VT;break;case"ambient":M=new p_;break}return E.parameters.color&&M.color.copy(E.parameters.color),E.parameters.distance&&(M.distance=E.parameters.distance),M}function Ye(E){const M=yt.lights[E];return M!==void 0?T(M,rt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",E),null)}function Ce(E){const M={name:E.getAttribute("name"),sources:{},vertices:{},primitives:[]},P=r(E,"mesh")[0];if(P!==void 0){for(let C=0;C<P.childNodes.length;C++){const N=P.childNodes[C];if(N.nodeType!==1)continue;const me=N.getAttribute("id");switch(N.nodeName){case"source":M.sources[me]=q(N);break;case"vertices":M.vertices=Ie(N);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",N.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":M.primitives.push(Be(N));break;default:console.log(N)}}yt.geometries[E.getAttribute("id")]=M}}function q(E){const M={array:[],stride:3};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"float_array":M.array=l(C.textContent);break;case"Name_array":M.array=a(C.textContent);break;case"technique_common":const N=r(C,"accessor")[0];N!==void 0&&(M.stride=parseInt(N.getAttribute("stride")));break}}return M}function Ie(E){const M={};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];C.nodeType===1&&(M[C.getAttribute("semantic")]=u(C.getAttribute("source")))}return M}function Be(E){const M={type:E.nodeName,material:E.getAttribute("material"),count:parseInt(E.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let P=0,C=E.childNodes.length;P<C;P++){const N=E.childNodes[P];if(N.nodeType===1)switch(N.nodeName){case"input":const me=u(N.getAttribute("source")),Ee=N.getAttribute("semantic"),Ge=parseInt(N.getAttribute("offset")),Oe=parseInt(N.getAttribute("set")),He=Oe>0?Ee+Oe:Ee;M.inputs[He]={id:me,offset:Ge},M.stride=Math.max(M.stride,Ge+1),Ee==="TEXCOORD"&&(M.hasUV=!0);break;case"vcount":M.vcount=f(N.textContent);break;case"p":M.p=f(N.textContent);break}}return M}function gt(E){const M={};for(let P=0;P<E.length;P++){const C=E[P];M[C.type]===void 0&&(M[C.type]=[]),M[C.type].push(C)}return M}function ht(E){let M=0;for(let P=0,C=E.length;P<C;P++)E[P].hasUV===!0&&M++;M>0&&M<E.length&&(E.uvsNeedsFix=!0)}function Dt(E){const M={},P=E.sources,C=E.vertices,N=E.primitives;if(N.length===0)return{};const me=gt(N);for(const Ee in me){const Ge=me[Ee];ht(Ge),M[Ee]=It(Ge,P,C)}return M}function It(E,M,P){const C={},N={array:[],stride:0},me={array:[],stride:0},Ee={array:[],stride:0},Ge={array:[],stride:0},Oe={array:[],stride:0},He={array:[],stride:4},Qe={array:[],stride:4},Ne=new _i,st=[];let Je=0;for(let mt=0;mt<E.length;mt++){const dt=E[mt],Zt=dt.inputs;let Yt=0;switch(dt.type){case"lines":case"linestrips":Yt=dt.count*2;break;case"triangles":Yt=dt.count*3;break;case"polylist":for(let Xt=0;Xt<dt.count;Xt++){const zt=dt.vcount[Xt];switch(zt){case 3:Yt+=3;break;case 4:Yt+=6;break;default:Yt+=(zt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",dt.type)}Ne.addGroup(Je,Yt,mt),Je+=Yt,dt.material&&st.push(dt.material);for(const Xt in Zt){const zt=Zt[Xt];switch(Xt){case"VERTEX":for(const Yn in P){const gn=P[Yn];switch(Yn){case"POSITION":const Pi=N.array.length;if(Bt(dt,M[gn],zt.offset,N.array),N.stride=M[gn].stride,M.skinWeights&&M.skinIndices&&(Bt(dt,M.skinIndices,zt.offset,He.array),Bt(dt,M.skinWeights,zt.offset,Qe.array)),dt.hasUV===!1&&E.uvsNeedsFix===!0){const Mc=(N.array.length-Pi)/N.stride;for(let Aa=0;Aa<Mc;Aa++)Ee.array.push(0,0)}break;case"NORMAL":Bt(dt,M[gn],zt.offset,me.array),me.stride=M[gn].stride;break;case"COLOR":Bt(dt,M[gn],zt.offset,Oe.array),Oe.stride=M[gn].stride;break;case"TEXCOORD":Bt(dt,M[gn],zt.offset,Ee.array),Ee.stride=M[gn].stride;break;case"TEXCOORD1":Bt(dt,M[gn],zt.offset,Ge.array),Ee.stride=M[gn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Yn)}}break;case"NORMAL":Bt(dt,M[zt.id],zt.offset,me.array),me.stride=M[zt.id].stride;break;case"COLOR":Bt(dt,M[zt.id],zt.offset,Oe.array,!0),Oe.stride=M[zt.id].stride;break;case"TEXCOORD":Bt(dt,M[zt.id],zt.offset,Ee.array),Ee.stride=M[zt.id].stride;break;case"TEXCOORD1":Bt(dt,M[zt.id],zt.offset,Ge.array),Ge.stride=M[zt.id].stride;break}}}return N.array.length>0&&Ne.setAttribute("position",new fn(N.array,N.stride)),me.array.length>0&&Ne.setAttribute("normal",new fn(me.array,me.stride)),Oe.array.length>0&&Ne.setAttribute("color",new fn(Oe.array,Oe.stride)),Ee.array.length>0&&Ne.setAttribute("uv",new fn(Ee.array,Ee.stride)),Ge.array.length>0&&Ne.setAttribute("uv1",new fn(Ge.array,Ge.stride)),He.array.length>0&&Ne.setAttribute("skinIndex",new fn(He.array,He.stride)),Qe.array.length>0&&Ne.setAttribute("skinWeight",new fn(Qe.array,Qe.stride)),C.data=Ne,C.type=E[0].type,C.materialKeys=st,C}function Bt(E,M,P,C,N=!1){const me=E.p,Ee=E.stride,Ge=E.vcount;function Oe(Ne){let st=me[Ne+P]*Qe;const Je=st+Qe;for(;st<Je;st++)C.push(He[st]);if(N){const mt=C.length-Qe-1;Ds.setRGB(C[mt+0],C[mt+1],C[mt+2]).convertSRGBToLinear(),C[mt+0]=Ds.r,C[mt+1]=Ds.g,C[mt+2]=Ds.b}}const He=M.array,Qe=M.stride;if(E.vcount!==void 0){let Ne=0;for(let st=0,Je=Ge.length;st<Je;st++){const mt=Ge[st];if(mt===4){const dt=Ne+Ee*0,Zt=Ne+Ee*1,Yt=Ne+Ee*2,Xt=Ne+Ee*3;Oe(dt),Oe(Zt),Oe(Xt),Oe(Zt),Oe(Yt),Oe(Xt)}else if(mt===3){const dt=Ne+Ee*0,Zt=Ne+Ee*1,Yt=Ne+Ee*2;Oe(dt),Oe(Zt),Oe(Yt)}else if(mt>4)for(let dt=1,Zt=mt-2;dt<=Zt;dt++){const Yt=Ne+Ee*0,Xt=Ne+Ee*dt,zt=Ne+Ee*(dt+1);Oe(Yt),Oe(Xt),Oe(zt)}Ne+=Ee*mt}}else for(let Ne=0,st=me.length;Ne<st;Ne+=Ee)Oe(Ne)}function Qt(E){return T(yt.geometries[E],Dt)}function Ot(E){const M={name:E.getAttribute("name")||"",joints:{},links:[]};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"technique_common":Ls(C,M);break}}yt.kinematicsModels[E.getAttribute("id")]=M}function nn(E){return E.build!==void 0?E.build:E}function An(E){return T(yt.kinematicsModels[E],nn)}function Ls(E,M){for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"joint":M.joints[C.getAttribute("sid")]=Ji(C);break;case"link":M.links.push(Vi(C));break}}}function Ji(E){let M;for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"prismatic":case"revolute":M=Ri(C);break}}return M}function Ri(E){const M={sid:E.getAttribute("sid"),name:E.getAttribute("name")||"",axis:new ee,limits:{min:0,max:0},type:E.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"axis":const N=l(C.textContent);M.axis.fromArray(N);break;case"limits":const me=C.getElementsByTagName("max")[0],Ee=C.getElementsByTagName("min")[0];M.limits.max=parseFloat(me.textContent),M.limits.min=parseFloat(Ee.textContent);break}}return M.limits.min>=M.limits.max&&(M.static=!0),M.middlePosition=(M.limits.min+M.limits.max)/2,M}function Vi(E){const M={sid:E.getAttribute("sid"),name:E.getAttribute("name")||"",attachments:[],transforms:[]};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"attachment_full":M.attachments.push(Gi(C));break;case"matrix":case"translate":case"rotate":M.transforms.push(Jr(C));break}}return M}function Gi(E){const M={joint:E.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"link":M.links.push(Vi(C));break;case"matrix":case"translate":case"rotate":M.transforms.push(Jr(C));break}}return M}function Jr(E){const M={type:E.nodeName},P=l(E.textContent);switch(M.type){case"matrix":M.obj=new Ut,M.obj.fromArray(P).transpose();break;case"translate":M.obj=new ee,M.obj.fromArray(P);break;case"rotate":M.obj=new ee,M.obj.fromArray(P),M.angle=Mo.degToRad(P[3]);break}return M}function Ps(E){const M={name:E.getAttribute("name")||"",rigidBodies:{}};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"rigid_body":M.rigidBodies[C.getAttribute("name")]={},zo(C,M.rigidBodies[C.getAttribute("name")]);break}}yt.physicsModels[E.getAttribute("id")]=M}function zo(E,M){for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"technique_common":Ci(C,M);break}}}function Ci(E,M){for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"inertia":M.inertia=l(C.textContent);break;case"mass":M.mass=l(C.textContent)[0];break}}}function Ns(E){const M={bindJointAxis:[]};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"bind_joint_axis":M.bindJointAxis.push(F(C));break}}yt.kinematicsScenes[u(E.getAttribute("url"))]=M}function F(E){const M={target:E.getAttribute("target").split("/").pop()};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType===1)switch(C.nodeName){case"axis":const N=C.getElementsByTagName("param")[0];M.axis=N.textContent;const me=M.axis.split("inst_").pop().split("axis")[0];M.jointIndex=me.substring(0,me.length-1);break}}return M}function ae(E){return E.build!==void 0?E.build:E}function ye(E){return T(yt.kinematicsScenes[E],ae)}function xe(){const E=Object.keys(yt.kinematicsModels)[0],M=Object.keys(yt.kinematicsScenes)[0],P=Object.keys(yt.visualScenes)[0];if(E===void 0||M===void 0)return;const C=An(E),N=ye(M),me=Qr(P),Ee=N.bindJointAxis,Ge={};for(let Qe=0,Ne=Ee.length;Qe<Ne;Qe++){const st=Ee[Qe],Je=sn.querySelector('[sid="'+st.target+'"]');if(Je){const mt=Je.parentElement;Oe(st.jointIndex,mt)}}function Oe(Qe,Ne){const st=Ne.getAttribute("name"),Je=C.joints[Qe];me.traverse(function(mt){mt.name===st&&(Ge[Qe]={object:mt,transforms:_e(Ne),joint:Je,position:Je.zeroPosition})})}const He=new Ut;qt={joints:C&&C.joints,getJointValue:function(Qe){const Ne=Ge[Qe];if(Ne)return Ne.position;console.warn("THREE.ColladaLoader: Joint "+Qe+" doesn't exist.")},setJointValue:function(Qe,Ne){const st=Ge[Qe];if(st){const Je=st.joint;if(Ne>Je.limits.max||Ne<Je.limits.min)console.warn("THREE.ColladaLoader: Joint "+Qe+" value "+Ne+" outside of limits (min: "+Je.limits.min+", max: "+Je.limits.max+").");else if(Je.static)console.warn("THREE.ColladaLoader: Joint "+Qe+" is static.");else{const mt=st.object,dt=Je.axis,Zt=st.transforms;Ke.identity();for(let Yt=0;Yt<Zt.length;Yt++){const Xt=Zt[Yt];if(Xt.sid&&Xt.sid.indexOf(Qe)!==-1)switch(Je.type){case"revolute":Ke.multiply(He.makeRotationAxis(dt,Mo.degToRad(Ne)));break;case"prismatic":Ke.multiply(He.makeTranslation(dt.x*Ne,dt.y*Ne,dt.z*Ne));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Je.type);break}else switch(Xt.type){case"matrix":Ke.multiply(Xt.obj);break;case"translate":Ke.multiply(He.makeTranslation(Xt.obj.x,Xt.obj.y,Xt.obj.z));break;case"scale":Ke.scale(Xt.obj);break;case"rotate":Ke.multiply(He.makeRotationAxis(Xt.obj,Xt.angle));break}}mt.matrix.copy(Ke),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),Ge[Qe].position=Ne}}else console.log("THREE.ColladaLoader: "+Qe+" does not exist.")}}}function _e(E){const M=[],P=sn.querySelector('[id="'+E.id+'"]');for(let C=0;C<P.childNodes.length;C++){const N=P.childNodes[C];if(N.nodeType!==1)continue;let me,Ee;switch(N.nodeName){case"matrix":me=l(N.textContent);const Ge=new Ut().fromArray(me).transpose();M.push({sid:N.getAttribute("sid"),type:N.nodeName,obj:Ge});break;case"translate":case"scale":me=l(N.textContent),Ee=new ee().fromArray(me),M.push({sid:N.getAttribute("sid"),type:N.nodeName,obj:Ee});break;case"rotate":me=l(N.textContent),Ee=new ee().fromArray(me);const Oe=Mo.degToRad(me[3]);M.push({sid:N.getAttribute("sid"),type:N.nodeName,obj:Ee,angle:Oe});break}}return M}function je(E){const M=E.getElementsByTagName("node");for(let P=0;P<M.length;P++){const C=M[P];C.hasAttribute("id")===!1&&C.setAttribute("id",h())}}const Ke=new Ut,pt=new ee;function $e(E){const M={name:E.getAttribute("name")||"",type:E.getAttribute("type"),id:E.getAttribute("id"),sid:E.getAttribute("sid"),matrix:new Ut,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];if(C.nodeType!==1)continue;let N;switch(C.nodeName){case"node":M.nodes.push(C.getAttribute("id")),$e(C);break;case"instance_camera":M.instanceCameras.push(u(C.getAttribute("url")));break;case"instance_controller":M.instanceControllers.push(Lt(C));break;case"instance_light":M.instanceLights.push(u(C.getAttribute("url")));break;case"instance_geometry":M.instanceGeometries.push(Lt(C));break;case"instance_node":M.instanceNodes.push(u(C.getAttribute("url")));break;case"matrix":N=l(C.textContent),M.matrix.multiply(Ke.fromArray(N).transpose()),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"translate":N=l(C.textContent),pt.fromArray(N),M.matrix.multiply(Ke.makeTranslation(pt.x,pt.y,pt.z)),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"rotate":N=l(C.textContent);const me=Mo.degToRad(N[3]);M.matrix.multiply(Ke.makeRotationAxis(pt.fromArray(N),me)),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"scale":N=l(C.textContent),M.matrix.scale(pt.fromArray(N)),M.transforms[C.getAttribute("sid")]=C.nodeName;break;case"extra":break;default:console.log(C)}}return Gt(M.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",M.id):yt.nodes[M.id]=M,M}function Lt(E){const M={id:u(E.getAttribute("url")),materials:{},skeletons:[]};for(let P=0;P<E.childNodes.length;P++){const C=E.childNodes[P];switch(C.nodeName){case"bind_material":const N=C.getElementsByTagName("instance_material");for(let me=0;me<N.length;me++){const Ee=N[me],Ge=Ee.getAttribute("symbol"),Oe=Ee.getAttribute("target");M.materials[Ge]=u(Oe)}break;case"skeleton":M.skeletons.push(u(C.textContent));break}}return M}function Tt(E,M){const P=[],C=[];let N,me,Ee;for(N=0;N<E.length;N++){const He=E[N];let Qe;if(Gt(He))Qe=At(He),wt(Qe,M,P);else if(Li(He)){const st=yt.visualScenes[He].children;for(let Je=0;Je<st.length;Je++){const mt=st[Je];if(mt.type==="JOINT"){const dt=At(mt.id);wt(dt,M,P)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",He)}for(N=0;N<M.length;N++)for(me=0;me<P.length;me++)if(Ee=P[me],Ee.bone.name===M[N].name){C[N]=Ee,Ee.processed=!0;break}for(N=0;N<P.length;N++)Ee=P[N],Ee.processed===!1&&(C.push(Ee),Ee.processed=!0);const Ge=[],Oe=[];for(N=0;N<C.length;N++)Ee=C[N],Ge.push(Ee.bone),Oe.push(Ee.boneInverse);return new rd(Ge,Oe)}function wt(E,M,P){E.traverse(function(C){if(C.isBone===!0){let N;for(let me=0;me<M.length;me++){const Ee=M[me];if(Ee.name===C.name){N=Ee.boneInverse;break}}N===void 0&&(N=new Ut),P.push({bone:C,boneInverse:N,processed:!1})}})}function $t(E){const M=[],P=E.matrix,C=E.nodes,N=E.type,me=E.instanceCameras,Ee=E.instanceControllers,Ge=E.instanceLights,Oe=E.instanceGeometries,He=E.instanceNodes;for(let Ne=0,st=C.length;Ne<st;Ne++)M.push(At(C[Ne]));for(let Ne=0,st=me.length;Ne<st;Ne++){const Je=ut(me[Ne]);Je!==null&&M.push(Je.clone())}for(let Ne=0,st=Ee.length;Ne<st;Ne++){const Je=Ee[Ne],mt=ue(Je.id),dt=Qt(mt.id),Zt=Dn(dt,Je.materials),Yt=Je.skeletons,Xt=mt.skin.joints,zt=Tt(Yt,Xt);for(let Yn=0,gn=Zt.length;Yn<gn;Yn++){const Pi=Zt[Yn];Pi.isSkinnedMesh&&(Pi.bind(zt,mt.skin.bindMatrix),Pi.normalizeSkinWeights()),M.push(Pi)}}for(let Ne=0,st=Ge.length;Ne<st;Ne++){const Je=Ye(Ge[Ne]);Je!==null&&M.push(Je.clone())}for(let Ne=0,st=Oe.length;Ne<st;Ne++){const Je=Oe[Ne],mt=Qt(Je.id),dt=Dn(mt,Je.materials);for(let Zt=0,Yt=dt.length;Zt<Yt;Zt++)M.push(dt[Zt])}for(let Ne=0,st=He.length;Ne<st;Ne++)M.push(At(He[Ne]).clone());let Qe;if(C.length===0&&M.length===1)Qe=M[0];else{Qe=N==="JOINT"?new o_:new wo;for(let Ne=0;Ne<M.length;Ne++)Qe.add(M[Ne])}return Qe.name=N==="JOINT"?E.sid:E.name,Qe.matrix.copy(P),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe}const Nn=new uc({name:Kr.DEFAULT_MATERIAL_NAME,color:16711935});function dn(E,M){const P=[];for(let C=0,N=E.length;C<N;C++){const me=M[E[C]];me===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",E[C]),P.push(Nn)):P.push(lt(me))}return P}function Dn(E,M){const P=[];for(const C in E){const N=E[C],me=dn(N.materialKeys,M);if(me.length===0&&(C==="lines"||C==="linestrips"?me.push(new Yf):me.push(new Ma)),C==="lines"||C==="linestrips")for(let He=0,Qe=me.length;He<Qe;He++){const Ne=me[He];if(Ne.isMeshPhongMaterial===!0||Ne.isMeshLambertMaterial===!0){const st=new Yf;st.color.copy(Ne.color),st.opacity=Ne.opacity,st.transparent=Ne.transparent,me[He]=st}}const Ee=N.data.attributes.skinIndex!==void 0,Ge=me.length===1?me[0]:me;let Oe;switch(C){case"lines":Oe=new bT(N.data,Ge);break;case"linestrips":Oe=new l_(N.data,Ge);break;case"triangles":case"polylist":Ee?Oe=new wT(N.data,Ge):Oe=new kn(N.data,Ge);break}P.push(Oe)}return P}function Gt(E){return yt.nodes[E]!==void 0}function At(E){return T(yt.nodes[E],$t)}function In(E){const M={name:E.getAttribute("name"),children:[]};je(E);const P=r(E,"node");for(let C=0;C<P.length;C++)M.children.push($e(P[C]));yt.visualScenes[E.getAttribute("id")]=M}function en(E){const M=new wo;M.name=E.name;const P=E.children;for(let C=0;C<P.length;C++){const N=P[C];M.add(At(N.id))}return M}function Li(E){return yt.visualScenes[E]!==void 0}function Qr(E){return T(yt.visualScenes[E],en)}function vi(E){const M=r(E,"instance_visual_scene")[0];return Qr(u(M.getAttribute("url")))}function Wi(){const E=yt.clips;if(p(E)===!0){if(p(yt.animations)===!1){const M=[];for(const P in yt.animations){const C=I(P);for(let N=0,me=C.length;N<me;N++)M.push(C[N])}Sr.push(new mg("default",-1,M))}}else for(const M in E)Sr.push(X(M))}function cn(E){let M="";const P=[E];for(;P.length;){const C=P.shift();C.nodeType===Node.TEXT_NODE?M+=C.textContent:(M+=`
`,P.push.apply(P,C.childNodes))}return M.trim()}if(e.length===0)return{scene:new s_};const qn=new DOMParser().parseFromString(e,"application/xml"),sn=r(qn,"COLLADA")[0],bn=qn.getElementsByTagName("parsererror")[0];if(bn!==void 0){const E=r(bn,"div")[0];let M;return E?M=E.textContent:M=cn(bn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,M),null}const Qi=sn.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Qi);const es=m(r(sn,"asset")[0]),er=new d_(this.manager);er.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let tr;Eg&&(tr=new Eg(this.manager),tr.setPath(this.resourcePath||t));const Ds=new Ft,Sr=[];let qt={},wa=0;const yt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};S(sn,"library_animations","animation",x),S(sn,"library_animation_clips","animation_clip",W),S(sn,"library_controllers","controller",ie),S(sn,"library_images","image",he),S(sn,"library_effects","effect",Me),S(sn,"library_materials","material",nt),S(sn,"library_cameras","camera",Et),S(sn,"library_lights","light",Xe),S(sn,"library_geometries","geometry",Ce),S(sn,"library_nodes","node",$e),S(sn,"library_visual_scenes","visual_scene",In),S(sn,"library_kinematics_models","kinematics_model",Ot),S(sn,"library_physics_models","physics_model",Ps),S(sn,"scene","instance_kinematics_scene",Ns),w(yt.animations,R),w(yt.clips,de),w(yt.controllers,K),w(yt.images,Se),w(yt.effects,Ae),w(yt.materials,We),w(yt.cameras,Mt),w(yt.lights,rt),w(yt.geometries,Dt),w(yt.visualScenes,en),Wi(),xe();const Mr=vi(r(sn,"scene")[0]);return Mr.animations=Sr,es.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Mr.rotation.set(-Math.PI/2,0,0)),Mr.scale.multiplyScalar(es.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Sr},kinematics:qt,library:yt,scene:Mr}}}const Tg=new ee,KT=new Cs,Zl=new Ut,Gr=new Ut,Jl=new gi,Ql=new ee(1,1,1),ec=new ee;class Sc extends yn{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class $T extends Sc{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class ZT extends Sc{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class __ extends Sc{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class v_ extends Sc{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new ee(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new ee(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(r=>r===null?null:parseFloat(r)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(r=>{t=r.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let r=e[0];return r==null||r===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(r=Math.min(this.limit.upper,r),r=Math.max(this.limit.lower,r)),this.quaternion.setFromAxisAngle(this.axis,r).premultiply(this.origQuaternion),this.jointValue[0]!==r?(this.jointValue[0]=r,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let r=e[0];return r==null||r===this.jointValue[0]?t:(this.ignoreLimits||(r=Math.min(this.limit.upper,r),r=Math.max(this.limit.lower,r)),this.position.copy(this.origPosition),Tg.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Tg,r),this.jointValue[0]!==r?(this.jointValue[0]=r,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((r,a)=>e[a]===r||e[a]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],Gr.compose(this.origPosition,this.origQuaternion,Ql),Jl.setFromEuler(KT.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),ec.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Zl.compose(ec,Jl,Ql),Gr.premultiply(Zl),this.position.setFromMatrixPosition(Gr),this.rotation.setFromRotationMatrix(Gr),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((r,a)=>e[a]===r||e[a]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],Gr.compose(this.origPosition,this.origQuaternion,Ql),Jl.setFromAxisAngle(this.axis,this.jointValue[2]),ec.set(this.jointValue[0],this.jointValue[1],0),Zl.compose(ec,Jl,Ql),Gr.premultiply(Zl),this.position.setFromMatrixPosition(Gr),this.rotation.setFromRotationMatrix(Gr),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class wg extends v_{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(r=>r*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class JT extends __{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(r=>{r.isURDFJoint&&r.urdfName in e.joints&&(this.joints[r.urdfName]=r),r.isURDFLink&&r.urdfName in e.links&&(this.links[r.urdfName]=r),r.isURDFCollider&&r.urdfName in e.colliders&&(this.colliders[r.urdfName]=r),r.isURDFVisual&&r.urdfName in e.visual&&(this.visual[r.urdfName]=r)});for(const r in this.joints)this.joints[r].mimicJoints=this.joints[r].mimicJoints.map(a=>this.joints[a.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const r=this.joints[e];return r?r.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const r in e){const a=e[r];Array.isArray(a)?t=this.setJointValue(r,...a)||t:t=this.setJointValue(r,a)||t}return t}}const Bf=new gi,Ag=new Cs;function xo(s){return s?s.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function bg(s,e,t=!1){t||s.rotation.set(0,0,0),Ag.set(e[0],e[1],e[2],"ZYX"),Bf.setFromEuler(Ag),Bf.multiply(s.quaternion),s.quaternion.copy(Bf)}class QT{constructor(e){this.manager=e||f_,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,r)=>{this.load(e,t,null,r)})}load(e,t,r,a){const l=this.manager,f=m_.extractUrlBase(e),u=this.manager.resolveURL(e);l.itemStart(u),fetch(u,this.fetchOptions).then(h=>{if(h.ok)return r&&r(null),h.text();throw new Error(`URDFLoader: Failed to load url '${u}' with error code ${h.status} : ${h.statusText}.`)}).then(h=>{const p=this.parse(h,this.workingPath||f);t(p),l.itemEnd(u)}).catch(h=>{a?a(h):console.error("URDFLoader: Error loading file.",h),l.itemError(u),l.itemEnd(u)})}parse(e,t=this.workingPath){const r=this.packages,a=this.loadMeshCb,l=this.parseVisual,f=this.parseCollision,u=this.manager,h={},p={},m={};function _(U){if(!/^package:\/\//.test(U))return t?t+U:U;const[R,I]=U.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof r=="string")return r.endsWith(R)?r+"/"+I:r+"/"+R+"/"+I;if(r instanceof Function)return r(R)+"/"+I;if(typeof r=="object")return R in r?r[R]+"/"+I:(console.error(`URDFLoader : ${R} not found in provided package list.`),null)}function v(U){let R;U instanceof Document?R=[...U.children]:U instanceof Element?R=[U]:R=[...new DOMParser().parseFromString(U,"text/xml").children];const I=R.filter(H=>H.nodeName==="robot").pop();return S(I)}function S(U){const R=[...U.children],I=R.filter(Q=>Q.nodeName.toLowerCase()==="link"),H=R.filter(Q=>Q.nodeName.toLowerCase()==="joint"),O=R.filter(Q=>Q.nodeName.toLowerCase()==="material"),k=new JT;k.robotName=U.getAttribute("name"),k.urdfRobotNode=U,O.forEach(Q=>{const J=Q.getAttribute("name");m[J]=x(Q)});const Z={},b={};I.forEach(Q=>{const J=Q.getAttribute("name"),ge=U.querySelector(`child[link="${J}"]`)===null;h[J]=T(Q,Z,b,ge?k:null)}),H.forEach(Q=>{const J=Q.getAttribute("name");p[J]=w(Q)}),k.joints=p,k.links=h,k.colliders=b,k.visual=Z;const D=Object.values(p);return D.forEach(Q=>{Q instanceof wg&&p[Q.mimicJoint].mimicJoints.push(Q)}),D.forEach(Q=>{const J=new Set,ge=j=>{if(J.has(j))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");J.add(j),j.mimicJoints.forEach(se=>{ge(se)})};ge(Q)}),k.frames={...b,...Z,...h,...p},k}function w(U){const R=[...U.children],I=U.getAttribute("type");let H;const O=R.find(J=>J.nodeName.toLowerCase()==="mimic");O?(H=new wg,H.mimicJoint=O.getAttribute("joint"),H.multiplier=parseFloat(O.getAttribute("multiplier")||1),H.offset=parseFloat(O.getAttribute("offset")||0)):H=new v_,H.urdfNode=U,H.name=U.getAttribute("name"),H.urdfName=H.name,H.jointType=I;let k=null,Z=null,b=[0,0,0],D=[0,0,0];R.forEach(J=>{const ge=J.nodeName.toLowerCase();ge==="origin"?(b=xo(J.getAttribute("xyz")),D=xo(J.getAttribute("rpy"))):ge==="child"?Z=h[J.getAttribute("link")]:ge==="parent"?k=h[J.getAttribute("link")]:ge==="limit"&&(H.limit.lower=parseFloat(J.getAttribute("lower")||H.limit.lower),H.limit.upper=parseFloat(J.getAttribute("upper")||H.limit.upper))}),k.add(H),H.add(Z),bg(H,D),H.position.set(b[0],b[1],b[2]);const Q=R.filter(J=>J.nodeName.toLowerCase()==="axis")[0];if(Q){const J=Q.getAttribute("xyz").split(/\s+/g).map(ge=>parseFloat(ge));H.axis=new ee(J[0],J[1],J[2]),H.axis.normalize()}return H}function T(U,R,I,H=null){H===null&&(H=new __);const O=[...U.children];return H.name=U.getAttribute("name"),H.urdfName=H.name,H.urdfNode=U,l&&O.filter(Z=>Z.nodeName.toLowerCase()==="visual").forEach(Z=>{const b=y(Z,m);if(H.add(b),Z.hasAttribute("name")){const D=Z.getAttribute("name");b.name=D,b.urdfName=D,R[D]=b}}),f&&O.filter(Z=>Z.nodeName.toLowerCase()==="collision").forEach(Z=>{const b=y(Z);if(H.add(b),Z.hasAttribute("name")){const D=Z.getAttribute("name");b.name=D,b.urdfName=D,I[D]=b}}),H}function x(U){const R=[...U.children],I=new Ma;return I.name=U.getAttribute("name")||"",R.forEach(H=>{const O=H.nodeName.toLowerCase();if(O==="color"){const k=H.getAttribute("rgba").split(/\s/g).map(Z=>parseFloat(Z));I.color.setRGB(k[0],k[1],k[2]),I.opacity=k[3],I.transparent=k[3]<1,I.depthWrite=!I.transparent}else if(O==="texture"){const k=H.getAttribute("filename");if(k){const Z=new d_(u),b=_(k);I.map=Z.load(b),I.map.colorSpace=vn}}}),I}function y(U,R={}){const I=U.nodeName.toLowerCase()==="collision",H=[...U.children];let O=null;const k=H.filter(b=>b.nodeName.toLowerCase()==="material")[0];if(k){const b=k.getAttribute("name");b&&b in R?O=R[b]:O=x(k)}else O=new Ma;const Z=I?new $T:new ZT;return Z.urdfNode=U,H.forEach(b=>{const D=b.nodeName.toLowerCase();if(D==="geometry"){const Q=b.children[0].nodeName.toLowerCase();if(Q==="mesh"){const J=b.children[0].getAttribute("filename"),ge=_(J);if(ge!==null){const j=b.children[0].getAttribute("scale");if(j){const se=xo(j);Z.scale.set(se[0],se[1],se[2])}a(ge,u,(se,W)=>{W?console.error("URDFLoader: Error loading mesh.",W):se&&(se instanceof kn&&(se.material=O),se.position.set(0,0,0),se.quaternion.identity(),Z.add(se))})}}else if(Q==="box"){const J=new kn;J.geometry=new Uo(1,1,1),J.material=O;const ge=xo(b.children[0].getAttribute("size"));J.scale.set(ge[0],ge[1],ge[2]),Z.add(J)}else if(Q==="sphere"){const J=new kn;J.geometry=new od(1,30,30),J.material=O;const ge=parseFloat(b.children[0].getAttribute("radius"))||0;J.scale.set(ge,ge,ge),Z.add(J)}else if(Q==="cylinder"){const J=new kn;J.geometry=new sd(1,1,1,30),J.material=O;const ge=parseFloat(b.children[0].getAttribute("radius"))||0,j=parseFloat(b.children[0].getAttribute("length"))||0;J.scale.set(ge,j,ge),J.rotation.set(Math.PI/2,0,0),Z.add(J)}}else if(D==="origin"){const Q=xo(b.getAttribute("xyz")),J=xo(b.getAttribute("rpy"));Z.position.set(Q[0],Q[1],Q[2]),Z.rotation.set(0,0,0),bg(Z,J)}}),Z}return v(e)}defaultMeshLoader(e,t,r){/\.stl$/i.test(e)?new g_(t).load(e,l=>{const f=new kn(l,new Ma);r(f)}):/\.dae$/i.test(e)?new YT(t).load(e,l=>r(l.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}const ew=window&&window.electron,tw=Wt.forwardRef((s,e)=>{const t=Wt.useRef(null),r=Wt.useRef(null),[a,l]=Wt.useState(!1),[f,u]=Wt.useState("");return Wt.useEffect(()=>{async function h(){if(ew){const p=await window.electron.isDev(),m=await window.electron.getResourcesPath();console.log("Environment initialized:",{devMode:p,resources:m}),l(p),u(m)}}h()},[]),Wt.useImperativeHandle(e,()=>({updatePosition:(h,p)=>{r.current&&(r.current.position.x+=h*.1,r.current.position.z-=p*.1)},updateJoints:h=>{r.current&&h.forEach(p=>{const m=p.name;if(r.current.joints[m]){const _=r.current.joints[m];let v=p.rad;if(_.limit&&(v=Math.max(_.limit.lower,Math.min(_.limit.upper,v))),_.axis){const S=new ee(..._.axis),w=new gi;w.setFromAxisAngle(S,v),_.quaternion.copy(w)}}})},updateOrientation:h=>{if(r.current){const p=new Cs(h.gyro.x,h.gyro.y,h.gyro.z,"XYZ"),m=new gi().setFromEuler(p);r.current.quaternion.copy(m)}}})),Wt.useEffect(()=>{if(!t.current)return;console.log("Setting up scene with:",{isDev:a,resourcesPath:f});const h=new s_;h.background=new Ft(1710638);const p=new jn(75,1,.1,1e3);p.position.set(0,.2,.5);const m=new r_({antialias:!0}),_=window.innerWidth*.33,v=_;m.setSize(_,v),m.shadowMap.enabled=!0,t.current.appendChild(m.domElement);const S=new qT(p,m.domElement);S.enableDamping=!0,S.dampingFactor=.05,S.minDistance=.5,S.maxDistance=2,S.update();const w=new p_(16777215,.8);h.add(w);const T=new h_(16777215,1.2);T.position.set(1,1,1),T.castShadow=!0,T.shadow.mapSize.width=2048,T.shadow.mapSize.height=2048,h.add(T);const x=()=>{requestAnimationFrame(x),S.update(),m.render(h,p)};x();const y=()=>{const I=window.innerWidth*.33,H=I;p.aspect=I/H,p.updateProjectionMatrix(),m.setSize(I,H)};window.addEventListener("resize",y);const U=new QT;U.loadMeshCb=(I,H,O)=>{const k=a?I.replace("package://","/go_bdx/"):I.replace("package://",`${f}/public/go_bdx/`);console.log("Loading mesh:",k,"isDev:",a,"resourcesPath:",f);const Z=new g_(H);Z.load(k,b=>{const D=new hg({color:65280,metalness:.3,roughness:.4,emissive:17408,emissiveIntensity:.5}),Q=new kn(b,D);Q.castShadow=!0,Q.receiveShadow=!0,O(Q)},b=>{console.log(`${k}: ${b.loaded/b.total*100}% loaded`)},b=>{console.error("Error loading mesh:",k,b);const D=k.replace("/public/","/");console.log("Trying alternate path:",D),Z.load(D,Q=>{const J=new hg({color:65280,metalness:.3,roughness:.4,emissive:17408,emissiveIntensity:.5}),ge=new kn(Q,J);ge.castShadow=!0,ge.receiveShadow=!0,O(ge)})})};const R=a?"/go_bdx/go_bdx.urdf":`${f}/public/go_bdx/go_bdx.urdf`;return console.log("Loading URDF from:",R,"isDev:",a,"resourcesPath:",f),U.load(R,I=>{r.current&&h.remove(r.current),r.current=I,h.add(I);const O=new Rs().setFromObject(I).getCenter(new ee);I.position.x=-O.x,I.position.y=-O.y-.25,I.position.z=-O.z,I.rotation.set(0,0,0),I.rotateX(-Math.PI/2),I.rotateZ(240*Math.PI/180),S.target.set(0,.1,0),S.update()}),()=>{var I;window.removeEventListener("resize",y),(I=t.current)==null||I.removeChild(m.domElement),m.dispose()}},[a,f]),_t.jsx("div",{ref:t,style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}})});function nw(){var J,ge,j,se,W,de,X,ie,te,B,Y,K,re,ue,he,Se;const[s,e]=Wt.useState({axes:[0,0,0,0],buttons:Array(16).fill({pressed:!1,value:0})}),[t,r]=Wt.useState(null),[a,l]=Wt.useState(Array(10).fill(!1)),[f,u]=Wt.useState(null),[h,p]=Wt.useState({count:0,rate:0,lastUpdate:Date.now(),lastPacketTime:null}),[m,_]=Wt.useState({sticks:[0,0,0,0],triggers:[0,0],buttons:Array(6).fill(!1),onScreenButtons:Array(10).fill(!1)}),[v,S]=Wt.useState(null),[w,T]=Wt.useState(!1),x=Wt.useRef([]),y=Wt.useRef(0),[U,R]=Wt.useState(null),[I,H]=Wt.useState(null),O=Wt.useRef(null);Wt.useEffect(()=>{if(t)return console.log("Serial port connected"),t.addEventListener("error",ce=>{console.error("Serial port error:",ce),r(null)}),()=>{console.log("Cleaning up serial port"),t&&t.close().catch(console.error)}},[t]),Wt.useEffect(()=>{if(!t){S(null);return}return(async()=>{try{const Me=t.writable.getWriter();S(Me),console.log("Serial writer created")}catch(Me){console.error("Error creating writer:",Me),r(null)}})(),()=>{v&&(v.releaseLock(),S(null))}},[t]),Wt.useEffect(()=>{if(!v||!t)return;const Me=setInterval(async()=>{if(!(w||x.current.length===0)){T(!0);try{const Te=x.current.shift();await v.write(Te)}catch(Te){console.error("Error writing to serial:",Te),Te.message.includes("closed")&&r(null)}finally{T(!1)}}},5);return()=>clearInterval(Me)},[v,t,w]);const k=async()=>{try{console.log("Requesting serial port...");const ce=await navigator.serial.requestPort({filters:[{usbVendorId:4292,usbProductId:6e4}]});console.log("Selected port:",{usbProductId:ce.getInfo().usbProductId,usbVendorId:ce.getInfo().usbVendorId}),await ce.open({baudRate:9600,dataBits:8,stopBits:1,parity:"none",flowControl:"none"}),console.log("Port opened successfully"),r(ce),console.log("Serial port connected")}catch(ce){console.error("Error connecting to serial:",ce)}},Z=Wt.useCallback(async()=>{if(!v)return;const ce=new Uint8Array(25);ce[0]=15;for(let Me=1;Me<5;Me++)ce[Me]=128;for(let Me=5;Me<25;Me++)ce[Me]=0;console.log("Sending test packet:",Array.from(ce).map(Me=>Me.toString(16).padStart(2,"0")).join(" "));try{await v.write(ce),console.log("Test packet sent successfully")}catch(Me){console.error("Error sending test packet:",Me)}},[v]);Wt.useEffect(()=>{v&&Z()},[v,Z]);const b=Wt.useCallback(()=>{var at,Ve,Pt,vt,z,L,fe,Re,Ae,Pe,nt,ke,We,lt,Et,we;if(!t||!s.axes||!s.buttons)return;const ce=Date.now();if(ce-y.current<33)return;y.current=ce;const Me=new Uint8Array(25);Me[0]=15;for(let ft=0;ft<4;ft++)Me[ft+1]=Math.round((s.axes[ft]+1)/2*255);Me[5]=Math.round(((at=s.buttons[6])==null?void 0:at.value)*255)||0,Me[6]=Math.round(((Ve=s.buttons[7])==null?void 0:Ve.value)*255)||0;let Te=0;(Pt=s.buttons[0])!=null&&Pt.pressed&&(Te|=1),(vt=s.buttons[1])!=null&&vt.pressed&&(Te|=2),(z=s.buttons[2])!=null&&z.pressed&&(Te|=4),(L=s.buttons[3])!=null&&L.pressed&&(Te|=8),(fe=s.buttons[4])!=null&&fe.pressed&&(Te|=16),(Re=s.buttons[5])!=null&&Re.pressed&&(Te|=32),Me[7]=Te;let qe=0;(Ae=s.buttons[8])!=null&&Ae.pressed&&(qe|=1),(Pe=s.buttons[9])!=null&&Pe.pressed&&(qe|=2),(nt=s.buttons[10])!=null&&nt.pressed&&(qe|=4),(ke=s.buttons[11])!=null&&ke.pressed&&(qe|=8),Me[8]=qe;let oe=0;(We=s.buttons[12])!=null&&We.pressed&&(oe|=1),(lt=s.buttons[13])!=null&&lt.pressed&&(oe|=2),(Et=s.buttons[14])!=null&&Et.pressed&&(oe|=4),(we=s.buttons[15])!=null&&we.pressed&&(oe|=8),Me[9]=oe;let Ct=0,et=0;for(let ft=0;ft<8;ft++)a[ft]&&(Ct|=1<<ft);for(let ft=0;ft<2;ft++)a[ft+8]&&(et|=1<<ft);Me[10]=Ct,Me[11]=et;for(let ft=12;ft<25;ft++)Me[ft]=0;x.current.push(Me)},[t,s,a]);Wt.useEffect(()=>{if(!t)return;const ce=setInterval(b,33);return()=>clearInterval(ce)},[t,b]),Wt.useEffect(()=>{const ce=setInterval(()=>{const Te=navigator.getGamepads()[0];if(Te){const qe=Array.from(Te.axes||[]).map(Ct=>Number(Ct)||0);for(;qe.length<4;)qe.push(0);const oe=Array.from(Te.buttons||[]).map(Ct=>({pressed:!!(Ct!=null&&Ct.pressed),value:Number(Ct==null?void 0:Ct.value)||0}));for(;oe.length<16;)oe.push({pressed:!1,value:0});e({axes:qe,buttons:oe})}},33);return()=>clearInterval(ce)},[]),Wt.useEffect(()=>{var ce;s.axes&&s.axes.length>=4&&((ce=O.current)==null||ce.updatePosition(s.axes[0],s.axes[1]))},[s]);const D=Wt.useCallback(ce=>{var Me,Te;try{const qe=JSON.parse(ce);if(qe.motors&&((Me=O.current)==null||Me.updateJoints(qe.motors)),qe.sensors){const oe=qe.sensors.find(Ct=>Ct.name==="imu");oe&&((Te=O.current)==null||Te.updateOrientation(oe))}}catch(qe){console.error("Error parsing robot data:",qe)}},[]);Wt.useCallback(ce=>{var Me,Te;try{const qe=JSON.parse(ce);if(qe.motors&&((Me=O.current)==null||Me.updateJoints(qe.motors)),qe.sensors){const oe=qe.sensors.find(Ct=>Ct.name==="imu");oe&&((Te=O.current)==null||Te.updateOrientation(oe))}}catch(qe){console.error("Error processing serial data:",qe)}},[]),Wt.useEffect(()=>{if(!t)return;let ce,Me=new TextDecoder,Te="";return(async()=>{try{for(ce=t.readable.getReader();;){const{value:oe,done:Ct}=await ce.read();if(Ct)break;const et=Me.decode(oe);Te+=et;let at;for(;(at=Te.indexOf(`
`))!==-1;){const Ve=Te.slice(0,at);Te=Te.slice(at+1),Ve.trim()&&D(Ve)}}}catch(oe){console.error("Error reading serial data:",oe)}finally{ce&&ce.releaseLock()}})(),()=>{ce&&ce.cancel()}},[t,D]);const Q=Wt.useCallback(async()=>{if(!window.electron){console.error("Electron API not available");return}try{R(!0),await window.electron.startSSH("matt@192.168.1.50","cat /dev/puddleduck_ops")}catch(ce){console.error("Error connecting via SSH:",ce.message||"Unknown error occurred"),R(!1)}},[]);return Wt.useEffect(()=>{if(!window.electron)return;const ce=(qe,oe)=>{var Ct,et;try{const at=oe.split(`
`).filter(Ve=>Ve.trim());for(const Ve of at)try{const Pt=JSON.parse(Ve);if(H(Pt),Pt.motors&&((Ct=O.current)==null||Ct.updateJoints(Pt.motors)),Pt.sensors){const vt=Pt.sensors.find(z=>z.name==="imu");vt&&((et=O.current)==null||et.updateOrientation(vt))}}catch(Pt){console.debug("Failed to parse line:",Ve),console.debug("Parse error:",Pt)}}catch(at){console.error("Error processing SSH data:",at)}},Me=(qe,oe)=>{console.error("SSH Error:",oe)},Te=(qe,oe)=>{console.log("SSH connection closed with code:",oe),R(!1)};return window.electron.onSSHData(ce),window.electron.onSSHError(Me),window.electron.onSSHClose(Te),()=>{}},[]),_t.jsxs("div",{className:"layout-container",children:[_t.jsx("div",{className:"side-panel left-panel",children:_t.jsxs("div",{className:"control-section",children:[_t.jsx("h2",{children:"Controls"}),_t.jsx("div",{className:"button-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:a.map((ce,Me)=>_t.jsxs("button",{onMouseDown:()=>{const Te=[...a];Te[Me]=!0,l(Te)},onMouseUp:()=>{const Te=[...a];Te[Me]=!1,l(Te)},onMouseLeave:()=>{const Te=[...a];Te[Me]=!1,l(Te)},style:{padding:"20px",backgroundColor:ce?"#e74c3c":"#34495e",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1.1em",fontWeight:"bold",boxShadow:ce?"inset 0 2px 4px rgba(0,0,0,0.2)":"0 2px 4px rgba(0,0,0,0.2)",transition:"all 0.1s ease"},children:["Button ",Me+1]},Me))})]})}),_t.jsx("div",{className:"flex-1 h-full",children:_t.jsx(tw,{ref:O})}),_t.jsxs("div",{className:"side-panel right-panel",children:[_t.jsxs("div",{className:"status-section",children:[_t.jsx("h2",{children:"Status"}),I&&_t.jsx("div",{style:{color:"#fff"},children:"Robot Connected"})]}),_t.jsxs("div",{className:"controls",children:[_t.jsx("button",{onClick:t?()=>{t&&(t.close(),r(null))}:k,style:{padding:"12px 20px",backgroundColor:t?"#e74c3c":"#2ecc71",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1.1em",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.2)",transition:"background-color 0.3s ease"},children:t?"Disconnect":"Connect Serial"}),_t.jsx("button",{onClick:Q,disabled:!!U,style:{padding:"12px 20px",backgroundColor:U?"#e74c3c":"#2ecc71",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1.1em",fontWeight:"bold",boxShadow:"0 2px 4px rgba(0,0,0,0.2)",transition:"background-color 0.3s ease"},children:U?"Disconnect":"Connect Robot Data"})]}),_t.jsxs("div",{style:{backgroundColor:"#34495e",padding:"15px",borderRadius:"8px",fontSize:"0.9em",display:"flex",flexDirection:"column",gap:"10px"},children:[_t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr",gap:"5px"},children:[_t.jsx("span",{style:{color:"#bdc3c7"},children:"Left Stick:"}),_t.jsxs("span",{children:["X: ",(J=s.axes[0])==null?void 0:J.toFixed(2)," Y: ",(ge=s.axes[1])==null?void 0:ge.toFixed(2)]}),_t.jsx("span",{style:{color:"#bdc3c7"},children:"Right Stick:"}),_t.jsxs("span",{children:["X: ",(j=s.axes[2])==null?void 0:j.toFixed(2)," Y: ",(se=s.axes[3])==null?void 0:se.toFixed(2)]}),_t.jsx("span",{style:{color:"#bdc3c7"},children:"Triggers:"}),_t.jsxs("span",{children:["L: ",(W=s.buttons[6])==null?void 0:W.value.toFixed(2)," R: ",(de=s.buttons[7])==null?void 0:de.value.toFixed(2)]})]}),_t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"5px",marginTop:"10px"},children:["A","B","X","Y","LB","RB"].map((ce,Me)=>{var Te;return _t.jsx("div",{style:{padding:"5px",backgroundColor:(Te=s.buttons[Me])!=null&&Te.pressed?"#2ecc71":"#2c3e50",borderRadius:"4px",textAlign:"center"},children:ce},ce)})}),_t.jsx("h3",{style:{margin:"10px 0 5px 0",color:"#4a90e2",fontSize:"1em"},children:"Serial Data"}),_t.jsxs("div",{style:{backgroundColor:"#2c3e50",padding:"10px",borderRadius:"4px",fontSize:"0.9em"},children:[_t.jsxs("div",{style:{marginBottom:"5px"},children:[_t.jsx("span",{style:{color:"#bdc3c7"},children:"Sticks (Raw):"}),_t.jsxs("div",{style:{marginLeft:"10px"},children:["Left: (",((X=s.axes[0])==null?void 0:X.toFixed(2))||"0.00",", ",((ie=s.axes[1])==null?void 0:ie.toFixed(2))||"0.00",") Right: (",((te=s.axes[2])==null?void 0:te.toFixed(2))||"0.00",", ",((B=s.axes[3])==null?void 0:B.toFixed(2))||"0.00",")"]})]}),_t.jsxs("div",{style:{marginBottom:"5px"},children:[_t.jsx("span",{style:{color:"#bdc3c7"},children:"Triggers (Raw):"}),_t.jsxs("div",{style:{marginLeft:"10px"},children:["L: ",((K=(Y=s.buttons[6])==null?void 0:Y.value)==null?void 0:K.toFixed(2))||"0.00"," R: ",((ue=(re=s.buttons[7])==null?void 0:re.value)==null?void 0:ue.toFixed(2))||"0.00"]})]}),_t.jsxs("div",{style:{marginBottom:"5px"},children:[_t.jsx("span",{style:{color:"#bdc3c7"},children:"Buttons:"}),_t.jsx("div",{style:{marginLeft:"10px",fontFamily:"monospace"},children:["A","B","X","Y","LB","RB"].map((ce,Me)=>{var Te;return _t.jsxs("span",{style:{marginRight:"10px"},children:[ce,": ",(Te=s.buttons[Me])!=null&&Te.pressed?"1":"0"]},ce)})})]}),_t.jsxs("div",{style:{marginBottom:"5px"},children:[_t.jsx("span",{style:{color:"#bdc3c7"},children:"Serial Data (0-255):"}),_t.jsxs("div",{style:{marginLeft:"10px",fontFamily:"monospace"},children:["Sticks: ",m.sticks.map(ce=>Math.round((ce+1)/2*255)).join(", "),_t.jsx("br",{}),"Triggers: ",m.triggers.map(ce=>Math.round(ce*255)).join(", ")]})]}),_t.jsxs("div",{style:{marginBottom:"5px"},children:[_t.jsx("span",{style:{color:"#bdc3c7"},children:"Serial Packet Format:"}),_t.jsxs("div",{style:{marginLeft:"10px",fontFamily:"monospace",fontSize:"0.9em"},children:[_t.jsx("div",{children:"Start: 0x0F"}),_t.jsxs("div",{children:["Left Stick: X=",Math.round(((s.axes[0]||0)+1)/2*255)," Y=",Math.round(((s.axes[1]||0)+1)/2*255)]}),_t.jsxs("div",{children:["Right Stick: X=",Math.round(((s.axes[2]||0)+1)/2*255)," Y=",Math.round(((s.axes[3]||0)+1)/2*255)]}),_t.jsxs("div",{children:["Triggers: L=",Math.round((((he=s.buttons[6])==null?void 0:he.value)||0)*255)," R=",Math.round((((Se=s.buttons[7])==null?void 0:Se.value)||0)*255)]}),_t.jsxs("div",{children:["Button Byte: ",Array(6).fill(0).map((ce,Me)=>{var Te;return(Te=s.buttons[Me])!=null&&Te.pressed?"1":"0"}).join("")," (",["A","B","X","Y","LB","RB"].filter((ce,Me)=>{var Te;return(Te=s.buttons[Me])==null?void 0:Te.pressed}).join(","),")"]}),_t.jsxs("div",{children:["On-Screen: ",a.map(ce=>ce?"1":"0").join("")]})]})]})]})]})]})]})}const iw=nv.createRoot(document.getElementById("root"));iw.render(_t.jsx(K0.StrictMode,{children:_t.jsx(nw,{})}));
