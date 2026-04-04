import React from 'react';

const Causes = () => {
  const causes = [
    {
      icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>,
      title: "Ramadan Solidaire",
      desc: "Distribution de repas quotidiens de Ndogou pour les nécessiteux dans les rues de Dakar.",
      raised: "450 000 FCFA",
      goal: "600 000 FCFA",
      percent: 75,
      color: "var(--primary)"
    },
    {
      icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: "Événement de Mars",
      desc: "Soutien alimentaire massif et distribution de repas chauds pour les talibés en situation de précarité.",
      raised: "280 000 FCFA",
      goal: "500 000 FCFA",
      percent: 56,
      color: "var(--secondary)"
    },
    {
      icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: "Soutien Scolaire",
      desc: "Aide à l'éducation et fournitures pour les jeunes issus de quartiers défavorisés.",
      raised: "120 000 FCFA",
      goal: "300 000 FCFA",
      percent: 40,
      color: "var(--primary)"
    }
  ];

  return (
    <section id="actions" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ 
               display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', 
               fontSize: '11px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '25px'
          }}>
             <div style={{ width: '28px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
             NOS CAUSES
          </div>
          <h2 style={{ fontSize: '3.5rem', marginTop: '10px' }}>Engagement Solidaire</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {causes.map((c, i) => (
            <div 
              key={i} 
              style={{ 
                background: 'white', 
                borderRadius: '0', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.4s ease',
                border: '1px solid var(--border)'
              }}
              className="cause-card"
            >
              <div style={{ 
                height: '240px', 
                background: i === 0 ? 'url(/hero.png)' : i === 1 ? 'url(/action_march.png)' : 'url(/group.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              
              <div style={{ padding: '40px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: c.color, marginBottom: '20px' }}>
                    {c.icon}
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text)', margin: 0 }}>{c.title}</h3>
                 </div>
                 <p style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '30px', lineHeight: '1.8' }}>
                    {c.desc}
                 </p>

                 {/* Progress Bar styled like Charity Style */}
                 <div style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '10px', fontWeight: '700', letterSpacing: '1px' }}>
                       <span style={{ color: 'var(--text-light)', textTransform: 'uppercase' }}>ATTEINT:</span>
                       <span style={{ color: c.color }}>{c.percent}%</span>
                    </div>
                    <div style={{ height: '8px', background: '#F0F0F0', borderRadius: '50px', overflow: 'hidden' }}>
                       <div style={{ width: `${c.percent}%`, height: '100%', background: c.color, transition: 'width 1s ease' }} />
                    </div>
                 </div>

                 <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1.5px dashed var(--border)', paddingTop: '25px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                       <span style={{ fontSize: '10px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Collecté</span>
                       <span style={{ fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Playfair Display', color: 'var(--text)' }}>{c.raised}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                       <span style={{ fontSize: '10px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Objectif</span>
                       <span style={{ fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Playfair Display', color: 'var(--text)' }}>{c.goal}</span>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .cause-card:hover { transform: translateY(-12px); box-shadow: 0 40px 80px rgba(0,0,0,0.1); }
      `}} />
    </section>
  );
};

export default Causes;
