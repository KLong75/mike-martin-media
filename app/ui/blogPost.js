// import from utils
// import { formatDate } from "../lib/utils";
// import from mux
import { createBlurUp } from "@mux/blurup";
// import components
import ClientVideoContainer from "./clientVideoContainer";
// import from next
import Image from "next/image";

export default async function BlogPost({ post }) {
  const options = {};
  const muxPlaybackId = post?.video?.playback_id || "";
  let aspectRatio = 16 / 9; // fallback aspect ratio
  if (muxPlaybackId) {
    try {
      const result = await createBlurUp(muxPlaybackId, options);
      aspectRatio = result.aspectRatio;
    } catch (err) {
      console.warn("Could not fetch Mux thumbnail:", err);
    }
  }
  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <div className="flex flex-col items-center p-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center">
          {post.title}
        </h1>
        <h2 className="text-sm lg:text-lg mt-2 md:mt-4">{post.post_date}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-12">
          <Image
            src={post.image_src}
            width={post.image_width}
            height={post.image_height}
            alt={post.image_alt}
            className="w-175"
          />
        </div>
        <div className="p-8 max-w-3xl mx-auto lg:text-lg lg:mt-6">
          {post.text.map((paragraph, index) => {
            // Detect code block: starts with '//' or contains multiple lines
            const isCode =
              typeof paragraph === "string" &&
              (paragraph.trim().startsWith("//") ||
                paragraph.split("\n").length > 3);

            return (
              <div key={index}>
                {isCode ? (
                  <>
                    <div className="hidden w-full h-full sm:flex justify-center items">
                      <pre className="overflow-x-auto bg-gray-100 p-4 text-sm">
                        <code>{paragraph.trim()}</code>
                      </pre>
                    </div>
                    <div className="block sm:hidden my-6 w-full text-xs italic text-gray-500">
                      Code snippet available on larger screens.
                    </div>
                  </>
                ) : (
                  <p className="my-6">{paragraph}</p>
                )}
                {index === 0 && post.second_image_src && (
                  <div className="flex justify-center items-center">
                    <div className="px-12 my-6">
                      <Image
                        src={post.second_image_src}
                        width={post.second_image_width}
                        height={post.second_image_height}
                        alt={post.second_image_alt}
                        className="w-125"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <p className="mt-12 mb-4">{post.closing_tag}</p>
          <p className="">- {post.author}</p>
        </div>
        {post.video && (
          <div className="py-12">
            <div
              className="mx-auto w-full h-full max-w-2xl "
              style={{ aspectRatio: aspectRatio }}>
              <ClientVideoContainer video={post.video} />
            </div>
          </div>
        )}
      </div>
      <div className="max-w-3xl mx-auto flex justify-center px-6">
        <Image
          src="/branding/line-logo-black.png"
          alt=""
          width={1440}
          height={65}
          className="mt-2 lg:mt-6 lg:mb-6"
        />
      </div>
    </>
  );
}

{
  /* {post.vimeo_src && (
          <iframe
            src={post.vimeo_src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-80 p-4 lg:my-4"></iframe>
        )} */
}
