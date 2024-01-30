// import from next
import Image from "next/image";
// import components
import BlogPost from "../ui/blogPost";
import TextSegment from "../ui/textSegment";
// import data
import { blogPosts } from "../lib/data";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";

export const metadata = {
  title: "Page 3",
};

export default function Page() {
  return (
    <main className="flex-1 ">
      <div className="flex justify-center items-center mt-6 mb-2">
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className=" text-3xl md:text-4xl font-bold ml-2">
          Beyond the Lens
        </h2>
      </div>
      <TextSegment text="Venture beyond the lens and take a look behind the scenes." />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            image_src={post.image_src}
            image_width={post.image_width}
            image_height={post.image_height}
            text={post.text}
            date={post.date}
          />
        ))}
      </div>
    </main>
  );
}
