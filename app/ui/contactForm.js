"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import components
import SubmitButtonWithPlaneAnimation from "./submitButtonWithPlaneAnimation";
import MMMLineLogoBlack from "./mmmLineLogoBlack";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../lib/utils";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const handleChange = (e, setState) => {
    setState(e.target.value);
    // Check if the email is being updated and is valid
    if (e.target.name === "email" && validateEmail(e.target.value)) {
      setEmailErrorMessage("");
    }
    if (e.target.name === "firstName" && validateName(e.target.value)) {
      setFirstNameErrorMessage("");
    }
    if (e.target.name === "lastName" && validateName(e.target.value)) {
      setLastNameErrorMessage("");
    }
    if (e.target.name === "phone" && validatePhone(e.target.value)) {
      setPhoneErrorMessage("");
    }
    if (e.target.name === "message" && validateMessage(e.target.value)) {
      setMessageErrorMessage("");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // trim form data
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    // validation  for inputs, handle errors accordingly
    const isEmailValid = validateEmail(trimmedEmail);
    const isPhoneValid = validatePhone(trimmedPhone);
    const isFirstNameValid = validateName(trimmedFirstName);
    const isLastNameValid = validateName(trimmedLastName);
    const isMessageValid = validateMessage(message);
    if (!isEmailValid) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isFirstNameValid) {
      setFirstNameErrorMessage("Please enter a valid first name.");
      return;
    }
    if (!isLastNameValid) {
      setLastNameErrorMessage("Please enter a valid last name.");
      return;
    }
    if (!isPhoneValid) {
      setPhoneErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (!isMessageValid) {
      setMessageErrorMessage("Please enter a message.");
      return;
    }
    if (
      isEmailValid &&
      isPhoneValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isMessageValid
    ) {
      const formData = new FormData();
      formData.append("firstname", trimmedFirstName);
      formData.append("lastname", trimmedLastName);
      formData.append("email", trimmedEmail);
      formData.append("phone", trimmedPhone);
      formData.append("field[1]", message);
      formData.append("u", "1");
      formData.append("f", "1");
      formData.append("s", "");
      formData.append("c", "0");
      formData.append("m", "0");
      formData.append("act", "sub");
      formData.append("v", "2");
      formData.append("or", "3cb75fe4893095ece5a46e781ca8407d");

      console.log("formData", formData);

      try {
        const response = await fetch(
          "https://marketing42.activehosted.com/proc.php",
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
            // const response = await fetch("/api/proxy/proc.php", {
            //   method: "POST",
            //   body: formData,
          }
        );

        if (response.ok) {
          track("Contact form submission");
          setButtonSubmitted(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
          // Reset the button's submitted state after 5 seconds
          setTimeout(() => {
            setButtonSubmitted(false);
          }, 5000);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please click to email us at mmmcontact@mikemartinmedia.com. We apologize for the inconvenience."
        );
      }
    }
  };

  return (
    <div className="p-8 m-4 w-full">
      <form
        id="_form_671D60DF0EC4B_"
        onSubmit={handleFormSubmit}
        className="p-8 shadow-2xl max-w-200 mx-auto relative">
        <h2 className="-mt-6 mb-3 text-center text-xl text-2xl xl:text-3xl font-bold">
          Send us a message
        </h2>
        <div className="flex flex-col justify-center">
          <label htmlFor="firstName">
            First Name*<span className="text-xs">(required)</span>
          </label>
          <input
            autoComplete="given-name"
            placeholder="First Name"
            onChange={(e) => handleChange(e, setFirstName)}
            value={firstName}
            required
            type="text"
            name="firstname"
            id="firstName"
            className="border-2 border-gray-800 p-2 w-full"
          />
          {firstNameErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{firstNameErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center ">
          <label htmlFor="lastName">
            Last Name*<span className="text-xs"> (required)</span>
          </label>
          <input
            autoComplete="family-name"
            placeholder="Last Name"
            onChange={(e) => handleChange(e, setLastName)}
            value={lastName}
            required
            type="text"
            name="lastname"
            id="lastName"
            className="border-2 border-gray-800 p-2 w-full"
          />
          {lastNameErrorMessage && (
            <div className="flex justify-center text-center text-balance items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{lastNameErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="email">
            Email*<span className="text-xs"> (required)</span>
          </label>
          <input
            autoComplete="email"
            placeholder="Email"
            onChange={(e) => handleChange(e, setEmail)}
            value={email}
            required
            type="email"
            name="email"
            id="email"
            className="border-2 border-gray-800 p-2 w-full"
          />
          {emailErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{emailErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="phone">
            Phone Number<span className="text-xs"> (optional)</span>
          </label>
          <input
            autoComplete="tel"
            placeholder="Phone Number"
            onChange={(e) => handleChange(e, setPhone)}
            value={phone}
            type="tel"
            name="phone"
            id="phone"
            className="border-2 border-gray-800 p-2 w-full"
          />
          {phoneErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{phoneErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="message">
            Message*<span className="text-xs"> (required)</span>
          </label>
          <textarea
            autoComplete="off"
            maxLength={1000}
            placeholder="How can we help you?"
            onChange={(e) => handleChange(e, setMessage)}
            value={message}
            required
            name="field[1]"
            id="message"
            className="border-2 border-gray-800 p-2 h-60 w-60 resize-none w-full"
          />
          {messageErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{messageErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center -mb-4">
          <SubmitButtonWithPlaneAnimation
            onClick={handleFormSubmit}
            isSubmitted={buttonSubmitted}
          />
        </div>
        {deliveryErrorMessage && (
          <div className="flex text-balance text-center justify-center items-center mt-2 mb-4">
            <a
              href="mailto:mmmcontact@mikemartinmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email Mike Martin Media">
              <p className="text-red-500 text-xs font-bold hover:transform hover:scale-105 transition-transform">
                {deliveryErrorMessage}
              </p>
            </a>
          </div>
        )}
        <div className="absolute bottom-0 right-0 left-0">
          <MMMLineLogoBlack />
        </div>
        {/* Hidden Inputs */}
        <input type="hidden" name="u" value="1" />
        <input type="hidden" name="f" value="1" />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input
          type="hidden"
          name="or"
          value="3cb75fe4893095ece5a46e781ca8407d"
        />
      </form>
    </div>
  );
}

// "use client";
// // import from vercel
// import { track } from '@vercel/analytics';
// // import from react
// import { useState } from "react";
// // import components
// import SubmitButtonWithPlaneAnimation from "./submitButtonWithPlaneAnimation";
// import MMMLineLogoBlack from "./mmmLineLogoBlack";
// // import from utils
// import {
//   validateEmail,
//   validateName,
//   validatePhone,
//   validateMessage,
// } from "../lib/utils";
// // import from emailjs
// import emailjs from "@emailjs/browser";

// export default function ContactForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [emailErrorMessage, setEmailErrorMessage] = useState("");
//   const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
//   const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
//   const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
//   const [messageErrorMessage, setMessageErrorMessage] = useState("");
//   const [deliveryErrorMessage, setDeliveryErrorMessage] = useState("");
//   const [buttonSubmitted, setButtonSubmitted] = useState(false);

//   const handleChange = (e, setState) => {
//     setState(e.target.value);
//     // Check if the email is being updated and is valid
//     if (e.target.name === "email" && validateEmail(e.target.value)) {
//       setEmailErrorMessage("");
//     }
//     if (e.target.name === "firstName" && validateName(e.target.value)) {
//       setFirstNameErrorMessage("");
//     }
//     if (e.target.name === "lastName" && validateName(e.target.value)) {
//       setLastNameErrorMessage("");
//     }
//     if (e.target.name === "phone" && validatePhone(e.target.value)) {
//       setPhoneErrorMessage("");
//     }
//     if (e.target.name === "message" && validateMessage(e.target.value)) {
//       setMessageErrorMessage("");
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // trim form data
//     const trimmedFirstName = firstName.trim();
//     const trimmedLastName = lastName.trim();
//     const trimmedEmail= email.trim();
//     const trimmedPhone = phone.trim();
//     // validation  for inputs, handle errors accordingly
//     const isEmailValid = validateEmail(trimmedEmail);
//     const isPhoneValid = validatePhone(trimmedPhone);
//     const isFirstNameValid = validateName(trimmedFirstName);
//     const isLastNameValid = validateName(trimmedLastName);
//     const isMessageValid = validateMessage(message);
//     if (!isEmailValid) {
//       setEmailErrorMessage("Please enter a valid email address.");
//       return;
//     }
//     if (!isFirstNameValid) {
//       setFirstNameErrorMessage("Please enter a valid first name.");
//       return;
//     }
//     if (!isLastNameValid) {
//       setLastNameErrorMessage("Please enter a valid last name.");
//       return;
//     }
//     if (!isPhoneValid) {
//       setPhoneErrorMessage("Please enter a valid phone number.");
//       return;
//     }
//     if (!isMessageValid) {
//       setMessageErrorMessage("Please enter a message.");
//       return;
//     }
//     if (
//       isEmailValid &&
//       isPhoneValid &&
//       isFirstNameValid &&
//       isLastNameValid &&
//       isMessageValid
//     ) {
//       const emailTemplateParams = {
//         first_name: trimmedFirstName,
//         last_name: trimmedLastName,
//         email: trimmedEmail,
//         phone_number: trimmedPhone,
//         message: message,
//       };

//       try {
//         emailjs
//           .send(
//             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//             process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//             emailTemplateParams,
//             process.env.NEXT_PUBLIC_EMAILJS_USER_ID
//           )
//           .then(
//             (result) => {
//               track("Contact form submission");
//               setButtonSubmitted(true);
//               setFirstName("");
//               setLastName("");
//               setEmail("");
//               setPhone("");
//               setMessage("");
//               // Reset the button's submitted state after 5 seconds
//               setTimeout(() => {
//                 setButtonSubmitted(false);
//               }, 5000);
//             }
//           );
//       } catch (error) {
//         setDeliveryErrorMessage(
//           "There was an error delivering your message. Please click to email us at mmmcontact@mikemartinmedia.com. We apologize for the inconvenience."
//         );
//       }
//     }
//   };

//   return (
//     <div className="p-8 m-4 w-full">
//       <form
//         onSubmit={handleFormSubmit}
//         className="p-8 shadow-2xl max-w-200 mx-auto relative">
//         <h2 className="-mt-6 mb-3 text-center text-xl text-2xl xl:text-3xl font-bold">Send us a message</h2>
//         <div className="flex flex-col justify-center">
//           <label htmlFor="firstName">
//             First Name*<span className="text-xs">(required)</span>
//           </label>
//           <input
//             autoComplete="given-name"
//             placeholder="First Name"
//             onChange={(e) => handleChange(e, setFirstName)}
//             value={firstName}
//             required
//             type="text"
//             name="firstName"
//             id="firstName"
//             className="border-2 border-gray-800 p-2 w-full"
//           />
//           {firstNameErrorMessage && (
//             <div className="flex justify-center items-center mt-2 mb-4">
//               <p className="text-red-500 text-xs">{firstNameErrorMessage}</p>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-col justify-center ">
//           <label htmlFor="lastName">
//             Last Name*<span className="text-xs"> (required)</span>
//           </label>
//           <input
//             autoComplete="family-name"
//             placeholder="Last Name"
//             onChange={(e) => handleChange(e, setLastName)}
//             value={lastName}
//             required
//             type="text"
//             name="lastName"
//             id="lastName"
//             className="border-2 border-gray-800 p-2 w-full"
//           />
//           {lastNameErrorMessage && (
//             <div className="flex justify-center text-center text-balance items-center mt-2 mb-4">
//               <p className="text-red-500 text-xs">{lastNameErrorMessage}</p>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-col justify-center">
//           <label htmlFor="email">
//             Email*<span className="text-xs"> (required)</span>
//           </label>
//           <input
//             autoComplete="email"
//             placeholder="Email"
//             onChange={(e) => handleChange(e, setEmail)}
//             value={email}
//             required
//             type="email"
//             name="email"
//             id="email"
//             className="border-2 border-gray-800 p-2 w-full"
//           />
//           {emailErrorMessage && (
//             <div className="flex justify-center items-center mt-2 mb-4">
//               <p className="text-red-500 text-xs">{emailErrorMessage}</p>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-col justify-center">
//           <label htmlFor="phone">
//             Phone Number<span className="text-xs"> (optional)</span>
//           </label>
//           <input
//             autoComplete="tel"
//             placeholder="Phone Number"
//             onChange={(e) => handleChange(e, setPhone)}
//             value={phone}
//             type="tel"
//             name="phone"
//             id="phone"
//             className="border-2 border-gray-800 p-2 w-full"
//           />
//           {phoneErrorMessage && (
//             <div className="flex justify-center items-center mt-2 mb-4">
//               <p className="text-red-500 text-xs">{phoneErrorMessage}</p>
//             </div>
//           )}
//         </div>
//         <div className="flex flex-col justify-center">
//           <label htmlFor="message">
//             Message*<span className="text-xs"> (required)</span>
//           </label>
//           <textarea
//             autoComplete="off"
//             maxLength={1000}
//             placeholder="How can we help you?"
//             onChange={(e) => handleChange(e, setMessage)}
//             value={message}
//             required
//             name="message"
//             id="message"
//             className="border-2 border-gray-800 p-2 h-60 w-60 resize-none w-full"
//           />
//           {messageErrorMessage && (
//             <div className="flex justify-center items-center mt-2 mb-4">
//               <p className="text-red-500 text-xs">{messageErrorMessage}</p>
//             </div>
//           )}
//         </div>
//         <div className="flex justify-center items-center -mb-4">
//           <SubmitButtonWithPlaneAnimation
//             onClick={handleFormSubmit}
//             isSubmitted={buttonSubmitted}
//           />
//         </div>
//         {deliveryErrorMessage && (
//           <div className="flex text-balance text-center justify-center items-center mt-2 mb-4">
//             <a
//               href="mailto:mmmcontact@mikemartinmedia.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="email Mike Martin Media">
//               <p className="text-red-500 text-xs font-bold hover:transform hover:scale-105 transition-transform">
//                 {deliveryErrorMessage}
//               </p>
//             </a>
//           </div>
//         )}
//         <div className="absolute bottom-0 right-0 left-0">
//           <MMMLineLogoBlack />
//         </div>
//       </form>
//     </div>
//   );
// }
