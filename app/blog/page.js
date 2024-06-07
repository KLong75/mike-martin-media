// import from next
import Image from "next/image";
// import components
import BlogPost from "../ui/blogPost";
import TextSegment from "../ui/textSegment";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
// import data
import { blogPosts } from "../lib/data";

export const metadata = {
  title: "Blog",
  description:
    "Go Beyond the lens and check out our latest adventures in the MMM Blog as we film and travel across town across the country, and around the world. Try to keep up, we move fast!",
};

export default function Page() {
  return (
    <main className="flex-1 ">
      <div className="-mt-1">
        <BannerImage
          src="/images/blog-page/blog-banner-image.jpg"
          alt="Blog Banner Image"
          width={5008}
          height={1996}
          priority={true}
        />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
          BEYOND THE LENS
        </h1>
      </div>
      <div className="font-bold text-2xl xl:text-3xl 2xl:text-4xl text-center justify-center items-center p-4 text-balance mb-4">
        <p>Venture beyond the lens and take a look behind the scenes.</p>
      </div>
      <div className="-mt-8  md:text-xl xl:text-2xl 3xl:text-3xl text-center justify-center items-center p-4 text-balance">
        <p>
          Read up on our latest adventures as we film across town, across the
          country, and around the world.
        </p>
        <p >Try to keep up, we move fast!</p>
      </div>
      <div className="-mt-2 md:mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-6">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            image_src={post.image_src}
            image_width={post.image_width}
            image_height={post.image_height}
            text={post.text}
            post_date={post.post_date}
            closing_tag={post.closing_tag}
            author={post.author}
          />
        ))}
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
