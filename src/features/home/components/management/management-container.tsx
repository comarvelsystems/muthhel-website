import { getTranslations } from 'next-intl/server';

import ManagementList from './management-list';
import { Glow } from '@/components';

const ManagementContainer = async () => {
  const t = await getTranslations('HomePage.managementSection');

  return (
    <section className="s-container s-block relative">
      <header className="s-block__title">
        <h2 className="text-5xl font-bold">{t('title')}</h2>
        <p className="text-muted-foreground text-lg sm:w-[35.5rem]">
          {t('text')}
        </p>
      </header>
      <ManagementList />
      <Glow className="opacity-50" />
    </section>
  );
};

export default ManagementContainer;
