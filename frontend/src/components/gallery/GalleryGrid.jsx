import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react';
import Photo from '../ui/Photo';
import Lightbox from './Lightbox';
import { photos } from '../../lib/photos';
import { ease } from '../../lib/motion';
import s from './GalleryGrid.module.css';

// Mosaïque : chaque photo va dans la colonne la moins haute (positions absolues, animables).
function computeMasonry(list, width) {
  if (!width) return { items: [], height: 0 };
  const columns = width >= 1180 ? 4 : width >= 720 ? 3 : 2;
  const gap = width >= 720 ? 18 : 10;
  const columnWidth = (width - gap * (columns - 1)) / columns;
  const heights = new Array(columns).fill(0);

  const items = list.map((photo, index) => {
    const column = heights.indexOf(Math.min(...heights));
    const height = Math.round((columnWidth * photo.height) / photo.width);
    const item = { photo, index, x: column * (columnWidth + gap), y: heights[column], width: columnWidth, height };
    heights[column] += height + gap;
    return item;
  });

  return { items, height: Math.max(...heights) - gap, columns };
}

export default function GalleryGrid() {
  const reduce = useReducedMotion();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [lightbox, setLightbox] = useState({ index: null, openedId: null });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const visible = photos;
  const masonry = useMemo(() => computeMasonry(visible, width), [visible, width]);

  const open = (index) => setLightbox({ index, openedId: visible[index].id });
  const close = () => setLightbox({ index: null, openedId: null });

  return (
    <section className={s.section} aria-label="Toutes les photos">
      <div className="container">
        <LayoutGroup>
          <div ref={containerRef} className={s.masonry} style={{ height: masonry.height }}>
            <AnimatePresence>
              {masonry.items.map((item) => (
                <motion.button
                  key={item.photo.id}
                  type="button"
                  layout={!reduce}
                  className={s.item}
                  style={{ left: item.x, top: item.y, width: item.width, height: item.height }}
                  initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.35 } }}
                  transition={{ duration: 0.8, ease: ease.out, delay: Math.min(item.index, 12) * 0.035 }}
                  onClick={() => open(item.index)}
                  aria-label={`Agrandir la photo : ${item.photo.alt}`}
                >
                  <motion.span
                    className={s.frame}
                    layoutId={reduce ? undefined : `gallery-photo-${item.photo.id}`}
                    style={{ borderRadius: 6 }}
                  >
                    <Photo
                      photo={item.photo}
                      fill
                      sizes={`${Math.round(item.width)}px`}
                    />
                  </motion.span>
                  <span className={s.overlay} aria-hidden="true">
                    <span className={s.overlayText}>{item.photo.alt}</span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          <Lightbox
            photos={visible}
            index={lightbox.index}
            openedId={lightbox.openedId}
            onChange={(index) => setLightbox((current) => ({ ...current, index }))}
            onClose={close}
          />
        </LayoutGroup>
      </div>
    </section>
  );
}
