import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import banner from "../../images/Orchard-Banner.jpeg";
import logo from "../../images/logo192.png";
import TagManager from 'react-gtm-module';
import 'dotenv/config';

const Banner = () => {
  useEffect(() => {
    // Initialize Google Tag Manager
    TagManager.initialize({ gtmId: process.env.GTM_ID });
 }, []);

  return (
    <div>
      <div
        className="bg-center bg-cover py-20 md:py-2 lg:py-2 xl:py-2 md:shadow-xl md:z-6 relative flex flex-col justify-center items-center bg-black opacity-100"
        style={{
          backgroundImage:`url(${banner})`,
        }}
      >
        <img src={logo} alt="logo" className="w-1/2 md:w-1/3 md:mt-8 mb-6 md:mb-0" />

        <div className="container text-center text-white py-0 md:py-10 lg:py-10 xl:py-18">
          <h1 className="text-3xl capitalize mb-0 mt-2 font-semibold md:font-normal md:mb-5 md:mt-0 text-white md:text-6xl">
            A Burlington Tradition of Trusted & Caring Dentistry
          </h1>
          <p className="mb-10 text-gray-200 text-md md:text-2xl md:mx-auto md:mb-8 md:w-2/3 ">
            Welcome Weekdays Until 8pm & Weekends! We Bill Your Insurance Directly.
          </p>
          <div>
            <Link
              to="/appointment"
              className="bg-sky-600 text-white px-6 py-4 font-medium rounded hover:bg-sky-400 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

