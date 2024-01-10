import React, { useState, useEffect } from "react";
import Orchard2 from "../../images/dentalservices.png";
import crown from "../../images/crown.png";
import denture from "../../images/denture.png";
import dentalimplant from "../../images/dental-implant.png";
import toothcolour from "../../images/teethcolour.png";
import veneers from "../../images/dental-veneer.png";
import mercury from "../../images/mercury free.png";
import whitening from "../../images/tooth-whitening.png";
import xray from "../../images/x-ray.png";
import sedation from "../../images/sedation.png";
import jaw from "../../images/jaw.png";

const DentalServices = () => {
  const [, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-cover">
      {/* First Animated Section */}
      <div className="flex bg-cover bg-sky-300 transform transition-transform duration-1500 justify-center py-20 md:py-20 md:w-full md:py-10 md:mx-auto" style={{ backgroundImage: `url(${Orchard2})` }}>
        <div className="md:w-4/5 md:py-20">
          <h1 className="my-5 pb-4 text-left mx-8 text-5xl text-white text-left md:pb-3 md:text-7xl">
            Dental Care Services
          </h1>
          <h2 className="my-5 mx-8 text-2xl md:text-2xl text-left text-white md:text-left md:max-w-[80%]">
          At Orchard Family Dentistry, we offer an array of different dental care services that we can provide for your family right here in Burlington, ON. From preventive cleanings to dental implants & dentures, Orchard Family Dentistry is the place to go for all of your dental needs & in one convenient location. Please take your time to view & read more about all the dental services below that our patients can receive.
          </h2>
        </div>
      </div>

      {/* Student Discounts Banner */}
      <div className="py-4 text-blue-900 text-center md:w-2/3 md:mx-auto">
        <h1 className="text-4xl mx-7 md:mx-0 md:text-5xl mt-10 md:mt-20 mb-5">The professionals on our dental care team have dedicated their careers to providing the best care possible to our patients.</h1>
        <p className="text-blue-900 text-xl mx-8 md:mx-0 md:text-xl">
        While this page lists most of the dental care services we provide, please know that we are continuously educating ourselves on the latest dental care techniques, technologies & materials to provide you with the most advanced dental care available. All treatment decisions at our practice come from conversations between you & your dentist, & we are happy to offer dental care beyond the treatments listed here to fit your individual needs. If you have questions about any of our dental care services, please do not hesitate to ask.
        </p>
      </div>

      {/* Divider */}
      <div className="py-4 mx-7 text-blue-900 text-center md:w-2/3 md:mx-auto">
        <h1 className="text-4xl mx-7 md:mx-0 md:text-5xl mt-10 md:mt-20 mb-5">Preventive Dental Care for the Entire Family</h1>
        <p className="text-blue-900 text-xl mx-8 md:mx-0 md:text-xl">
        At Orchard Family Dentistry, we practice dentistry for the whole family. From preventive education & regular hygiene to identifying & caring for dental issues that may arise, your continued oral health is our top priority.
        </p>
      </div>

      {/* Restorative Dental Care */}
      <div className="py-4 text-blue-900 text-center md:w-2/3 md:mx-auto">
      <h1 className="text-4xl mx-7 md:mx-0 md:text-5xl mt-10 md:mt-20 mb-5">Restorative Dental Care</h1>
      <p className="text-blue-900 text-xl mx-8 md:mx-0 md:text-xl">
        We offer restorative dental care. We know that even when you do everything right, something can go wrong. If you are suffering from a dental problem, we are here to help. Modern technology, combined with the in-depth experience of our clinical team, can assure you of a successful & long-lasting result. Whether the cause is accident or disease, we can restore your smile.
        </p>
        <div className="mt-8 p-7 md:flex justify-center md:space-x-4">
          {/* Crowns */}
          <div className="w-full my-5 md:w-1/3 items-center text-center">
            <a href="/DentalServices/RestorativeDentistry/Crowns">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={crown} alt="crown" />
                </div>
                <h1 className="text-2xl">Crowns</h1>
                <p className="text-1xl">
                  Crowns cover & support a tooth with a large filling when there isn’t enough tooth left.
                </p>
              </div>
            </a>
          </div>
          {/* Dentures */}
          <div className="w-full my-5 md:w-1/3 items-center text-center">
            <a href="/DentalServices/RestorativeDentistry/Dentures">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={denture} alt="denture" />
                </div>
                <h1 className="text-2xl">Dentures</h1>
                <p className="text-1xl">
                  If you’ve lost teeth from decay, injury or periodontal (gum) disease, dentures are the solution.
                </p>
              </div>
            </a>
          </div>
          {/* Dental Implants */}
          <div className="w-full my-5 md:w-1/3 items-center text-center">
            <a href="/DentalServices/RestorativeDentistry/DentalImplants">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={dentalimplant} alt="implant" />
                </div>
                <h1 className="text-2xl">Dental Implants</h1>
                <p className="text-1xl">
                  Dental implants are man-made replacements for natural teeth & are essentially permanent, attached teeth that replace partials, bridges, or dentures.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      
      {/* Cosmetic Dental Care */}
      <div className="py-4 text-blue-900 text-center md:w-2/3 md:mx-auto">
      <h1 className="text-4xl mx-7 md:mx-0 md:text-5xl mt-10 md:mt-20 mb-5">Cosmetic Dental Care</h1>
      <p className="text-blue-900 text-xl mx-8 md:mx-0 md:text-xl">
        Having a great smile can make a huge difference in the way you look & feel. Orchard Family Dentistry offers a complete range of cosmetic dental care treatments to create the confident smile you’ve always wanted. We begin with a detailed smile assessment, discussing with you which aspects you like & dislike about your smile. Once our assessment is complete, we will discuss with you treatment options to help your smile look more natural, youthful & healthy.
        </p>
        <div className="mt-8 p-7 md:flex justify-center md:space-x-4">
          {/* Tooth-Coloured Dentistry */}
          <div className="my-5 w-full md:w-1/4">
            <a href="/DentalServices/CosmeticDentist/ToothColouredDentistry">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={toothcolour} alt="tooth" />
                </div>
                <h1 className="text-2xl">Tooth-Coloured Dentistry</h1>
                <p className="text-1xl">
                  Modern tooth-coloured fillings made of durable resin or porcelain can be bonded to your teeth for a stronger & more natural-looking effect.
                </p>
              </div>
            </a>
          </div>
          {/* Porcelain Veneers */}
          <div className="my-5 w-full md:w-1/4">
            <a href="/DentalServices/CosmeticDentist/PorcelainVeneers">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={veneers} alt="teeth" />
                </div>
                <h1 className="text-2xl">Porcelain Veneers</h1>
                <p className="text-1xl">
                  Excellent alternative to crowns & can perfect your smile by masking stains, hiding chips, correcting misalignment & creating uniformity.
                </p>
              </div>
            </a>
          </div>
          {/* Mercury-Free Dentistry */}
          <div className="my-5 w-full md:w-1/4">
            <a href="/DentalServices/CosmeticDentist/MercuryFreeDentistry">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={mercury} alt="tooth" />
                </div>
                <h1 className="text-2xl">Mercury-Free Dentistry</h1>
                <p className="text-1xl">
                  New & advanced fillings made of tooth-coloured materials that contain no metals or mercury.
                </p>
              </div>
            </a>
          </div>
          {/* Teeth Whitening */}
          <div className="my-5 w-full md:w-1/4">
            <a href="/DentalServices/CosmeticDentist/TeethWhitening">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={whitening} alt="tooth" />
                </div>
                <h1 className="text-2xl">Teeth Whitening</h1>
                <p className="text-1xl">
                  Now you can have significantly whiter teeth in a matter of a few days using advanced teeth whitening techniques.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>


      <div className="py-4 text-blue-900 text-center md:w-2/3 md:mx-auto md:mb-16">
      <h1 className="text-4xl mx-7 md:mx-0 md:text-5xl mt-10 md:mt-20 mb-5">General Dental Care</h1>
      <p className="text-blue-900 text-xl mx-8 md:mx-0 md:text-xl">
        The dentists of Orchard Family Dentistry have extensive experience in the diagnosis, treatment, management & coordination of dental care services to care for their patients & their families. General dental care includes everything from preventive education & regular visits to fillings, crowns, bridges & more. Moreover, the dentists provide care for both kids & adults, & know how best to care for both. At Orchard Family Dentistry, your continued oral health is our top priority.
        </p>
        <div className="mt-8 p-7 md:flex justify-center md:space-x-4">
          {/* Digital X-Rays */}
          <div className="my-5 w-full md:w-1/3">
            <a href="/DentalServices/GeneralDentistry/DigitalXRays2">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={xray} alt="xray" />
                </div>
                <h1 className="text-2xl">Digital X-Rays</h1>
                <p className="text-1xl">
                  These images require up to 90% less radiation than with conventional film-type x-rays.
                </p>
              </div>
            </a>
          </div>
          {/* Sedation Dentistry */}
          <div className="my-5 w-full md:w-1/3">
            <a href="/DentalServices/GeneralDentistry/SedationDentistry">
              <div className="min-w-sm rounded overflow-hidden shadow-lg p-4 h-full hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3 h-auto" src={sedation} alt="tooth" />
                </div>
                <h1 className="text-2xl">Sedation Dentistry</h1>
                <p className="text-1xl">
                  Wake up to a more healthy & beautiful smile with amazingly comfortable sedation dentistry.
                </p>
              </div>
            </a>
          </div>
          {/* TMD (Jaw Pain) Therapy */}
          <div className="my-5 w-full md:w-1/3">
            
            <a href="/DentalServices/GeneralDentistry/tmdjawpain">

              <div className="rounded overflow-hidden shadow-lg p-4 hover:bg-blue-300 hover:text-white transition">
                <div className="flex justify-center items-center mb-4">
                  <img className="w-1/3" src={jaw} alt="chair" />
                </div>
                <h1 className="text-2xl">TMD (Jaw Pain) Therapy</h1>
                <p className="text-1xl">
                  Commonly misdiagnosed or overlooked, a subtle misalignment in the temporomandibular joint can be a common & significant source of head & neck pain.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;
