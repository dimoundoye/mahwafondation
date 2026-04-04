import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Gestion de la transparence au tout début du scroll
      setScrolled(currentScrollY > 50);

      // 2. LOGIQUE SMART NAVBAR (DÉROULEMENT INVERSÉ)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // SCROLL VERS LE BAS -> On la rend transparente / On la cache
        setVisible(false);
      } else {
        // SCROLL VERS LE HAUT -> On l'affiche en Blanc
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Nos Causes', href: '#actions' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      zIndex: 1000,
      transition: 'transform 0.4s ease',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)' // Cache la navbar au scroll bas
    }}>
      <nav className={`transition-all duration-300 ${scrolled ? 'glass py-1' : 'bg-transparent py-4'}`} id="main-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="navbar-logo-wrapper">
            <Logo 
              height={isMobile ? (scrolled ? '32px' : '38px') : (scrolled ? '45px' : '65px')} 
              scrolled={scrolled || isMobile} 
            />
          </div>
          
          {/* Menu Desktop */}
          <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="nav-links-desktop">
            {navLinks.map((link) => (
              <a 
                key={link.name} href={link.href} 
                style={{ 
                  textDecoration: 'none', color: scrolled ? 'var(--text)' : 'white', 
                  fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', 
                  letterSpacing: '1px', transition: '0.3s'
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

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ 
              display: 'none', background: 'none', border: 'none', cursor: 'pointer',
              color: scrolled ? 'var(--text)' : 'white'
            }} 
            className="mobile-toggle"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none">
              {mobileMenuOpen ? 
                <path d="M18 6L6 18M6 6l12 12" /> : 
                <path d="M3 12h18M3 6h18M3 18h18" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile Fullscreen Overlay */}
      <div style={{
         position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh',
         background: 'var(--bg)', zIndex: 999, padding: '120px 40px',
         transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
         transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1)',
         display: 'flex', flexDirection: 'column', gap: '30px'
      }}>
         {/* Bouton Fermer (X) explicite */}
         <button 
           onClick={() => setMobileMenuOpen(false)}
           style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}
         >
           <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2.5" fill="none"><path d="M18 6L6 18M6 6l12 12" /></svg>
         </button>

         {navLinks.map((link) => (
            <a 
              key={link.name} href={link.href} onClick={handleLinkClick}
              style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--text)', textDecoration: 'none', fontFamily: 'Playfair Display' }}
            >
               {link.name}
            </a>
         ))}
         <a href="#contact" onClick={handleLinkClick} className="btn-prestige-red" style={{ 
            padding: '20px', textAlign: 'center', width: '100%', marginTop: 'auto', marginBottom: '80px' 
         }}>
            FAIRE UN DON
         </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .glass { background: white; border-bottom: 2px solid var(--border); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .hover-link:hover { color: var(--secondary) !important; transform: translateY(-2px); }
        
        @media (max-width: 900px) { 
           .nav-links-desktop { display: none !important; } 
           .mobile-toggle { display: block !important; }
           #main-nav { padding-top: 8px !important; padding-bottom: 8px !important; }
        }
      `}} />
    </div>
  );
};

export default Navbar;
