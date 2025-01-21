//import from next
import Script from "next/script";
import { headers } from "next/headers";

export default function ActiveCampaignNewsletterSignup() {
  const nonce = headers().get("x-nonce");
  return (
    <Script
      src="https://mmmmarketing42.activehosted.com/f/embed.php?id=3"
      strategy="afterInteractive"
      nonce={nonce}
    />
  );
}
