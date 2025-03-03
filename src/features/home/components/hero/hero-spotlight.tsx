'use client';

import { useTheme } from 'next-themes';

import { Spotlight } from '@/components/ui/spotlight';

const HeroSpotlight = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    return null;
  }

  return (
    <>
      <Spotlight
        className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="#3cb089"
      />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#3cb089" />
    </>
  );
};

export default HeroSpotlight;
