import Eyebrow from '../ui/Eyebrow';
import LineReveal from '../ui/LineReveal';
import ParallaxPhoto from '../ui/ParallaxPhoto';
import Reveal from '../ui/Reveal';
import s from './ImpactSection.module.css';

export default function ImpactSection({ index = '03', photo = 'service-tente' }) {
  return (
    <section className={s.section} aria-labelledby="impact-title">
      <div className="container">
        <div className={s.head}>
          <div className={s.headMain}>
            <Reveal y={14}>
              <Eyebrow index={index} tone="light">
                Notre impact
              </Eyebrow>
            </Reveal>
            <LineReveal as="h2" id="impact-title" className={s.title}>
              <span>Chaque geste</span>
              <em>compte.</em>
            </LineReveal>
          </div>
          <Reveal as="p" className={s.text} delay={0.15}>
            Des repas servis, des familles rencontrées, des bénévoles qui reviennent action après action : c’est
            ainsi que se mesure notre engagement.
          </Reveal>
        </div>

        <ParallaxPhoto id={photo} ratio="21 / 9" className={s.photo} sizes="(min-width: 1520px) 1440px, 100vw" />
      </div>
    </section>
  );
}
