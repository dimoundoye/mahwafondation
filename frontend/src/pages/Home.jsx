import HomeHero from '../components/sections/HomeHero';
import Manifesto from '../components/sections/Manifesto';
import ProgramList from '../components/sections/ProgramList';
import ImpactSection from '../components/sections/ImpactSection';
import CausesSection from '../components/sections/CausesSection';
import GalleryScroller from '../components/sections/GalleryScroller';
import PromiseQuote from '../components/sections/PromiseQuote';
import CtaBand from '../components/sections/CtaBand';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Manifesto />
      <ProgramList />
      <ImpactSection />
      <CausesSection limit={3} />
      <GalleryScroller />
      <PromiseQuote />
      <CtaBand photo="celebration-musiciens" />
    </>
  );
}
