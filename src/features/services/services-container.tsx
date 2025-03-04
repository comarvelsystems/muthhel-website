import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Glow } from '@/components';

const ServicesContainer = async () => {
  const t = await getTranslations('ServicesPage');

  return (
    <div className="relative">
      <section className="s-block">
        <div className="s-container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <header className="space-y-6 text-center lg:text-start">
            <h2 className="text-4xl font-bold sm:text-5xl">
              {t('section1.title')}
            </h2>
            <p className="text-muted-foreground mx-auto text-lg sm:w-[35.5rem] lg:mx-0">
              {t('section1.text')}
            </p>
          </header>
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/services/service-img-1.webp"
              width={600}
              height={600}
              loading="lazy"
              alt={t('section1.title')}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="s-block">
        <div className="s-container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <header className="space-y-6 text-center lg:order-2 lg:text-start">
            <h2 className="text-4xl font-bold sm:text-5xl">
              {t('section2.title')}
            </h2>
            <p className="text-muted-foreground mx-auto text-lg sm:w-[35.5rem] lg:mx-0">
              {t('section2.text')}
            </p>
          </header>
          <div className="overflow-hidden rounded-xl lg:order-1">
            <Image
              src="/images/services/service-img-2.png"
              width={600}
              height={600}
              loading="lazy"
              alt={t('section2.title')}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>
      <Glow className="opacity-50" />
    </div>
  );
};

export default ServicesContainer;
