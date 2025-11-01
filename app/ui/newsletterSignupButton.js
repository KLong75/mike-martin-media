export default function NewsletterSignupButton() {
  const handleClick = () => {
    console.log('Newsletter signup button clicked');
    // Check for the cookie named '_form_3_'
    const cookieName = "_form_3_";
    const cookies = document.cookie.split(";");
    const cookieExists = cookies.some((cookie) =>
      cookie.trim().startsWith(`${cookieName}=`)
    );

    // If the cookie exists, delete it
    if (cookieExists) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    // Create a script element
    const script = document.createElement("script");
    script.src = "https://mmmmarketing42.activehosted.com/f/embed.php?id=3";
    script.id = "active-campaign-script";
    script.async = true;

    // if the script already exists, remove it
    const existingScript = document.getElementById("active-campaign-script");
    if (existingScript) {
      existingScript.remove();
    }
    //if the form box already exists, remove it
    // const existingForm = document.getElementById("_form_6792CD3A3BD32_");
    // if (existingForm) {
    //   existingForm.remove();
    // }

    const existingFormWrapper = document.querySelector("._form-wrapper");
    if (existingFormWrapper) {
      existingFormWrapper.remove();
    }

    // Append the script to the document body
    document.body.appendChild(script);
  };

  return (
    <button
      id="newsletter-signup-button"
      className="bg-white text-black font-bold rounded-full px-2 py-1 mt-2 text-sm hover:scale-105 transition duration-500 ease-in-out"
      onClick={handleClick}>
      Subscribe to our Newsletter
    </button>
  );
}