export default function Page() {
  return (
    <main className="p-6 flex flex-col items-center justify-center">
    <div className="lg:max-w-400 ">
      <h1 className="cookie-policy-h1 font-bold text-xl">Cookie Policy</h1>
      <p>
        Effective Date: 17-Aug-2024 <br />
        Last Updated: 17-Aug-2024
      </p>
      &nbsp;
      <h5 className="font-bold text-lg">What are cookies?</h5>
      <div className="cookie-policy-p">
        <p className="p-2">
          This Cookie Policy explains what cookies are and how we use them, the
          types of cookies we use i.e, the information we collect using cookies
          and how that information is used, and how to manage the cookie
          settings.
        </p>{" "}
        <p className="p-2">
          Cookies are small text files that are used to store small pieces of
          information. They are stored on your device when the website is loaded
          on your browser. These cookies help us make the website function
          properly, make it more secure, provide better user experience, and
          understand how the website performs and to analyze what works and
          where it needs improvement.
        </p>
      </div>
      &nbsp;
      <h5 className="font-bold text-lg">How do we use cookies?</h5>
      <div className="cookie-policy-p">
        <p className="p-2">
          As most of the online services, our website uses first-party and
          third-party cookies for several purposes. First-party cookies are
          mostly necessary for the website to function the right way, and they
          do not collect any of your personally identifiable data.
        </p>{" "}
        <p className="p-2">
          The third-party cookies used on our website are mainly for
          understanding how the website performs, how you interact with our
          website, keeping our services secure, providing advertisements that
          are relevant to you, and all in all providing you with a better and
          improved user experience and help speed up your future interactions
          with our website.
        </p>
      </div>
      &nbsp;
      <h5 className="font-bold text-lg">Types of Cookies we use</h5>
      <div className="cky-audit-table-element"></div>
      &nbsp;
      <h5 className="font-bold text-lg mb-4">Manage cookie preferences</h5>
      <a className="cky-banner-element">Cookie Settings</a> <br />
      <div>
        <p className="mt-4 p-2">
          You can change your cookie preferences any time by clicking the above
          button. This will let you revisit the cookie consent banner and change
          your preferences or withdraw your consent right away.{" "}
        </p>{" "}
        <p className="mt-4 p-2">
          In addition to this, different browsers provide different methods to
          block and delete cookies used by websites. You can change the settings
          of your browser to block/delete the cookies. Listed below are the
          links to the support documents on how to manage and delete cookies
          from the major web browsers.
        </p>{" "}
        <p className="m-2 ">
          Chrome:{" "}
          <br />
          <a
            href="https://support.google.com/accounts/answer/32050"
            target="_blank"
            noopenner
            noreferrer
            className="underline text-blue-600 text-sm lg:text-base"
            >
            https://support.google.com/accounts/answer/32050
          </a>
        </p>
        <p className="m-2">
          Safari:{" "}
          <br />
          <a
            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
            target="_blank"
            noopenner
            noreferrer
            className="underline text-blue-600 text-sm lg:text-base"
          >
            https://support.apple.com/en-in/guide/safari/sfri11471/mac
          </a>
        </p>
        <p className="m-2">
          Firefox:{" "}
          <br />
          <a
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
            target="_blank"
            noopenner
            noreferrer
            className="underline text-blue-600 text-sm lg:text-base"
          >
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
          </a>
        </p>
        <p className="m-2">
          Internet Explorer:{" "}
          <br />
          <a
            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
            target="_blank"
            noopenner
            noreferrer  
            className="underline text-blue-600 text-sm lg:text-base"
          >
            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
          </a>
        </p>
        <p className="p-2">
          If you are using any other web browser, please visit their official support documents.
        </p>
      </div>
      &nbsp;
      <p className="cookie-policy-p p-2">
        Cookie Policy Generated By:{" "}
        <br />
        <a
          className="underline text-blue-600"
          noopenner
          noreferrer
          target="_blank"
          href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW">
          CookieYes - Cookie Policy Generator
        </a>
        .
      </p>
      </div>
    </main>
  );
}
