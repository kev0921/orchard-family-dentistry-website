import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../images/offers.jpg";
import TagManager from 'react-gtm-module';

const Offers = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
     // Initialize Google Tag Manager
     TagManager.initialize({ gtmId: 'AW-11416140347' });
  }, []);

  return (
    <div>
      <div className="bg-cover">

        {/* Student Discounts Banner */}
        <div className="bg-sky-800 py-4 px-7 md:px-20 text-white text-center md:p-6">
          <h1 className="text-5xl md:text-6xl mt-24 mb-5">
            Special Offers for All Patients
          </h1>
          <p className="text-3xl mb-24">
            We want to make it as easy as possible for all Burlington residents to get the dental care they need. 
            Whether you are new to our office or a longtime patient, we're here for you & will make sure you pay 
            as little as possible for our excellent services.
          </p>
        </div>

        {/* First Animated Section */}
        <div className={`shadow-lg flex bg-sky-200 bg-cover bg-transform items-center transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className={`md:px-10 flex flex-col justify-center md:w-3/4`}>

            <img className={`md:w-0 h-auto w-full`} src={qualityServiceImg} alt="tree" />
            <div className="px-7 py-5 md:w-6/7 md:px-0">
            <h1 className={`mb-0 my-5 md:mb-5 md:my-0 text-4xl text-blue-900 font-semibold text-center`}>
              Little or No Out-of-Pocket Costs for Insured
              Patients on the Services Below*
            </h1>
            <p className="text-3xl text-blue-900 whitespace-wrap text-center mx-auto">
              Cash Pricing<br />
              Cleaning, Exam & Digital X-Rays ~ $99
            </p>
            <p className="text-2xl text-blue-900 whitespace-wrap text-center mx-auto">
              Includes two units of scaling, bitewings & exam.
            </p>
            <p className="text-3xl py-3 text-blue-900 whitespace-wrap text-center mx-auto">
              Free Invisaline consultation.
            </p>
            <p className="text-1xl text-blue-900 whitespace-wrap text-center mx-auto">
              *Patient responsible for deductible & co-payment fees.
            </p>
            <h1 className={`my-5 mt-0 mb-0 md:my-0 md:mt-5 text-3xl md:text-4xl text-blue-900 font-semibold text-center`}>
              At Orchard Family Dentistry, we have convenient hours that won’t make you miss work or school. In fact, we can see you this week & you’ll be in & out within an hour.
            </h1>
            </div>
          </div>
          <img className={`md:w-1/3 h-auto w-0`} src={qualityServiceImg} alt="tree" />
        </div>

        {/* Second Animated Section */}

        {/* Additional Information Section */}
        <div className="mb-16 justify-center max-w-3xl mx-5 md:mx-auto mt-16">
          <h1 className="text-5xl md:text-6xl text-center text-blue-900">Financial Options</h1>
          <p className="md:mt-8 text-2xl text-center text-blue-900">
            Insured & uninsured patients alike have a number of financing options available to them, including:
          </p>
          <p className="text-3xl text-blue-900 py-8 md:py-8 whitespace-wrap text-left md:px-48">
            • Convenient Payment Plans<br />
            • 0% Financing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
