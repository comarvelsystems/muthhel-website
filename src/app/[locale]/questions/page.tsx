import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { QuestionsList } from '@/features/questions';
import { PageHeader } from '@/features/share';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: `${t('Settings.siteName')} | ${t('QuestionsPage.metadata.title')}`,
    description: t('QuestionsPage.metadata.description'),
    openGraph: {
      title: t('QuestionsPage.metadata.title'),
      description: t('QuestionsPage.metadata.description'),
      url: '',
      images: [
        {
          url: '',
          width: 800,
          height: 600,
          alt: '',
        },
      ],
      siteName: t('QuestionsPage.metadata.title'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('QuestionsPage.metadata.title'),
      description: t('QuestionsPage.metadata.description'),
      images: [],
    },
  };
}

const Questions = () => {
  return (
    <>
      <PageHeader title="QuestionsPage.title" />
      <QuestionsList />
    </>
  );
};

export default Questions;
