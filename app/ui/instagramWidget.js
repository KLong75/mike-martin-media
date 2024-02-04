// import components
import Script from "next/script";
import MMMInstaLogo from "./mmmInstaLogo";

const InstagramWidget = () => {
  return (
    <>
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="lazyOnload"
      />
      {/* <Head>
      </Head> */}
      <div className="flex justify-center items-center w-full lg:-mt-36 ">
        <div className="flex flex-col items-center p-6 md:p-12 md:mb-8 lg:p-20 lg:mt-20 xl:p-80 xl:-mt-40 xl:-mb-40 w-full lg:w-3/4 ">
          {/* <div className="flex justify-center items-center mt-6 mb-2 md:mb-6">
        <h6 className=" text-xl font-bold mr-1">Follow</h6>
        <div className="flex justify-center items-center w-14 h-auto mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h6 className="text-xl font-bold ml-1">on Instagram</h6>
      </div> */}
          <div className="-mt-6">
            <MMMInstaLogo />
          </div>
          {/* <h6 className="text-center text-xl font-bold">@mikemartinmedia</h6> */}

          <iframe
            scrolling="no"
            src="//lightwidget.com/widgets/fe8af16ea57f5ce0b3df76d3341327a5.html"
            className="lightwidget-widget overflow-hidden shadow-2xl -mt-2"
            style={{
              width: "100%",
              border: "0",
              overflow: "hidden",
            }}></iframe>
        </div>
      </div>
      <div className="flex justify-center items-center w-full -mt-6 sm:-mt-6 md:-mt-20 lg:-mt-28 xl:-mt-40 mb-6 sm:mb-28 md:mb-40">
        <span className="text-center text-lg font-bold mr-4 mt-2">#mmmgood</span>
        <a href="https://www.instagram.com/explore/tags/mmmmidtown/" target="_blank" rel="noopener noreferrer" className="hover:transform hover:scale-110 transition-transform hover:cursor-pointer mt-2">
        <span className="text-center text-lg font-bold ml-3 ">#mmmmidtown</span>
        </a>
      </div>
    </>
  );
};

export default InstagramWidget;

{
  /* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/41d1a8864fac56479383df83f830eafa.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */
}

{
  /* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/fe8af16ea57f5ce0b3df76d3341327a5.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */
}
