import { getPhoto, photoFallbackSrc, photoSrcSet } from '../../lib/photos';
import { cx } from '../../lib/cx';
import s from './Photo.module.css';

function markLoaded(event) {
  event.currentTarget.dataset.loaded = 'true';
}

// Une image déjà en cache peut être chargée avant que React n'écoute `load`.
function markIfComplete(img) {
  if (img && img.complete && img.naturalWidth > 0) img.dataset.loaded = 'true';
}

// Photo responsive (srcset WebP) avec aperçu flou pendant le chargement.
export default function Photo({
  id,
  photo: photoProp,
  sizes = '100vw',
  ratio,
  fill = false,
  priority = false,
  alt,
  className,
  imgClassName,
  ...rest
}) {
  const photo = photoProp ?? getPhoto(id);

  return (
    <span
      className={cx(s.frame, fill && s.fill, className)}
      style={{
        '--lqip': `url("${photo.lqip}")`,
        aspectRatio: fill ? undefined : (ratio ?? `${photo.width} / ${photo.height}`),
      }}
    >
      <img
        ref={markIfComplete}
        src={photoFallbackSrc(photo)}
        srcSet={photoSrcSet(photo)}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={alt ?? photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        draggable="false"
        onLoad={markLoaded}
        className={cx(s.img, imgClassName)}
        {...rest}
      />
    </span>
  );
}
