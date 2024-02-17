"use client";
import { useState } from "react";
// import components
import SubmitButtonWithPlaneAnimation from "./submitButtonWithPlaneAnimation";
import ColorChangeM from "./colorChangeM";
import MMMLineLogoBlack from "./mmmLineLogoBlack";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../lib/utils";
// import { validateForm } from "../lib/utils";
// import from emailjs
import emailjs from "@emailjs/browser";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email); // add validation logic for other inputs, handle errors accordingly
    const isPhoneValid = validatePhone(phone);
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);
    const isMessageValid = validateMessage(message);
    if (!isEmailValid) {
      console.log("Form validation failed");
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isFirstNameValid) {
      console.log("Form validation failed");
      setFirstNameErrorMessage("Please enter a valid first name.");
      return;
    }
    if (!isLastNameValid) {
      console.log("Form validation failed");
      setLastNameErrorMessage("Please enter a valid last name.");
      return;
    }
    if (!isPhoneValid) {
      console.log("Form validation failed");
      setPhoneErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (!isMessageValid) {
      console.log("Form validation failed");
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
      console.log("Form validation passed");

      const emailTemplateParams = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        message: message,
      };

      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            emailTemplateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then(
            (result) => {
              console.log(result.text);
              setButtonSubmitted(true);
              console.log(
                "form submitted",
                firstName,
                lastName,
                email,
                phone,
                message
              );
              setFirstName("");
              setLastName("");
              setEmail("");
              setPhone("");
              setMessage("");
              // Reset the button's submitted state after 5 seconds
              setTimeout(() => {
                setButtonSubmitted(false);
              }, 5000);
            }
            // (error) => {
            //   console.log("error text", error.text);
            //   console.log(deliveryErrorMessage)
            //   // setButtonSubmitted(false);
            //   setDeliveryErrorMessage(
            //     "There was an error delivering your message. Please email us @ mmmcontact@mikemartinmedia.com. We apologize for the inconvenience."
            //   );
            // }
          );
      } catch (error) {
        console.log("error text", error.text);
        console.log(deliveryErrorMessage);
        // setButtonSubmitted(false);
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email us @ mmmcontact@mikemartinmedia.com. We apologize for the inconvenience."
        );
        
      }
    }
  };

  return (
    <div className="p-8 m-4 w-full">
      <div className="flex justify-center items-center mt-6 mb-2 md:mb-6">
        <h3 className=" text-xl font-bold mr-1">Send us a</h3>
        <div
          className="flex justify-center items-center w-6 h-auto mb-1"
          style={{ marginRight: "-0.05rem", marginTop: ".2rem" }}>
          <ColorChangeM src="/branding/singleMBlackResizeSmall.png" />
        </div>
        <h3 className="text-xl font-bold">essage</h3>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="p-8 shadow-2xl max-w-200 mx-auto relative">
        <div className="flex flex-col justify-center">
          <label htmlFor="firstName">
            First Name*<span className="text-xs"> (required)</span>
          </label>
          <input
            autoComplete="given-name"
            placeholder="First Name"
            onChange={(e) => handleChange(e, setFirstName)}
            value={firstName}
            required
            type="text"
            name="firstName"
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
            name="lastName"
            id="lastName"
            className="border-2 border-gray-800 p-2 w-full"
          />
          {lastNameErrorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
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
            name="message"
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
          <div className="flex text-balance justify-center items-center mt-2 mb-4">
            <p className="text-red-500 text-balance text-xs">{deliveryErrorMessage}</p>
          </div>
        )}
        <div className="absolute bottom-0 right-0 left-0">
          <MMMLineLogoBlack />
        </div>
      </form>
    </div>
  );
}
