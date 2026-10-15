import { motion, useReducedMotion } from 'motion/react';
import { usePage } from '../layout/pageContext';
import { ease } from '../../lib/motion';

const tags = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  li: motion.li,
  ul: motion.ul,
  figure: motion.figure,
  figcaption: motion.figcaption,
  article: motion.article,
  header: motion.header,
  h3: motion.h3,
};

// Apparition en fondu montant quand l'élément entre dans l'écran.
export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 36,
  amount = 0.25,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const { ready, enterDelay } = usePage();
  const Component = tags[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.1, ease: ease.out, delay: delay + (ready ? 0 : enterDelay) }}
      {...rest}
    >
      {children}
    </Component>
  );
}
