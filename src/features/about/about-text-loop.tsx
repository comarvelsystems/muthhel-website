import { getTranslations } from 'next-intl/server';

import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

const AboutTextLoop = async () => {
  const t = await getTranslations('AboutPage');

  return (
    <div className="flex-column bg-primary text-primary-foreground relative w-full items-center justify-center overflow-hidden py-5 sm:py-3">
      <VelocityScroll
        numRows={1}
        defaultVelocity={2}
        dir="ltr"
        className="!text-4xl"
      >
        {t('loopText')}
      </VelocityScroll>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};

export default AboutTextLoop;
