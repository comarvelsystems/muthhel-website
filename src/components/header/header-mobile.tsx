'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpLeft, Menu } from 'lucide-react';

import Logo from '../logo';
import ModeToggle from '../mode-toggle';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navItems } from '@/constants';
import { Link } from '@/i18n/navigation';

const HeaderMobile = () => {
  const t = useTranslations('Settings');

  return (
    <header className="absolute top-0 right-0 left-0 z-10 h-20 w-full">
      <nav className="s-container flex-between border-border/50 h-20 border-b">
        <Logo />
        <div className="flex-horizontally">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer hover:bg-transparent"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Menu</SheetDescription>
              </SheetHeader>
              <div className="flex-column gap-8 space-y-8 px-12">
                <Logo />
                <ul className="flex-column gap-8">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="trans-colors hover:text-primary-second dark:hover:text-primary flex-horizontally gap-1 text-2xl"
                      >
                        <span>{t(item.title as never)}</span>
                        {index === 0 && <ArrowUpLeft size={16} />}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="https://cloud.muthhelerp.com/login"
                      className="trans-colors hover:text-primary-second dark:hover:text-primary flex-horizontally gap-1 text-2xl"
                    >
                      <span>{t('header.nav.logIn')}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
