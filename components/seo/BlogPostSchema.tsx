interface BlogPostSchemaProps {
  title: string;
  excerpt: string;
  date: string;
  lastModified: string;
  author: string;
  slug: string;
  category: string;
  tags: string[];
  readingTime: number;
}

export function BlogPostSchema({
  title,
  excerpt,
  date,
  lastModified,
  author,
  slug,
  category,
  tags,
  readingTime,
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(lastModified || date).toISOString(),
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://virtualcustomersolution.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Virtual Customer Solution',
      url: 'https://virtualcustomersolution.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://virtualcustomersolution.com/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://virtualcustomersolution.com/blog/${slug}`,
    },
    articleSection: category,
    keywords: tags.join(', '),
    wordCount: readingTime * 225,
    timeRequired: `PT${readingTime}M`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
