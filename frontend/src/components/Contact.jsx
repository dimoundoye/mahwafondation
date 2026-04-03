import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--primary)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '20px' }}>Nous rejoindre ou faire un don</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: 0.9 }}>
              Votre soutien est précieux. Que vous souhaitiez devenir bénévole ou contribuer financièrement, chaque action compte. 
              Ensemble, faisons la différence !
            </p>

            <div style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Dakar, Sénégal</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                 <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+221 77 000 00 00</span>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                 <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>@mahwa_fondation</span>
              </div>
            </div>
          </div>

          <div
            style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '20px', 
              color: 'var(--text)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <form style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Nom Complet</label>
                <input type="text" placeholder="Votre nom" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Email</label>
                <input type="email" placeholder="votre@email.com" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gap: '8px' }}>
                <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Message / Intention de Don</label>
                <textarea rows="4" placeholder="Comment souhaitez-vous aider ?" style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }}></textarea>
              </div>
              <button className="btn btn-primary" type="button" style={{ width: '100%', justifyContent: 'center' }}>
                Envoyer ✈️
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
