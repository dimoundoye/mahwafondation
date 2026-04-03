import React from 'react';

const About = () => {
  const splitImage = "/group.png";

  return (
    <section id="about" style={{ padding: '160px 0', background: 'var(--bg)', overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px', alignItems: 'center' }}>
          
          {/* LE SPLIT MASK EFFECT (CORRIGÉ & SHARP) */}
          <div style={{ 
            position: 'relative', 
            height: '650px', 
            display: 'flex', 
            gap: '4px', // ESPACE ULTRA-FIN À 4px
            alignItems: 'center',
            transform: 'rotate(-5deg)',
            zIndex: 2
          }}>
            {/* Fragment 1 (Gauche) - SHARP & SYNCED */}
            <div style={{ 
              flex: 1, 
              height: '450px', 
              borderRadius: '0', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              border: '4px solid white',
              position: 'relative',
              background: `url(${splitImage}) no-repeat`,
              backgroundSize: '300% auto', // L'image est 3x plus large
              backgroundPosition: '0% center', // Portion gauche
              transform: 'rotate(5deg)' // On redresse
            }} />

            {/* Fragment 2 (Milieu) - SHARP & SYNCED */}
            <div style={{ 
              flex: 1.2, 
              height: '620px', 
              borderRadius: '0', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              border: '4px solid white',
              marginTop: '-50px',
              position: 'relative',
              background: `url(${splitImage}) no-repeat`,
              backgroundSize: '300% auto',
              backgroundPosition: '50% center', // Portion milieu
              transform: 'rotate(5deg)'
            }} />

            {/* Fragment 3 (Droite) - SHARP & SYNCED */}
            <div style={{ 
              flex: 1, 
              height: '520px', 
              borderRadius: '0', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              border: '4px solid white',
              marginTop: '100px',
              position: 'relative',
              background: `url(${splitImage}) no-repeat`,
              backgroundSize: '300% auto',
              backgroundPosition: '100% center', // Portion droite
              transform: 'rotate(5deg)'
            }} />
          </div>

          <div>
            <span style={{ color: 'var(--accent)', fontWeight: '800', letterSpacing: '4px', display: 'block', marginBottom: '20px', fontSize: '0.9rem' }}>NOTRE HISTOIRE</span>
            <h2 style={{ fontSize: '3.8rem', fontWeight: '800', lineHeight: '1.05', marginBottom: '35px', color: 'var(--primary)' }}>
              Vous êtes l'Espoir <br />
              <span style={{ color: 'var(--text-light)', fontWeight: '400', fontFamily: 'Inter' }}>D'un Meilleur Demain</span>
            </h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '45px', fontStyle: 'italic' }}>
              "La solidarité n'est pas un sentiment, c'est une action. À Mahwa, nous faisons de chaque don une réalité sur le terrain."
            </p>
            
            <div style={{ display: 'grid', gap: '35px', marginBottom: '55px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                 <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '12px', color: 'var(--accent)' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                 </div>
                 <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Engagement des Jeunes</h4>
                    <p style={{ fontSize: '1rem', opacity: 0.8, color: 'var(--text-light)' }}>Mobilisation active pour la distribution de Ndogou et le soutien social direct.</p>
                 </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                 <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '12px', color: 'var(--accent)' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-2-2"/></svg>
                 </div>
                 <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Impact Durable</h4>
                    <p style={{ fontSize: '1rem', opacity: 0.8, color: 'var(--text-light)' }}>Soutien alimentaire et aide humanitaire aux populations les plus vulnérables.</p>
                 </div>
              </div>
            </div>

            <a href="#contact" className="btn-luxury-sm" style={{ 
              padding: '18px 45px', 
              borderRadius: '50px', 
              background: 'var(--primary)', 
              color: 'white', 
              fontSize: '1rem', 
              fontWeight: '700',
              boxShadow: 'var(--shadow)',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}>EN SAVOIR PLUS →</a>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .btn-luxury-sm:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(27, 67, 50, 0.2); filter: brightness(1.1); }
      `}} />
    </section>
  );
};

export default About;
