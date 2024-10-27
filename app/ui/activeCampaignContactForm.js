//import from next
import Script from "next/script";

export default function ActiveCampaignContactForm() {
  return (
    <>
      <Script
        src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
        strategy="lazyOnload"
      />
      <div className="_form_1 px-4 sm:p-0"></div>
    </>
  );
};

