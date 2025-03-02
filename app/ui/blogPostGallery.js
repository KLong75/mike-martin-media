// import data
import { blogPosts } from "../lib/blogPostData";
// import components
import BlogPost from "../ui/blogPost";
// import Image from "./image";

export default function BlogPostGallery({ number_of_posts }) {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 max-w-800 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, number_of_posts).map((post, index) => (
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
              className="justify-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
