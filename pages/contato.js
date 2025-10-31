import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa';
import { getMainMenu, getBusinessSettings } from '../lib/settings';

export default function Contato({ businessSettings, mainMenu }) {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Resposta rápida e agendamento fácil',
      contact: '(45) 99999-9999',
      link: 'https://wa.me/5545999999999',
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      description: 'Para conversas mais detalhadas',
      contact: '(45) 99999-9999',
      link: 'tel:+5545999999999',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      description: 'Para dúvidas e informações',
      contact: 'contato@vivielicomiran.com',
      link: 'mailto:contato@vivielicomiran.com',
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900'
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      description: 'Acompanhe meu trabalho',
      contact: '@vivielicomiran',
      link: 'https://www.instagram.com/vivielicomiran/',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100 dark:bg-pink-900'
    }
  ];

  const workingHours = [
    { day: 'Segunda-feira', hours: '8h às 18h' },
    { day: 'Terça-feira', hours: '8h às 18h' },
    { day: 'Quarta-feira', hours: '8h às 18h' },
    { day: 'Quinta-feira', hours: '8h às 18h' },
    { day: 'Sexta-feira', hours: '8h às 18h' },
    { day: 'Sábado', hours: 'Mediante agendamento' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  const faqs = [
    {
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar através do WhatsApp (45) 99999-9999, por telefone ou e-mail. Respondo em até 24 horas.'
    },
    {
      question: 'Qual a diferença entre atendimento presencial e online?',
      answer: 'O atendimento presencial acontece em meu consultório em Catanduvas - PR. O online é feito via videochamada com a mesma qualidade e eficácia.'
    },
    {
      question: 'Quanto tempo dura cada sessão?',
      answer: 'As sessões variam de 50 minutos a 1h30min, dependendo do tipo de atendimento escolhido.'
    },
    {
      question: 'Você atende crianças e adolescentes?',
      answer: 'Sim, atendo pessoas de todas as idades, adaptando a abordagem conforme a faixa etária e necessidades específicas.'
    },
    {
      question: 'Os valores podem ser parcelados?',
      answer: 'Sim, ofereço opções de pagamento flexíveis. Entre em contato para conversarmos sobre as melhores condições.'
    }
  ];

  return (
    <Layout
      title="Contato"
      description="Entre em contato com Vivieli Comiran para agendar sua consulta. Atendimento presencial em Catanduvas - PR e online para todo o Brasil"
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      {/* Hero Section */}
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-20"
        title="Entre em Contato"
        subtitle="Estou aqui para ajudar você em sua jornada de desenvolvimento pessoal"
      >
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Escolha a forma de contato que for mais conveniente para você. 
            Respondo todas as mensagens em até 24 horas e estou sempre disponível para esclarecer dúvidas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className={`${method.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`${method.color} text-2xl`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    {method.contact}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </PageSection>

      {/* Location and Hours */}
      <PageSection
        title="Localização e Horários"
        subtitle="Informações sobre atendimento presencial e horários de funcionamento"
        numColumns={2}
        gap="gap-8"
        vPadding="py-16"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Localização
            </h3>
          </div>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p><strong>Endereço:</strong> Rua Centro, 528</p>
            <p><strong>Bairro:</strong> Centro</p>
            <p><strong>Cidade:</strong> Catanduvas - PR</p>
            <p><strong>CEP:</strong> 85470-000</p>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Como chegar:
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Próximo ao centro da cidade</li>
              <li>• Fácil acesso de carro</li>
              <li>• Estacionamento disponível</li>
              <li>• Transporte público próximo</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaClock className="text-green-600 dark:text-green-400 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Horários de Atendimento
            </h3>
          </div>
          <div className="space-y-2">
            {workingHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <span className="text-gray-900 dark:text-white font-medium">
                  {schedule.day}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Importante:</strong> Horários podem variar conforme agendamento. 
              Entre em contato para confirmar disponibilidade.
            </p>
          </div>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection
        bgColor="bg-gray-50 dark:bg-gray-800"
        title="Perguntas Frequentes"
        subtitle="Esclareça suas dúvidas mais comuns"
        vPadding="py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
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
            Estou ansiosa para conhecer você e ajudar em sua jornada de desenvolvimento pessoal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Resposta Rápida</h4>
              <p className="text-sm">Resposta em até 24 horas</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Atendimento Personalizado</h4>
              <p className="text-sm">Cada pessoa é única</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Flexibilidade</h4>
              <p className="text-sm">Presencial ou online</p>
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
