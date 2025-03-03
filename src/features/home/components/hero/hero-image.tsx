'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { HeroImg, HeroImgLight } from '@/app/assets/images';
import { CardBorderBeam } from '@/components';

const HeroImage = () => {
  const t = useTranslations('HomePage.heroSection.image');
  const { theme } = useTheme();

  return (
    <div className="relative mx-auto w-11/12 rounded-xl md:w-10/12">
      <Image
        src={theme === 'dark' ? HeroImg.src : HeroImgLight.src}
        width={HeroImg.width}
        height={HeroImg.height}
        loading="lazy"
        className="h-auto w-full rounded-xl"
        alt={t('alt')}
      />
      {theme === 'dark' && (
        <div className="bg-primary absolute top-0 left-1/2 -z-10 h-full w-11/12 -translate-x-1/2 rounded-[963px] blur-[32px]" />
      )}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-8/12 -translate-x-1/2 rounded-[963px] bg-emerald-500/60 blur-[156px]" />
      <CardBorderBeam
        duration={15}
        darkFrom="#ffffff"
        darkTo="#dddddd"
        from="#1A4C3B"
        to="#C0B177"
      />
    </div>
  );
};

export default HeroImage;
