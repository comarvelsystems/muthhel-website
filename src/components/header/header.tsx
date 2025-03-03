'use client';

import { useMediaQuery } from '@/hooks';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

const Header = () => {
  const isLargeScreen = useMediaQuery('(min-width:1280px)');

  return isLargeScreen ? <HeaderDesktop /> : <HeaderMobile />;
};

export default Header;
