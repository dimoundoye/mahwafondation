import { cx } from '../../lib/cx';
import s from './Logo.module.css';

// Symbole Mahwa + mot-symbole. `tone="light"` pour les fonds sombres.
export default function Logo({ tone = 'dark', wordmark = true, className }) {
  const light = tone === 'light';
  return (
    <span className={cx(s.logo, light && s.light, className)}>
      <img
        className={s.mark}
        src={light ? '/brand/mahwa-mark-light.png' : '/brand/mahwa-mark.png'}
        alt=""
        width="137"
        height="192"
      />
      {wordmark && (
        <span className={s.wordmark}>
          <span className={s.name}>Mahwa</span>
          <span className={s.sub}>Fondation</span>
        </span>
      )}
    </span>
  );
}
