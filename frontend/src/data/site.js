// Contenus éditoriaux du site public, regroupés ici pour être modifiés facilement.

export const site = {
  name: 'Mahwa Fondation',
  baseline: 'Jeunesse engagée · Dakar, Sénégal',
  description:
    'La Mahwa Fondation est une force de jeunesse engagée pour un Sénégal meilleur. Ensemble, changeons des vies.',
};

// À REMPLACER : coordonnées provisoires reprises de l'ancienne version du site.
export const contact = {
  city: 'Dakar, Sénégal',
  phone: '+221 77 000 00 00',
  phoneHref: 'tel:+221770000000',
  whatsappHref: 'https://wa.me/221770000000',
  email: 'contact@mahwa.sn',
  instagram: {
    handle: '@mahwa_fondation',
    href: 'https://www.instagram.com/mahwa_fondation/',
  },
};

// Diaporama plein écran de l'accueil : une photo paysage (bureau) et une portrait (mobile) par diapositive.
export const heroSlides = [
  { label: 'Partager', desktop: 'visage-joie', mobile: 'visage-complicite', focus: '50% 30%', mobileFocus: '32% 50%' },
  { label: 'Célébrer', desktop: 'celebration-procession', mobile: 'celebration-tambours', focus: '50% 25%', mobileFocus: '50% 50%' },
  { label: 'Préparer', desktop: 'preparation-ingredients', mobile: 'cuisine-vapeur', focus: '40% 45%', mobileFocus: '45% 50%' },
];

export const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/actions', label: 'Nos actions' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
];

// À VALIDER : chiffres repris de l'ancienne version du site.
export const stats = [
  { value: 12000, suffix: '+', label: 'Bénéficiaires accompagnés' },
  { value: 100, suffix: '+', label: 'Bénévoles mobilisés' },
  { value: 95, suffix: ' %', label: 'Impact social' },
];

export const programs = [
  {
    slug: 'ramadan-solidaire',
    title: 'Ramadan solidaire',
    text: 'Distribution de ndogou et de repas de rupture du jeûne dans les quartiers de Dakar, nuit après nuit.',
    photo: 'preparation-gobelets',
  },
  {
    slug: 'repas-chauds',
    title: 'Repas chauds',
    text: 'Des repas cuisinés et servis par nos bénévoles pour les talibés et les personnes en situation de précarité.',
    photo: 'cuisine-vapeur',
  },
  {
    slug: 'education',
    title: 'Éducation',
    text: 'Soutien aux écoles et distribution de kits scolaires pour que les talibés apprennent dans de bonnes conditions.',
    photo: 'visage-enfant-mahwa',
  },
  {
    slug: 'rassemblements',
    title: 'Rassemblements',
    text: 'Commémorations, journées de bénévolat et grands moments de partage avec toute la communauté.',
    photo: 'celebration-procession',
  },
];

export const values = [
  {
    title: 'Solidarité',
    text: 'Nous agissons ensemble, parce qu’aucun geste n’est trop petit quand il est partagé.',
  },
  {
    title: 'Proximité',
    text: 'Nous allons sur le terrain, au plus près des familles, des talibés et des quartiers.',
  },
  {
    title: 'Transparence',
    text: 'Chaque don est enregistré, chaque dépense justifiée, et nos membres reçoivent des rapports détaillés.',
  },
  {
    title: 'Engagement',
    text: 'Une jeunesse qui donne son temps, son énergie et son cœur, action après action.',
  },
];

export const steps = [
  {
    title: 'Mobiliser',
    text: 'Membres et bénévoles se réunissent, collectent les dons et organisent chaque action ensemble.',
    photo: 'benevoles-echange',
  },
  {
    title: 'Préparer',
    text: 'Cuisine, conditionnement, logistique : chaque repas est préparé avec soin par nos équipes.',
    photo: 'cuisine-marmites',
  },
  {
    title: 'Distribuer',
    text: 'Sur le terrain, nous servons les repas et allons à la rencontre de celles et ceux qui en ont besoin.',
    photo: 'service-table',
  },
  {
    title: 'Rendre compte',
    text: 'Chaque don et chaque dépense sont enregistrés, et nos membres reçoivent un rapport financier détaillé.',
    photo: 'benevole-notes',
  },
];

export const donationMethods = ['Wave', 'Orange Money', 'Virement', 'Espèces'];

export const contactSubjects = [
  { value: 'don', label: 'Faire un don' },
  { value: 'benevolat', label: 'Devenir bénévole' },
  { value: 'partenariat', label: 'Proposer un partenariat' },
  { value: 'autre', label: 'Autre demande' },
];
