import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const pagesDirectory = path.join(process.cwd(), 'content/pages');

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((name) => {
    return {
      params: {
        slug: name.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((name) => {
    const slug = name.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.publishDate < b.publishDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featuredPost === true);
}

export async function getPageData(slug) {
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

export function getAllPageSlugs() {
  const fileNames = fs.readdirSync(pagesDirectory);
  return fileNames.map((name) => {
    return {
      params: {
        slug: name.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllPages() {
  const fileNames = fs.readdirSync(pagesDirectory);
  const allPagesData = fileNames.map((name) => {
    const slug = name.replace(/\.md$/, '');
    const fullPath = path.join(pagesDirectory, name);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return allPagesData;
}
