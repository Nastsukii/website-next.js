import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import { FaUsers, FaBrain, FaHeart, FaLeaf, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { getMainMenu, getBusinessSettings } from '../lib/settings';

export default function Servicos({ businessSettings, mainMenu }) {
  const services = [
    {
      id: 'constelacao-transgenerativa',
      icon: FaUsers,
      title: 'Constelação Transgenerativa',
      description: 'Explora padrões familiares e memórias ancestrais para liberação de bloqueios e reconexão com a origem.',
      duration: '60–90min',
      price: 'Sob consulta',
      modality: 'Presencial/Online',
      features: ['Padrões familiares', 'Cura transgeracional', 'Reconexão ancestral'],
      benefits: ['Compreensão de dinâmicas familiares', 'Liberação de bloqueios', 'Equilíbrio emocional']
    },
    {
      id: 'psicologia-pnl',
      icon: FaBrain,
      title: 'Psicologia Transgenerativa & PNL',
      description: 'Integra Neurociência e Programação Neurolinguística para ressignificar mapas mentais e ampliar possibilidades.',
      duration: '50–60min',
      price: 'Sob consulta',
      modality: 'Presencial/Online',
      features: ['Ressignificação de crenças', 'Estratégias pessoais', 'Ferramentas de Neurociência'],
      benefits: ['Maior clareza mental', 'Ampliação de possibilidades', 'Autonomia emocional']
    },
    {
      id: 'reconstrucao-eu',
      icon: FaHeart,
      title: 'Reconstrução do Eu',
      description: 'Processo de ressignificação profunda da identidade, alinhando propósito, valores e força interior.',
      duration: '60–90min',
      price: 'Sob consulta',
      modality: 'Presencial/Online',
      features: ['Alinhamento de propósito', 'Autoestima e identidade', 'Ferramentas de integração'],
      benefits: ['Fortalecimento do Eu', 'Coerência interna', 'Direcionamento de vida']
    },
    {
      id: 'inteligencia-espiritual',
      icon: FaLeaf,
      title: 'Inteligência Espiritual',
      description: 'Desenvolvimento humano com consciência ampliada e alinhamento de escolhas com a verdade pessoal.',
      duration: '60min',
      price: 'Sob consulta',
      modality: 'Presencial/Online',
      features: ['Consciência ampliada', 'Alinhamento de escolhas', 'Expansão pessoal'],
      benefits: ['Mais presença e sentido', 'Decisões alinhadas', 'Expansão da consciência']
    }
  ];

  const packages = [
    {
      name: 'Pacote Básico',
      sessions: 4,
      price: 'R$ 400',
      savings: 'R$ 80',
      description: 'Ideal para quem está começando sua jornada de autoconhecimento',
      features: [
        '4 sessões de 1h cada',
        'Escolha entre os serviços disponíveis',
        'Material de apoio incluído',
        'Suporte entre sessões via WhatsApp'
      ]
    },
    {
      name: 'Pacote Completo',
      sessions: 8,
      price: 'R$ 720',
      savings: 'R$ 160',
      description: 'Para quem quer uma transformação mais profunda',
      features: [
        '8 sessões de 1h cada',
        'Acesso a todos os serviços',
        'Material de apoio personalizado',
        'Suporte prioritário via WhatsApp',
        'Relatório de evolução mensal'
      ]
    },
    {
      name: 'Pacote Premium',
      sessions: 12,
      price: 'R$ 1.000',
      savings: 'R$ 320',
      description: 'Acompanhamento completo para transformação total',
      features: [
        '12 sessões de 1h cada',
        'Acesso a todos os serviços',
        'Material de apoio exclusivo',
        'Suporte 24/7 via WhatsApp',
        'Relatório de evolução semanal',
        'Sessão de follow-up após 3 meses'
      ]
    }
  ];

  return (
    <Layout
      title="Serviços"
      description="Conheça os serviços oferecidos por Vivieli Comiran: Constelações Familiares, Psicoterapia Individual, Autoconhecimento e Desenvolvimento Pessoal"
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      {/* Hero Section */}
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-20"
        title="Meus Serviços"
        subtitle="Abordagens integrativas para diferentes necessidades e objetivos"
      >
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Ofereço diferentes modalidades de atendimento para atender suas necessidades específicas. 
            Todos os serviços podem ser realizados presencialmente em Catanduvas - PR ou online para todo o Brasil.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-2xl mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Presencial</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Catanduvas - PR</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <FaClock className="text-green-600 dark:text-green-400 text-2xl mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Horários</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Seg-Sex: 9h-21h</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <FaCheckCircle className="text-green-600 dark:text-green-400 text-2xl mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Agendamento</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Via WhatsApp</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Services Details */}
      <PageSection
        title="Modalidades de Atendimento"
        subtitle="Conheça em detalhes cada serviço oferecido"
        vPadding="py-16"
      >
        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} id={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center">
                        <IconComponent className="text-green-600 dark:text-green-400 text-2xl" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                          <span className="flex items-center">
                            <FaClock className="mr-1" />
                            {service.duration}
                          </span>
                          <span className="font-semibold text-green-600 dark:text-green-400">
                            {service.price}
                          </span>
                          <span>{service.modality}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            O que inclui:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Benefícios:
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* Packages Section */}
      <PageSection
        bgColor="bg-gray-50 dark:bg-gray-800"
        title="Pacotes Especiais"
        subtitle="Economize com nossos pacotes de sessões"
        numColumns={1}
        vPadding="py-16"
      >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden ${
              index === 1 ? 'ring-2 ring-green-500 transform scale-105' : ''
            }`}>
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    Economia de {pkg.savings}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {pkg.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://wa.me/5545991046124"
                  className={`w-full block text-center py-3 px-4 rounded-md font-medium transition-colors duration-200 ${
                    index === 1
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Escolher Pacote
                </a>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection
        bgColor="bg-green-600"
        title="Pronto para Começar?"
        subtitle="Agende sua primeira consulta e dê o primeiro passo em direção ao seu bem-estar"
        ctaBtnText="Agendar Consulta"
        ctaBtnLink="https://wa.me/5545999999999"
        ctaContrastBtnText="Falar no WhatsApp"
        ctaContrastBtnLink="https://wa.me/5545999999999"
        ctaContrastBtnPosition="center"
        vPadding="py-16"
      >
        <div className="text-center text-white">
          <p className="text-lg mb-6">
            Estou aqui para ajudar você em sua jornada de desenvolvimento pessoal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Primeira Consulta</h4>
              <p className="text-sm">Avaliação inicial gratuita de 15 minutos</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Flexibilidade</h4>
              <p className="text-sm">Presencial ou online, conforme sua preferência</p>
            </div>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const businessSettings = getBusinessSettings();
  const mainMenu = getMainMenu();

  return {
    props: {
      businessSettings,
      mainMenu,
    },
  };
}
