import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Accueil', href: '#' },
    { title: 'À Propos', href: '#about' },
    { title: 'Nos Actions', href: '#actions' },
    { title: 'Galerie', href: '#gallery' },
    { title: 'Nous Rejoindre', href: '#contact' },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      {/* Top Bar (Comme sur le site Charius) */}


      <nav className={`transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-white py-4'}`} style={{ boxShadow: scrolled ? 'var(--shadow)' : 'none' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" className="brand" style={{ textDecoration: 'none' }}>
            <Logo scrolled={scrolled} height={scrolled ? '45px' : '55px'} />
          </a>

          {/* Desktop Menu */}
          <ul style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-menu">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} style={{ fontWeight: '600', fontSize: '0.95rem', color: scrolled ? 'var(--text)' : 'var(--text)' }} className="nav-link">
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ padding: '10px 25px', fontSize: '0.9rem', borderRadius: '30px' }}>
                Faire un don
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontSize: '1.5rem' }}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{
        __html: `
        .nav-link {
          position: relative;
          color: var(--text);
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 991px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="glass"
          style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '20px', boxShadow: 'var(--shadow)' }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 0', fontSize: '1.1rem', fontWeight: '500' }}>
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Faire un don ❤️
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
