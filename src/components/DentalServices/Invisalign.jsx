import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Orchard2 from "../../images/invisalign.jpg";


const Invisalign = () => {
  const [,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                
                <img class="shadow-2xl object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                    <p class="text-lg text-blue-300">
                    You can get that beautiful, straighter smile!                   
                    </p>
    
                    <h2 class="mb-3 md:mb-0 text-4xl font-semi-bold">
                    What Invisalign Can Do for Your Smile
                    </h2>
    
                    <p class="mb-6 pb-2 text-neutral-500 text-xl">
                    The office is open seven days a week with morning, late evening, and weekend appointments available so you will always have convenience with your dental care. Treatment options for orthodontics include Invisalign.
                    </p>    
                </div>
            </div>
        </div>

      <div className="flex bg-cover bg-sky-100 transform transition-transform duration-1500 justify-center py-12 md:py-16 md:mb-16">
        <div className="px-10 md:px-0 md:w-3/5">
          <h1 className="mb-5 text-5xl text-blue-900 md:font-semibold text-center pb-1">
            Invisalign
          </h1>
          <p className="my-1 text-xl md:text-2xl text-blue-900 text-center">
            Invisalign is a great option for both teens and adults who don't want everyone to see they are having orthodontic work done. Rather than using the highly visible wires and brackets, Invisalign uses clear aligners. They are customized, removable, and mostly undetectable. This option can be more expensive than other options and could mean a longer treatment plan but is the right choice for those who want to look good in pictures and don't want anyone to know about their treatment.          
          </p>
        </div>
      </div>

      <div className="mt-10 mb-10 md:mb-16 bg-cover bg-sky-200 mx-8 px-5 py-6 md:px-16 md:py-16 md:mx-12 flex flex-col items-center justify-center">
            <h2 className="pb-3 text-4xl md:text-5xl text-center text-blue-900 ">Get your Free Invisalign Consultation</h2>
            <p className="md:mt-4 md:mb-7 text-xl md:text-2xl text-center text-blue-900 pb-5">
              We will do a 3D scan of your teeth with the iTero and provide an outcome situation.
            </p>
            
            <div className="my-4 md:my-0">
              <Link
                to="/appointment"
                className="bg-sky-600 text-white px-6 py-4 font-medium rounded hover:bg-sky-400 transition"
              >
                Make an Appointment
              </Link>
            </div>
          </div>

    </section>
  );
};

export default Invisalign;
