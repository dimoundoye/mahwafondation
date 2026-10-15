import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import PageHero from '../components/ui/PageHero';
import Eyebrow from '../components/ui/Eyebrow';
import LineReveal from '../components/ui/LineReveal';
import ParallaxPhoto from '../components/ui/ParallaxPhoto';
import Photo from '../components/ui/Photo';
import Reveal from '../components/ui/Reveal';
import CtaBand from '../components/sections/CtaBand';
import PromiseQuote from '../components/sections/PromiseQuote';
import { site, stats, steps, values } from '../data/site';
import { ease, formatNumber } from '../lib/motion';
import { cx } from '../lib/cx';
import s from './About.module.css';

const VOLUNTEERS = [
  'visage-benevole',
  'visage-polo',
  'benevole-badge',
  'visage-lunettes',
  'service-tablier',
  'visage-echarpe',
  'benevole-affiches',
  'visage-bob',
];

function Story() {
  return (
    <section className={s.story} aria-labelledby="histoire-title">
      <div className="container">
        <Reveal y={14}>
          <Eyebrow index="01">Notre histoire</Eyebrow>
        </Reveal>
        <h2 id="histoire-title" className="sr-only">
          Notre histoire
        </h2>
        <div className={s.storyGrid}>
          <div className={s.storyBody}>
            <Reveal as="p" className={s.storyLead}>
              Mahwa, c’est une jeunesse qui s’organise pour changer le quotidien de celles et ceux qui
              l’entourent.
            </Reveal>
            <div className={s.storyText}>
              <Reveal as="p" delay={0.1}>
                Ramadan, commémorations, journées de bénévolat : à chaque rendez-vous, nos équipes préparent,
                cuisinent et servent des repas, et vont à la rencontre des familles et des talibés qui en ont le
                plus besoin.
              </Reveal>
              <Reveal as="p" delay={0.2}>
                Aujourd’hui, nous travaillons pour apporter l’espoir à des milliers de personnes au Sénégal.
                Demain, nous créerons de vraies opportunités de développement durable au sein des communautés.
              </Reveal>
            </div>
          </div>
          <div className={s.storyPhotos}>
            <ParallaxPhoto id="preparation-sourire" ratio="3 / 4" sizes="(min-width: 900px) 26vw, 55vw" />
            <ParallaxPhoto id="cuisine-feu" ratio="3 / 4" className={s.storyPhotoB} delay={0.15} sizes="(min-width: 900px) 20vw, 42vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className={s.values} aria-labelledby="valeurs-title">
      <div className="container">
        <header className={s.sectionHead}>
          <Reveal y={14}>
            <Eyebrow index="02">Nos valeurs</Eyebrow>
          </Reveal>
          <LineReveal as="h2" id="valeurs-title" className={s.sectionTitle}>
            <span>Ce qui nous</span>
            <em>guide.</em>
          </LineReveal>
        </header>
        <ul className={s.valueGrid}>
          {values.map((value, i) => (
            <Reveal as="li" key={value.title} className={s.value} delay={i * 0.08}>
              <span className={s.valueIndex}>0{i + 1}</span>
              <h3 className={s.valueTitle}>{value.title}</h3>
              <p className={s.valueText}>{value.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Step({ step, index, onEnter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);

  return (
    <li ref={ref} className={s.step}>
      <span className={s.stepIndex}>Étape 0{index + 1}</span>
      <h3 className={s.stepTitle}>{step.title}</h3>
      <p className={s.stepText}>{step.text}</p>
      <div className={s.stepPhoto}>
        <Photo id={step.photo} fill sizes="92vw" />
      </div>
    </li>
  );
}

function Method() {
  const [active, setActive] = useState(0);

  return (
    <section className={s.method} aria-labelledby="methode-title">
      <div className="container">
        <header className={s.sectionHead}>
          <Reveal y={14}>
            <Eyebrow index="03">Notre méthode</Eyebrow>
          </Reveal>
          <LineReveal as="h2" id="methode-title" className={s.sectionTitle}>
            <span>De la collecte</span>
            <em>au terrain.</em>
          </LineReveal>
        </header>

        <div className={s.methodGrid}>
          <div className={s.methodVisual} aria-hidden="true">
            <div className={s.methodFrame}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={steps[active].photo}
                  className={s.methodSlide}
                  initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.5 } }}
                  transition={{ duration: 0.9, ease: ease.inOut }}
                >
                  <Photo id={steps[active].photo} fill sizes="40vw" alt="" />
                </motion.div>
              </AnimatePresence>
              <span className={s.methodCounter}>
                0{active + 1} <span>/ 0{steps.length}</span>
              </span>
            </div>
          </div>

          <ol className={s.steps}>
            {steps.map((step, i) => (
              <Step key={step.title} step={step} index={i} onEnter={setActive} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Volunteers() {
  const volunteers = stats.find((stat) => stat.label.includes('Bénévoles'));

  return (
    <section className={s.volunteers} aria-labelledby="benevoles-title">
      <div className="container">
        <header className={cx(s.sectionHead, s.volunteersHead)}>
          <div className={s.volunteersTitle}>
            <Reveal y={14}>
              <Eyebrow index="04">Nos bénévoles</Eyebrow>
            </Reveal>
            <LineReveal as="h2" id="benevoles-title" className={s.sectionTitle}>
              <span>Les visages</span>
              <em>de Mahwa.</em>
            </LineReveal>
          </div>
          {volunteers && (
            <Reveal as="p" className={s.volunteersText} delay={0.15}>
              Plus de {formatNumber(volunteers.value)} bénévoles donnent de leur temps, de la cuisine au service, de la
              logistique à l’accueil des familles.
            </Reveal>
          )}
        </header>

        <ul className={s.mosaic}>
          {VOLUNTEERS.map((id, i) => (
            <Reveal as="li" key={id} className={s.mosaicItem} delay={(i % 4) * 0.08}>
              <Photo id={id} fill sizes="(min-width: 900px) 25vw, 50vw" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={['Une jeunesse', <em key="em">qui agit.</em>]}
        intro={site.description}
        photo="celebration-procession"
      />
      <Story />
      <Values />
      <Method />
      <Volunteers />
      <PromiseQuote index="05" />
      <CtaBand photo="service-table" />
    </>
  );
}
