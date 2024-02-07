// import from next
import Image from "next/image";
// import components
import BlogPost from "../ui/blogPost";
import TextSegment from "../ui/textSegment";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BackToHomeLink from "../ui/backToHome";
// import data
import { blogPosts } from "../lib/data";

export const metadata = {
  title: "Blog",
  description: "Mike Martin Media Blog. Venture beyond the lens and take a look behind the scenes.",
};

export default function Page() {
  return (
    <main className="flex-1 ">
      <div className="mt-2 mb-2">
        <BackToHomeLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h3 className="text-center font-bold text-3xl md:text-4xl mt-2">
          BEYOND THE LENS
        </h3>
      </div>
      {/* <div className="flex justify-center items-center mt-6 mb-2">
        <h2 className=" text-3xl md:text-4xl font-bold">
          Beyond the Lens
        </h2>
      </div> */}
      <div className="font-bold text-xl text-center justify-center items-center p-4 text-balance">
        <h4 className="">
          Venture beyond the lens and take a look behind the scenes.
        </h4>
      </div>
      <div className="md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 p-6">
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
      <div className="mt-4 ">
        <BackToHomeLink />
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
