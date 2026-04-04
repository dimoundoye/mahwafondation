import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ background: '#111b15', color: 'rgba(255,255,255,0.7)', padding: '100px 0 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', paddingBottom: '80px' }}>

          <div>
            <div style={{ marginBottom: '25px' }}>
              <Logo height="60px" />
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '30px' }}>
              La Mahwa Fondation est une force de jeunesse engagée pour un Sénégal meilleur. Ensemble, changeons des vies.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {[
                { id: 'insta', path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                { id: 'fb', path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { id: 'tw', path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { id: 'yt', path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02V8.98L15.3 12l-5.55 3.02z" }
              ].map(social => (
                <div key={social.id} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: '0.3s'
                }} className="footer-social-btn">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '30px', fontSize: '1.2rem', fontWeight: '700' }}>Liens Utiles</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '15px' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>→ Accueil</a></li>
              <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>→ Notre Mission</a></li>
              <li><a href="#actions" style={{ color: 'inherit', textDecoration: 'none' }}>→ Nos Causes</a></li>
              <li><a href="#gallery" style={{ color: 'inherit', textDecoration: 'none' }}>→ Galerie Photos</a></li>
              <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>→ Nous Rejoindre</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '30px', fontSize: '1.2rem', fontWeight: '700' }}>Contact</h4>
            <div style={{ gridTemplateColumns: '1fr', display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Dakar Plateau, Sénégal</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>+221 33 000 00 00</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <span>contact@mahwa.sn</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '30px', fontSize: '1.2rem', fontWeight: '700' }}>Newsletter</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '20px' }}>Recevez nos dernières actualités et rapports d'impact.</p>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                placeholder="Votre email"
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white'
                }}
              />
              <button style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                bottom: '5px',
                padding: '0 20px',
                borderRadius: '50px',
                background: 'var(--primary)',
                border: 'none',
                color: 'white',
                fontWeight: '700'
              }}>OK</button>
            </div>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '30px 0',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.4)'
        }}>
          <p>© {new Date().getFullYear()} Mahwa Fondation.</p>
        </div>
      </div>

      {/* Flag Gradient at the very bottom (Stylistic touch) */}
      <div style={{ display: 'flex', height: '5px', width: '100%' }}>
        <div style={{ flex: 1, background: '#1c984a' }} />
        <div style={{ flex: 1, background: '#ffffff' }} />
        <div style={{ flex: 1, background: '#e63946' }} />
      </div>
    </footer>
  );
};

export default Footer;
