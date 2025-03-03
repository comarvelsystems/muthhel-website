import { getTranslations } from 'next-intl/server';

import { TextReveal } from '@/components/magicui/text-reveal';

const AboutArticle = async () => {
  const t = await getTranslations('HomePage.about');

  return (
    <>
      <TextReveal className="about-text-reveal hidden lg:block">
        {t('text')}
      </TextReveal>
      <p className="text-muted-foreground block text-center text-lg lg:hidden">
        {t('text')}
      </p>
    </>
  );
};

export default AboutArticle;
