import { getTranslations } from 'next-intl/server';
import { ChevronLeft, Link } from 'lucide-react';

import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';

const LinkBox = async () => {
  const t = await getTranslations('HomePage');

  return (
    <div className="group border-primary/30 rounded-full border sm:max-w-[332px]">
      <AnimatedShinyText className="flex-center hover:text-foreground hover:dark:text-foreground px-4 py-2 transition ease-out">
        <span className="flex-horizontally gap-x-1.5 text-base">
          <Link className="text-primary" size={18} /> {t('heroSection.linkBox')}
        </span>
        <ChevronLeft
          size={18}
          className="trans-transform ease-in-out group-hover:-translate-x-1"
        />
      </AnimatedShinyText>
    </div>
  );
};

export default LinkBox;
