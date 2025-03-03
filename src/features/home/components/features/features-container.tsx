import { getTranslations } from 'next-intl/server';

import FeaturesList from './features-list';

const FeaturesContainer = async () => {
  const t = await getTranslations('HomePage.featuresSection');

  return (
    <section className="s-container s-block">
      <header className="s-block__title">
        <h2 className="text-5xl font-bold">{t('title')}</h2>
        <p className="text-muted-foreground text-lg sm:w-[35.5rem]">
          {t('text')}
        </p>
      </header>
      <FeaturesList />
    </section>
  );
};

export default FeaturesContainer;
