import React, { useState } from 'react';

const Gallery = () => {
  const albums = [
    {
      id: 1,
      title: "Ramadan Solidaire 2024",
      cover: '/hero.png',
      description: "Distribution de Ndogou et repas de rupture dans les quartiers de Dakar.",
      photos: [
        { src: '/hero.png', alt: 'Distribution Ndogou 1' },
        { src: '/group.png', alt: 'Équipe en action' },
        { src: '/action_march.png', alt: 'Repas de rupture' },
        { src: '/hero.png', alt: 'Moment de joie' },
      ]
    },
    {
      id: 2,
      title: "Actions Éducation",
      cover: '/action_march.png',
      description: "Soutien aux écoles et distribution de kits scolaires pour les talibés.",
      photos: [
        { src: '/action_march.png', alt: 'Kits scolaires' },
        { src: '/hero.png', alt: 'Classe de cours' },
        { src: '/group.png', alt: 'Remise des prix' },
      ]
    },
    {
      id: 3,
      title: "Événements Spéciaux",
      cover: '/group.png',
      description: "Moments forts de nos rassemblements et journées de bénévolat.",
      photos: [
        { src: '/group.png', alt: 'Photo de groupe 2024' },
        { src: '/action_march.png', alt: 'Conférence' },
      ]
    }
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // Vue Initiale : Grille des Albums (Couvertures)
  const renderAlbumCovers = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
      {albums.map((album) => (
        <div 
          key={album.id}
          onClick={() => setSelectedAlbum(album)}
          style={{
            background: 'white',
            borderRadius: '25px',
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
            transition: 'all 0.4s ease',
            border: '1px solid var(--border)'
          }}
          className="album-card"
        >
          {/* Cover Image */}
          <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
             <img 
               src={album.cover} 
               alt={album.title} 
               style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }} 
             />
             <div style={{
                position: 'absolute', bottom: '15px', right: '15px',
                background: 'var(--secondary)', color: 'white', padding: '6px 15px',
                borderRadius: '50px', fontSize: '11px', fontWeight: '800'
             }}>
                {album.photos.length} PHOTOS
             </div>
          </div>
          {/* Info */}
          <div style={{ padding: '30px' }}>
             <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', marginBottom: '10px' }}>{album.title}</h3>
             <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>{album.description}</p>
             <div style={{ marginTop: '20px', color: 'var(--primary)', fontWeight: '800', fontSize: '11px', letterSpacing: '1px' }}>
                VOIR L'ALBUM →
             </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Vue Album Ouvert : Grille des Photos du scroll spécifique
  const renderAlbumPhotos = () => (
    <div>
      {/* Bouton Retour */}
      <button 
        onClick={() => setSelectedAlbum(null)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
          gap: '10px', color: 'var(--primary)', fontWeight: '800', fontSize: '12px', marginBottom: '40px',
          padding: '10px 0'
        }}
      >
        ← RETOUR AUX ALBUMS
      </button>

      <div style={{ marginBottom: '50px' }}>
         <h3 style={{ fontFamily: 'Playfair Display', fontSize: '3rem', marginBottom: '10px' }}>{selectedAlbum.title}</h3>
         <p style={{ color: 'var(--text-light)', maxWidth: '600px' }}>{selectedAlbum.description}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {selectedAlbum.photos.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImg(img)}
            style={{
              borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/2', cursor: 'pointer',
              boxShadow: 'var(--shadow)', border: '1px solid var(--border)'
            }}
            className="photo-card"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.4s' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="gallery" style={{ padding: '80px 0 120px', background: 'transparent' }}>
      <div className="container">
        
        {/* Header - Uniquement visible si aucun album n'est sélectionné */}
        {!selectedAlbum && (
           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', 
                  fontSize: '11px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '25px'
              }}>
                <div style={{ width: '28px', height: '2.5px', background: 'var(--primary)', borderRadius: '2px' }} />
                MULTIMÉDIA
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Archives de Solidarité</h2>
           </div>
        )}

        {/* CONTENU DYNAMIQUE */}
        {selectedAlbum ? renderAlbumPhotos() : renderAlbumCovers()}

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .album-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.1); border-color: var(--primary); }
        .album-card:hover img { transform: scale(1.1); }
        .photo-card:hover img { transform: scale(1.1); }
      `}} />

      {/* Lightbox Modal */}
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
            style={{ maxWidth: '100%', maxHeight: '85%', border: '4px solid white', boxShadow: '0 30px 100px rgba(0,0,0,0.5)' }}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
