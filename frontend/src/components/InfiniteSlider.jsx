import React from 'react';

const InfiniteSlider = () => {
  const images = [
    '/hero.png',
    '/group.png',
    '/action_march.png',
    '/hero.png', // On répète pour l'effet infini
    '/group.png',
    '/action_march.png',
  ];

  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      background: '#fff', 
      padding: '40px 0',
      borderTop: '1px solid #eee' 
    }}>
      <div className="slider-container">
        <div className="slider-track">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="slide">
              <img 
                src={img} 
                alt={`Action Mahwa ${i}`} 
                style={{ 
                  width: '280px', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '15px',
                  margin: '0 10px',
                  boxShadow: 'var(--shadow)'
                }} 
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .slider-container {
          width: 100%;
          overflow: hidden;
        }
        .slider-track {
          display: flex;
          width: calc(300px * 12);
          animation: scroll 30s linear infinite;
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
        .slide {
          flex-shrink: 0;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 6)); }
        }
      `}} />
    </div>
  );
};

export default InfiniteSlider;
