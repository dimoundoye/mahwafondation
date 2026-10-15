import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Footer from './Footer';
import { PageContext } from './pageContext';
import { curtain, ease, pageEnterDelay } from '../../lib/motion';
import s from './PageShell.module.css';

const coverVariants = {
  initial: { clipPath: 'inset(100% 0% 0% 0%)' },
  enter: { clipPath: 'inset(100% 0% 0% 0%)' },
  exit: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: curtain.cover, ease: ease.inOut } },
};

const revealVariants = (intro) => ({
  initial: { clipPath: 'inset(0% 0% 0% 0%)' },
  enter: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: { duration: curtain.reveal, ease: ease.inOut, delay: intro ? curtain.introHold : 0.08 },
  },
  exit: { clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0 } },
});

const contentVariants = (reduce, intro) => ({
  initial: reduce ? { opacity: 0 } : { y: 90 },
  enter: {
    opacity: 1,
    y: 0,
    transition: reduce
      ? { duration: 0.35 }
      : { duration: 1.2, ease: ease.out, delay: intro ? curtain.introHold + 0.05 : 0.12 },
  },
  exit: reduce
    ? { opacity: 0, transition: { duration: 0.25 } }
    : { y: -70, transition: { duration: curtain.cover, ease: ease.inOut } },
});

function CurtainMark({ intro }) {
  return (
    <div className={s.mark}>
      <motion.img
        src="/brand/mahwa-mark-light.png"
        alt=""
        width="137"
        height="192"
        className={s.markImage}
        initial={intro ? { opacity: 0, y: 24, scale: 0.92 } : false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: ease.out, delay: 0.1 }}
      />
      {intro && (
        <span className={s.markWord}>
          {'Mahwa'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, ease: ease.out, delay: 0.3 + index * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      )}
    </div>
  );
}

// Enveloppe animée de chaque page : le rideau vert couvre l'ancienne page puis se lève sur la nouvelle.
export default function PageShell({ children, intro, onIntroDone }) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const enterDelay = reduce ? 0 : pageEnterDelay(intro);
  const context = useMemo(() => ({ ready, enterDelay, intro }), [ready, enterDelay, intro]);

  const handleAnimationComplete = (definition) => {
    if (definition !== 'enter') return;
    setReady(true);
    if (intro) onIntroDone?.();
  };

  return (
    <PageContext.Provider value={context}>
      <motion.div className={s.shell} initial="initial" animate="enter" exit="exit">
        <motion.div
          className={s.content}
          variants={contentVariants(reduce, intro)}
          onAnimationComplete={handleAnimationComplete}
        >
          <main id="contenu">{children}</main>
          <Footer />
        </motion.div>

        {!reduce && (
          <>
            <motion.div className={s.curtain} variants={coverVariants} aria-hidden="true">
              <CurtainMark />
            </motion.div>
            <motion.div className={s.curtain} variants={revealVariants(intro)} aria-hidden="true">
              <CurtainMark intro={intro} />
            </motion.div>
          </>
        )}
      </motion.div>
    </PageContext.Provider>
  );
}
