import React, { useState } from 'react';

const Gallery = () => {
  const albums = [
    {
      title: "Ramadan Solidaire 2024",
      photos: [
        { src: '/hero.png', alt: 'Distribution Ndogou' },
        { src: '/group.png', alt: 'Équipe Bénévole' },
        { src: '/action_march.png', alt: 'Repas partagé' },
      ]
    },
    {
      title: "Impact Éducation & Jeunesse",
      photos: [
        { src: '/action_march.png', alt: 'Fournitures scolaires' },
        { src: '/hero.png', alt: 'Sourires d\'enfants' },
      ]
    }
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" style={{ padding: '120px 0', background: 'transparent' }}>
      <div className="container">
        
        {/* Gallery Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ 
               display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', 
               fontSize: '11px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '25px'
          }}>
             <div style={{ width: '28px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
             GALERIE PHOTOS
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text)' }}>Nos Moments Forts</h2>
        </div>

        {/* ALBUMS LIST */}
        <div style={{ display: 'grid', gap: '80px' }}>
          {albums.map((album, albumIdx) => (
            <div key={albumIdx} className="album-group">
              <div style={{ 
                display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px',
                borderBottom: '1px solid var(--border)', paddingBottom: '15px'
              }}>
                 <span style={{ 
                   fontFamily: 'Playfair Display', fontSize: '1.8rem', fontWeight: '900', 
                   color: 'var(--primary)' 
                 }}>
                   {album.title}
                 </span>
                 <div style={{ padding: '4px 12px', background: 'var(--secondary)', color: 'white', fontSize: '10px', borderRadius: '50px', fontWeight: '800' }}>
                    {album.photos.length} PHOTOS
                 </div>
              </div>

              {/* Grid for this specific album */}
              <div style={{ 
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '20px' 
              }}>
                {album.photos.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImg(img)}
                    style={{
                      position: 'relative',
                      borderRadius: '0',
                      overflow: 'hidden',
                      aspectRatio: '3/2',
                      cursor: 'pointer',
                      border: '1px solid var(--border)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      transition: 'all 0.4s'
                    }}
                    className="gallery-item-album"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} 
                    />
                    <div className="overlay-album" style={{
                      position: 'absolute', inset: 0, 
                      background: 'linear-gradient(to top, rgba(27,67,50,0.8), transparent)',
                      display: 'flex', alignItems: 'flex-end', padding: '20px',
                      opacity: 0, transition: '0.4s'
                    }}>
                      <div style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        AGRANDIR
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-item-album:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(42, 122, 75, 0.15); border-color: var(--primary); }
        .gallery-item-album:hover .overlay-album { opacity: 1 !important; }
        .gallery-item-album:hover img { transform: scale(1.1); }
      `}} />

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.95)',
            zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px'
          }}
        >
          <button style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '2rem' }}>✕</button>
          <img
            src={selectedImg.src}
            alt={selectedImg.alt}
            style={{ maxWidth: '100%', maxHeight: '85%', boxShadow: '0 30px 100px rgba(0,0,0,0.5)', border: '4px solid white' }}
          />
          <div style={{ position: 'absolute', bottom: '40px', color: 'white', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
            {selectedImg.alt}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
