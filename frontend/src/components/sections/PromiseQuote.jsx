import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import ScrollWords from '../ui/ScrollWords';
import s from './PromiseQuote.module.css';

export default function PromiseQuote({ index = '06' }) {
  return (
    <section className={s.section} aria-label="Notre promesse">
      <div className={`container ${s.inner}`}>
        <Reveal y={14}>
          <Eyebrow index={index}>Notre promesse</Eyebrow>
        </Reveal>
        <figure className={s.figure}>
          <ScrollWords
            as="blockquote"
            className={s.quote}
            offset={['start 0.85', 'end 0.6']}
            parts={['« Votre générosité accomplit exactement ce qu’elle est censée faire :', { em: 'transformer des vies. »' }]}
          />
          <Reveal as="figcaption" className={s.caption} delay={0.1}>
            <img src="/brand/mahwa-mark.png" alt="" width="137" height="192" className={s.mark} />
            Mahwa Fondation
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
