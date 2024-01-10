"use client";

import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", firstName, lastName, email, phone, message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="p-8 m-4 w-full">
      <h3 className="text-center mb-4">Contact Form</h3>
      <form onSubmit={handleFormSubmit} className="border-4 border-slate-400 rounded-2xl p-8 bg-slate-200 shadow">
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
            className="border-2 border-gray-300 rounded-2xl p-2 w-full"
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
            className="border-2 border-gray-300 rounded-2xl p-2 w-full"
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
            className="border-2 border-gray-300 rounded-2xl p-2 w-full"
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
            className="border-2 border-gray-300 rounded-2xl p-2 w-full"
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
            className="border-2 border-gray-300 rounded-2xl p-2 h-60 w-60 resize-none w-full"
          />
        </div>
        <div className="flex justify-center items-center mt-4 -mb-4">
          <button
            type="submit"
            className="bg-slate-500 text-white rounded-md p-2 shadow-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
