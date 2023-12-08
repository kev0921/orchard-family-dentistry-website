import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Appointment = () => {
  const form = useRef();
  const navigate = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate.push('/thankyou');

    emailjs.sendForm('service_65i5bdp', 'template_cibrusi', form.current, 'iNrzM-8pnRp1ikVGR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container py-16">
      <form ref={form} onSubmit={sendEmail}>
        <h1 className="text-4xl text-center font-bold ">
          Drop your Appointment
        </h1>
        <p className="text-gray-400 py-2 text-center">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        <label for="name">Full name:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="text"
          id="name"
          name="user_name"
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
          name="user_email"
          placeholder="Your email address"
          required
        />
        <br />
        <br />
        <label for="phone number">Phone Number:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="text"
          id="text"
          name="user_phone"
          placeholder="123-123-1234"
          required
        />
        <br />
        <br />
        <label for="date">Date:</label>
        <input
          className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          type="text"
          id="text"
          name="user_date"
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
          type="message"
          id="message"
          name="message"
          placeholder="Reason for your visit"
          required
        />
        <br />
        <button type="submit" value="Send" className="mt-5 px-6 py-3 flex items-center text-m font-bold leading-snug text-white bg-sky-800 text-white font-medium rounded hover:bg-sky-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;
