import qualityServiceImg from "../../images/OrchardFarm.jpg";
import map from "../../images/location.png";

const Contact = () => {

  return (
    <div>
    {/* Section 1 */}
      <div className={`flex bg-cover bg-cyan-200 transform transition-transform duration-1500 justify-center`}>
        <div className={`px-5 py-16 md:py-15 md:px-0 md:p-15 flex flex-col justify-center md:w-3/4`}>
          <h1 className={`my-5 text-5xl md:text-6xl text-sky-900 md:font-semibold text-center`}>
          Contact Orchard Family Dentistry
          </h1>
          <p className={`text-lg md:text-3xl text-blue-900 md:py-8 whitespace-wrap text-center`}>
          If you are looking for dentists in Orchard Family Dentistry, look no further. 
          We’ve revolutionized dentistry to be truly personalized & convenient. 
          We have hours that fit your busy schedule. Plus, we take the time to 
          listen & clearly explain everything.
          </p>
        </div>
      </div>

    {/* Section 2 */}
    <div className={`flex bg-cover`}>
      <div className={`md:mx-0 md:px-0 md:my-10 flex-col md:flex justify-center md:w-3/4`}>
        <img className={`md:w-0 h-1/8 w-full`} src={qualityServiceImg} alt="" />
        
        <div className="my-5 md:my-auto mx-10 md:w-4/5 md:mx-auto">
          <h1 className={`mt-10 md:mt-0 md:my-auto text-5xl md:text-6xl text-green-800 md:font-semibold text-left`}>
            Your Trusted Local Dentist
          </h1>
          <p className={`text-lg md:text-3xl py-8 text-black whitespace-wrap text-left`}>
          We are conveniently located near the Northgate Mall, at the corner of Professional Center Parkway.
          </p>

          <p className={`text-lg md:text-3xl md:pt-8 text-black whitespace-wrap text-left`}>
          Address: 101 Nellen Ave, Lake Tahoe, CA 94964
          </p>
          <p className={`text-lg md:text-3xl text-black whitespace-wrap text-left`}>
          Phone: 650-665-5854
          </p> 

        </div>
      </div>
      <img className={`md:w-3/5 h-auto object-cover w-0`} src={qualityServiceImg} alt="" />
    </div>




      {/* Contact Form */}

      <div className="flex justify-center py-16 bg-cover bg-sky-100">
        <div className="grid lg:grid-cols-2 lg:gap-6 justify-between items-center">

          <div className="lg:px-16 px-8">
            <h1 className="text-4xl lg:text-6xl text-blue-900 py-2 font-semibold font-Poppins">
              Get In Touch
            </h1>

            <div className="mt-6">
              <div className="flex items-center py-2">
                <i className="fas fa-map-marker-alt text-4xl text-secondary"></i>
                <div className="pl-4">
                  <p className="text-2xl">5220 Dundas St #6,</p>
                  <p className="text-2xl">Burlington, ON L7L 0J4</p>
                </div>
              </div>
            </div>

            <div className="flex items-center py-4">
              <i className="far fa-envelope text-4xl text-secondary"></i>
              <div className="pl-4">
                <p className="text-2xl">info@adc.com</p>
                <p className="text-2xl">support@adc.com</p>
              </div>
            </div>

            <div className="flex items-center py-4 mb-10 md:mb-0">
              <i className="fas fa-phone text-3xl text-secondary"></i>
              <div className="pl-4 font-bold">
                <p className="text-2xl">+1800 562 2487</p>
                <p className="text-2xl">+3215 546 8975</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-0 w-full h-full">
            <img className="w-full h-full object-cover" src={map} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
