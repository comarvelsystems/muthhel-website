import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { managementList } from '@/constants';

const ManagementList = async () => {
  const t = await getTranslations('HomePage.managementSection.items');

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
      {managementList.map(({ id, title, text, icon }, index) => (
        <div
          key={id}
          className="border-primary/10 relative rounded-xl border p-10 md:p-14 lg:rounded-none lg:border-0 lg:border-t lg:border-r lg:nth-of-type-[3]:border-r-0 lg:nth-of-type-[6]:border-r-0 lg:rtl:border-r-0 lg:rtl:border-l lg:rtl:nth-of-type-[3]:border-l-0 lg:rtl:nth-of-type-[6]:border-l-0"
        >
          <div className="space-y-6">
            <div className="card-icon-glow">
              <Image
                src={icon}
                width={40}
                height={40}
                className="invert-100 dark:invert-0"
                alt={title}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{t(title as never)}</h3>
              <p className="text-muted-foreground">{t(text as never)}</p>
            </div>
          </div>
          {index !== 2 && index !== 5 && (
            <span className="absolute -top-3 -right-[13px] hidden lg:block rtl:right-auto rtl:-left-[13px]">
              <Image
                src="/images/star-neon.svg"
                width={24}
                height={24}
                className="invert-100 dark:invert-0"
                alt="Star"
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManagementList;
