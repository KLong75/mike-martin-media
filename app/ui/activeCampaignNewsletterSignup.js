// import from next
import Script from "next/script";
import { headers } from "next/headers";

export default async function ActiveCampaignNewsletterSignup() {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce");
  return (
    <div>
      <Script
        src="https://mmmmarketing42.activehosted.com/f/embed.php?id=3"
        strategy="afterInteractive"
        nonce={nonce}
      />
    </div>
  );
}
