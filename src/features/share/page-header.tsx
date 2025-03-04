import { getTranslations } from 'next-intl/server';
import { Slash } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Glow } from '@/components';

interface Props {
  title: string;
}

const PageHeader = async ({ title }: Props) => {
  const t = await getTranslations();

  return (
    <section className="bg-muted dark:bg-background/5 flex-center relative h-96 overflow-hidden pt-10 md:h-[550px]">
      <div className="flex-column items-center gap-y-6 text-center">
        <h1 className="text-6xl font-bold md:text-8xl">{t(title as never)}</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {t('Settings.breadcrumbHome')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{t(title as never)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Glow />
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      />
    </section>
  );
};

export default PageHeader;
