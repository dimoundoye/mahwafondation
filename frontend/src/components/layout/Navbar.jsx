import { useCallback, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useLenis } from 'lenis/react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import { navLinks } from '../../data/site';
import { ease } from '../../lib/motion';
import { cx } from '../../lib/cx';
import s from './Navbar.module.css';

// Barre de navigation : transparente en haut de page, se masque à la descente et réapparaît à la remontée.
// `overDarkHero` : la page commence par une photo sombre, le texte passe en clair tant qu'on est en haut.
export default function Navbar({ overDarkHero = false }) {
  const location = useLocation();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > previous && y > 280);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Un clic sur la page déjà affichée remonte simplement en haut.
  const handleSamePage = (event, to) => {
    closeMenu();
    if (to === location.pathname && !location.search) {
      event.preventDefault();
      if (lenis) lenis.scrollTo(0, { duration: 1.4 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onDark = menuOpen || (overDarkHero && !scrolled);

  return (
    <>
      <motion.header
        className={cx(s.header, scrolled && !menuOpen && s.scrolled, onDark && s.onDark)}
        animate={{ y: hidden && !menuOpen ? '-110%' : '0%' }}
        transition={{ duration: 0.55, ease: ease.out }}
      >
        <div className={cx('container', s.bar)}>
          <Link
            to="/"
            className={s.brand}
            aria-label="Mahwa Fondation — accueil"
            onClick={(event) => handleSamePage(event, '/')}
          >
            <Logo tone={onDark ? 'light' : 'dark'} />
          </Link>

          <nav className={s.nav} aria-label="Navigation principale">
            <ul className={s.links}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => cx(s.link, isActive && s.active)}
                    onClick={(event) => handleSamePage(event, link.to)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.actions}>
            <Button to="/contact?objet=don" size="sm" variant={onDark ? 'light' : 'primary'} className={s.donate}>
              Faire un don
            </Button>
            <button
              type="button"
              className={s.menuButton}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={s.menuLabel}>{menuOpen ? 'Fermer' : 'Menu'}</span>
              <span className={cx(s.burger, menuOpen && s.burgerOpen)} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
