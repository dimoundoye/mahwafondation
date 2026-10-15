import { useId } from 'react';
import { cx } from '../../lib/cx';
import s from './RotatingBadge.module.css';

// Médaillon décoratif : texte circulaire en rotation autour du symbole Mahwa.
export default function RotatingBadge({ text = 'Solidarité • Partage • Espérance • ', className }) {
  const pathId = useId();

  return (
    <span className={cx(s.badge, className)} aria-hidden="true">
      <svg className={s.ring} viewBox="0 0 200 200">
        <defs>
          <path id={pathId} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className={s.text}>
          <textPath href={`#${pathId}`} textLength="488">
            {text}
          </textPath>
        </text>
      </svg>
      <img className={s.mark} src="/brand/mahwa-mark.png" alt="" width="137" height="192" />
    </span>
  );
}
