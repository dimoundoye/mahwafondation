import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import CtaBand from '../components/sections/CtaBand';
import { photos } from '../lib/photos';

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title={['Instants', <em key="em">de partage.</em>]}
        intro={`${photos.length} photos prises sur le terrain : la préparation des repas, le service, la ferveur des rassemblements et les visages de celles et ceux qui font Mahwa.`}
      />
      <GalleryGrid />
      <CtaBand
        photo="celebration-tente"
        eyebrow="Vous aussi"
        title={['Écrivez la suite', <em key="em">avec nous.</em>]}
        text="Chaque action est l’occasion de nouvelles rencontres. Rejoignez nos bénévoles sur le terrain ou soutenez la prochaine collecte."
      />
    </>
  );
}
