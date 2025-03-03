'use client';

import { useTheme } from 'next-themes';

import { MagicCard } from './magicui/magic-card';

interface Props extends Children {
  gradientSize?: number;
}

const ButtyCard = ({ gradientSize, children }: Props) => {
  const { theme } = useTheme();

  return (
    <MagicCard
      gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
      gradientSize={gradientSize}
    >
      {children}
    </MagicCard>
  );
};

export default ButtyCard;
