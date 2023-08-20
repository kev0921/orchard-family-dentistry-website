import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'flowbite'; // Make sure to replace "path/to" with the actual path to flowbite CSS

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <nav className="static flex flex-wrap items-center justify-between px-2 py-3">
          <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="flex items-center text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              >
                <span className="text-2xl font-Poppins">
                  Orchard Family Dentistry
                </span>
              </Link>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={toggleMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div
              className={`lg:flex flex-grow items-center ${menuOpen ? "flex" : "hidden"}`}
              id="navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                <li className="nav-item dragdown">
                      <Link
                        to="/"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      >
                        Home
                      </Link>
                </li>



                <li>
                <a href="/patientinformation">
                  <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown2" data-dropdown-delay="100" data-dropdown-trigger="hover" className=" hover:opacity-75 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8" type="button">
                    Patient Information
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </button>
                </a>
                  
                  <div id="dropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                      <ul class="py-2 text-sm text-gray-700" aria-labelledby="multiLevelDropdownButton">
                        
                        <li>
                          <a href="/patientinformation/scheduling" class="block px-4 py-2 hover:bg-gray-100">Scheduling</a>
                        </li>
                        <li>
                          <a href="/patientinformation/studentdiscounts" class="block px-4 py-2 hover:bg-gray-100">Student Discounts</a>
                        </li>
                             
                        <li class="relative">
                          <a href="/patientinformation/patienteducation">
                            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                              Patient Education
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </button>
                          </a>
                            <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] p-0 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton">
                                <li>
                                  <a href="/patientinformation/patienteducation/digitalxrays" class="block px-4 py-2 hover:bg-gray-100">Digital X-Ray</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/intraoralcamera" class="block px-4 py-2 hover:bg-gray-100">Intraoral Camera</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/localanesthesia" class="block px-4 py-2 hover:bg-gray-100">Local Anesthesia</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/patientsafety" class="block px-4 py-2 hover:bg-gray-100">Patient Safety</a>
                                </li>
                                <li>
                                  <a href="/patientinformation/patienteducation/toothdecay" class="block px-4 py-2 hover:bg-gray-100">Tooth Decay</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                      </ul>
                  </div>
                </li>



                <li>
                  <div>
                    <Link to="/Offers" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton2"
                        data-dropdown-toggle="dropdownAnother2"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Offers
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </Link>
                  </div>
                </li>

                <li>
                  <div>
                    <Link to="/MeetUs" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton3"
                        data-dropdown-toggle="dropdownAnother3"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Meet Us
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </Link>
                  </div>
                </li>

                <li>
                  <div>
                    <Link to="/DentalServices" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton40"
                        data-dropdown-toggle="dropdownAnother40"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Dental Services
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </Link>

                    <div
                      id="dropdownAnother40"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownAnotherButton4"
                      >
                        <li>
                          <Link
                            to="/dentalservices/emergencydentistry"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Emergency Dentistry
                          </Link>
                        </li>

                        <li class="relative">
                          <a href="/patientinformation/patienteducation">
                            <button id="doubleDropdownButton2" data-dropdown-toggle="doubleDropdown2" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                              General Dentistry
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </button>
                          </a>
                            <div id="doubleDropdown2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] p-0 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton2">
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/DigitalXRays2" class="block px-4 py-2 hover:bg-gray-100">Digital X-Ray</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/SedationDentistry" class="block px-4 py-2 hover:bg-gray-100">Sedation Dentistry</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/WisdomTeethRemoval" class="block px-4 py-2 hover:bg-gray-100">Wisdom Teeth Removal</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/GeneralDentistry/RootCanalTherapy" class="block px-4 py-2 hover:bg-gray-100">Root Canal Therapy</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                        <li class="relative">
                          <a href="/patientinformation/patienteducation">
                            <button id="doubleDropdownButton3" data-dropdown-toggle="doubleDropdown3" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                            Restorative Dentistry
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </button>
                          </a>
                            <div id="doubleDropdown3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] p-0 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton3">
                                <li>
                                  <a href="/DentalServices/RestorativeDentistry/Crowns" class="block px-4 py-2 hover:bg-gray-100">Crowns</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/RestorativeDentistry/DentalImplants" class="block px-4 py-2 hover:bg-gray-100">Dentures</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/RestorativeDentistry/Dentures" class="block px-4 py-2 hover:bg-gray-100">Dental Implants</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                        <li class="relative">
                          <a href="/patientinformation/patienteducation">
                            <button id="doubleDropdownButton4" data-dropdown-toggle="doubleDropdown4" data-dropdown-delay="100" data-dropdown-trigger="hover" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100">
                            Cosmetic Dentist
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </button>
                          </a>
                            <div id="doubleDropdown4" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 left-0 top-0 min-w-[0] p-0 m-0">
                              <ul class="py-2 text-sm text-gray-700" aria-labelledby="doubleDropdownButton4">
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/ToothColouredDentistry" class="block px-4 py-2 hover:bg-gray-100">Tooth-Coloured Dentistry</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/DentalFillings" class="block px-4 py-2 hover:bg-gray-100">Dental Filing</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/PorcelainVeneers" class="block px-4 py-2 hover:bg-gray-100">Porcelain Veneers</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/MercuryFreeDentistry" class="block px-4 py-2 hover:bg-gray-100">Mercury-Free Dentistry</a>
                                </li>
                                <li>
                                  <a href="/DentalServices/CosmeticDentist/TeethWhitening" class="block px-4 py-2 hover:bg-gray-100">Teeth Whitening</a>
                                </li>
                              </ul>
                            </div>
                        </li>

                        <li>
                          <Link
                            to="/dentalservices/preventativecare"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Preventive Care
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/dentalservices/invisaline"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Invisalign
                          </Link>
                        </li>
                        {/* Add more sections here */}
                      </ul>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div>
                    <Link to="/ContactUs" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton5"
                        data-dropdown-toggle="dropdownAnother5"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Contact Us
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </Link>

                    
                  </div>
                </li>

                <li>
                  <div className="mr-2">
                    <Link to="/Blog" className="hover:opacity-75">
                      <button
                        id="dropdownAnotherButton6"
                        data-dropdown-toggle="dropdownAnother6"
                        data-dropdown-delay="100"
                        data-dropdown-trigger="hover"
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-8"
                        type="button"
                      >
                        Blog
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </button>
                    </Link>
                  </div>
                </li>

                <li className="nav-item bg-sky-600">
                  <Link
                    to="/appointment"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Book Appointment
                  </Link>
                </li>

              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
