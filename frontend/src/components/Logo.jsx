import React from 'react';

const Logo = ({ height = '60px', showText = true, scrolled = false }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', height: height }}>
      <div style={{ height: '100%', aspectRatio: '1', position: 'relative' }}>
        {/* L'icône réelle chargée depuis le fichier public/favicon.png */}
        <img 
          src="/favicon.png" 
          alt="Icone Mahwa" 
          style={{ 
            height: '100%', 
            width: '100%',
            objectFit: 'contain',
            borderRadius: '50%',
            // On cache l'image si elle échoue pour montrer le SVG
          }} 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />

        {/* SVG de Secours (Détaillé) - s'affiche si l'image est absente */}
        <svg 
          viewBox="0 0 120 120" 
          height="100%" 
          style={{ display: 'none' }}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="55" fill="var(--primary)" />
          <path 
            d="M35 85V55C35 45 40 40 50 50L60 65L70 50C80 40 85 45 85 55V85" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path d="M42 35C42 30 46 28 50 28" stroke="white" strokeWidth="4" />
          <path d="M70 35C70 30 74 28 78 28" stroke="white" strokeWidth="4" />
          <rect x="85" y="55" width="4" height="25" fill="#a02d2d" />
        </svg>
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ 
            fontSize: scrolled ? '1.8rem' : '2.2rem', 
            fontWeight: 'bold', 
            color: 'var(--primary)', 
            fontFamily: "'Outfit', sans-serif",
            margin: 0,
            lineHeight: '1',
            letterSpacing: '1px'
          }}>
            MAHWA
          </h1>
          <p style={{ 
            fontSize: scrolled ? '0.7rem' : '0.8rem', 
            fontWeight: '600', 
            color: 'var(--secondary)', 
            margin: '4px 0 0',
            letterSpacing: '5px',
            textTransform: 'uppercase'
          }}>
            FOUNDATION
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
