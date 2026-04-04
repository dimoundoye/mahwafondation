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
      padding: 0,
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
        {/* Gradient Overlay Adjusted for Style */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.3) 100%)'
        }} />
      </div>

      <div className="container">
        <div style={{ maxWidth: '900px', textAlign: 'center', margin: '0 auto' }}>
          <div>
            <div style={{ 
               display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', 
               fontSize: '11px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '35px',
               background: 'rgba(255,255,255,0.1)', padding: '12px 25px', borderRadius: '50px'
            }}>
               <div style={{ width: '28px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
               MAHWA FONDATION | SÉNÉGAL
            </div>

            <h1 style={{ 
              fontSize: 'clamp(3rem, 10vw, 6.5rem)', 
              color: 'white', 
              lineHeight: '1.05',
              marginBottom: '45px',
              fontWeight: '900',
              fontFamily: 'Playfair Display, serif'
            }}>
              Unissez vos forces, <br />
              Partagez <span style={{ color: 'var(--secondary)' }}>l'Espérance</span>
            </h1>

            <p style={{ 
              fontSize: '1.4rem', 
              color: 'rgba(255,255,255,0.85)', 
              marginBottom: '60px',
              maxWidth: '800px',
              margin: '0 auto 60px',
              lineHeight: '1.8'
            }}>
              Nous transformons la solidarité en actions réelles pour soutenir les plus vulnérables au Sénégal.
            </p>

            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#about" className="btn-prestige-red" style={{ 
                 background: 'var(--secondary)', color: 'white', padding: '22px 60px', 
                 borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', 
                 boxShadow: '0 4px 20px rgba(215, 38, 56, 0.35)' 
              }}>
                NOTRE MISSION →
              </a>
              
              <a href="#contact" style={{ 
                padding: '22px 60px', 
                fontSize: '14px', 
                fontWeight: '700',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2.5px solid white',
                color: 'white',
                transition: 'all 0.3s',
                letterSpacing: '1px'
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
      `}} />
    </section>
  );
};

export default Hero;
