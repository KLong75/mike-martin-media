import fs from "fs";
import path from "path";
import { blogPosts } from "@/app/lib/blogPostData";
import { workSampleData } from "./lib/work-samples"; 

const urlConfig = {
  // "": { changeFrequency: "yearly", priority: 1.0 },
  "/blog": { changeFrequency: "monthly", priority: 1.0 },
  "/cookie-policy": { changeFrequency: "yearly", priority: 0.5 },
  "/privacy-policy": { changeFrequency: "yearly", priority: 0.5 },
};

// Function to get the last modified date of a file
function getLastModified(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime;
}

// Function to generate URLs from filenames
function generateUrls(directory, baseUrl = "") {
  const files = fs.readdirSync(directory);
  let urls = [];

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively include files in subdirectories
      urls = urls.concat(generateUrls(filePath, `${baseUrl}/${file}`));
    } else if (file.endsWith("page.js")) {
      // Include only files that end with 'page.js'
      const urlPath =
        file === "page.js"
          ? baseUrl
          : `${baseUrl}/${file.replace("/page.js", "")}`;
      const config = urlConfig[urlPath] || {
        changeFrequency: "yearly",
        priority: 1.0,
      };
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
  const appDirectory = path.join(process.cwd(), "app");
  // Generate URLs from the app directory
  let urls = generateUrls(appDirectory);

  // generate dynamic URLs from blogPosts and workSampleData
  // const dynamicBlogUrls = blogPosts
  //   .map((post) => {
  //     let priority = 0.9;
  //     let changeFrequency = "monthly";

  //     // change priority and changeFrequency for specific posts
  //     // if (post.slug === "important-post") {
  //     //   priority = 1.0;
  //     //   changeFrequency = "daily";
  //     // }

  //     return {
  //       url: `https://www.mikemartinmedia.com/blog/posts/${post.slug}`,
  //       lastModified: new Date(), // or use a date from the post data
  //       changeFrequency,
  //       priority,
  //     };
  //   });

  const dynamicBlogUrls = blogPosts.map((post) => ({
    url: `https://www.mikemartinmedia.com/blog/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // const dynamicPortfolioUrls = workSampleData
  //   .map((sample) => ({
  //     url: `https://www.mikemartinmedia.com/our-work/portfolio/${sample.slug}`,
  //     lastModified: new Date(),
  //     changeFrequency: "monthly",
  //     priority: 0.9,
  //   }));
  const dynamicPortfolioUrls = workSampleData.map((sample) => {
    const entry = {
      url: `https://www.mikemartinmedia.com/our-work/portfolio/${sample.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    };
    if (sample.playback_id) {
      entry.video = {
        title: sample.title,
        description: sample.description,
        thumbnail_loc: sample.image_src,
        content_loc: sample.video_src || "",
        player_loc: entry.url,
      };
    }
    return entry;
  });
  // console.log("Dynamic Portfolio URLs:", dynamicPortfolioUrls);
  // append the dynamic pages from blogPosts and workSampleData
  urls = urls.concat(dynamicBlogUrls, dynamicPortfolioUrls);

  // filter out the placeholder routes '[slug]' from the generated URLs

  urls = urls.filter((url) => !url.url.includes("[slug]"));

  return urls;
}
