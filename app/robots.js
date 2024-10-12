export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/.next/",
        "/app/lib/utils.js",
        "/app/preload-resources.js",
        "/node_modules/",
        "/.env.local",
        "/.eslintrc.json",
        "/.gitignore",
        "/jsconfig.json",
        "/next.config.js",
        "/package-lock.json",
        "/package.json",
        "/postcss.config.js",
        "/README.md",
        "/tailwind.config.js",
      ],
    },
    sitemap: "https://mikemartinmedia.com/sitemap.xml",
  };
}
