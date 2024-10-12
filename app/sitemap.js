import fs from 'fs';
import path from 'path';

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
        url: `https://mikemartinmedia.com${urlPath}`,
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
      url: 'https://mikemartinmedia.com/404',
      lastModified: getLastModified(notFoundPagePath),
      changeFrequency: 'never',
      priority: 0.1,
    });
  }

  return urls;
}