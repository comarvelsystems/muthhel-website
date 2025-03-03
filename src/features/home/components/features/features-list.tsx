import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { featuresList } from '@/constants';
import { ButtyCard, CardBorderBeam } from '@/components';

const FeaturesList = async () => {
  const t = await getTranslations('HomePage.featuresSection.items');

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {featuresList.map(({ id, title, text, icon, videoUrl }) => (
        <ButtyCard key={id} gradientSize={350}>
          <div className="card">
            <div className="space-y-4 p-7 lg:p-10">
              <div className="flex-horizontally gap-x-3">
                <div className="card-icon-glow">
                  <Image
                    src={icon}
                    width={40}
                    height={40}
                    className="invert-100 dark:invert-0"
                    alt={title}
                  />
                </div>
                <h3 className="text-xl font-bold">{t(title as never)}</h3>
              </div>
              <p className="text-muted-foreground">{t(text as never)}</p>
            </div>
            <div className="bg-foreground/5 aspect-video w-full rounded-tr-xl rtl:rounded-tl-xl rtl:rounded-tr-none"></div>
            <CardBorderBeam
              darkFrom="#3cb089"
              darkTo="#f0d982"
              from="#1A4C3B"
              to="#C0B177"
            />
          </div>
        </ButtyCard>
      ))}
    </div>
  );
};

export default FeaturesList;
