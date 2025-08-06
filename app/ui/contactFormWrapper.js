// "use client";
// import { usePathname } from "next/navigation";
// import Script from "next/script";
// import { useNonce } from "../NonceContext";
// export default function ContactFormWrapper() {
//   const nonce = useNonce();
//   const pathname = usePathname();

//  if (pathname === "/contact") {
//     return (
//       <>
//         <Script
//           src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
//           strategy="afterInteractive"
//           nonce={nonce}
//         />
//         <div className="_form_1 px-4 sm:px-0"></div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Script
//           src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
//           strategy="afterInteractive"
//           nonce={nonce}
//         />
//         <div className="hidden _form_1 px-4 sm:px-0"></div>
//       </>
//     );
//   }
//  }


// "use client";
// import { usePathname } from "next/navigation";
// import Script from "next/script";
// import { useNonce } from "../NonceContext";
// import { useEffect } from "react";

// export default function ContactFormWrapper() {
//   const nonce = useNonce();
//   const pathname = usePathname();

//   useEffect(() => {
//     // Function to handle form submission
//     const handleFormSubmit = (event) => {
//       event.preventDefault(); // Prevent default submission (optional)
//       setTimeout(() => {
//         window.location.reload(); 
//       }, 6000); 

//     };

//     // Wait for the form to be rendered and attach the event listener
//     const formSelector = "._form_1 form"; // Adjust the selector if needed
//     const attachListener = () => {
//       const form = document.querySelector(formSelector);
//       if (form) {
//         form.addEventListener("submit", handleFormSubmit);
//       } else {
//         setTimeout(attachListener, 500); // Retry after 500ms if the form is not yet rendered
//       }
//     };

//     if (pathname === "/contact") {
//       attachListener();
//     }

//     // Cleanup the event listener when the component unmounts or pathname changes
//     return () => {
//       const form = document.querySelector(formSelector);
//       if (form) {
//         form.removeEventListener("submit", handleFormSubmit);
//       }
//     };
//   }, [pathname]);

//   if (pathname === "/contact") {
//     return (
//       <>
//         <Script
//           src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
//           strategy="afterInteractive"
//           nonce={nonce}
//         />
//         <div className="_form_1 px-4 sm:px-0"></div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Script
//           src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
//           strategy="afterInteractive"
//           nonce={nonce}
//         />
//         <div className="hidden _form_1 px-4 sm:px-0"></div>
//       </>
//     );
//   }
// }

"use client";
import Script from "next/script";

export default function ContactFormWrapper() {
  return (
    <>
      <div className="_form_1 px-4 sm:px-0"></div>
      <Script
        src="https://mmmmarketing42.activehosted.com/f/embed.php?id=1"
        strategy="afterInteractive"
      />
    </>
  );
}
