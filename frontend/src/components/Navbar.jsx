import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Nos Causes', href: '#actions' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
      <nav className={`transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-6'}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          
          <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                style={{ 
                  textDecoration: 'none', 
                  color: scrolled ? 'var(--text)' : 'white', 
                  fontWeight: '700', 
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: '0.3s'
                }}
                className="hover-link"
              >
                {link.name}
              </a>
            ))}
            
            <a href="#contact" className="btn-prestige-red" style={{ 
               padding: '12px 28px', fontSize: '11px', fontWeight: '900', borderRadius: '50px',
               marginLeft: '15px'
            }}>
              FAIRE UN DON
            </a>
          </div>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass { background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(20px); border-bottom: 2px solid var(--border); }
        .hover-link:hover { color: var(--secondary) !important; transform: translateY(-2px); }
        @media (max-width: 900px) { .nav-links { display: none !important; } }
      `}} />
    </div>
  );
};

export default Navbar;
