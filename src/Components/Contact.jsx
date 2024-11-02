import React from "react";

function Contact() {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full px-auto gap-5">
      <h1 className="text-7xl  font-bold text-orange-600 text-center">
        Contact Us
      </h1>
      <form
        action="https://formspree.io/f/xldejpvr"
        method="POST"
        className="flex flex-col gap-4 max-w-md w-full px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 border"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 border"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-2 border"
        ></textarea>
        <button type="submit" className="bg-orange-600 text-white p-2 mt-2">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
