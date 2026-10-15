import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import LineReveal from '../ui/LineReveal';
import Photo from '../ui/Photo';
import Reveal from '../ui/Reveal';
import useMediaQuery from '../../hooks/useMediaQuery';
import { getPhoto } from '../../lib/photos';
import { cx } from '../../lib/cx';
import s from './GalleryScroller.module.css';

const SELECTION = [
  'benevole-bassine',
  'preparation-gobelets',
  'service-tente',
  'visage-fillette',
  'cuisine-marmites',
  'celebration-procession',
  'visage-benevole',
  'preparation-salle',
  'celebration-tente',
];

// Le défilement vertical consommé vaut 80 % de la course horizontale.
const SCROLL_RATIO = 0.8;

// Bandeau photo : sur grand écran, la section se fige et les photos défilent à l'horizontale.
export default function GalleryScroller({ index = '05' }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const reduce = useReducedMotion();
  const wide = useMediaQuery('(min-width: 900px)');
  const pinned = wide && !reduce;

  useEffect(() => {
    if (!pinned) return undefined;
    const track = trackRef.current;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      ref={sectionRef}
      className={cx(s.section, pinned && s.pinned)}
      style={pinned ? { height: `calc(100vh + ${Math.round(distance * SCROLL_RATIO)}px)` } : undefined}
      aria-labelledby="instants-title"
    >
      <div className={s.sticky}>
        <motion.div ref={trackRef} className={s.track} style={pinned ? { x } : undefined}>
          <div className={s.intro}>
            <Reveal y={14}>
              <Eyebrow index={index}>Galerie</Eyebrow>
            </Reveal>
            <LineReveal as="h2" id="instants-title" className={s.title}>
              <span>Instants</span>
              <em>de partage.</em>
            </LineReveal>
            <Reveal as="p" className={s.text} delay={0.15}>
              Préparation, service, célébration : des moments vrais, saisis sur le terrain avec nos bénévoles.
            </Reveal>
            <Reveal delay={0.25}>
              <Button to="/galerie" variant="link">
                Voir toute la galerie
              </Button>
            </Reveal>
          </div>

          {SELECTION.map((id, i) => {
            const photo = getPhoto(id);
            const portrait = photo.height > photo.width;
            return (
              <figure key={id} className={cx(s.card, portrait ? s.portrait : s.landscape, i % 2 === 1 && s.offset)}>
                <div className={s.frame}>
                  <Photo photo={photo} fill sizes={portrait ? '(min-width: 900px) 24vw, 70vw' : '(min-width: 900px) 42vw, 85vw'} />
                </div>
                <figcaption className={s.caption}>
                  <span className={s.count}>{String(i + 1).padStart(2, '0')}</span>
                  {photo.alt}
                </figcaption>
              </figure>
            );
          })}
        </motion.div>

        {pinned && (
          <div className={s.progress} aria-hidden="true">
            <motion.span className={s.progressFill} style={{ scaleX: scrollYProgress }} />
          </div>
        )}
      </div>
    </section>
  );
}
