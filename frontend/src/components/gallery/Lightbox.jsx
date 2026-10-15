import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLenis } from 'lenis/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Photo from '../ui/Photo';
import { photoSrcSet } from '../../lib/photos';
import { ease } from '../../lib/motion';
import s from './Lightbox.module.css';

const slideVariants = {
  enter: ({ direction }) => ({ x: direction > 0 ? '22%' : '-22%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: ({ direction, shared }) =>
    direction === 0 ? { opacity: shared ? 1 : 0 } : { x: direction > 0 ? '-22%' : '22%', opacity: 0 },
};

// Visionneuse plein écran : la photo ouverte s'agrandit depuis sa vignette, puis navigation au clavier ou au doigt.
export default function Lightbox({ photos, index, openedId, onChange, onClose }) {
  const reduce = useReducedMotion();
  const lenis = useLenis();
  const closeButton = useRef(null);
  const [direction, setDirection] = useState(0);
  // Après une navigation, la photo affichée n'est plus liée à sa vignette.
  const [detachedFrom, setDetachedFrom] = useState(null);

  const photo = index !== null ? photos[index] : null;
  const open = Boolean(photo);
  const shared = !reduce && open && photo.id === openedId && detachedFrom !== openedId;

  const go = (step) => {
    const next = (index + step + photos.length) % photos.length;
    setDirection(step);
    if (detachedFrom !== openedId) {
      setDetachedFrom(openedId);
      requestAnimationFrame(() => onChange(next));
    } else {
      onChange(next);
    }
  };

  const close = () => {
    setDirection(0);
    requestAnimationFrame(onClose);
  };

  // Verrouille le défilement de la page et gère le focus tant que la visionneuse est ouverte.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const root = document.documentElement;
    lenis?.stop();
    root.style.overflow = 'hidden';
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      root.style.overflow = '';
      lenis?.start();
      previous?.focus?.({ preventScroll: true });
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  // Précharge les photos voisines pour une navigation instantanée.
  useEffect(() => {
    if (!open || photos.length < 2) return;
    [index + 1, index - 1].forEach((i) => {
      const neighbour = photos[(i + photos.length) % photos.length];
      const img = new Image();
      img.sizes = '92vw';
      img.srcset = photoSrcSet(neighbour);
    });
  }, [open, index, photos]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80 || info.velocity.x < -600) go(1);
    else if (info.offset.x > 80 || info.velocity.x > 600) go(-1);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <div key="lightbox" className={s.root} role="dialog" aria-modal="true" aria-label="Visionneuse de photos">
          <motion.div
            className={s.backdrop}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: ease.out } }}
            transition={{ duration: 0.5, ease: ease.out }}
          />

          <div className={s.stage}>
            <AnimatePresence initial={false} custom={{ direction, shared }} mode="popLayout" propagate>
              <motion.figure
                key={photo.id}
                className={s.figure}
                style={{ '--ratio': photo.width / photo.height }}
                custom={{ direction, shared }}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: ease.out }}
                drag={photos.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
              >
                <motion.div
                  className={s.frame}
                  layoutId={shared ? `gallery-photo-${photo.id}` : undefined}
                  style={{ borderRadius: 6 }}
                  transition={{ duration: 0.7, ease: ease.inOut }}
                >
                  <Photo photo={photo} fill sizes="92vw" priority />
                </motion.div>
              </motion.figure>
            </AnimatePresence>
          </div>

          <motion.div
            className={s.bar}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.out, delay: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <p className={s.caption} aria-live="polite">
              <span className={s.counter}>
                {String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </span>
              {photo.alt}
            </p>
            {photos.length > 1 && (
              <div className={s.nav}>
                <button type="button" className={s.navButton} onClick={() => go(-1)} aria-label="Photo précédente">
                  <ArrowLeft size={20} strokeWidth={1.6} />
                </button>
                <button type="button" className={s.navButton} onClick={() => go(1)} aria-label="Photo suivante">
                  <ArrowRight size={20} strokeWidth={1.6} />
                </button>
              </div>
            )}
          </motion.div>

          <motion.button
            ref={closeButton}
            type="button"
            className={s.close}
            onClick={close}
            aria-label="Fermer la visionneuse"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0, transition: { duration: 0.6, ease: ease.out, delay: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <X size={22} strokeWidth={1.6} />
          </motion.button>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
