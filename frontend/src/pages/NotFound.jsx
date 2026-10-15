import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Erreur 404"
      title={['Cette page', <em key="em">s’est égarée.</em>]}
      intro="Le lien que vous avez suivi n’existe pas ou a été déplacé. Revenez à l’accueil pour continuer la visite."
    >
      <Button to="/">Retour à l’accueil</Button>
    </PageHero>
  );
}
