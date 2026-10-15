import { useCallback, useEffect, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';
import Navbar from './Navbar';
import PageShell from './PageShell';
import s from './SiteLayout.module.css';

// Pages dont le haut est une photo sombre plein écran : la navigation y passe en texte clair.
const DARK_HERO_PATHS = ['/'];

// Coquille du site public : navigation persistante + pages animées par un rideau.
export default function SiteLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const lenis = useLenis();
  const [introDone, setIntroDone] = useState(false);
  // Page réellement affichée : elle ne change qu'une fois l'ancienne cachée par le rideau.
  const [displayedPath, setDisplayedPath] = useState(location.pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // La page sortante est masquée par le rideau : on remonte en haut avant l'arrivée de la suivante.
  const handleExitComplete = useCallback(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
    setDisplayedPath(location.pathname);
  }, [lenis, location.pathname]);

  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  return (
    <div className={s.site}>
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <Navbar overDarkHero={DARK_HERO_PATHS.includes(displayedPath)} />
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <PageShell key={location.pathname} intro={!introDone} onIntroDone={handleIntroDone}>
          {outlet}
        </PageShell>
      </AnimatePresence>
      <div className={s.grain} aria-hidden="true" />
    </div>
  );
}
