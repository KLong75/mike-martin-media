// import components
import BlogPostGallery from "../ui/blogPostGallery";
import BannerImage from "../ui/bannerImage";
// import images
import goldenGateBridge from "../../public/images/blog-page/golden-gate-bridge.jpg";
import PageHeadingBanner from "../ui/pageHeadingBanner";

const blogPageOgImgUrl = "https://www.mikemartinmedia.com/images/blog-page/blog-page-og-image.png";

export const metadata = {
  title: "Blog | Mike Martin Media",
  description:
    "Go Beyond the lens and check out our latest adventures in the MMM Blog as we film and travel across town across the country, and around the world. Try to keep up, we move fast!",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/blog/",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Blog | Mike Martin Media",
    description:
    "Go Beyond the lens and check out our latest adventures in the MMM Blog as we film and travel across town across the country, and around the world. Try to keep up, we move fast!",
    images: [
      {
        url: blogPageOgImgUrl,
        width: 1200,
        height: 630,
      },
        // {
      //   url: ,
      //   width: 1920,
      //   height: 1080,
      //   alt: "About Mike Martin Media",
      // },
      // {
      //   url: ,
      //   width: 1080,
      //   height: 1080,
      // },
      // {
      //   url: ,
      //   width: 600,
      //   height: 314,
      // }
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Blog | Mike Martin Media",
    description:
      "Go Beyond the lens and check out our latest adventures in the MMM Blog as we film and travel across town across the country, and around the world. Try to keep up, we move fast!",
    images: [
      {
        url: blogPageOgImgUrl,
        width: 1200,
        height: 630,
      },
        // {
        //   url: ,
        //   width: 800,
        //   height: 418,
        // },
    ],
  },
};

export default function Page() {
  return (
    <main className="flex-1 ">
      <div className="-mt-1">
        <BannerImage
          src={goldenGateBridge}
          alt="The Golden Gate Bridge"
          priority
        />
      </div>
      <div>
        <PageHeadingBanner
          title={"Blog"}
          heading={"Beyond the Lens"}
          text={
            "Venture beyond the lens and take a look behind the scenes. Read up on our latest adventures as we film across town, across the country, and around the world. Try to keep up, we move fast!"
          }
        />
      </div>
      <div className="my-6 xl:my-24">
        <BlogPostGallery number_of_posts={12} />
      </div>
    </main>
  );
}