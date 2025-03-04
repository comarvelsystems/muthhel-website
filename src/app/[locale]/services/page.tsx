import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ServicesContainer, ServicesFeatures } from '@/features/services';
import { PageHeader } from '@/features/share';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t('Settings.siteName')} | ${t('ServicesPage.metadata.title')}`,
    description: t('ServicesPage.metadata.description'),
    openGraph: {
      title: `${t('Settings.siteName')} | ${t('ServicesPage.metadata.title')}`,
      description: t('ServicesPage.metadata.description'),
      url: '',
      images: [
        {
          url: '',
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      siteName: t('ServicesPage.metadata.title'),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('Settings.siteName')} | ${t('ServicesPage.metadata.title')}`,
      description: t('ServicesPage.metadata.description'),
      images: [],
    },
  };
}

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
