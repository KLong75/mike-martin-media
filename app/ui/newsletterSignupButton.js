export default function NewsletterSignupButton() {
  const handleClick = () => {
    // Check for the cookie named '_form_3_'
    const cookieName = '_form_3_';
    const cookies = document.cookie.split(';');
    const cookieExists = cookies.some(cookie => cookie.trim().startsWith(`${cookieName}=`));

    // If the cookie exists, delete it
    if (cookieExists) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    // Create a script element
    const script = document.createElement("script");
    script.src = "https://mmmmarketing42.activehosted.com/f/embed.php?id=3";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);
  };

  return (
    
      <button
        className="bg-white text-black font-bold rounded-full w-64 p-2 m-6 hover:scale-105 transition duration-300 ease-in-out" 
        onClick={handleClick}
      >
        Sign up for our newsletter!
      </button>
    
  );
}