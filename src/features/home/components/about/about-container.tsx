import { getTranslations } from 'next-intl/server';

import AboutArticle from './about-article';

const AboutContainer = async () => {
  const t = await getTranslations('HomePage.about');

  return (
    <section className="s-container s-block">
      <header className="s-block__title">
        <h2 className="block text-5xl font-bold lg:hidden">{t('title')}</h2>
      </header>
      <AboutArticle />
    </section>
  );
};

export default AboutContainer;
