import React from 'react';

const Contact = () => {
  const contactInfo = [
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, text: "Dakar, Sénégal" },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, text: "+221 77 000 00 00" },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, text: "contact@mahwa.sn" },
    { icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>, text: "@mahwa_fondation" }
  ];

  return (
    <section id="contact" style={{ padding: '120px 0', background: 'transparent' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'flex-start' }} className="contact-grid">

          {/* LEFT SIDE — Contact Details */}
          <div className="contact-info">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)',
              fontSize: '11px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '25px'
            }}>
              <div style={{ width: '32px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
              NOUS REJOINDRE
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', marginBottom: '30px', color: 'var(--text)' }}>
              Nous rejoindre ou faire <span style={{ color: 'var(--secondary)', fontStyle: 'italic' }}>un don</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '45px', maxWidth: '500px', lineHeight: '1.8' }}>
              Votre soutien est précieux. Chaque action compte. Ensemble, faisons la différence !
            </p>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '50px' }}>
              {contactInfo.map((info, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{
                    width: '45px', height: '45px',
                    background: 'rgba(42, 122, 75, 0.08)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--secondary)'
                  }}>
                    {info.icon}
                  </div>
                  <span style={{ fontWeight: '600', color: 'var(--text)', fontSize: '0.95rem' }}>{info.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              {[
                { id: 'insta', path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                { id: 'fb', path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { id: 'tw', path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { id: 'yt', path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02V8.98L15.3 12l-5.55 3.02z" }
              ].map(social => (
                <div key={social.id} style={{
                  width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  color: 'var(--text-light)', transition: '0.3s'
                }} className="social-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d={social.path} /></svg>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — Form Card */}
          <div style={{
            background: 'white', padding: '50px', borderRadius: '25px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.02)', position: 'relative'
          }} className="contact-form-card">
            <h3 style={{ fontSize: '1.7rem', marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Envoyer un Message <span style={{ fontSize: '1.2rem' }}></span>
            </h3>

            <form style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }} className="form-row-2">
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '1px', color: 'var(--text-light)', textTransform: 'uppercase' }}>Nom Complet</label>
                  <input type="text" placeholder="Votre nom" style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid #EDEDED', outline: 'none', background: '#F9F9F9', fontSize: '0.9rem' }} />
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <label style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '1px', color: 'var(--text-light)', textTransform: 'uppercase' }}>Email</label>
                  <input type="email" placeholder="votre@email.com" style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid #EDEDED', outline: 'none', background: '#F9F9F9', fontSize: '0.9rem' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '1px', color: 'var(--text-light)', textTransform: 'uppercase' }}>Objet</label>
                <select style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid #EDEDED', outline: 'none', background: '#F9F9F9', color: 'var(--text-light)', appearance: 'none', cursor: 'pointer' }}>
                  <option>Don financier</option>
                  <option>Bénévolat</option>
                  <option>Suggestion</option>
                  <option>Autre</option>
                </select>
              </div>

              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '1px', color: 'var(--text-light)', textTransform: 'uppercase' }}>Message / Intention de Don</label>
                <textarea rows="4" placeholder="Comment aimeriez-vous aider ?" style={{ padding: '15px 20px', borderRadius: '12px', border: '1px solid #EDEDED', outline: 'none', background: '#F9F9F9', fontSize: '0.9rem', resize: 'none' }}></textarea>
              </div>

              <button className="btn-send" style={{
                background: 'var(--primary)', color: 'white', padding: '18px', borderRadius: '50px',
                border: 'none', fontSize: '12px', fontWeight: '800', letterSpacing: '2px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                cursor: 'pointer', transition: 'all 0.3s', marginTop: '10px'
              }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                ENVOYER
              </button>
            </form>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .btn-send:hover { background: #1f5f3a; transform: translateY(-3px); box-shadow: 0 10px 25px rgba(42, 122, 75, 0.3); }
        .social-icon:hover { color: var(--secondary); border-color: var(--secondary); transform: scale(1.1); }
        @media (max-width: 768px) {
           .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
           #contact { padding: 80px 0 !important; }
           .contact-form-card { padding: 35px 25px !important; border-radius: 20px !important; }
           .contact-info h2 { font-size: 2.2rem !important; }
        }
      `}} />
    </section>
  );
};

export default Contact;
