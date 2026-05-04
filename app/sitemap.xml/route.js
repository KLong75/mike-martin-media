import sitemap from "../sitemap-config";

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSitemapXml(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls
  .map((entry) => {
    let xml = `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>`;
    if (entry.video) {
      xml += `
    <video:video>
      <video:title><![CDATA[${entry.video.title}]]></video:title>
      <video:description><![CDATA[${
        entry.video.description || ""
      }]]></video:description>
      <video:thumbnail_loc>${entry.video.thumbnail_loc}</video:thumbnail_loc>
      ${
        entry.video.content_loc
          ? `<video:content_loc>${entry.video.content_loc}</video:content_loc>`
          : ""
      }
      <video:player_loc>${entry.video.player_loc}</video:player_loc>
    </video:video>`;
    }
    xml += `
  </url>`;
    return xml;
  })
  .join("\n")}
</urlset>`;
}

export async function GET() {
  const urls = sitemap();
  const xml = generateSitemapXml(urls);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
