import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/pages');

export async function getHomePageData() {
  const fullPath = path.join(contentDirectory, 'home.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  return {
    news_title: data.news_title,
    // We use the markdown body content for the news text
    news_content: data.news_content || content,
  };
}
