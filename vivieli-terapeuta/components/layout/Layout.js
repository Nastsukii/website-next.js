import Head from 'next/head';
import { useEffect } from 'react';
import { normalizeWhatsAppHref } from '../../lib/contact';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import TopRibbon from '../ui/TopRibbon';

export default function Layout({
  children,
  title = '',
  description = '',
  keywords = '',
  ogImage = '',
  canonical = '',
  businessSettings,
  mainMenu,
}) {
  
  const pageTitle = title 
    ? `${title} | ${businessSettings.brandName}`
    : `${businessSettings.brandName} - ${businessSettings.brandDescription}`;
  
  const pageDescription = description || businessSettings.brandDescription;
  const pageKeywords = keywords || businessSettings.brandKeywords.join(', ');

  const ribbonMessages = [
    '🌟 Atendimento Presencial e Online',
    '💚 Catanduvas - PR',
    '📞 WhatsApp: (45) 99104-6124'
  ];

  useEffect(() => {
    if (typeof document === 'undefined') return
    const anchors = document.querySelectorAll('a[href*="wa.me"]')
    anchors.forEach((a) => {
      const href = a.getAttribute('href') || ''
      const normalized = normalizeWhatsAppHref(href)
      if (normalized && normalized !== href) {
        console.warn('[contact] whatsapp href normalized', { original: href, normalized })
        a.setAttribute('href', normalized)
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={businessSettings.brandName} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <TopRibbon 
          messages={ribbonMessages}
          bgColor="bg-green-600"
          textColor="text-white"
          pauseOnHover={false}
        />
        
        <Header 
          logoText={businessSettings.brandName}
          menuItems={mainMenu.mainMenu}
          stickyHeader={true}
        />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer 
          companyName={businessSettings.brandName}
          description={businessSettings.brandDescription}
          address={businessSettings.address}
          phone={businessSettings.brandPhone}
          email={businessSettings.brandEmail}
        />
      </div>
    </>
  );
}
