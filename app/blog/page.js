// import components
import BlogPost from "../ui/blogPost";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
// import images
import goldenGateBridge from "../../public/images/blog-page/golden-gate-bridge.jpg";
// import data
import { blogPosts } from "../lib/blogPostData";
import PageHeadingBanner from "../ui/pageHeadingBanner";

export const metadata = {
  title: "Blog",
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
      {/* <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
          BEYOND THE LENS
        </h1>
      </div> */}
      <div>
        <PageHeadingBanner
          title={"Blog"}
          heading={"Beyond the Lens"}
          text={
            "Venture beyond the lens and take a look behind the scenes. Read up on our latest adventures as we film across town, across the country, and around the world. Try to keep up, we move fast!"
          }
        />
      </div>
      <div className="font-bold text-2xl xl:text-3xl 2xl:text-4xl text-center justify-center items-center p-4 text-balance mb-4">
        <h2>Venture beyond the lens and take a look behind the scenes.</h2>
      </div>
      <div className="-mt-8  md:text-xl xl:text-2xl 3xl:text-3xl text-center justify-center items-center p-4 text-balance">
        <p>
          Read up on our latest adventures as we film across town, across the
          country, and around the world.
          <br />
          Try to keep up, we move fast!
        </p>
      </div>
      <div className="-mt-2 md:mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-6">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            image_src={post.image_src}
            image_width={post.image_width}
            image_height={post.image_height}
            image_alt={post.image_alt}
            second_image_src={post.second_image_src}
            second_image_width={post.second_image_width}
            second_image_height={post.second_image_height}
            second_image_alt={post.second_image_alt}
            text={post.text}
            post_date={post.post_date}
            closing_tag={post.closing_tag}
            author={post.author}
            video_src={post.video_src}
            priority={index === 0} // Set priority for the first blog post
          />
        ))}
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
