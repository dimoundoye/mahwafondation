import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    { src: '/hero.png', title: 'Ramadan 2024' },
    { src: '/group.png', title: 'Notre Équipe' },
    { src: '/action_march.png', title: 'Événement de Mars' },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>En images</h2>
          <p style={{ color: 'var(--text-light)' }}>Quelques moments forts de nos dernières actions solidaires.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImg(img)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
                boxShadow: 'var(--shadow)'
              }}
              className="gallery-item"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="hover-scale"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }} className="overlay">
                <span style={{ color: 'white', fontWeight: '600' }}>{img.title}</span>
                <span style={{ marginLeft: 'auto', fontSize: '1.2rem', color: 'white' }}>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-item:hover .overlay { opacity: 1 !important; }
        .gallery-item:hover img { transform: scale(1.1); }
      `}} />

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}
        >
          <button onClick={() => setSelectedImg(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '2rem' }}>
            ✕
          </button>
          <img
            src={selectedImg.src}
            alt={selectedImg.title}
            style={{ maxWidth: '100%', maxHeight: '90%', borderRadius: '10px' }}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
