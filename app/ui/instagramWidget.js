// import from react
import React from "react";
// import from next
import Script from "next/script";
// import components
import MMMInstaLogo from "./mmmInstaLogo";

const InstagramWidget = () => {
  return (
    <>
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="lazyOnload"
      />
      <div className="flex justify-center items-center w-full lg:-mt-36 z-30 ">
        <div className="flex flex-col items-center p-8 md:p-12  md:mb-8 lg:p-20 lg:mt-20 xl:p-80  xl:-mt-40 xl:-mb-40 w-full  ">
          <div className="-mt-6">
            <MMMInstaLogo />
          </div>
          <iframe
            title="Follow MMM on Instagram"
            scrolling="no"
            src={process.env.NEXT_PUBLIC_LIGHTWIDGET_SRC}
            className="lightwidget-widget overflow-hidden shadow-2xl -mt-2"
            style={{
              width: "100%",
              border: "0",
              overflow: "hidden",
            }}></iframe>
        </div>
      </div>
      <div className="flex justify-center items-center w-full -mt-6 sm:-mt-6 md:-mt-20 lg:-mt-28 xl:-mt-40 mb-6 sm:mb-28 md:mb-40">
        <a
          href="https://www.instagram.com/explore/tags/mmmidtown/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:transform hover:scale-105 transition-transform hover:cursor-pointer mt-2">
          <span className="text-center text-lg font-bold ml-3 ">
            #mmmidtown
          </span>
        </a>
      </div>
    </>
  );
};

export default InstagramWidget;

