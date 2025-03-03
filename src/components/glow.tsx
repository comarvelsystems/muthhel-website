'use client';

import { useTheme } from 'next-themes';

interface Props {
  className?: string;
}

const Glow = ({ className }: Props) => {
  const { theme } = useTheme();

  if (theme === 'light') return null;

  return <div className={`glow-large absolute inset-0 -z-50 ${className}`} />;
};

export default Glow;
