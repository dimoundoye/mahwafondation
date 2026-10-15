import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import Button from '../ui/Button';
import { InstagramIcon, WhatsAppIcon } from '../ui/icons';
import { contact, navLinks } from '../../data/site';
import { ease } from '../../lib/motion';
import { cx } from '../../lib/cx';
import s from './MobileMenu.module.css';

// Menu plein écran pour mobile et tablette.
export default function MobileMenu({ open, onClose }) {
  const lenis = useLenis();
  const firstLink = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    lenis?.stop();
    root.style.overflow = 'hidden';
    const timer = window.setTimeout(() => firstLink.current?.focus({ preventScroll: true }), 400);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
      root.style.overflow = '';
      lenis?.start();
    };
  }, [open, lenis, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu-mobile"
          className={s.overlay}
          data-lenis-prevent
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.6, ease: ease.inOut, delay: 0.1 } }}
          transition={{ duration: 0.75, ease: ease.inOut }}
        >
          <div className={cx('container', s.inner)}>
            <nav aria-label="Menu mobile">
              <ul className={s.links}>
                {navLinks.map((link, index) => (
                  <li key={link.to} className={s.item}>
                    <motion.span
                      className={s.itemInner}
                      initial={{ y: '115%' }}
                      animate={{ y: '0%', transition: { duration: 0.9, ease: ease.out, delay: 0.3 + index * 0.06 } }}
                      exit={{ y: '115%', transition: { duration: 0.35, ease: ease.inOut } }}
                    >
                      <NavLink
                        ref={index === 0 ? firstLink : undefined}
                        to={link.to}
                        end={link.to === '/'}
                        onClick={onClose}
                        className={({ isActive }) => cx(s.link, isActive && s.active)}
                      >
                        <span className={s.index}>0{index + 1}</span>
                        {link.label}
                      </NavLink>
                    </motion.span>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className={s.footer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.out, delay: 0.65 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className={s.contact}>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.phoneHref}>{contact.phone}</a>
                <div className={s.socials}>
                  <a href={contact.instagram.href} target="_blank" rel="noreferrer" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
              <Button to="/contact?objet=don" variant="light" onClick={onClose}>
                Faire un don
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
