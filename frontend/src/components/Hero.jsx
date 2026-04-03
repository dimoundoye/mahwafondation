import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = ["/hero.png", "/group.png", "/action_march.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" style={{ 
      height: '100vh', 
      minHeight: '850px',
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center',
      overflow: 'hidden',
      padding: 'var(--header-height) 0 80px', // RÉSERVE L'ESPACE POUR LA NAVBAR
    }}>
      {/* Background Slideshow Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        {images.map((img, idx) => (
          <div 
            key={idx}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === currentIdx ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              transform: idx === currentIdx ? 'scale(1.1)' : 'scale(1)',
              animation: idx === currentIdx ? 'subtleZoom 20s forwards' : 'none'
            }}
          />
        ))}
        {/* L'overlay de dégradé reste fixe au-dessus des images */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(8, 28, 21, 0.95) 0%, rgba(8, 28, 21, 0.45) 50%, rgba(8, 28, 21, 0.95) 100%)'
        }} />
      </div>

      <div className="container">
        <div style={{ maxWidth: '850px', textAlign: 'center', margin: '0 auto' }}>
          <div>
            <span style={{ 
              display: 'inline-block', 
              color: 'var(--accent)', 
              fontSize: '0.8rem', 
              fontWeight: '800',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              background: 'rgba(212, 175, 55, 0.1)',
              padding: '10px 20px',
              borderRadius: '50px'
            }}>
               MAHWA FONDATION | SÉNÉGAL
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 9vw, 5.5rem)', 
              color: 'white', 
              lineHeight: '1.05',
              marginBottom: '45px',
              fontWeight: '800'
            }}>
              Unissez vos forces, <br />
              Partagez <span style={{ color: 'var(--accent)' }}>l'Espérance</span>
            </h1>
            <p style={{ 
              fontSize: '1.35rem', 
              color: 'rgba(255,255,255,0.75)', 
              marginBottom: '60px',
              maxWidth: '750px',
              margin: '0 auto 60px',
              lineHeight: '1.9'
            }}>
              Nous transformons la solidarité en actions réelles pour toucher ceux qui en ont le plus besoin à Dakar et partout au Sénégal.
            </p>

            <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#about" className="btn-prestige" style={{ 
                background: 'var(--accent)', 
                color: 'var(--text)', 
                padding: '24px 65px', 
                fontSize: '1rem', 
                fontWeight: '900',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
                transition: 'all 0.4s'
              }}>
                NOTRE MISSION
              </a>
              
              <a href="#contact" className="btn-outline-prestige" style={{ 
                padding: '24px 65px', 
                fontSize: '1rem', 
                fontWeight: '800',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.3)',
                color: 'white',
                transition: 'all 0.4s'
              }}>
                FAIRE UN DON
              </a>
            </div>

            {/* Pagination Bullet Indicators */}
            <div style={{ marginTop: '60px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
               {images.map((_, i) => (
                 <div key={i} style={{ 
                   width: i === currentIdx ? '40px' : '10px', 
                   height: '10px', 
                   borderRadius: '10px', 
                   background: i === currentIdx ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                   transition: 'all 0.6s'
                 }} />
               ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtleZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.25); }
        }
        .btn-prestige:hover { transform: translateY(-7px); box-shadow: 0 25px 50px rgba(212, 175, 55, 0.4); filter: brightness(1.1); }
        .btn-outline-prestige:hover { background: rgba(255,255,255,0.1); transform: translateY(-7px); border-color: white; }
      `}} />
    </section>
  );
};

export default Hero;
