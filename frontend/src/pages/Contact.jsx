import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { InstagramIcon, WhatsAppIcon } from '../components/ui/icons';
import { contact, contactSubjects, donationMethods } from '../data/site';
import { sendContactMessage } from '../lib/api';
import { ease } from '../lib/motion';
import { cx } from '../lib/cx';
import s from './Contact.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function initialValues(searchParams) {
  const subject = searchParams.get('objet');
  const collecte = searchParams.get('collecte');
  return {
    name: '',
    email: '',
    subject: contactSubjects.some((item) => item.value === subject) ? subject : contactSubjects[0].value,
    message: collecte ? `Je souhaite contribuer à la collecte « ${collecte} ».\n\n` : '',
  };
}

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Indiquez votre nom.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Indiquez une adresse e-mail valide.';
  if (values.message.trim().length < 10) errors.message = 'Votre message doit contenir au moins 10 caractères.';
  return errors;
}

function ContactForm({ defaults }) {
  const [values, setValues] = useState(defaults);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState('');

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      event.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus('sending');
    setServerError('');
    const subjectLabel = contactSubjects.find((item) => item.value === values.subject)?.label ?? '';
    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: `[${subjectLabel}] ${values.message.trim()}`,
      });
      setStatus('success');
    } catch (error) {
      setServerError(
        error instanceof TypeError
          ? 'Le serveur est injoignable pour le moment. Réessayez dans un instant ou écrivez-nous sur WhatsApp.'
          : error.message,
      );
      setStatus('error');
    }
  };

  const reset = () => {
    setValues({ ...defaults, message: '' });
    setStatus('idle');
  };

  return (
    <div className={s.formCard}>
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            className={s.success}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: ease.out }}
            role="status"
          >
            <motion.span
              className={s.successIcon}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
            >
              <Check size={28} strokeWidth={1.8} />
            </motion.span>
            <h2 className={s.successTitle}>Merci, {values.name.trim().split(' ')[0]} !</h2>
            <p className={s.successText}>
              Votre message est bien arrivé. Un membre de l’équipe Mahwa vous répondra très vite à l’adresse{' '}
              <strong>{values.email.trim()}</strong>.
            </p>
            <Button variant="outline" onClick={reset} icon={false}>
              Envoyer un autre message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className={s.form}
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: ease.out }}
          >
            <h2 className={s.formTitle}>Écrivez-nous</h2>

            <fieldset className={s.subjects}>
              <legend className={s.label}>Votre demande</legend>
              <div className={s.chips}>
                {contactSubjects.map((item) => (
                  <label key={item.value} className={cx(s.chip, values.subject === item.value && s.chipActive)}>
                    <input
                      type="radio"
                      name="subject"
                      value={item.value}
                      checked={values.subject === item.value}
                      onChange={update('subject')}
                      className="sr-only"
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className={s.row}>
              <div className={cx(s.field, errors.name && s.invalid)}>
                <label className={s.label} htmlFor="contact-name">
                  Nom complet
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={s.input}
                  placeholder="Prénom et nom"
                />
                {errors.name && (
                  <p id="contact-name-error" className={s.error}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className={cx(s.field, errors.email && s.invalid)}>
                <label className={s.label} htmlFor="contact-email">
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={s.input}
                  placeholder="vous@exemple.com"
                />
                {errors.email && (
                  <p id="contact-email-error" className={s.error}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className={cx(s.field, errors.message && s.invalid)}>
              <label className={s.label} htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={values.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className={cx(s.input, s.textarea)}
                placeholder="Comment aimeriez-vous aider ?"
              />
              {errors.message && (
                <p id="contact-message-error" className={s.error}>
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'error' && (
              <p className={s.serverError} role="alert">
                {serverError}
              </p>
            )}

            <div className={s.submitRow}>
              <Button type="submit" size="lg" disabled={status === 'sending'} className={s.submit}>
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </Button>
              <p className={s.privacy}>Vos coordonnées servent uniquement à vous répondre.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const formKey = searchParams.toString();

  const details = [
    { icon: <Mail size={18} strokeWidth={1.6} />, label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
    { icon: <Phone size={18} strokeWidth={1.6} />, label: 'Téléphone', value: contact.phone, href: contact.phoneHref },
    { icon: <MapPin size={18} strokeWidth={1.6} />, label: 'Adresse', value: contact.city },
    {
      icon: <InstagramIcon size={18} />,
      label: 'Instagram',
      value: contact.instagram.handle,
      href: contact.instagram.href,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={['Parlons de ce que', <span key="l2">nous ferons</span>, <em key="em">ensemble.</em>]}
        intro="Un don, du bénévolat, un partenariat ou simplement une question : écrivez-nous, nous vous répondons rapidement."
      />

      <section className={s.section} aria-label="Nous contacter">
        <div className={`container ${s.grid}`}>
          <div className={s.aside}>
            <Reveal as="ul" className={s.details}>
              {details.map((item) => (
                <li key={item.label} className={s.detail}>
                  <span className={s.detailIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className={s.detailLabel}>{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={s.detailValue}
                      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className={s.detailValue}>{item.value}</span>
                  )}
                </li>
              ))}
            </Reveal>

            <Reveal className={s.whatsapp} delay={0.1}>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className={s.whatsappLink}>
                <span className={s.whatsappIcon}>
                  <WhatsAppIcon size={22} />
                </span>
                <span>
                  <strong>Écrire sur WhatsApp</strong>
                  <span className={s.whatsappHint}>Le moyen le plus rapide de nous joindre</span>
                </span>
                <ArrowUpRight size={18} strokeWidth={1.6} className={s.whatsappArrow} />
              </a>
            </Reveal>

            <Reveal className={s.donate} delay={0.2}>
              <h2 className={s.donateTitle}>
                Faire un <em>don</em>
              </h2>
              <p className={s.donateText}>
                Choisissez « Faire un don » dans le formulaire ou écrivez-nous sur WhatsApp : nous vous indiquons
                comment procéder.
              </p>
              <ul className={s.methods}>
                {donationMethods.map((method) => (
                  <li key={method} className={s.methodChip}>
                    {method}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ContactForm key={formKey} defaults={initialValues(searchParams)} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
