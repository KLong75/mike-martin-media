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
    <main className="bg-slate-50 flex-1 ">
      <div className="flex justify-center items-center mt-6 mb-2">
        <h2 className="text-4xl font-bold mr-2">The </h2>
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className="text-4xl font-bold ml-2">Story</h2>
      </div>
      <TextSegment 
        text="We dedicate our lives to telling your story. We invite you to take a look at ours. Here is a “behind-the-scenes” look as we highlight clients we love and work on projects of all sizes and scopes." 
      />
      <div className="flex justify-center items-center -mt-2 mb-2">
      <MMMLineLogoBlack />
      </div>
      
      <div className="flex flex-col gap-12 justify-center items-center mt-12">
        {blogPosts.map((post) => (
          <BlogPost
            key={post.title}
            title={post.title}
            author={post.author}
            text={post.text}
            date={post.date}
            image={post.image_src}
          />
        ))}
      </div>
     
      
    </main>
  );
}
