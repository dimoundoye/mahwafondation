import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Eyebrow from '../components/ui/Eyebrow';
import LineReveal from '../components/ui/LineReveal';
import ParallaxPhoto from '../components/ui/ParallaxPhoto';
import Reveal from '../components/ui/Reveal';
import { usePage } from '../components/layout/pageContext';
import CausesSection from '../components/sections/CausesSection';
import CtaBand from '../components/sections/CtaBand';
import { programs } from '../data/site';
import { cx } from '../lib/cx';
import s from './Actions.module.css';

const TRANSPARENCY = [
  {
    title: 'Chaque don est enregistré',
    text: 'Chaque contribution est saisie dans notre outil de gestion et rattachée à une collecte précise.',
  },
  {
    title: 'Chaque dépense est justifiée',
    text: 'Les dépenses sont enregistrées collecte par collecte, avec leur description et leur montant.',
  },
  {
    title: 'Des rapports partagés',
    text: 'Nos membres reçoivent un rapport financier détaillé pour chaque collecte : objectifs, dons, dépenses et solde.',
  },
];

// Fait défiler jusqu'au programme demandé (#ancre) une fois le rideau levé.
function useScrollToHash() {
  const { hash } = useLocation();
  const { ready } = usePage();
  const lenis = useLenis();

  useEffect(() => {
    if (!ready || !hash) return;
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { offset: -110, duration: 1.4 });
    else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [ready, hash, lenis]);
}

export default function Actions() {
  useScrollToHash();

  return (
    <>
      <PageHero
        eyebrow="Nos actions"
        title={['Sur le terrain,', <em key="em">chaque jour.</em>]}
        intro="Repas, éducation, rassemblements : nos actions répondent à des besoins concrets, au plus près des familles et des communautés."
        photo="service-tente"
      />

      <section className={s.programs} aria-label="Nos programmes">
        <div className="container">
          {programs.map((program, i) => (
            <article key={program.slug} id={program.slug} className={cx(s.program, i % 2 === 1 && s.reverse)}>
              <ParallaxPhoto
                id={program.photo}
                ratio="5 / 4"
                className={s.programPhoto}
                sizes="(min-width: 900px) 45vw, 92vw"
              />
              <div className={s.programBody}>
                <Reveal as="span" className={s.programIndex} y={12}>
                  Programme 0{i + 1}
                </Reveal>
                <LineReveal as="h2" className={s.programTitle}>
                  <span>{program.title}</span>
                </LineReveal>
                <Reveal as="p" className={s.programText} delay={0.1}>
                  {program.text}
                </Reveal>
                <Reveal className={s.programActions} delay={0.2}>
                  <Button to="/contact?objet=don" size="sm">
                    Soutenir
                  </Button>
                  <Button to="/contact?objet=benevolat" variant="link">
                    Participer
                  </Button>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CausesSection index="05" />

      <section className={s.transparency} aria-labelledby="transparence-title">
        <div className="container">
          <header className={s.transparencyHead}>
            <Reveal y={14}>
              <Eyebrow index="06" tone="light">
                Transparence
              </Eyebrow>
            </Reveal>
            <LineReveal as="h2" id="transparence-title" className={s.transparencyTitle}>
              <span>Chaque franc</span>
              <em>est suivi.</em>
            </LineReveal>
          </header>
          <ul className={s.transparencyList}>
            {TRANSPARENCY.map((item, i) => (
              <Reveal as="li" key={item.title} className={s.transparencyItem} delay={i * 0.1}>
                <span className={s.check} aria-hidden="true">
                  <Check size={18} strokeWidth={1.8} />
                </span>
                <h3 className={s.transparencyItemTitle}>{item.title}</h3>
                <p className={s.transparencyText}>{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand photo="service-preparation" />
    </>
  );
}
