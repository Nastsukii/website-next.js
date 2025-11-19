import Layout from '../../components/layout/Layout';
import PageSection from '../../components/ui/PageSection';
import { getPostData, getAllPostSlugs } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import { getMainMenu, getBusinessSettings } from '../../lib/settings';
import { FaCalendarAlt, FaUser, FaClock, FaTag, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Post({ post, businessSettings, mainMenu }) {
  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      ogImage={post.featuredImage}
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/posts"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Voltar ao Blog
          </Link>
        </div>
      </div>

      {/* Post Header */}
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            {post.categories && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Post Meta */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
            {post.author && (
              <div className="flex items-center">
                <img
                  src={post.authorImage || '/images/authors/vivieli-profile.png'}
                  alt={post.author}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
            )}
            
            {post.publishDate && (
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <time dateTime={post.publishDate}>
                  {formatDate(post.publishDate)}
                </time>
              </div>
            )}
            
            {post.readTime && (
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </PageSection>

      {/* Post Content */}
      <PageSection
        vPadding="py-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <FaTag className="text-green-600 dark:text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Tags
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {post.author && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <img
                  src={post.authorImage || '/images/authors/vivieli-profile.png'}
                  alt={post.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Sobre {post.author}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Terapeuta especializada em Constelações Familiares, Psicoterapia Individual 
                    e Sessões de Autoconhecimento e Desenvolvimento Pessoal. Com mais de 5 anos 
                    de experiência na área, dedico minha vida a ajudar pessoas a encontrarem 
                    seu caminho para o bem-estar e crescimento pessoal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-green-50 dark:bg-green-900 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Gostou do artigo?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Agende uma consulta e dê o primeiro passo em direção ao seu bem-estar e desenvolvimento pessoal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5545991046124"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  Agendar Consulta
                </a>
                <a
                  href="/posts"
                  className="inline-flex items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-transparent hover:bg-green-50 dark:hover:bg-green-900 transition-colors duration-200"
                >
                  Ver Mais Artigos
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);
  const businessSettings = getBusinessSettings();
  const mainMenu = getMainMenu();
  
  return {
    props: {
      post,
      businessSettings,
      mainMenu,
    },
  };
}
