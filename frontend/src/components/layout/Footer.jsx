import { Link } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '../ui/icons';
import { contact, navLinks, site } from '../../data/site';
import s from './Footer.module.css';

export default function Footer() {
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  const backToTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.grid}>
          <p className={s.about}>{site.description}</p>

          <div>
            <h3 className={s.heading}>Naviguer</h3>
            <ul className={s.list}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={s.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={s.heading}>Contact</h3>
            <ul className={s.list}>
              <li>{contact.city}</li>
              <li>
                <a href={contact.phoneHref} className={s.link}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={s.link}>
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={s.heading}>Suivre</h3>
            <ul className={s.list}>
              <li>
                <a href={contact.instagram.href} target="_blank" rel="noreferrer" className={s.social}>
                  <InstagramIcon size={18} /> Instagram
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className={s.social}>
                  <WhatsAppIcon size={18} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${s.bottom}`}>
        <p>
          © {year} {site.name}. Tous droits réservés.
        </p>
        <button type="button" className={s.top} onClick={backToTop}>
          Haut de page <ArrowUp size={15} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
