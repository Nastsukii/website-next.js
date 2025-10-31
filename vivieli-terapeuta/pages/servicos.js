import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import { FaUsers, FaBrain, FaHeart, FaLeaf, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { getMainMenu, getBusinessSettings } from '../lib/settings';

export default function Servicos({ businessSettings, mainMenu }) {
  const services = [
    {
      id: 'constelacoes',
      icon: FaUsers,
      title: 'Constelações Familiares',
      description: 'Trabalho com constelações familiares para identificar e resolver padrões familiares que afetam sua vida atual.',
      duration: '1h30min',
      price: 'R$ 150',
      modality: 'Presencial/Online',
      features: [
        'Identificação de padrões familiares',
        'Resolução de conflitos transgeracionais',
        'Cura de relacionamentos familiares',
        'Liberação de bloqueios emocionais',
        'Reconexão com a ancestralidade'
      ],
      benefits: [
        'Maior compreensão da dinâmica familiar',
        'Resolução de conflitos antigos',
        'Melhoria nos relacionamentos',
        'Cura emocional profunda',
        'Paz interior e equilíbrio'
      ]
    },
    {
      id: 'psicoterapia',
      icon: FaBrain,
      title: 'Psicoterapia Individual',
      description: 'Atendimento psicológico individualizado para trabalhar questões pessoais e promover o bem-estar mental.',
      duration: '50min',
      price: 'R$ 120',
      modality: 'Presencial/Online',
      features: [
        'Avaliação psicológica inicial',
        'Trabalho com ansiedade e depressão',
        'Processamento de traumas',
        'Desenvolvimento de habilidades sociais',
        'Técnicas de relaxamento e mindfulness'
      ],
      benefits: [
        'Redução de sintomas de ansiedade',
        'Melhoria do humor e bem-estar',
        'Maior autoconfiança',
        'Desenvolvimento de estratégias de coping',
        'Crescimento pessoal significativo'
      ]
    },
    {
      id: 'autoconhecimento',
      icon: FaHeart,
      title: 'Sessões de Autoconhecimento',
      description: 'Sessões focadas no autoconhecimento para você se conhecer melhor e desenvolver sua inteligência emocional.',
      duration: '1h',
      price: 'R$ 100',
      modality: 'Presencial/Online',
      features: [
        'Mapeamento de personalidade',
        'Desenvolvimento da inteligência emocional',
        'Identificação de valores e crenças',
        'Trabalho com autoestima',
        'Descoberta do propósito de vida'
      ],
      benefits: [
        'Maior autoconhecimento',
        'Melhoria da autoestima',
        'Clareza sobre objetivos de vida',
        'Melhor relacionamento consigo mesmo',
        'Desenvolvimento da inteligência emocional'
      ]
    },
    {
      id: 'desenvolvimento',
      icon: FaLeaf,
      title: 'Desenvolvimento Pessoal',
      description: 'Programas de desenvolvimento pessoal para potencializar suas habilidades e alcançar seus objetivos.',
      duration: '1h',
      price: 'R$ 100',
      modality: 'Presencial/Online',
      features: [
        'Definição de metas e objetivos',
        'Desenvolvimento de habilidades sociais',
        'Trabalho com comunicação assertiva',
        'Gestão de tempo e produtividade',
        'Planejamento de carreira e vida'
      ],
      benefits: [
        'Alcance de objetivos pessoais',
        'Melhoria nas habilidades sociais',
        'Maior produtividade',
        'Comunicação mais eficaz',
        'Crescimento profissional e pessoal'
      ]
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
        subtitle="Modalidades de atendimento para diferentes necessidades e objetivos"
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
              <p className="text-sm text-gray-600 dark:text-gray-300">Seg-Sex: 8h-18h</p>
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
                  href="https://wa.me/5545999999999"
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
