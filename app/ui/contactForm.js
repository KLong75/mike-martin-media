'use client';
// import from next
import Image from "next/image";
import { useState, useEffect } from "react";

// import from utils
import { validateEmail } from "../lib/utils";


export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);
      if (!isValid) {   
        console.log('EMAIL INVALID');
        setErrorMessage('Please enter a valid email address.');
        return;
      } else {
        setErrorMessage('');
      }
    console.log("form submitted", firstName, lastName, email, phone, message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="p-8 m-4 w-full">
    <div className="flex justify-center items-center mt-6 mb-2">
      <h3 className=" text-xl font-bold mr-1">Send</h3>
        <div className="flex justify-center items-center w-14 h-auto mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h3 className="text-xl font-bold ml-1">a Message</h3>
      </div>
      <form onSubmit={handleFormSubmit} className="border-4 border-black rounded-2xl p-8 bg-gray-300 shadow">
        <div className="flex flex-col justify-center items-center ">
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
            className="border-2 border-gray-800 rounded-2xl p-2 w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
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
            className="border-2 border-gray-800 rounded-2xl p-2 w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
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
            className="border-2 border-gray-800 rounded-2xl p-2 w-full"
          />
        </div>
        
        <div className="flex flex-col justify-center items-center">
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
            className="border-2 border-gray-800 rounded-2xl p-2 w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
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
            className="border-2 border-gray-800 rounded-2xl p-2 h-60 w-60 resize-none w-full"
          />
        </div>
        <div className="flex justify-center items-center mt-4 -mb-4">
          <button
            type="submit"
            className="bg-black text-white rounded-md p-2 shadow-lg">
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div className="flex justify-center items-center mt-4">
          <p className="text-red-500 text-xs">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
