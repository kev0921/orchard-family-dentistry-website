import React from "react";
import Orchard2 from "../../images/Orchard2.jpg";
import EmployeeCard from "./EmployeeCard";
import DavidHu from "../../images/DavidHu.jpg";
import DominicLing from "../../images/DLing.jpg";
import MerajSultana from "../../images/MerajSultana.jpg"

const QualityService = () => {
  return (
    <div>
      {/* Top Words Section */}
      <div className="flex bg-cover bg-sky-300 transform transition-transform duration-1500 justify-center md:py-20" style={{ backgroundImage: `url(${Orchard2})` }}>
        <div className="md: w-4/5 py-20">
          <h1 className="md:my-5 text-3xl md:text-6xl text-white font-semibold md:font-normal text-center pb-10">
            We Are Orchard Family Dentistry Most Trusted & Comprehensive Dental Care Provider
          </h1>
          <h2 className="md:my-5 text-xl md:text-xl text-white text-center md:w-4/5 md:mx-auto">
            At our community-focused practice, your comfort & satisfaction come first. We look forward 
            to meeting you soon & developing a relationship with you to build the bridge toward long-term 
            trust & successful dental care. Orchard Family Dentistry invites you to see why our patients can’t stop 
            smiling!
          </h2>
        </div>
      </div>

      {/* Why We're Different Section */}
      <div className="flex bg-cover transform transition-transform duration-1500 justify-center py-7">
        <div className="w-5/6 md:w-3/5">
          <h1 className="my-5 text-4xl text-blue-900 font-semibold text-center">
            Why We're Different
          </h1>
          <div className="mt-10 space-y-8">
            <DifferenceCard
              title="A Trusted Tradition of Dental Care"
              content="Our professionals put your comfort & satisfaction first to make it easier to get the dental care you deserve. We believe in making dental care comfortable, affordable & accessible for you & your entire family."
            />

            <DifferenceCard
              title="Dentistry That Fits Any Budget"
              content="We aim to stop dental problems before they become severe & costly. Along with your regular home care routine, seeing us every six months for teeth cleanings & exams is the best way to prevent dental problems. As part of our commitment to helping our patients maintain optimal oral health, we will make sure you pay as little out-of-pocket as possible for your preventive care."
            />

            <DifferenceCard
              title="We Won’t Make You Miss Work or School"
              content="Taking time off from work or school for your dental appointments isn’t just a massive inconvenience—it’s a barrier to seeing the dentist on a regular basis. At Orchard Family Dentistry, we have lifted this barrier by opening our schedule on weekday evenings & weekends. Now there’s no need to miss work to get your teeth cleaned!"
            />
          </div>
        </div>
      </div>

      {/* Secondary Words Section */}
      <div className="flex bg-cover bg-teal-100 transform transition-transform duration-1500 justify-center py-10">
        <div className="md:w-3/5">
          <h1 className="px-5 md:px-0 my-5 text-4xl text-green-900 font-semibold text-center pb-3">
            Orchard Family Dentistry Staff Put Your Comfort & Safety First
          </h1>
          <p className="my-5 text-2xl text-green-900 text-center px-7 md:px-0 md:w-5/6 md:mx-auto">
            Our exceptional, friendly staff is our greatest asset. All of our dental assistants & hygienists are licensed professionals who pride themselves on their current dental techniques & outstanding patient communication. With unmatched quality & integrity, they are dedicated to achieving the best possible results for you & your family.
          </p>
        </div>
      </div>

      <div className="flex bg-cover transform transition-transform duration-1500 justify-center">
        <div className="md:px-40 md:w-3/4">
          <h1 className="px-2 md:px-0 md:my-9 text-5xl md:text-6xl text-blue-900 text-center mt-12 md:mt-32">
            Meet Our Doctors
          </h1>
        </div>
      </div>

      {/* Employees Section */}
      <div className="flex justify-center py-10">
        <div className="max-l-4xl max-w-7xl mx-auto">
        <EmployeeCard
            imgSrc={DavidHu}
            content="Dr. David Hu"
            bio="Dr. David Hu completed his Bachelor's of Health Sciences at McMaster University before obtaining his Doctor of Dental Surgery degree at the University of Toronto. He enjoys helping patients feel more confident in their smiles and overall oral health by providing the best possible care for them. He has an affinity for cosmetic and aesthetic dentistry, Invisalign treatment, and impacted wisdom teeth extractions. Dr. Hu likes to spend his free time playing basketball, doing street photography, or painting."
          />

          <EmployeeCard
            imgSrc={DominicLing}
            content="Dr. Dominic Ling"
            bio="Dr. Dominic Ling initially studied biochemistry and chemical engineering at the University of Ottawa before relocating to Toronto in 2017 to begin his Doctor of Dental Surgery degree at the University of Toronto. After graduating, Dr. Ling moved to Northern Ontario, where he provided dental care to underserved communities. While working up north, he became proficient in saving severely compromised teeth with root canals, restorations and crowns, doing full mouth extractions, and working with anxious patients unfamiliar with the dental setting. Growing up, Dr. Ling spent a lot of time working as a tutor or a teaching assistant, so teaching others is something he’s used to. He believes the best treatment is provided when patients understand their oral health and can make informed decisions about their treatment. In his spare time, he enjoys hanging out with friends and family, going to the gym, listening to live music, and watching anime."
          />
          {/* Add more EmployeeCard components here */}
        </div>
      </div>

      <div className="flex bg-cover transform transition-transform duration-1500 justify-center">
        <div className="md:px-40 md:w-3/4">
          <h1 className="px-2 md:px-0 md:my-9 text-5xl md:text-6xl text-blue-900 text-center mt-12 md:mt-32">
            Meet Our Dental Assistants
          </h1>
        </div>
      </div>

      {/* Employees Section */}
      <div className="flex justify-center py-10">
        <div className="max-l-4xl max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-4 2xl-grid-cols-5 mx-auto">
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />  

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />
          
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />
          {/* Add more EmployeeCard components here */}
        </div>
      </div>

      <div className="flex bg-cover transform transition-transform duration-1500 justify-center">
        <div className="md:px-40 md:w-3/4">
          <h1 className="px-2 md:px-0 md:my-9 text-5xl md:text-6xl text-blue-900 text-center mt-12 md:mt-32">
            Meet Our Hygenists
          </h1>
        </div>
      </div>

      {/* Employees Section */}
      <div className="flex justify-center py-10">
        <div className="max-l-4xl max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-4 2xl-grid-cols-5 mx-auto">
          <EmployeeCard
            imgSrc={MerajSultana}
            content=""
            bio=""
          />

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />    

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />
          
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />
          {/* Add more EmployeeCard components here */}
        </div>
      </div>

      <div className="flex bg-cover transform transition-transform duration-1500 justify-center">
        <div className=" md:px-40 md:w-3/4">
          <h1 className="px-2 md:px-0 md:my-9 text-5xl md:text-6xl text-blue-900 text-center mt-12 md:mt-32">
            Meet Our Receptionists
          </h1>
        </div>
      </div>

      {/* Employees Section */}
      <div className="flex justify-center py-10 md:mb-32">
        <div className="max-l-4xl max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-4 2xl-grid-cols-5 mx-auto">
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />
          
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content=""
            bio=""
          />
          {/* Add more EmployeeCard components here */}
        </div>
      </div>

    </div>
  );
};

const DifferenceCard = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-6">
    <h2 className="text-2xl text-blue-900 mb-4">{title}</h2>
    <p className="text-base text-neutral-600">{content}</p>
  </div>
);

export default QualityService;
