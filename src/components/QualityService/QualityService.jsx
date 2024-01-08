import React, { useState, useEffect } from "react";
import family1 from "../../images/family1.jpg";
import family3 from "../../images/family3.jpeg";

const QualityService = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Customize the threshold value as needed
      const threshold = windowHeight * 0.3;

      if (scrollTop > threshold) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    // Mobile Screen
    <section>
      <div className={`md:hidden relative overflow-hidden bg-sky-200 transform  transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className="w-full" src={family3} alt="Quality Service" />
        <div className={`absolute inset-0 flex flex-col justify-center px-5 py-12 ext-center md:text-left bg-opacity-75 bg-white`}>
          <h1 className={`text-4xl text-blue-900 mb-4 text-center`}>
            Trusted, Personalized & Affordable Dental Care
          </h1>
          <p className={`text-lg text-blue-900 leading-relaxed text-center`}>
            At Orchard Family Dentistry, our caring team is dedicated to providing the highest level of 
            convenience and personalized care for your entire family. We offer a range of modern dentistry 
            services and aim to keep you healthy throughout your life.
          </p>
          <p className={`pt-5 text-lg text-blue-900 leading-relaxed text-center`}>
          We believe that affordable dental care should be available to everyone. 
          Your dental hygiene should never be lessened due to whether or not you have dental insurance. 
          That’s why we offer cash pricing for cleaning and polishing for only
            <a href="/offers" className="underline pl-1">$99*!</a>
          </p>

          <p className={`pt-5 text-sm text-blue-900 leading-relaxed text-center`}>
          *2 units scaling, 2 Bitewing x-rays, and exam
          </p>
        </div>
      </div>

      {/* Desktop Screen */}
      <div className={`hidden md:flex bg-cover bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`flex flex-col py-10 justify-center md:w-3/4`}>
          <h1 className={`mx-auto w-4/5 pb-5 text-6xl text-blue-900 text-center`}>
            Trusted, Personalized & Affordable Dental Care for Your Whole Family
          </h1>
          <p className={`mx-auto w-4/5 text-2xl text-blue-900 pt-2 whitespace-wrap text-center`}>
            At Orchard Family Dentistry, it’s the mission of our caring team to provide
            the highest level of convenience & personalized care for your entire
            family. We are your one-stop location for all aspects of safe &
            modern dentistry & we want to do our part to keep you healthy through
            your entire life!
          </p>
          <p className={`mx-auto w-4/5 text-2xl text-blue-900 pt-10 whitespace-wrap text-center`}>
          We believe that affordable dental care should be available to everyone. 
          Your dental hygiene should never be lessened due to whether or not you have dental insurance. 
          That’s why we offer cash pricing for cleaning and polishing for only
            <a href="/offers" className="underline pl-1">$99*!</a>
          </p>

          <p className={`mx-auto w-4/5 text-1xl text-blue-900 pt-2 whitespace-wrap text-center`}>
          *2 units scaling, 2 Bitewing x-rays, and exam
          </p>

        </div>
        <img className={`md:w-1/4 h-auto w-1/3 object-cover`} src={family3} alt="" />
      </div>
      </section>

  );
};

export default QualityService;
