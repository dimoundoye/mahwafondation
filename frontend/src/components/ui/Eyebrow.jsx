import { cx } from '../../lib/cx';
import s from './Eyebrow.module.css';

// Petit sur-titre de section : (01) — Libellé
export default function Eyebrow({ index, children, tone = 'dark', className }) {
  return (
    <p className={cx(s.eyebrow, tone === 'light' && s.light, className)}>
      {index && <span className={s.index}>({index})</span>}
      <span className={s.rule} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
