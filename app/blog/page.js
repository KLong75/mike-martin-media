// import components
import BlogPostGallery from "../ui/blogPostGallery";
import BlogPost from "../ui/blogPostPreview";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
// import images
import goldenGateBridge from "../../public/images/blog-page/golden-gate-bridge.jpg";
// import data
import { blogPosts } from "../lib/blogPostData";
import PageHeadingBanner from "../ui/pageHeadingBanner";

export const metadata = {
  title: "Blog | Mike Martin Media",
  description:
    "Go Beyond the lens and check out our latest adventures in the MMM Blog as we film and travel across town across the country, and around the world. Try to keep up, we move fast!",
  alternates: {
    canonical: "/blog",
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
