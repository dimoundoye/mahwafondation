import { Children } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { usePage } from '../layout/pageContext';
import { ease } from '../../lib/motion';
import s from './LineReveal.module.css';

// Titre dont chaque ligne (chaque enfant) monte depuis un masque.
// `onMount` : anime dès l'arrivée de la page plutôt qu'à l'entrée dans l'écran.
export default function LineReveal({
  as: Tag = 'h2',
  children,
  className,
  delay = 0,
  stagger = 0.09,
  onMount = false,
  id,
}) {
  const reduce = useReducedMotion();
  const { ready, enterDelay } = usePage();
  const lines = Children.toArray(children);
  const start = delay + (ready ? 0 : enterDelay);
  const trigger = onMount
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, amount: 0.35 } };

  return (
    <Tag className={className} id={id}>
      <motion.span className={s.lines} initial={reduce ? false : 'hidden'} {...trigger}>
        {lines.map((line, index) => (
          <span className={s.line} key={index}>
            <motion.span
              className={s.inner}
              variants={{
                hidden: { y: '118%', rotate: 2.5 },
                show: {
                  y: '0%',
                  rotate: 0,
                  transition: { duration: 1.15, ease: ease.out, delay: start + index * stagger },
                },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
