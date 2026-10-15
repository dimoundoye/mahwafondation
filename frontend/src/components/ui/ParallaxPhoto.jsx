import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Photo from './Photo';
import { usePage } from '../layout/pageContext';
import { ease } from '../../lib/motion';
import { cx } from '../../lib/cx';
import s from './ParallaxPhoto.module.css';

// Photo qui se dévoile de bas en haut puis glisse légèrement au défilement.
// Le déclencheur « en vue » est sur le cadre : un élément entièrement masqué par
// clip-path n'est jamais considéré comme visible par le navigateur.
export default function ParallaxPhoto({
  id,
  ratio,
  sizes,
  strength = 0.14,
  reveal = true,
  priority = false,
  delay = 0,
  className,
  children,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { ready, enterDelay } = usePage();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const travel = `${(strength * 100) / 2}%`;
  const y = useTransform(scrollYProgress, [0, 1], [`-${travel}`, travel]);
  const animated = !reduce;
  const revealing = animated && reveal;

  return (
    <motion.div
      ref={ref}
      className={cx(s.frame, className)}
      style={{ aspectRatio: ratio }}
      initial={revealing ? 'hidden' : false}
      whileInView="shown"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className={s.clip}
        variants={
          revealing
            ? {
                hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                shown: {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  transition: { duration: 1.2, ease: ease.inOut, delay: delay + (ready ? 0 : enterDelay) },
                },
              }
            : undefined
        }
      >
        <motion.div className={s.inner} style={animated ? { y, scale: 1 + strength } : undefined}>
          <Photo id={id} fill sizes={sizes} priority={priority} />
        </motion.div>
      </motion.div>
      {children}
    </motion.div>
  );
}
