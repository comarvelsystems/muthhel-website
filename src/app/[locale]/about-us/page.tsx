import { AboutPlan, AboutTextLoop } from '@/features/about';
import { PageHeader } from '@/features/share';

const AboutUs = () => {
  return (
    <>
      <PageHeader title="AboutPage.title" />
      <AboutTextLoop />
      <AboutPlan />
    </>
  );
};

export default AboutUs;
