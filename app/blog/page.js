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
    "Mike Martin Media Blog. Venture beyond the lens and take a look behind the scenes.",
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
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h1 className="text-center font-bold text-4xl md:text-5xl mt-2">
          BEYOND THE LENS
        </h1>
      </div>
      <div className="font-bold text-xl md:text-2xl text-center justify-center items-center p-4 text-balance">
        {/* <div className=" flex justify-center items-center w-full ">
          <h2 className="text-2xl md:text-3xl font-bold">The </h2>
          <div className="flex justify-center items-center w-16 md:w-24 md:w-20 mb-1 ml-1 mr-1 md:p-1">
            <Image
              src="/branding/mmm_black.png"
              width={294}
              height={95}
              alt="company logo"
              priority
              as="image"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Blog</h2>
        </div> */}
        <p>Venture beyond the lens and take a look behind the scenes.</p>
      </div>
      <div className="-mt-8 font-semibold md:text-lg text-center justify-center items-center p-4 text-balance ">
        <p>
          Read up on our latest adventures as we film across town, across the
          country, and around the world.
        </p>
        <p >Try to keep up, we move fast!</p>
      </div>
      <div className="md:mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-6">
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
