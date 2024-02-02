// import components
import Script from "next/script";
import MMMInstaLogo from "./mmmInstaLogo";

const InstagramSlider = () => {
  return (
    <>
      <Script
        src="//lightwidget.com/widgets/40b7b5ee48ba5a21a07123619b3d7129.html"
        strategy="lazyOnload"
      />
      {/* <Head>
      </Head> */}
      {/* <div className="flex justify-center items-center w-full lg:-mt-36"> */}
      {/* <div className="flex flex-col items-center p-6 md:p-12 lg:p-48 w-full lg:w-3/4 "> */}
      
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
      {/* <div className="-mt-5">
      <MMMInstaLogo />
      </div> */}
      {/* <h6 className="text-center text-xl font-bold">@mikemartinmedia</h6> */}
    
        <iframe
          scrolling="no"
          src="//lightwidget.com/widgets/76bea2f798dd5cb9a88b23c9aa79a3ab.html"
          className="lightwidget-widget overflow-hidden"
          style={{
            width: "100%",
            border: "0",
            overflow: "hidden",
          }}></iframe>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default InstagramSlider;


{/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/ee16692c052951ee9bcdeb1909d340d2.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */}

{/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/76bea2f798dd5cb9a88b23c9aa79a3ab.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */}