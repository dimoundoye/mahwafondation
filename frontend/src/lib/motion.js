// Courbes et durées partagées par toutes les animations du site.
export const ease = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.76, 0, 0.24, 1],
  soft: [0.33, 1, 0.68, 1],
};

// Durées du rideau de transition entre les pages (en secondes).
export const curtain = {
  cover: 0.6,
  reveal: 0.75,
  introHold: 1.1,
};

// Délai avant les animations d'entrée d'une page, le temps que le rideau se lève.
export const pageEnterDelay = (intro) => (intro ? curtain.introHold + 0.45 : 0.35);

export const formatNumber = (value) => new Intl.NumberFormat('fr-FR').format(value);

export const formatFCFA = (value) => `${formatNumber(Number(value) || 0)} FCFA`;
