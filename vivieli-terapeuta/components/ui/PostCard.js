import Link from 'next/link';
import { formatDate, generateExcerpt } from '../../lib/utils';

export default function PostCard({
  slug,
  title,
  excerpt,
  publishDate,
  author,
  authorImage,
  categories = [],
  tags = [],
  featuredImage,
  readTime,
  featuredPost = false,
}) {
  const postExcerpt = excerpt || '';

  return (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      featuredPost ? 'ring-2 ring-green-500' : ''
    }`}>
      {featuredImage && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
          <Link
            href={`/posts/${slug}`}
            className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
          >
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {postExcerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <img
              src={authorImage || '/images/authors/vivieli-profile.png'}
              alt={author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>{author}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {publishDate && (
              <time dateTime={publishDate}>
                {formatDate(publishDate)}
              </time>
            )}
            {readTime && (
              <span>{readTime}</span>
            )}
          </div>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
