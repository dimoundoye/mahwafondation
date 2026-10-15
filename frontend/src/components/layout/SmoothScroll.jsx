import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'motion/react';

// Défilement amorti (Lenis) sur tout le site public, désactivé si l'utilisateur réduit les animations.
export default function SmoothScroll({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return children;

  return (
    <ReactLenis root options={{ lerp: 0.085, smoothWheel: true, anchors: { offset: -96 } }}>
      {children}
    </ReactLenis>
  );
}
