import React from 'react';

const SteamDeckVisual = ({ gamepadState }) => {
  // Helper to get button state
  const isButtonPressed = (index) => gamepadState?.buttons[index]?.pressed || false;
  
  // Helper to get axis value (-1 to 1)
  const getAxisValue = (index) => gamepadState?.axes[index] || 0;

  const renderShoulders = () => {
    return (
      <div className="steam-deck-shoulders">
        <div className="shoulders left">
          <div className={`shoulder ${isButtonPressed(4) ? 'pressed' : ''}`}>LB</div>
          <div className={`trigger ${gamepadState?.buttons[6]?.pressed ? 'pressed' : ''}`} style={{
            background: `linear-gradient(145deg, #e74c3c ${(gamepadState?.buttons[6]?.value || 0) * 100}%, #2a2b2e 0%)`
          }}>LT</div>
        </div>
        <div className="shoulders right">
          <div className={`trigger ${gamepadState?.buttons[7]?.pressed ? 'pressed' : ''}`} style={{
            background: `linear-gradient(145deg, #e74c3c ${(gamepadState?.buttons[7]?.value || 0) * 100}%, #2a2b2e 0%)`
          }}>RT</div>
          <div className={`shoulder ${isButtonPressed(5) ? 'pressed' : ''}`}>RB</div>
        </div>
      </div>
    );
  };

  return (
    <div className="steam-deck-visual">
      <div className="steam-deck-body">
        <div className="steam-deck-left">
          <div className="dpad">
            <div className={`dpad-up ${isButtonPressed(12) ? 'pressed' : ''}`} />
            <div className={`dpad-right ${isButtonPressed(15) ? 'pressed' : ''}`} />
            <div className={`dpad-down ${isButtonPressed(13) ? 'pressed' : ''}`} />
            <div className={`dpad-left ${isButtonPressed(14) ? 'pressed' : ''}`} />
          </div>
          <div className="stick-section">
            <div className={`select ${isButtonPressed(8) ? 'pressed' : ''}`} />
            <div className="stick-container left">
              <div 
                className={`stick ${isButtonPressed(10) ? 'pressed' : ''}`}
                style={{
                  transform: `translate(${getAxisValue(0) * 20}px, ${getAxisValue(1) * 20}px)`
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="steam-deck-center">
          <div className="steam-deck-screen">
            <img src="/duckgreen.png" alt="Steam Duck" />
          </div>
        </div>
        
        <div className="steam-deck-right">
          <div className="stick-section">
            <div className={`start ${isButtonPressed(9) ? 'pressed' : ''}`} />
            <div className="stick-container right">
              <div 
                className={`stick ${isButtonPressed(11) ? 'pressed' : ''}`}
                style={{
                  transform: `translate(${getAxisValue(2) * 20}px, ${getAxisValue(3) * 20}px)`
                }}
              />
            </div>
          </div>
          <div className="face-buttons">
            <div className={`button-y ${isButtonPressed(3) ? 'pressed' : ''}`}>Y</div>
            <div className={`button-x ${isButtonPressed(2) ? 'pressed' : ''}`}>X</div>
            <div className={`button-b ${isButtonPressed(1) ? 'pressed' : ''}`}>B</div>
            <div className={`button-a ${isButtonPressed(0) ? 'pressed' : ''}`}>A</div>
          </div>
        </div>
        
        {renderShoulders()}
      </div>
    </div>
  );
};

export default SteamDeckVisual;
