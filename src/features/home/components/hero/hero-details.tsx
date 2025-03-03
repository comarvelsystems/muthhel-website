import { getTranslations } from 'next-intl/server';
import { ArrowUpLeft } from 'lucide-react';

import { TextLine } from '@/components';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

const HeroDetails = async () => {
  const t = await getTranslations('HomePage.heroSection');

  return (
    <div className="flex-column gap-y-12 text-center">
      <div className="space-y-12">
        <h1 className="sm:text:6xl text-5xl leading-tight font-bold sm:max-w-7xl md:text-8xl">
          {t.rich('title', {
            span: chunks => (
              <span className="text-primary dark:text-primary-second relative">
                {chunks}
                <span className="absolute -bottom-7 left-1/2 -translate-1/2">
                  <TextLine className="w-36 md:w-[212px]" />
                </span>
              </span>
            ),
          })}
        </h1>
        <p className="text-muted-foreground text-2xl">{t('text')}</p>
      </div>
      <div className="flex flex-col justify-center gap-4 md:flex md:flex-row">
        <Button
          className="group border-primary/60 from-primary w-full rounded-xl border bg-gradient-to-l to-[#2C7E62] !px-8 py-7 text-lg font-bold md:w-auto dark:from-[#3CB089] dark:to-[#3CB089]"
          asChild
        >
          <Link href="https://cloud.muthhelerp.com/">
            {t('buttons.primary')}
            <ArrowUpLeft className="trans-transform !size-5 ease-in-out group-hover:-translate-x-1" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group trans-colors bg-background border-border/70 w-full rounded-xl border !px-8 py-7 text-lg font-bold md:w-auto dark:border-[#a6a6a6c4] dark:!bg-transparent dark:bg-gradient-to-r dark:from-[rgba(194,194,194,0.51)] dark:to-[rgba(177,177,177,0.24)]"
          asChild
        >
          <Link href="/">
            {t('buttons.secondary')}
            <ArrowUpLeft className="trans-transform !size-5 ease-in-out group-hover:-translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroDetails;
