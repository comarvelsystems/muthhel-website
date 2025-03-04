import { getTranslations } from 'next-intl/server';
import { CircleDollarSign, Clock8, ShieldCheck } from 'lucide-react';

const ServicesFeatures = async () => {
  const t = await getTranslations();

  return (
    <section className="bg-primary py-10">
      <div className="s-container flex-center">
        <ul className="services-features-list">
          <li>
            <ShieldCheck size={40} className="size-7 lg:size-10" />
            {t('ServicesPage.features.quality')}
          </li>
          <li>
            <Clock8 size={40} className="size-7 lg:size-10" />
            {t('ServicesPage.features.delivery')}
          </li>
          <li>
            <CircleDollarSign size={40} className="size-7 lg:size-10" />
            {t('ServicesPage.features.returnMoney')}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesFeatures;
