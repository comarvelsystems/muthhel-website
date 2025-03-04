import { ServicesContainer, ServicesFeatures } from '@/features/services';
import { PageHeader } from '@/features/share';

const Services = () => {
  return (
    <>
      <PageHeader title="ServicesPage.title" />
      <ServicesFeatures />
      <ServicesContainer />
    </>
  );
};

export default Services;
