import PostCard from '../components/ui/PostCard';

export default function PostsContainer({ 
  posts = [],
  limit = 6 
}) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          Nenhum post encontrado.
        </p>
      </div>
    );
  }

  const displayedPosts = posts.slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedPosts.map((post) => (
        <PostCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          publishDate={post.publishDate}
          author={post.author}
          authorImage={post.authorImage}
          categories={post.categories}
          tags={post.tags}
          featuredImage={post.featuredImage}
          readTime={post.readTime}
          featuredPost={post.featuredPost}
        />
      ))}
    </div>
  );
}
