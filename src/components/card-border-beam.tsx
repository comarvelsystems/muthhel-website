'use client';

import { useTheme } from 'next-themes';

import { BorderBeam } from './magicui/border-beam';

interface Props {
  from: string;
  to: string;
  darkFrom: string;
  darkTo: string;
  size?: number;
  duration?: number;
}

const CardBorderBeam = ({
  from,
  to,
  darkFrom,
  darkTo,
  size = 400,
  duration = 10,
}: Props) => {
  const { theme } = useTheme();

  return (
    <BorderBeam
      duration={duration}
      size={size}
      colorFrom={theme === 'dark' ? darkFrom : from}
      colorTo={theme === 'dark' ? darkTo : to}
    />
  );
};

export default CardBorderBeam;
