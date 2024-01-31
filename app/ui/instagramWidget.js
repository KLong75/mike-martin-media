import Head from "next/head";
import Script from 'next/script';


const InstagramWidget = () => {
  return (
    <>
      <Script src="https://cdn.lightwidget.com/widgets/lightwidget.js" strategy="lazyOnload" />
      <Head>
      </Head>
      <iframe
        src="//lightwidget.com/widgets/41d1a8864fac56479383df83f830eafa.html"
        className="lightwidget-widget"
        style={{
          width: '100%',
          border: '0',
          overflow: 'hidden'
        }}
      ></iframe>
    </>
  );
};

export default InstagramWidget;







{/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/41d1a8864fac56479383df83f830eafa.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe> */}
