import {
  AboutContainer,
  FeaturesContainer,
  HeroContainer,
  ManagementContainer,
  ReviewsContainer,
} from '@/features/home/components';

const Home = () => {
  return (
    <>
      <HeroContainer />
      <FeaturesContainer />
      <ManagementContainer />
      <AboutContainer />
      <ReviewsContainer />
    </>
  );
};

export default Home;
