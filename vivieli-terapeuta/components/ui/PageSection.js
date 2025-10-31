import { cn } from '../../lib/utils';

export default function PageSection({
  isBoxed = true,
  bgImage = '',
  bgColor = 'bg-white dark:bg-gray-900',
  numColumns = 1,
  gap = 'gap-6',
  maxWidth = 'max-w-7xl',
  hPadding = 'px-4',
  vPadding = 'py-16',
  title = '',
  subtitle = '',
  ctaBtnText = '',
  ctaBtnLink = '',
  ctaContrastBtnText = '',
  ctaContrastBtnLink = '',
  ctaContrastBtnPosition = 'right',
  children,
  className = '',
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const sectionStyle = {
    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section
      className={cn(
        'relative',
        bgColor,
        vPadding,
        className
      )}
      style={sectionStyle}
    >
      {bgImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      
      <div className={cn(
        'relative',
        isBoxed ? 'mx-auto' : '',
        isBoxed ? maxWidth : '',
        hPadding
      )}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children && (
          <div className={cn(
            'grid',
            gridCols[numColumns] || gridCols[1],
            gap
          )}>
            {children}
          </div>
        )}

        {(ctaBtnText || ctaContrastBtnText) && (
          <div className={cn(
            'flex flex-col sm:flex-row items-center justify-center mt-12',
            ctaContrastBtnPosition === 'left' ? 'sm:justify-start' : '',
            ctaContrastBtnPosition === 'right' ? 'sm:justify-end' : '',
            ctaContrastBtnPosition === 'center' ? 'sm:justify-center' : '',
            gap
          )}>
            {ctaBtnText && (
              <a
                href={ctaBtnLink}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                {ctaBtnText}
              </a>
            )}
            {ctaContrastBtnText && (
              <a
                href={ctaContrastBtnLink}
                className="inline-flex items-center px-8 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-transparent hover:bg-green-50 dark:hover:bg-green-900 transition-colors duration-200"
              >
                {ctaContrastBtnText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
