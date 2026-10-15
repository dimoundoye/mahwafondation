import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import LineReveal from '../ui/LineReveal';
import Photo from '../ui/Photo';
import Reveal from '../ui/Reveal';
import { fetchCauses } from '../../lib/api';
import { ease, formatFCFA } from '../../lib/motion';
import s from './CausesSection.module.css';

// Photos utilisées quand une collecte n'a pas d'image renseignée.
const FALLBACK_PHOTOS = ['service-table', 'cuisine-marmites', 'preparation-gobelets', 'visage-fillette'];

function CauseCard({ cause, index }) {
  const reduce = useReducedMotion();
  const percent = Math.max(0, Math.min(100, Number(cause.percent) || 0));
  const completed = cause.status === 'completed';

  return (
    <Reveal delay={(index % 3) * 0.1}>
      <article className={s.card}>
        <div className={s.media}>
          {cause.image_url ? (
            <img className={s.image} src={cause.image_url} alt="" loading="lazy" decoding="async" />
          ) : (
            <Photo id={FALLBACK_PHOTOS[index % FALLBACK_PHOTOS.length]} fill alt="" sizes="(min-width: 900px) 30vw, 92vw" />
          )}
          <span className={s.status}>{completed ? 'Objectif atteint' : 'Collecte en cours'}</span>
        </div>

        <div className={s.body}>
          <h3 className={s.cardTitle}>{cause.title}</h3>
          {cause.desc_text && <p className={s.desc}>{cause.desc_text}</p>}

          <div className={s.progress}>
            <div className={s.progressHead}>
              <span className={s.raised}>{formatFCFA(cause.raised)}</span>
              <span className={s.percent}>{percent} %</span>
            </div>
            {/* Le déclencheur est sur la barre : la jauge à scaleX(0) n'a pas de surface visible. */}
            <motion.div
              className={s.bar}
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progression de la collecte ${cause.title}`}
              initial={reduce ? false : 'empty'}
              whileInView="filled"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.span
                className={s.fill}
                style={reduce ? { background: cause.color || undefined, scaleX: percent / 100 } : { background: cause.color || undefined }}
                variants={
                  reduce
                    ? undefined
                    : {
                        empty: { scaleX: 0 },
                        filled: { scaleX: percent / 100, transition: { duration: 1.8, ease: ease.out, delay: 0.2 } },
                      }
                }
              />
            </motion.div>
            <p className={s.goal}>Objectif : {formatFCFA(cause.goal)}</p>
          </div>

          {!completed && (
            <Button
              to={`/contact?objet=don&collecte=${encodeURIComponent(cause.title)}`}
              variant="outline"
              size="sm"
              className={s.button}
            >
              Contribuer
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

// Collectes publiées via l'API (/api/causes).
export default function CausesSection({ index = '04', limit }) {
  const [state, setState] = useState({ status: 'loading', causes: [] });

  useEffect(() => {
    const controller = new AbortController();
    fetchCauses({ signal: controller.signal })
      .then((causes) => setState({ status: 'ready', causes }))
      .catch((error) => {
        if (error.name !== 'AbortError') setState({ status: 'error', causes: [] });
      });
    return () => controller.abort();
  }, []);

  const causes = limit ? state.causes.slice(0, limit) : state.causes;
  const empty = state.status !== 'loading' && causes.length === 0;

  return (
    <section className={s.section} aria-labelledby="collectes-title">
      <div className="container">
        <header className={s.header}>
          <div className={s.headerMain}>
            <Reveal y={14}>
              <Eyebrow index={index}>Collectes</Eyebrow>
            </Reveal>
            <LineReveal as="h2" id="collectes-title" className={s.title}>
              <span>Soutenez une</span>
              <em>collecte en cours.</em>
            </LineReveal>
          </div>
          <Reveal as="p" className={s.intro} delay={0.15}>
            Chaque collecte finance une action précise. Les montants sont mis à jour à chaque don et chaque
            dépense enregistrés.
          </Reveal>
        </header>

        {state.status === 'loading' && (
          <div className={s.grid} aria-busy="true" aria-label="Chargement des collectes">
            {[0, 1, 2].map((key) => (
              <div key={key} className={s.skeleton} />
            ))}
          </div>
        )}

        {causes.length > 0 && (
          <div className={s.grid}>
            {causes.map((cause, i) => (
              <CauseCard key={cause.id} cause={cause} index={i} />
            ))}
          </div>
        )}

        {empty && (
          <Reveal className={s.empty}>
            <p className={s.emptyTitle}>Nos prochaines collectes arrivent bientôt.</p>
            <p className={s.emptyText}>
              En attendant, vous pouvez soutenir nos actions directement : écrivez-nous et nous vous indiquerons
              comment contribuer.
            </p>
            <Button to="/contact?objet=don">Nous soutenir</Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
