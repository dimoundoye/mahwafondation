import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cx } from '../../lib/cx';
import s from './Button.module.css';

// Bouton/lien : `to` (route interne), `href` (lien externe) ou bouton natif.
// Variantes : primary, light, outline, outlineLight, link.
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  children,
  className,
  ...rest
}) {
  const classes = cx(s.button, s[variant], s[size], className);
  const label = typeof children === 'string' ? children : undefined;
  const content = (
    <>
      <span className={s.label}>
        <span className={s.text} data-text={label}>
          {children}
        </span>
      </span>
      {icon && (
        <span className={s.icon} aria-hidden="true">
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
