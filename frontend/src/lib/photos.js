import { photoCatalog, photoCategories } from '../data/photos.js';
import meta from '../data/photos.meta.json';

// Catalogue + dimensions/aperçus générés par `npm run photos`.
export const photos = photoCatalog
  .filter((photo) => meta[photo.id])
  .map((photo) => ({ ...photo, ...meta[photo.id] }));

const byId = new Map(photos.map((photo) => [photo.id, photo]));

export { photoCategories };

export function getPhoto(id) {
  const photo = byId.get(id);
  if (!photo) throw new Error(`Photo inconnue : « ${id} ». Vérifiez src/data/photos.js puis lancez npm run photos.`);
  return photo;
}

export const photoSrc = (photo, width) => `/photos/${photo.id}-${width}.webp`;

export const photoSrcSet = (photo) =>
  photo.widths.map((width) => `${photoSrc(photo, width)} ${width}w`).join(', ');

// Taille par défaut quand srcset n'est pas pris en charge.
export const photoFallbackSrc = (photo) => photoSrc(photo, photo.widths[Math.min(1, photo.widths.length - 1)]);
