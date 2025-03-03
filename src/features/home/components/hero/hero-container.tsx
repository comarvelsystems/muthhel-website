import LinkBox from './link-box';
import HeroDetails from './hero-details';
import HeroImage from './hero-image';
import HeroSpotlight from './hero-spotlight';
import { Glow } from '@/components';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-40">
      <HeroSpotlight />
      <div className="flex-column min-h-screen gap-y-14 md:gap-y-20">
        <div className="s-container">
          <div className="flex-column items-center gap-y-10">
            <LinkBox />
            <HeroDetails />
          </div>
        </div>
        <HeroImage />
        <Glow />
      </div>
    </section>
  );
};
export default Hero;
