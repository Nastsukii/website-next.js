import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export default function Header({
  logoImage = '',
  logoText = 'Vivieli Comiran',
  logoFontStyle = 'text-2xl font-bold text-green-600',
  logoAlign = 'left',
  showMainMenu = true,
  headerHeight = 'h-16',
  isTransparent = false,
  stickyHeader = true,
  menuItems = [],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'w-full',
        headerHeight,
        stickyHeader ? 'sticky top-0 z-50' : '',
        isTransparent ? 'bg-transparent' : 'bg-white dark:bg-gray-900',
        'border-b border-gray-200 dark:border-gray-700'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className={cn(
            'flex-shrink-0',
            logoAlign === 'center' ? 'mx-auto' : ''
          )}>
            <Link href="/" className="flex items-center">
              {logoImage ? (
                <img
                  src={logoImage}
                  alt={logoText}
                  className="h-8 w-auto"
                />
              ) : (
                <span className={logoFontStyle}>
                  {logoText}
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          {showMainMenu && (
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            {showMainMenu && (
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {showMainMenu && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
