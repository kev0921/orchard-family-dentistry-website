import React from "react";
import footerImage from "../../images/Logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container sm:container sm:items-center md:container md:items-center lg:flex lg:justify-between items-center">
        <div className="sm:w-full md:w-full lg:w-1/3 text-center sm:text-center md:text-center lg:text-left mb-6 sm:mb-6 md:mb-6 lg:mb-0">
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="text-2xl font-Poppins">Orchard Family Dentistry</span>
          </div>
          <p className="mb-5 sm:mb-5 sm:py-0 sm:px-0 md:mb-5 md:py-0 md:px-0 lg:text-justify lg:py-4 lg:px-2">
            5220 Dundas St #6 <br />
            Burlington, ON L7L 0J4 <br />
            Call Today <br />
            905-315-9937
          </p>
          <div className="text-primary text-2xl flex justify-center lg:justify-start">
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
              <i className="fab fa-facebook-square ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
              <i className="fab fa-instagram-square ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/">
              <i className="fab fa-twitter-square ml-2"></i>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
              <i className="fab fa-linkedin ml-2"></i>
            </a>
          </div>
        </div>

        <div className="mb-5 w-1/2 mx-auto sm:w-1/3 sm:mb-5 md:w-1/3 md:mb-5 lg:w-1/4 lg:mb-6">
          {/* Image Section */}
          <a href="/">
            <img src={footerImage} alt=""/>
          </a>
        </div>
        
        <div className="text-center sm:text-center sm:w-full md:text-center md:w-full lg:w-1/3 lg:text-right">
          <h1 className="text-2xl font-Poppins">Quick Links</h1>
          <ul className="py-3.5">
            <li className="py-0.5 hover:text-primary">
              <a href="/">Home</a>
            </li>
            <li className="py-0.5 hover:text-primary">
              <a href="/MeetUs">Meet Us</a>
            </li>
            <li className="py-0.5 hover:text-primary">
              <a href="/ContactUs">Contact Us</a>
            </li>
            <li className="py-0.5 hover:text-primary">
              <a href="/privacypolicy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
