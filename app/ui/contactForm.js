"use client";
// import from next
import Image from "next/image";
import { useState } from "react";
// import components
import SubmitButtonWithPlaneAnimation from "./submitButtonWithPlaneAnimation";
import ColorChangeM from "./colorChangeM";
import MMMLineLogoBlack from "./mmmLineLogoBlack";
// import from utils
import { validateEmail } from "../lib/utils";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const handleChange = (e, setState) => {
    setState(e.target.value);
    // Check if the email is being updated and is valid
    if (e.target.name === "email" && validateEmail(e.target.value)) {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email); // add validation logic for other inputs, handle errors accordingly
    if (!isValid) {
      console.log("Form validation failed");
      setErrorMessage("Please enter a valid email address.");
      return;
    } else {
      setErrorMessage("");
    }
    setButtonSubmitted(true);
    console.log("form submitted", firstName, lastName, email, phone, message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    // Reset the button's submitted state after 5 seconds
    setTimeout(() => {
      setButtonSubmitted(false);
    }, 5000);
  };

  return (
    <div className="p-8 m-4 w-full">
      <div className="flex justify-center items-center mt-6 mb-2 md:mb-6">
        <h3 className=" text-xl font-bold mr-1">Send us a</h3>
        <div
          className="flex justify-center items-center w-6 h-auto mb-1"
          style={{ marginRight: "-0.05rem", marginTop: ".2rem" }}>
          <ColorChangeM src="/branding/singleMBlack.png" />
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
          {errorMessage && (
            <div className="flex justify-center items-center mt-2 mb-4">
              <p className="text-red-500 text-xs">{errorMessage}</p>
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
        </div>
        <div className="flex justify-center items-center -mb-4">
          <SubmitButtonWithPlaneAnimation
            onClick={handleFormSubmit}
            isSubmitted={buttonSubmitted}
          />
        </div>
        <div className="absolute bottom-0 right-0 left-0">
          <MMMLineLogoBlack />
        </div>
      </form>
    </div>
  );
}
