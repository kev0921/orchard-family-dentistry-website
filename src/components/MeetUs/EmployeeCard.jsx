import React, { useState } from 'react';

const EmployeeCard = ({ imgSrc, content, bio }) => {
  const [isBioVisible, setIsBioVisible] = useState(false);

  const toggleBioVisibility = () => {
    setIsBioVisible(!isBioVisible);
  };

  return (
    <div
      onClick={toggleBioVisibility}
      className={`relative transition ease-in-out delay-0 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 group inline-block min-w-[17rem] max-w-[18rem] bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-8`}
      style={{ zIndex: isBioVisible ? 1 : 'auto' }}
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="max-h-80 w-full rounded-t-lg object-cover bg-cover" src={imgSrc} alt="" />
      </div>
      
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <p className="text-2xl text-blue-900 text-left text-neutral-600">{content}</p>

          {/* Arrow Button */}
          <button className="outline-none focus:outline-none p-4 rounded-lg items-center" onClick={toggleBioVisibility}>
            <span>
              <svg className={`fill-current h-4 w-4 transform ${isBioVisible ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Bio Content */}
        {isBioVisible && (
          <ul className="rounded-lg bg-blue-100 w-full absolute transition duration-150 origin-top ease-in-out left-1/2 transform -translate-x-1/2 top-8 opacity-100">
            <li className="rounded-sm px-3 py-1">{bio}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
