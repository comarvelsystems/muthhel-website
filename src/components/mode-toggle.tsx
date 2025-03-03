'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer hover:bg-transparent"
      onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  );
};

export default ModeToggle;
