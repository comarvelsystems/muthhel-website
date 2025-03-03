'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpLeft } from 'lucide-react';

import Logo from '../logo';
import { navItems } from '@/constants';
import { Link } from '@/i18n/navigation';
import ModeToggle from '../mode-toggle';
import { Button } from '../ui/button';

const HeaderDesktop = () => {
  const t = useTranslations('Settings');

  return (
    <header className="absolute top-0 right-0 left-0 z-10 h-20 w-full">
      <nav className="s-container flex-between border-border/50 h-20 border-b">
        <Logo />
        <ul className="flex-horizontally gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="trans-colors hover:text-primary-second dark:hover:text-primary flex-horizontally gap-1"
              >
                <span>{t(item.title as never)}</span>
                {index === 0 && <ArrowUpLeft size={16} />}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-horizontally gap-3">
          <ModeToggle />
          <Button
            size="lg"
            asChild
            className="dark:bg-primary/10 dark:text-primary dark:hover:bg-primary/20 trans-colors rounded-xl"
          >
            <Link href="https://cloud.muthhelerp.com/login">
              {t('header.nav.logIn')}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
