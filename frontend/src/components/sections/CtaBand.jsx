import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import LineReveal from '../ui/LineReveal';
import Photo from '../ui/Photo';
import Reveal from '../ui/Reveal';
import s from './CtaBand.module.css';

// Grand bandeau photo d'appel à l'action, en fin de page.
export default function CtaBand({
  photo = 'visage-joie',
  eyebrow = 'Passer à l’action',
  title = ['Rejoignez', <em key="em">le mouvement.</em>],
  text = 'Un don, quelques heures de votre temps ou un partenariat : chaque contribution nourrit nos actions sur le terrain.',
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className={s.band} aria-labelledby="cta-title">
      <motion.div className={s.media} style={reduce ? undefined : { scale, y }}>
        <Photo id={photo} fill sizes="100vw" alt="" />
      </motion.div>
      <div className={s.shade} aria-hidden="true" />

      <div className={`container ${s.content}`}>
        <Reveal y={14}>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </Reveal>
        <LineReveal as="h2" id="cta-title" className={s.title}>
          {title.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </LineReveal>
        <Reveal as="p" className={s.text} delay={0.15}>
          {text}
        </Reveal>
        <Reveal className={s.actions} delay={0.25}>
          <Button to="/contact?objet=don" variant="light" size="lg">
            Faire un don
          </Button>
          <Button to="/contact?objet=benevolat" variant="outlineLight" size="lg">
            Devenir bénévole
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
