import React, { useEffect, useState } from 'react';
import Button from './Button';
import chickenEggsVideo from './assets/videos/video-chicken-egg.mp4'; 

const App: React.FC = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Handle keydown event for the "k" key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k') {
        setShowEasterEgg(true);
      }
    };

    // Listen for keydown event
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Interactive Button Demo, Press K</h1>
      <Button label="Hover Over Me!" />

      {/* Modal or Easter Egg */}
      {showEasterEgg && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            flexDirection: 'column',
          }}
        >
          <h2>You discovered an Easter Egg!</h2>
          <video width="400" controls autoPlay>
            <source src={chickenEggsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={() => setShowEasterEgg(false)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '8px',
              backgroundColor: '#8a2be2',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
