'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { LogoAr, LogoArLight } from '@/app/assets/images';
import { Link } from '@/i18n/navigation';

const Logo = () => {
  const t = useTranslations('Settings');
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === 'dark' ? LogoAr.src : LogoArLight.src}
        width={LogoAr.width}
        height={LogoAr.height}
        alt={t('altLogo')}
      />
    </Link>
  );
};

export default Logo;
