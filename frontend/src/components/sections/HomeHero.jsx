import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import LineReveal from '../ui/LineReveal';
import Photo from '../ui/Photo';
import Reveal from '../ui/Reveal';
import useMediaQuery from '../../hooks/useMediaQuery';
import { heroSlides, site } from '../../data/site';
import { ease } from '../../lib/motion';
import { cx } from '../../lib/cx';
import s from './HomeHero.module.css';

const SLIDE_DURATION = 7; // secondes par photo
const FADE = 1.6; // fondu entre deux photos

// Hero plein écran : diaporama de photos en fondu avec zoom lent, texte en surimpression.
export default function HomeHero() {
  const ref = useRef(null);
  const playback = useRef(null);
  const reduce = useReducedMotion();
  const mobile = useMediaQuery('(max-width: 767px)');
  const inView = useInView(ref, { amount: 0.3 });
  const [slides, setSlides] = useState({ index: 0, previous: null });
  const progress = useMotionValue(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const show = (index) =>
    setSlides((current) => (current.index === index ? current : { index, previous: current.index }));

  // Avance automatique : la barre de l'indicateur actif suit la même progression.
  useEffect(() => {
    if (reduce) return undefined;
    progress.set(0);
    const controls = animate(progress, 1, {
      duration: SLIDE_DURATION,
      ease: 'linear',
      onComplete: () =>
        setSlides((current) => ({ index: (current.index + 1) % heroSlides.length, previous: current.index })),
    });
    playback.current = controls;
    return () => controls.stop();
  }, [slides.index, reduce, progress]);

  // Pause quand le hero sort de l'écran.
  useEffect(() => {
    if (!playback.current) return;
    if (inView) playback.current.play();
    else playback.current.pause();
  }, [inView, slides.index]);

  return (
    <section ref={ref} className={s.hero} aria-labelledby="hero-title">
      <motion.div className={s.media} style={reduce ? undefined : { y: mediaY }} aria-hidden="true">
        {heroSlides.map((slide, i) => {
          const active = i === slides.index;
          // La photo précédente reste visible sous la nouvelle pendant le fondu : pas de passage au noir.
          const visible = active || i === slides.previous;
          return (
            <motion.div
              key={slide.label}
              className={s.slide}
              style={{ zIndex: active ? 2 : visible ? 1 : 0 }}
              initial={false}
              animate={{ opacity: visible ? 1 : 0 }}
              transition={{ duration: active ? FADE : 0, delay: active ? 0 : FADE }}
            >
              <motion.div
                className={s.slideInner}
                initial={reduce ? false : { scale: 1.14 }}
                animate={{ scale: active && !reduce ? 1.02 : 1.14 }}
                transition={
                  active
                    ? { duration: SLIDE_DURATION + FADE, ease: 'linear' }
                    : { duration: 0, delay: FADE + 0.1 }
                }
              >
                <Photo
                  id={mobile ? slide.mobile : slide.desktop}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  alt=""
                  style={{ objectPosition: mobile ? slide.mobileFocus : slide.focus }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={s.shade} aria-hidden="true" />

      <motion.div
        className={cx('container', s.content)}
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className={s.copy}>
          <Reveal y={14}>
            <Eyebrow tone="light">{site.baseline}</Eyebrow>
          </Reveal>

          <LineReveal as="h1" id="hero-title" onMount className={s.title} stagger={0.1}>
            <span>Unir nos forces,</span>
            <span>partager</span>
            <em>l’espérance.</em>
          </LineReveal>

          <Reveal as="p" className={s.lead} delay={0.45}>
            Nous transformons la solidarité en actions concrètes pour soutenir les plus vulnérables au Sénégal :
            repas, éducation, présence.
          </Reveal>
          <Reveal className={s.actions} delay={0.6}>
            <Button to="/contact?objet=don" variant="light" size="lg">
              Faire un don
            </Button>
            <Button to="/actions" variant="outlineLight" size="lg">
              Découvrir nos actions
            </Button>
          </Reveal>
        </div>

        <Reveal className={s.slides} delay={0.8} y={12}>
          <ol className={s.dots} aria-label="Photos du diaporama">
            {heroSlides.map((slide, i) => {
              const active = i === slides.index;
              return (
                <li key={slide.label}>
                  <button
                    type="button"
                    className={cx(s.dot, active && s.dotActive)}
                    onClick={() => show(i)}
                    aria-label={`Photo ${i + 1} : ${slide.label}`}
                    aria-current={active}
                  >
                    <span className={s.dotLabel}>
                      <span className={s.dotIndex}>0{i + 1}</span>
                      {slide.label}
                    </span>
                    <span className={s.dotTrack}>
                      <motion.span
                        className={s.dotFill}
                        style={{ scaleX: active ? (reduce ? 1 : progress) : 0 }}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </motion.div>

      <motion.span
        className={s.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: ease.out, delay: 2 }}
        aria-hidden="true"
      />
    </section>
  );
}
