import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import { FaGraduationCap, FaHeart, FaUsers, FaAward, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { getMainMenu, getBusinessSettings } from '../lib/settings';

export default function Sobre({ businessSettings, mainMenu }) {
  const experiences = [
    {
      year: "2020",
      title: "Início da Carreira",
      description: "Comecei minha jornada como terapeuta, focando em constelações familiares e psicoterapia individual."
    },
    {
      year: "2021",
      title: "Especialização em RH",
      description: "Completei minha formação em Recursos Humanos, integrando conhecimentos organizacionais com terapias holísticas."
    },
    {
      year: "2022",
      title: "Expansão dos Serviços",
      description: "Iniciei as sessões de autoconhecimento e desenvolvimento pessoal, ampliando meu leque de atendimentos."
    },
    {
      year: "2023",
      title: "Atendimento Online",
      description: "Implementei o atendimento online para alcançar pessoas de todo o Brasil, mantendo a qualidade do atendimento."
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "Consolidei minha prática com mais de 100 pessoas atendidas e avaliações excelentes dos clientes."
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Empatia",
      description: "Sempre me coloco no lugar do cliente, oferecendo um espaço seguro e acolhedor para expressar sentimentos e experiências."
    },
    {
      icon: FaUsers,
      title: "Respeito",
      description: "Respeito a individualidade de cada pessoa, suas crenças, valores e ritmo de desenvolvimento pessoal."
    },
    {
      icon: FaAward,
      title: "Excelência",
      description: "Busco constantemente aprimorar minhas técnicas e conhecimentos para oferecer o melhor atendimento possível."
    }
  ];

  return (
    <Layout
      title="Sobre Mim"
      description="Conheça a jornada de Viviéli Comiran, Terapeuta Integrativa, e sua missão de unir ciência, espiritualidade, energia e emoção para cura e expansão."
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      {/* Hero Section */}
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-20"
        title="Sobre Viviéli Comiran"
        subtitle="Sensibilidade humana, integração de saberes e missão de cura"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/authors/vivieli-profile.png"
                alt="Vivieli Comiran"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Minha História</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Sou Viviéli Comiran, Terapeuta Integrativa. Minha missão é guiar pessoas em processos de cura,
                consciência, liberdade emocional e expansão da alma, integrando Neurociência, Epigenética e
                práticas terapêuticas.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Formei-me em Gestão de Recursos Humanos e, ao ouvir um chamado interior, aprofundei-me em
                Psicologia Transgenerativa, Hipnose Regressiva, PNL, Apometria Regressiva, Constelação
                Transgenerativa, Reiki (Níveis 1 e 2), 7 Safiras e Comandos Quânticos, Inteligência Espiritual,
                Reconstrução do Eu, Barras de Access e Creso Midas. Sou pós-graduada em Neurociência.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Atendo presencialmente em Catanduvas - PR e também online para todo o Brasil. Ofereço um
                espaço seguro e acolhedor para que cada pessoa reconheça seus padrões, liberte o que não
                faz parte de sua verdade e desperte sua força interior.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Experience Timeline */}
      <PageSection
        title="Minha Jornada"
        subtitle="Marcos que consolidam uma missão de propósito e entrega"
        vPadding="py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                      {experience.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{experience.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Values Section */}
      <PageSection
        bgColor="bg-gray-50 dark:bg-gray-800"
        title="Meus Valores"
        subtitle="Os princípios que guiam meu trabalho"
        numColumns={1}
        vPadding="py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-green-600 dark:text-green-400 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* Education Section */}
      <PageSection
        title="Formação e Especializações"
        subtitle="Pilares que sustentam minha prática integrativa"
        vPadding="py-16"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-green-600 dark:text-green-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Formação Principal
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Gestão de Recursos Humanos</li>
                <li>• Psicologia Transgenerativa</li>
                <li>• Hipnose Regressiva e PNL</li>
                <li>• Apometria Regressiva</li>
                <li>• Constelação Transgenerativa</li>
                <li>• Reiki Tradicional — Níveis 1 e 2</li>
                <li>• 7 Safiras e Comandos Quânticos</li>
                <li>• Inteligência Espiritual</li>
                <li>• Reconstrução do Eu</li>
                <li>• Barras de Access</li>
                <li>• Creso Midas</li>
                <li>• Pós-graduação em Neurociência</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaAward className="text-green-600 dark:text-green-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Experiência
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 5+ anos de experiência na área</li>
                <li>• 100+ pessoas atendidas</li>
                <li>• Atendimento presencial e online</li>
                <li>• Avaliação média de 4.9/5 estrelas</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Contact Info */}
      <PageSection
        bgColor="bg-green-600"
        title="Entre em Contato"
        subtitle="Estou aqui para ajudar você em sua jornada de desenvolvimento pessoal"
        vPadding="py-16"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <FaMapMarkerAlt className="text-3xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Localização</h4>
              <p className="text-sm">Rua Centro, 528</p>
              <p className="text-sm">Centro - Catanduvas/PR</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <FaPhone className="text-3xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Telefone</h4>
              <p className="text-sm">(45) 99104-6124</p>
              <p className="text-sm">WhatsApp disponível</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <FaEnvelope className="text-3xl mx-auto mb-4" />
              <h4 className="font-semibold mb-2">E-mail</h4>
              <p className="text-sm">vivielicomiran4@gmail.com</p>
              <p className="text-sm">Resposta em até 24h</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="https://wa.me/5545999999999"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Agendar Consulta
            </a>
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
