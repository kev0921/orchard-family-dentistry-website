import orchard from "../../images/OrchardFarm.jpg";
import TagManager from 'react-gtm-module';
import React, { useEffect } from "react";


const ThankYouPage = () => {

  useEffect(() => {
    // Initialize Google Tag Manager
    TagManager.initialize({ gtmId: process.env.GTM_ID });
 }, []);

  return (
  <div>
  {/* Mobile Screen */}
  <section>
  <div className={`md:hidden relative overflow-hidden bg-sky-200`}>
    <img className="w-full" src={orchard} alt="orchard" />
    <div className={`absolute inset-0 flex flex-col justify-center px-5 py-12 ext-center md:text-left bg-opacity-75 bg-white`}>
      <h1 className={`text-3xl text-blue-900 mb-4 text-center`}>
        Thank you for your time!
      </h1>
      <p className={`text-base text-blue-900 leading-relaxed text-center`}>
        We will respond back to you as soon as possible to confirm appointment dentails.
      </p>
    </div>
  </div>

  {/* Desktop Screen */}
  <div className={`hidden md:flex bg-cover bg-sky-200`}>
    <div className={`flex flex-col py-10 justify-center md:w-3/4`}>
      <h1 className={`mx-auto w-4/5 pb-5 text-6xl text-blue-900 text-center`}>
        Thank you for your time!
      </h1>
      <p className={`mx-auto w-4/5 text-2xl text-blue-900 pt-2 whitespace-wrap text-center`}>
        We will respond back to you as soon as possible to confirm appointment dentails.
      </p>
    </div>
    <img className={`md:w-1/2 h-auto w-1/3 object-cover`} src={orchard} alt="orchard" />
  </div>
  </section>
</div>
  );
};

export default ThankYouPage;
