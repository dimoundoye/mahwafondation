import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import ScrollWords from '../ui/ScrollWords';
import s from './Manifesto.module.css';

export default function Manifesto() {
  return (
    <section className={s.section} aria-labelledby="mission-title">
      <div className="container">
        <Reveal y={14}>
          <Eyebrow index="01">Notre mission</Eyebrow>
        </Reveal>
        <h2 id="mission-title" className="sr-only">
          Notre mission
        </h2>

        <ScrollWords
          className={s.statement}
          parts={[
            'Nous sommes une jeunesse engagée qui prépare, cuisine et partage — parce que la solidarité',
            { em: 'n’est pas un mot,' },
            'c’est un geste.',
          ]}
        />

        <div className={s.columns}>
          <Reveal className={s.column}>
            <h3 className={s.columnTitle}>Aujourd’hui</h3>
            <p>
              Nous travaillons pour apporter l’espoir à des milliers de personnes au Sénégal, avec des actions
              concrètes menées par nos bénévoles.
            </p>
          </Reveal>
          <Reveal className={s.column} delay={0.1}>
            <h3 className={s.columnTitle}>Demain</h3>
            <p>Nous créerons de vraies opportunités de développement durable au sein des communautés.</p>
          </Reveal>
          <Reveal className={s.cta} delay={0.2}>
            <Button to="/a-propos" variant="link">
              Découvrir notre histoire
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
