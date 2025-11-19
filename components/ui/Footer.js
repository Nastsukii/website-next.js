import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer({
  logomark = '',
  companyName = 'Vivieli Comiran',
  description = 'Terapeuta especializada em Constelações Familiares, Psicoterapia Individual e Sessões de Autoconhecimento e Desenvolvimento Pessoal.',
  copyright = '© 2025 Vivieli Comiran. Todos os direitos reservados.',
  socialLinks = [],
  menuColumns = [],
  showNewsletter = false,
  address = 'Rua Centro, 528 - Centro, Catanduvas - PR',
  phone = '+55 (45) 99104-6124',
  email = 'vivielicomiran4@gmail.com',
}) {
  const defaultMenuColumns = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '/sobre' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Blog', href: '/posts' },
        { label: 'Contato', href: '/contato' },
      ]
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Constelações Familiares', href: '/servicos#constelacoes' },
        { label: 'Psicoterapia Individual', href: '/servicos#psicoterapia' },
        { label: 'Autoconhecimento', href: '/servicos#autoconhecimento' },
        { label: 'Desenvolvimento Pessoal', href: '/servicos#desenvolvimento' },
      ]
    },
    {
      title: 'Contato',
      links: [
        { label: 'WhatsApp', href: 'https://wa.me/5545991046124' },
        { label: 'Instagram', href: 'https://www.instagram.com/vivielicomiran/' },
        { label: 'E-mail', href: 'mailto:vivielicomiran4@gmail.com' },
        { label: 'Telefone', href: 'tel:+5545991046124' },
      ]
    }
  ];

  const defaultSocialLinks = [
    { href: 'https://wa.me/5545991046124', icon: FaWhatsapp, label: 'WhatsApp' },
    { href: 'https://www.instagram.com/vivielicomiran/', icon: FaInstagram, label: 'Instagram' },
    { href: 'mailto:vivielicomiran4@gmail.com', icon: FaEnvelope, label: 'E-mail' },
    { href: 'tel:+5545991046124', icon: FaPhone, label: 'Telefone' },
  ];

  const menuData = menuColumns.length > 0 ? menuColumns : defaultMenuColumns;
  const socialData = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-4">
              {logomark ? (
                <img
                  src={logomark}
                  alt={companyName}
                  className="h-8 w-auto mr-3"
                />
              ) : (
                <span className="text-2xl font-bold text-green-400">
                  {companyName}
                </span>
              )}
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {description}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <FaMapMarkerAlt className="h-4 w-4 mr-2 text-green-400" />
                {address}
              </div>
              <div className="flex items-center justify-center">
                <FaPhone className="h-4 w-4 mr-2 text-green-400" />
                {phone}
              </div>
              <div className="flex items-center justify-center">
                <FaEnvelope className="h-4 w-4 mr-2 text-green-400" />
                {email}
              </div>
            </div>
          </div>

          {/* Menu Columns */}
          {menuData.map((column, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm inline-block text-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-4 mb-4 md:mb-0 justify-center">
              {socialData.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm text-center">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
