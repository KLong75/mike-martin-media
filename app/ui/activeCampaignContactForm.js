//import from next
import Script from "next/script";
import { headers } from "next/headers";

export default function ActiveCampaignContactForm() {
  const nonce = headers().get("x-nonce");
  return (
    <>
      <Script
        src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
        strategy="afterInteractive"
        nonce={nonce}
      />
      <div className="_form_1 px-4 sm:p-0"></div>
    </>
  );
};

