import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '../ui/Eyebrow';
import LineReveal from '../ui/LineReveal';
import Photo from '../ui/Photo';
import Reveal from '../ui/Reveal';
import { programs } from '../../data/site';
import { cx } from '../../lib/cx';
import s from './ProgramList.module.css';

// Liste des programmes ; au survol (bureau), la ligne survolée ressort et les autres s'estompent.
export default function ProgramList({ index = '02' }) {
  const [active, setActive] = useState(null);

  return (
    <section className={s.section} aria-labelledby="programmes-title">
      <div className="container">
        <header className={s.header}>
          <Reveal y={14}>
            <Eyebrow index={index}>Nos actions</Eyebrow>
          </Reveal>
          <LineReveal as="h2" id="programmes-title" className={s.title}>
            <span>Ce que nous faisons,</span>
            <em>sur le terrain.</em>
          </LineReveal>
          <Reveal as="p" className={s.intro} delay={0.15}>
            Quatre engagements portés toute l’année par nos membres et nos bénévoles, au plus près des
            familles.
          </Reveal>
        </header>

        <ul className={cx(s.list, active !== null && s.hasActive)} onPointerLeave={() => setActive(null)}>
          {programs.map((program, i) => (
            <Reveal as="li" key={program.slug} className={s.item} delay={i * 0.06} y={24}>
              <Link
                to={`/actions#${program.slug}`}
                className={cx(s.row, active === i && s.rowActive)}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <span className={s.number}>0{i + 1}</span>
                <span className={s.name}>{program.title}</span>
                <span className={s.text}>{program.text}</span>
                <span className={s.arrow} aria-hidden="true">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </span>
                <span className={s.thumb}>
                  <Photo id={program.photo} fill sizes="92vw" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
