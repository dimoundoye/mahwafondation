import React from 'react';

const InstantsDePartage = () => {
  return (
    <section id="instants" style={{ padding: '120px 0 60px', background: 'transparent' }}>
      <div className="container">
        
        {/* Title */}
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontFamily: 'Playfair Display', 
          fontWeight: '900',
          marginBottom: '50px',
          color: 'var(--text)'
        }}>
          Instants de Partage
        </h2>

        {/* BENTO GRID LAYOUT */}
        <div className="bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '20px',
          minHeight: '600px'
        }}>
          
          {/* Large Image Left */}
          <div style={{
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            position: 'relative'
          }} className="bento-item-large">
            <img 
              src="/hero.png" 
              alt="Moment de partage" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right Cluster */}
          <div style={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gap: '20px'
          }} className="bento-right-stack">
            
            {/* Top Horizontal Image */}
            <div style={{
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              position: 'relative'
            }}>
              <img 
                src="/action_march.png" 
                alt="Action humanitaire" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Bottom Row (Two Small Blocks) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              {/* Number Card (3 GALLERY >) */}
              <div style={{
                borderRadius: '25px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                padding: '20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                 <span style={{ fontSize: '5rem', fontWeight: '900', fontFamily: 'Playfair Display', lineHeight: 1, opacity: 0.5 }}>3</span>
                 <div style={{ position: 'absolute', bottom: '25px', width: '100%' }}>
                    <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '2px', opacity: 0.8 }}>GALLERY {'>'}</span>
                    <br />
                    <span style={{ fontSize: '9px', fontWeight: '400', letterSpacing: '1px' }}>SEE THE WORK</span>
                 </div>
              </div>

              {/* Small Portrait Image */}
              <div style={{
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
              }}>
                <img 
                  src="/group.png" 
                  alt="Équipe" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .bento-grid { 
             grid-template-columns: 1fr !important; 
             grid-template-rows: auto !important;
             min-height: auto !important;
          }
          .bento-item-large { aspect-ratio: 4/3; }
          .bento-right-stack { grid-template-rows: auto !important; }
          .bento-right-stack > div:first-child { aspect-ratio: 16/9; }
        }
      `}} />
    </section>
  );
};

export default InstantsDePartage;
