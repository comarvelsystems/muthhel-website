import { getTranslations } from 'next-intl/server';
import { ArrowUpLeft } from 'lucide-react';

import { Button } from './ui/button';
import { Link } from '@/i18n/navigation';
import Glow from './glow';
import SocialMedia from './social-media';

const Footer = async () => {
  const t = await getTranslations('Settings.footer');

  return (
    <footer className="border-border/50 s-block bg-primary relative border-t pt-20 pb-4 sm:pt-36 dark:bg-transparent">
      <div className="s-container flex-column items-center justify-center gap-y-20">
        <div className="flex-column items-center gap-y-12 text-center">
          <h2 className="dark:text-foreground text-center text-4xl leading-tight font-bold text-white sm:max-w-[747px] md:text-6xl">
            {t.rich('title', {
              span: chunks => (
                <span className="text-primary-second dark:text-primary">
                  {chunks}
                </span>
              ),
            })}
          </h2>
          <Button
            asChild
            className="group bg-primary-second/20 dark:bg-primary/10 text-primary-second dark:text-primary hover:bg-primary-second/25 dark:hover:bg-primary/20 trans-colors font-b max-w-52 rounded-xl !px-12 py-8 text-lg font-bold"
          >
            <Link href="#">
              {t('button')}
              <ArrowUpLeft className="trans-transform !size-5 ease-in-out group-hover:-translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="dark:text-muted-foreground text-background/50 text-center text-sm">
            {t('copyright')}
          </span>
          <SocialMedia />
        </div>
      </div>
      <Glow className="opacity-50" />
    </footer>
  );
};

export default Footer;
