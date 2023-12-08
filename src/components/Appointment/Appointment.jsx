import React from "react";


const Appointment = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl text-center font-bold ">
        Drop your Appointment
      </h1>
      <p className="text-gray-400 py-2 text-center">
        Have a question or just want to say hi? We'd love to hear from you.
      </p>
      <form action="https://formsubmit.co/info@orchardfamilydentistry.ca" method="POST">
        <input type="hidden" name="_subject" value="Appointment"/>
        <input type="hidden" name="_next" value="https://orchardfamilydentistry.ca/thankyou"/>
        <input type="hidden" name="_template" value="table"/>

        <label for="name">Full name:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          required
        />
        <br />
        <br />
        <label for="email">Email:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <br />
        <br />
        <label for="phone number">Phone Number:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="text"
          id="phone"
          name="phone"
          placeholder="123-123-1234"
          required
        />
        <br />
        <br />
        <label for="date">Date:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="text"
          id="date"
          name="date"
          placeholder="DD/MM/YYYY"
          required
        />
        <br />
        <br />
        <label for="message">Message:</label>
        <textarea
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          rows="4"
          cols="50"
          type="text"
          id="message"
          name="message"
          placeholder="Reason for your visit"
          required
        />
        <br />
        <button type="submit" className="mt-5 px-6 py-3 flex items-center text-m font-bold leading-snug text-white bg-sky-800 text-white font-medium rounded hover:bg-sky-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;
