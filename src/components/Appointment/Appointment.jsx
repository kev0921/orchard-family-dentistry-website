import emailjs from '@emailjs/browser';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TagManager from 'react-gtm-module';

const Appointment = () => {
  const form = useRef();
  const navigate = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate.push('/thankyou');

    emailjs.sendForm('service_65i5bdp', 'template_n57y3yo', form.current, 'iNrzM-8pnRp1ikVGR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    // Initialize Google Tag Manager
    TagManager.initialize({ gtmId: 'AW-11416140347' });
 }, []);

  return (
    <div>
      <div className="container py-16">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="text-4xl text-center font-bold ">
            Book your Appointment
          </h1>
          <p className="text-gray-400 py-2 text-center">
            Want to book an appointment or have a question? We'd love to hear from you.
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
          <label for="date">Requested Date:</label>
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
            placeholder="Reason for your visit and preferred time"
            required
          />
          <br />
          <button type="submit" value="Send" className="mt-5 px-6 py-3 flex items-center text-m font-bold leading-snug text-white bg-sky-800 text-white font-medium rounded hover:bg-sky-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
