import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import PostsContainer from '../containers/PostsContainer';
import { FaHeart, FaUsers, FaBrain, FaLeaf, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { getFeaturedPosts } from '../lib/posts';
import { getMainMenu, getBusinessSettings } from '../lib/settings';

export default function Home({ featuredPosts, businessSettings, mainMenu }) {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "As sessões de constelação familiar com Vivieli transformaram minha vida. Consegui entender padrões que se repetiam em minha família e encontrar paz interior.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "A psicoterapia individual me ajudou a superar ansiedade e depressão. Vivieli é uma profissional excepcional, muito acolhedora e competente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "As sessões de autoconhecimento foram fundamentais para meu desenvolvimento pessoal. Recomendo de coração!",
      rating: 5
    }
  ];

  const services = [
    {
      icon: FaUsers,
      title: "Constelações Familiares",
      description: "Trabalho com constelações familiares para identificar e resolver padrões familiares que afetam sua vida atual.",
      features: ["Identificação de padrões", "Resolução de conflitos", "Cura transgeracional"]
    },
    {
      icon: FaBrain,
      title: "Psicoterapia Individual",
      description: "Atendimento psicológico individualizado para trabalhar questões pessoais e promover o bem-estar mental.",
      features: ["Ansiedade e depressão", "Traumas", "Desenvolvimento pessoal"]
    },
    {
      icon: FaHeart,
      title: "Autoconhecimento",
      description: "Sessões focadas no autoconhecimento para você se conhecer melhor e desenvolver sua inteligência emocional.",
      features: ["Inteligência emocional", "Autoestima", "Propósito de vida"]
    },
    {
      icon: FaLeaf,
      title: "Desenvolvimento Pessoal",
      description: "Programas de desenvolvimento pessoal para potencializar suas habilidades e alcançar seus objetivos.",
      features: ["Metas e objetivos", "Habilidades sociais", "Crescimento pessoal"]
    }
  ];

  return (
    <Layout
      title="Início"
      description="Terapeuta especializada em Constelações Familiares, Psicoterapia Individual e Sessões de Autoconhecimento em Catanduvas - PR"
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      {/* Hero Section */}
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-20"
        title="Vivieli Comiran"
        subtitle="Terapeuta especializada em Constelações Familiares, Psicoterapia Individual e Sessões de Autoconhecimento e Desenvolvimento Pessoal"
        ctaBtnText="Agendar Consulta"
        ctaBtnLink="https://wa.me/5545999999999"
        ctaContrastBtnText="Conhecer Serviços"
        ctaContrastBtnLink="/servicos"
        ctaContrastBtnPosition="right"
      >
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/images/authors/vivieli-profile.png"
              alt="Vivieli Comiran"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Com mais de 5 anos de experiência na área, ofereço atendimento presencial em Catanduvas - PR 
              e online para todo o Brasil. Formada em Recursos Humanos com especializações em terapias holísticas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5+ Anos</h3>
              <p className="text-gray-600 dark:text-gray-300">de experiência</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">100+</h3>
              <p className="text-gray-600 dark:text-gray-300">pessoas atendidas</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-green-600 dark:text-green-400 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4.9/5</h3>
              <p className="text-gray-600 dark:text-gray-300">avaliação média</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Services Section */}
      <PageSection
        title="Meus Serviços"
        subtitle="Ofereço diferentes modalidades de atendimento para atender suas necessidades específicas"
        numColumns={2}
        gap="gap-8"
        vPadding="py-16"
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <IconComponent className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </PageSection>

      {/* Testimonials Section */}
      <PageSection
        bgColor="bg-gray-50 dark:bg-gray-800"
        title="Depoimentos"
        subtitle="O que meus clientes dizem sobre o trabalho"
        numColumns={1}
        vPadding="py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-green-500 text-2xl mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Featured Posts Section */}
      <PageSection
        title="Artigos em Destaque"
        subtitle="Conteúdos sobre bem-estar, autoconhecimento e desenvolvimento pessoal"
        vPadding="py-16"
      >
        <PostsContainer 
          posts={featuredPosts}
          limit={3}
        />
      </PageSection>

      {/* CTA Section */}
      <PageSection
        bgColor="bg-green-600"
        textColor="text-white"
        title="Pronto para Transformar Sua Vida?"
        subtitle="Agende sua consulta e dê o primeiro passo em direção ao seu bem-estar e desenvolvimento pessoal"
        ctaBtnText="Agendar Consulta"
        ctaBtnLink="https://wa.me/5545999999999"
        ctaContrastBtnText="Falar no WhatsApp"
        ctaContrastBtnLink="https://wa.me/5545999999999"
        ctaContrastBtnPosition="center"
        vPadding="py-16"
      >
        <div className="text-center text-white">
          <p className="text-lg mb-6">
            Atendimento presencial em Catanduvas - PR ou online para todo o Brasil
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Horários de Atendimento</h4>
              <p className="text-sm">Segunda a Sexta: 8h às 18h</p>
              <p className="text-sm">Sábado: mediante agendamento</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Localização</h4>
              <p className="text-sm">Rua Centro, 528</p>
              <p className="text-sm">Centro - Catanduvas/PR</p>
            </div>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  const businessSettings = getBusinessSettings();
  const mainMenu = getMainMenu();

  return {
    props: {
      featuredPosts,
      businessSettings,
      mainMenu,
    },
  };
}
