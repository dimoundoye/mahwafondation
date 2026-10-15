import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import s from './ScrollWords.module.css';

// Découpe les morceaux de texte en mots ; { em } = mots en accent.
function tokenize(parts) {
  return parts.flatMap((part) => {
    const accent = typeof part !== 'string';
    const text = accent ? part.em : part;
    return text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent }));
  });
}

function Word({ progress, range, accent, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <>
      <motion.span className={accent ? s.accent : undefined} style={{ opacity }}>
        {children}
      </motion.span>{' '}
    </>
  );
}

// Paragraphe dont les mots s'illuminent au fil du défilement.
export default function ScrollWords({ as: Tag = 'p', parts, className, offset = ['start 0.88', 'end 0.5'] }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const tokens = tokenize(parts);
  const total = tokens.length;

  if (reduce) {
    return (
      <Tag ref={ref} className={className}>
        {tokens.map((token, index) => (
          <span key={index} className={token.accent ? s.accent : undefined}>
            {token.word}{' '}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {tokens.map((token, index) => (
        <Word
          key={index}
          progress={scrollYProgress}
          range={[index / total, Math.min(1, (index + 2) / total)]}
          accent={token.accent}
        >
          {token.word}
        </Word>
      ))}
    </Tag>
  );
}
