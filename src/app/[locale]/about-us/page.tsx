import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHeader } from '@/features/share';
import { AboutPlan, AboutTextLoop } from '@/features/about';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t('Settings.siteName')} | ${t('AboutPage.metadata.title')}`,
    description: t('AboutPage.metadata.description'),
    openGraph: {
      title: `${t('Settings.siteName')} | ${t('AboutPage.metadata.title')}`,
      description: t('AboutPage.metadata.description'),
      url: '',
      images: [
        {
          url: '',
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      siteName: t('AboutPage.metadata.title'),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('Settings.siteName')} | ${t('AboutPage.metadata.title')}`,
      description: t('AboutPage.metadata.description'),
      images: [],
    },
  };
}

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
