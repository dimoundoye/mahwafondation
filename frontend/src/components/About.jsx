import React from 'react';

const About = () => {
  return (
    <section id="about" className="hero-about" style={{ 
      position: 'relative', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden',
      padding: '120px 0',
      background: 'transparent' // On enlève le fond local
    }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '80px', 
          alignItems: 'center' 
        }}>
          
          {/* LEFT — IMAGE CLUSTER (Style demandé) */}
          <div className="image-cluster" style={{ 
            position: 'relative', 
            width: '100%', 
            aspectRatio: '1/1', 
            maxWidth: '500px', 
            margin: '0 auto' 
          }}>
            <div className="dot-grid tl" style={{ 
              position: 'absolute', top: '-15px', left: '-15px', 
              width: '130px', height: '130px', opacity: 0.35,
              backgroundImage: 'radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px'
            }} />
            <div className="dot-grid br" style={{ 
              position: 'absolute', bottom: '-15px', right: '-15px', 
              width: '130px', height: '130px', opacity: 0.2,
              backgroundImage: 'radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px'
            }} />

            {/* Accent dots */}
            <div className="acc r1" />
            <div className="acc g1" />
            <div className="acc outline" />

            <div className="ring-about" style={{
              position: 'absolute', top: '50%', left: '50%', 
              transform: 'translate(-50%, -50%)', width: '75%', aspectRatio: '1',
              borderRadius: '50%', border: '1.5px dashed var(--primary)', opacity: 0.3,
              animation: 'spinAbout 30s linear infinite'
            }} />

            {/* Main Image */}
            <div className="circle-main-about" style={{
               position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
               width: '66%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden',
               border: '6px solid white', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}>
               <img src="/group.png" alt="Mahwa Group" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Small circular images */}
            <div className="circle-sm pos-tr" style={{
               position: 'absolute', top: '6%', right: '2%', width: '36%', aspectRatio: '1',
               borderRadius: '50%', overflow: 'hidden', border: '5px solid var(--primary)', 
               boxShadow: 'var(--shadow)'
            }}>
               <img src="/action_march.png" alt="Children" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="circle-sm pos-bl" style={{
               position: 'absolute', bottom: '8%', left: '4%', width: '30%', aspectRatio: '1',
               borderRadius: '50%', overflow: 'hidden', border: '5px solid var(--secondary)', 
               boxShadow: 'var(--shadow)'
            }}>
               <img src="/hero.png" alt="Mahwa Action" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* RIGHT — TEXT (Style demandé) */}
          <div className="text-side-about" style={{ paddingLeft: '20px' }}>
            <div style={{ 
               display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', 
               fontSize: '11px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '25px'
            }}>
               <div style={{ width: '32px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
               À Propos de Nous
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '30px', lineHeight: '1.1' }}>
              Changer des Vies avec <span style={{ color: 'var(--secondary)' }}>la Connaissance</span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text)', fontWeight: '600', marginBottom: '20px', lineHeight: '1.7' }}>
              Notre promesse : votre générosité accomplit exactement ce qu'elle est censée faire — transformer des vies.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '45px', lineHeight: '1.8' }}>
              Aujourd'hui, nous travaillons pour apporter l'espoir à des milliers de personnes au Sénégal. Demain, nous créerons de vraies opportunités de développement durable au sein des communautés.
            </p>

            {/* Statistics Bar (REMPLACÉ PAR UN WRAP POUR MOBILE) */}
            <div style={{ 
               display: 'flex', 
               flexWrap: 'wrap', 
               gap: '20px', 
               marginBottom: '50px', 
               borderTop: '1px solid var(--border)', 
               paddingTop: '35px' 
            }} className="stats-bar-about">
               
               <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100px' }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '1.9rem', fontWeight: '900', color: 'var(--text)' }}>
                     12K<span style={{ color: 'var(--secondary)' }}>+</span>
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Bénéficiaires</span>
               </div>
               
               <div className="stat-divider-about" style={{ width: '1.5px', background: 'var(--border)' }} />
               
               <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100px' }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '1.9rem', fontWeight: '900', color: 'var(--text)' }}>
                     100<span style={{ color: 'var(--secondary)' }}>+</span>
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Bénévoles</span>
               </div>
               
               <div className="stat-divider-about" style={{ width: '1.5px', background: 'var(--border)' }} />
               
               <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100px' }}>
                  <span style={{ fontFamily: 'Playfair Display', fontSize: '1.9rem', fontWeight: '900', color: 'var(--text)' }}>
                     95<span style={{ color: 'var(--secondary)' }}>%</span>
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Impact Social</span>
               </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }} className="about-cta-group">
               <a href="#contact" className="btn-prestige-red" style={{ 
                 background: 'var(--secondary)', color: 'white', padding: '16px 36px', 
                 borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '13px' 
               }}>
                  EN SAVOIR PLUS →
               </a>
               <div style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} className="video-trigger">
                  <div style={{ 
                     width: '50px', height: '50px', background: 'var(--primary)', 
                     borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                     boxShadow: '0 8px 20px rgba(42, 122, 75, 0.3)'
                  }}>
                     <svg viewBox="0 0 16 16" width="16" height="16" fill="white"><polygon points="5,3 13,8 5,13"/></svg>
                  </div>
                  <span style={{ fontWeight: '700', fontSize: '14px', letterSpacing: '1px' }}>VOIR LA VIDÉO</span>
               </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spinAbout { from {transform: translate(-50%, -50%) rotate(0deg);} to {transform: translate(-50%, -50%) rotate(360deg);} }
        .acc { position: absolute; border-radius: 50%; width: 12px; height: 12px; animation: floatAbout 4s ease-in-out infinite; }
        .acc.g1 { background: var(--primary); bottom: 15%; left: 8%; animation: floatAbout 5s ease-in-out infinite 1s; }
        .acc.outline { width: 22px; height: 22px; border: 2.5px solid var(--primary); background: transparent; top: 15%; left: 30%; animation: floatAbout 6s ease-in-out infinite 2.5s; }
        @keyframes floatAbout { 0%, 100% {transform: translateY(0);} 50% {transform: translateY(-10px);} }
        .video-trigger:hover div { transform: scale(1.1); transition: 0.3s; }
        @media (max-width: 768px) { 
           h2 { font-size: 2.2rem !important; } 
           .container { padding: 40px 20px; } 
           .dot-grid { display: none !important; } /* Empêche le débordement horizontal */
           .image-cluster { max-width: 320px !important; margin: 0 auto 40px !important; }
           .stat-divider-about { display: none !important; }
           .stats-bar-about { justify-content: center; gap: 30px !important; }
           .about-cta-group { justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default About;
