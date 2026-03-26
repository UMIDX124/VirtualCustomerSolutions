import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  lastModified: string;
  featured: boolean;
  faqs: BlogFAQ[];
  content: string;
  readingTime: number;
  toc: TOCItem[];
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function generateTOC(content: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    toc.push({ id, text, level });
  }

  return toc;
}

function parseMarkdownFile(filePath: string, slug: string): BlogPost {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    category: data.category || 'Uncategorized',
    tags: data.tags || [],
    date: data.date || '',
    author: data.author || 'M Faizan Rafiq',
    lastModified: data.lastModified || data.date || '',
    featured: data.featured || false,
    faqs: data.faqs || [],
    content,
    readingTime: calculateReadingTime(content),
    toc: generateTOC(content),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(CONTENT_DIR, filename);
    return parseMarkdownFile(filePath, slug);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return parseMarkdownFile(filePath, slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
