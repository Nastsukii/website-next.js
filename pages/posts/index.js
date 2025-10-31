import Layout from '../../components/layout/Layout';
import PageSection from '../../components/ui/PageSection';
import PostsContainer from '../../containers/PostsContainer';
import { getAllPosts } from '../../lib/posts';
import { getMainMenu, getBusinessSettings } from '../../lib/settings';

export default function Posts({ posts, businessSettings, mainMenu }) {
  return (
    <Layout
      title="Blog"
      description="Artigos sobre bem-estar, autoconhecimento, desenvolvimento pessoal e terapias holísticas"
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      {/* Hero Section */}
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-20"
        title="Blog"
        subtitle="Artigos sobre bem-estar, autoconhecimento e desenvolvimento pessoal"
      >
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Compartilho conhecimentos e experiências sobre terapias holísticas, 
            desenvolvimento pessoal e bem-estar mental para ajudar você em sua jornada de autoconhecimento.
          </p>
        </div>
      </PageSection>

      {/* Posts Grid */}
      <PageSection
        title="Últimos Artigos"
        subtitle="Conteúdos atualizados sobre bem-estar e desenvolvimento pessoal"
        vPadding="py-16"
      >
        <PostsContainer 
          posts={posts}
          limit={12}
        />
      </PageSection>

      {/* Categories Section */}
      <PageSection
        bgColor="bg-gray-50 dark:bg-gray-800"
        title="Categorias"
        subtitle="Explore artigos por tema"
        numColumns={1}
        vPadding="py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Constelações Familiares', count: 5, color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' },
            { name: 'Psicoterapia', count: 8, color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' },
            { name: 'Autoconhecimento', count: 12, color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' },
            { name: 'Desenvolvimento Pessoal', count: 10, color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400' }
          ].map((category, index) => (
            <a
              key={index}
              href={`/posts?categoria=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <span className="font-bold text-lg">{category.count}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {category.count} artigos
              </p>
            </a>
          ))}
        </div>
      </PageSection>

      {/* Newsletter Section */}
      <PageSection
        title="Receba Novos Artigos"
        subtitle="Inscreva-se para receber os últimos artigos diretamente no seu e-mail"
        vPadding="py-16"
      >
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
              >
                Inscrever-se
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              Não enviamos spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const businessSettings = getBusinessSettings();
  const mainMenu = getMainMenu();
  
  return {
    props: {
      posts,
      businessSettings,
      mainMenu,
    },
  };
}
