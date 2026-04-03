import React from 'react';

const Actions = () => {
  const activities = [
    {
      title: "🌙 Ramadan Solidaire",
      subtitle: "Distribution de Ndogou & Actions Nocturnes",
      desc: "Chaque nuit du destin, nous distribuons des repas aux nécessiteux dans les rues de Dakar. Une action forte menée par nos jeunes bénévoles pour apporter chaleur et solidarité.",
      color: "var(--primary)",
      icon: "🌙"
    },
    {
      title: "📅 Événement de Mars",
      subtitle: "Distribution de repas chauds",
      desc: "Un événement annuel de grande envergure pour soutenir les talibés et les personnes en situation de précarité. Un moment de partage intense qui mobilise toute la fondation.",
      color: "var(--secondary)",
      icon: "📅"
    }
  ];

  return (
    <section id="actions" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="section-title">
          <h2>Nos Actions</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--text-light)' }}>
            Découvrez comment nous intervenons sur le terrain pour améliorer le quotidien des plus démunis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {activities.map((act, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                borderRadius: '30px',
                padding: '40px',
                boxShadow: 'var(--shadow)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  background: act.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '30px',
                  boxShadow: `0 10px 20px ${act.color}33`,
                  fontSize: '2rem'
                }}>
                  {act.icon}
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text)', marginBottom: '10px' }}>{act.title}</h3>
                <h4 style={{ color: act.color, fontSize: '1.1rem', marginBottom: '20px', fontWeight: '600' }}>{act.subtitle}</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: '1.7' }}>
                  {act.desc}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#contact" className="btn btn-outline" style={{ 
                  borderColor: act.color, 
                  color: act.color, 
                  padding: '10px 20px', 
                  fontSize: '0.9rem',
                  borderRadius: '15px'
                }}>
                  Participer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actions;
