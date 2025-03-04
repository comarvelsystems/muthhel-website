import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Lens } from '@/components/magicui/lens';

const images = [
  'img-1.jpg',
  'img-2.jpg',
  'img-3.jpg',
  'img-4.jpg',
  'img-5.jpg',
  'img-6.jpg',
  'img-7.jpg',
  'img-8.jpg',
];

const AboutPlan = async () => {
  const t = await getTranslations('AboutPage.planSection');

  return (
    <section className="s-block">
      <div className="s-container">
        <header className="s-block__title">
          <h2 className="text-4xl font-bold sm:text-5xl">{t('title')}</h2>
          <p className="text-muted-foreground text-lg sm:w-[35.5rem]">
            {t('text')}
          </p>
        </header>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <Lens
                zoomFactor={2}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
              >
                <Image
                  src={`/images/about/${image}`}
                  alt="image 1"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </Lens>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlan;
