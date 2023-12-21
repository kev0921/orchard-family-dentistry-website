import dentist from "../../images/blog.jpg";

const Contact = () => {

  return (

    <body>
        
        <div className="flex bg-cover bg-sky-300 transform transition-transform duration-1500 justify-center py-16 relative" style={{ backgroundImage: `url(${dentist})`, height: "500px" }}>
        <h1 className="my-5 text-8xl text-white  font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Blog
        </h1>
      </div>
    <div className="text-center my-10 px-7 md:px-0">
        <h2 className="text-3xl">Dental health blog exploring the latest news and issues of the heart of dentistry and oral health.</h2>
    </div>

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-5 mx-auto">
              <div class="flex flex-wrap -m-4">

    <div class="p-4 md:w-1/3" >
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div class="w-full">
                <div class="w-full flex p-2">
                    <div class="">
                    </div>
                    <div class="pl-2 pt-2 ">
                      <p class="font-bold">Tracee S. Dahm, MS, RDH</p>
                      <p class="text-xs">Dec. 13, 2023</p>
                    </div>
                  </div>
            </div>
            
          
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog cover"/>
          
          <div class="p-4">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Illnesses and toothbrushes: The effects of bacteria and ways to stay healthy</h1>
            <div class="flex items-center flex-wrap ">
              <a href="https://www.dentistryiq.com/dentistry/products/infection-control-and-instrument-management/article/14302743/illnesses-and-toothbrushes-the-effects-of-bacteria-and-ways-to-stay-healthy" class="text-green-800  md:mb-2 lg:mb-0">
                <p class="inline-flex items-center">Read Blog
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </a>
            </div>
            
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3" >
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div class="w-full">
                <div class="w-full flex p-2">
                    <div class="">
                    </div>
                    <div class="pl-2 pt-2 ">
                      <p class="font-bold">Dr. Pratyusha Kondath</p>
                      <p class="text-xs">Dec. 23, 2023</p>
                    </div>
                  </div>
            </div>
            
          
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog cover"/>
          
          <div class="p-4">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">When Dr. Google Joins the Consultation Room</h1>
            <div class="flex items-center flex-wrap ">
              <a href="https://www.oralhealthgroup.com/blogs/when-dr-google-joins-the-consultation-room/" class="text-green-800  md:mb-2 lg:mb-0">
                <p class="inline-flex items-center">Read Blog
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </a>
            </div>
            
            
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3" >
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div class="w-full">
                <div class="w-full flex p-2">
                    <div class="">
                    </div>
                    <div class="pl-2 pt-2 ">
                      <p class="font-bold">Dr. Pratyusha Kondath</p>
                      <p class="text-xs">Dec. 20, 2023</p>
                    </div>
                  </div>
            </div>
            
          
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/9775440/pexels-photo-9775440.jpeg" alt="blog cover"/>
          
          <div class="p-4">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Significance of Good Posture in TMJ Care</h1>
            <div class="flex items-center flex-wrap ">
              <a href="https://www.oralhealthgroup.com/blogs/the-significance-of-good-posture-in-tmj-care/" class="text-green-800  md:mb-2 lg:mb-0">
                <p class="inline-flex items-center">Read Blog
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </a>
            </div>
            
            
          </div>
        </div>
      </div>

              </div>
            </div>
          </section>
    </body>

  );
};

export default Contact;
