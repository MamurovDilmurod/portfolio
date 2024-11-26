import React, { useState } from "react";

function ContactSection() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      const response = await fetch("https://getform.io/f/NbW5k4ey", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        e.target.reset();
      } else {
        const errorText = await response.text(); 
        console.error("Error response:", errorText);
        setFormStatus("Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormStatus("Failed to send message. Please check your connection.");
    }

    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <div name="contact">
      <div className="flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block mb-4">
            Contact
          </p>
          <p className="text-lg py-4">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center w-full">
          <form
            onSubmit={handleSubmit}
            action="https://getform.io/f/NbW5k4ey"
            method="POST"
            className="flex flex-col w-full md:w-2/3 lg:w-1/2 bg-transparent border-2 rounded-lg p-6 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="p-3 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white rounded-md py-2 px-7 mt-4 mx-auto hover:scale-105 transform duration-300 ease-in-out"
            >
              Let's talk
            </button>
          </form>
        </div>

        {formStatus && (
          <div
            className={`mt-4 text-center p-4 rounded-md ${
              formStatus.includes("success")
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {formStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactSection;
