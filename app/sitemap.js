import fs from 'fs';
import path from 'path';
import { blogPosts } from "@/app/lib/blogPostData";

const urlConfig = {
  '': { changeFrequency: 'yearly', priority: 1.0 },
  '/blog': { changeFrequency: 'monthly', priority: 1.0 },
};

// Function to get the last modified date of a file
function getLastModified(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime;
}

// Function to generate URLs from filenames
function generateUrls(directory, baseUrl = '') {
  const files = fs.readdirSync(directory);
  let urls = [];

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively include files in subdirectories
      urls = urls.concat(generateUrls(filePath, `${baseUrl}/${file}`));
    } else if (file.endsWith('page.js')) {
      // Include only files that end with 'page.js'
      const urlPath = file === 'page.js' ? baseUrl : `${baseUrl}/${file.replace('/page.js', '')}`;
      const config = urlConfig[urlPath] || { changeFrequency: 'yearly', priority: 0.8 }; // Default values
      urls.push({
        url: `https://www.mikemartinmedia.com${urlPath}`,
        lastModified: getLastModified(filePath),
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      });
    }
  });

  return urls;
}

export default function sitemap() {
  const appDirectory = path.join(process.cwd(), 'app');
  const pagesDirectory = path.join(process.cwd(), 'pages');
  
  // Generate URLs from the app directory
  let urls = generateUrls(appDirectory);

  // Add the 404 page from the pages directory
  const notFoundPagePath = path.join(pagesDirectory, '404.js');
  if (fs.existsSync(notFoundPagePath)) {
    urls.push({
      url: 'https://www.mikemartinmedia.com/404',
      lastModified: getLastModified(notFoundPagePath),
      changeFrequency: 'never',
      priority: 0.1,
    });
  }

  // 1. Generate dynamic URLs from blogPosts
  // 2. For each blog post, push the slug-based route
  const dynamicBlogUrls = blogPosts
    .filter((post) => post.slug !== "[slug]") // Exclude placeholder route
    .map((post) => {
      let priority = 0.8;
      let changeFrequency = "monthly";

      // Example: Change priority and changeFrequency for specific posts
      if (post.slug === "important-post") {
        priority = 1.0;
        changeFrequency = "daily";
      }

      return {
        url: `https://www.mikemartinmedia.com/blog/blog-posts/${post.slug}`,
        lastModified: new Date(), // or use a date from the post data
        changeFrequency,
        priority,
      };
    });

  // 3. Append the dynamic pages from blogPosts
  urls = urls.concat(dynamicBlogUrls);

  // 4. Filter out the placeholder route '[slug]' from the generated URLs
  urls = urls.filter(url => url.url !== 'https://www.mikemartinmedia.com/blog/blog-posts/[slug]');

  return urls;
}