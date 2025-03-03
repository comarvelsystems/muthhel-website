import { getTranslations } from 'next-intl/server';
import { ChevronLeft, Link as LinkIcon } from 'lucide-react';

import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { Link } from '@/i18n/navigation';

const LinkBox = async () => {
  const t = await getTranslations('HomePage');

  return (
    <Link
      href="https://cloud.muthhelerp.com/"
      className="group border-primary/30 rounded-full border sm:max-w-[332px]"
    >
      <AnimatedShinyText className="flex-center hover:text-foreground hover:dark:text-foreground px-4 py-2 transition ease-out">
        <span className="flex-horizontally gap-x-1.5 text-base">
          <LinkIcon className="text-primary" size={18} />{' '}
          {t('heroSection.linkBox')}
        </span>
        <ChevronLeft
          size={18}
          className="trans-transform ease-in-out group-hover:-translate-x-1"
        />
      </AnimatedShinyText>
    </Link>
  );
};

export default LinkBox;
