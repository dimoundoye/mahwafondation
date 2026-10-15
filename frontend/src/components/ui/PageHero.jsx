import Eyebrow from './Eyebrow';
import LineReveal from './LineReveal';
import ParallaxPhoto from './ParallaxPhoto';
import Reveal from './Reveal';
import s from './PageHero.module.css';

// En-tête des pages intérieures : sur-titre, grand titre ligne par ligne, chapeau et photo.
export default function PageHero({ eyebrow, title, intro, photo, photoRatio = '21 / 9', children }) {
  return (
    <header className={s.hero}>
      <div className="container">
        <div className={s.head}>
          <Reveal y={16}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal as="h1" onMount className={s.title}>
            {title.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </LineReveal>
          {(intro || children) && (
            <div className={s.below}>
              {intro && (
                <Reveal as="p" className={s.intro} delay={0.3}>
                  {intro}
                </Reveal>
              )}
              {children}
            </div>
          )}
        </div>
        {photo && (
          <ParallaxPhoto
            id={photo}
            ratio={photoRatio}
            priority
            delay={0.2}
            className={s.photo}
            sizes="(min-width: 1520px) 1440px, 100vw"
          />
        )}
      </div>
    </header>
  );
}
