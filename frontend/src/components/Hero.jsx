import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = ["/hero.png", "/group.png", "/action_march.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
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
      padding: 'var(--header-height) 0 80px',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1
      }}>
        {images.map((img, idx) => (
          <div 
            key={idx}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: idx === currentIdx ? 1 : 0, transition: 'opacity 1.5s ease-in-out',
              transform: idx === currentIdx ? 'scale(1.1)' : 'scale(1)',
              animation: idx === currentIdx ? 'subtleZoom 20s forwards' : 'none'
            }}
          />
        ))}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.4) 100%)'
        }} />
      </div>

      <div className="container">
        <div style={{ maxWidth: '900px', textAlign: 'center', margin: '0 auto' }}>
          <div>
            <div style={{ 
               display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', 
               fontSize: '10px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px',
               background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px'
            }} className="hero-label">
               <div style={{ width: '24px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
               MAHWA FONDATION | SÉNÉGAL
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 9vw, 6rem)', 
              color: 'white', 
              lineHeight: '1.05',
              marginBottom: '35px',
              fontWeight: '900',
              fontFamily: 'Playfair Display, serif'
            }}>
              Unissez vos forces, <br />
              Partagez <span style={{ color: 'var(--secondary)' }}>l'Espérance</span>
            </h1>

            <p style={{ 
              fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', marginBottom: '50px',
              maxWidth: '750px', margin: '0 auto 50px', lineHeight: '1.7'
            }} className="hero-para">
              Nous transformons la solidarité en actions réelles pour soutenir les plus vulnérables au Sénégal.
            </p>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }} className="hero-btns">
              <a href="#about" className="btn-prestige-red" style={{ 
                 background: 'var(--secondary)', color: 'white', padding: '20px 45px', 
                 borderRadius: '50px', textDecoration: 'none', fontWeight: '800', fontSize: '13px'
              }}>
                NOTRE MISSION →
              </a>
              
              <a href="#contact" style={{ 
                padding: '18px 45px', fontSize: '13px', fontWeight: '800', borderRadius: '50px',
                textDecoration: 'none', border: '2.5px solid white', color: 'white',
                transition: 'all 0.3s', letterSpacing: '1px'
              }} className="btn-hero-outline">
                FAIRE UN DON
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtleZoom { from { transform: scale(1.1); } to { transform: scale(1.2); } }
        .btn-hero-outline:hover { background: white; color: var(--text); transform: translateY(-4px); }
        
        @media (max-width: 600px) {
           #home { min-height: 700px !important; height: auto !important; padding: 160px 0 100px !important; }
           .hero-para { font-size: 1rem !important; margin-bottom: 40px !important; }
           .hero-btns { flex-direction: column; width: 100%; align-items: center; }
           .hero-btns a { width: 100%; max-width: 300px; text-align: center; }
           .hero-label { margin-bottom: 25px !important; }
        }
      `}} />
    </section>
  );
};

export default Hero;
