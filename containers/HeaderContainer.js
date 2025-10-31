import { useState, useEffect } from 'react';
import Header from '../ui/Header';
import { getMainMenu, getBusinessSettings } from '../../lib/settings';

export default function HeaderContainer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const businessSettings = getBusinessSettings();
  const mainMenu = getMainMenu();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Header
      logoText={businessSettings.brandName}
      menuItems={mainMenu.mainMenu}
      stickyHeader={true}
      isTransparent={!isScrolled}
      className={isScrolled ? 'shadow-md' : ''}
    />
  );
}
