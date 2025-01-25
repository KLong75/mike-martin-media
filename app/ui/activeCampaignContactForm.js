//import from next
import Script from "next/script";
import { headers } from "next/headers";

export default async function ActiveCampaignContactForm() {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce");
  return (
    <>
      <Script
        src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
        strategy="afterInteractive"
        nonce={nonce}
      />
      <div className="_form_1 px-4 sm:px-0"></div>
    </>
  );
};

