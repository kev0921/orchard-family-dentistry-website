import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import Appointment from "./components/Appointment/Appointment";
import Banner from "./components/Banner/Banner";
import ClinicalFacts from "./components/ClinicalFacts/ClinicalFacts";
import MeetUs from "./components/MeetUs/MeetUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import QualityService from "./components/QualityService/QualityService";
import Offers from "./components/Offers/Offers";
import DiseasePrevention from "./components/DiseasePrevention/DiseasePrevention";
import Blog from "./components/Blog/Blog"

import PatientInformation from "./components/PatientInformation/PatientInformation";
  import Scheduling from "./components/PatientInformation/Scheduling";
  import StudentDiscounts from "./components/PatientInformation/StudentDiscounts";
  import PatientEducation from "./components/PatientInformation/PatientEducation";
  import DigitalXRays from "./components/PatientInformation/DigitalXRays";
  import IntraoralCamera from "./components/PatientInformation/IntraoralCamera";
  import LocalAnesthesia from "./components/PatientInformation/LocalAnesthesia";
  import PatientSafety from "./components/PatientInformation/PatientSafety";
  import ToothDecay from "./components/PatientInformation/ToothDecay";

import DentalServices from "./components/DentalServices/DentalServices";
import EmergencyDentistry from "./components/DentalServices/EmergencyDentistry";
import GeneralDentistry from "./components/DentalServices/GeneralDentistry/GeneralDentistry";
  import DigitalXRays2 from "./components/DentalServices/GeneralDentistry/DigitalXRays2";
  import SedationDentistry from "./components/DentalServices/GeneralDentistry/SedationDentistry";
  import WisdomTeethRemoval from "./components/DentalServices/GeneralDentistry/WisdomTeethRemoval";
  import RootCanalTherapy from "./components/DentalServices/GeneralDentistry/RootCanalTherapy";
import RestorativeDentistry from "./components/DentalServices/RestorativeDentistry/RestorativeDentistry";
  import Crowns from "./components/DentalServices/RestorativeDentistry/Crowns";
  import DentalImplants from "./components/DentalServices/RestorativeDentistry/DentalImplants";
  import Dentures from "./components/DentalServices/RestorativeDentistry/Dentures";
import CosmeticDentist from "./components/DentalServices/CosmeticDentist/CosmeticDentist";
  import ToothColouredDentistry from "./components/DentalServices/CosmeticDentist/ToothColouredDentistry";
  import DentalFillings from "./components/DentalServices/CosmeticDentist/DentalFillings";
  import PorcelainVeneers from "./components/DentalServices/CosmeticDentist/PorcelainVeneers";
  import MercuryFreeDentistry from "./components/DentalServices/CosmeticDentist/MercuryFreeDentistry";
  import TeethWhitening from "./components/DentalServices/CosmeticDentist/TeethWhitening";
import PreventativeCare from "./components/DentalServices/PreventiveCare";
import Invisalign from "./components/DentalServices/Invisalign";
import ThankYouPage from "./components/ThankYou/ThankYouPage";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import SiteMap from "./components/SiteMap/SiteMap";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Banner />
            <QualityService />
            <DiseasePrevention />
            <ClinicalFacts />
          </Route>


        {/* Patient Information */}
          <Route path="/patientinformation">
            <Switch>
              <Route exact path="/patientinformation">
                <PatientInformation />
              </Route>
              <Route path="/patientinformation/scheduling">
                <Scheduling />
              </Route>
              <Route path="/patientinformation/studentdiscounts">
                <StudentDiscounts />
              </Route>
              <Route path="/patientinformation/patienteducation">
              
              {/* Patient Education Subroutes */}
                <Route exact path="/patientinformation/patienteducation">
                  <PatientEducation />
                </Route>
                <Route path="/patientinformation/patienteducation/digitalxrays">
                  <DigitalXRays />
                </Route>
                <Route path="/patientinformation/patienteducation/intraoralcamera">
                  <IntraoralCamera />
                </Route>
                <Route path="/patientinformation/patienteducation/localanesthesia">
                  <LocalAnesthesia />
                </Route>
                <Route path="/patientinformation/patienteducation/patientsafety">
                  <PatientSafety />
                </Route>
                <Route path="/patientinformation/patienteducation/toothdecay">
                  <ToothDecay />
                </Route>
              
              </Route>
            </Switch>
          </Route>

          <Route path="/offers">
            <Offers />
          </Route>

          <Route path="/meetus">
            <MeetUs />
          </Route>


        {/* Dental Services */}
          <Route path="/dentalservices">
            <Switch>

              <Route exact path="/dentalservices">
                <DentalServices />
              </Route>
              <Route path="/dentalservices/emergencydentistry">
                <EmergencyDentistry />
              </Route>

              <Route path="/dentalservices/generaldentistry">
              {/* General Dentistry Subroutes */}
                  <Route exact path="/dentalservices/generaldentistry">
                    <GeneralDentistry />
                  </Route>

                  <Route path="/dentalservices/generaldentistry/digitalxrays2">
                    <DigitalXRays2 />
                  </Route>
                  <Route path="/dentalservices/generaldentistry/sedationdentistry">
                    <SedationDentistry />
                  </Route>
                  <Route path="/dentalservices/generaldentistry/wisdomteethremoval">
                    <WisdomTeethRemoval />
                  </Route>
                  <Route path="/dentalservices/generaldentistry/rootcanaltherapy">
                    <RootCanalTherapy />
                  </Route>
              </Route>

              <Route path="/dentalservices/restorativedentistry">
              {/* Restorative Dentistry Subroutes */}  
                <Route exact path="/dentalservices/restorativedentistry">
                  <RestorativeDentistry />
                </Route>

                <Route path="/dentalservices/restorativedentistry/crowns">
                  <Crowns />
                </Route>
                <Route path="/dentalservices/restorativedentistry/dentures">
                  <Dentures />
                </Route>
                <Route path="/dentalservices/restorativedentistry/dentalimplants">
                  <DentalImplants />
                </Route>
              </Route>

              <Route path="/dentalservices/cosmeticdentist">
              {/* Cosmetic Dentist Subroutes */}   
                <Route exact path="/dentalservices/cosmeticdentist">
                  <CosmeticDentist />
                </Route>

                <Route path="/dentalservices/cosmeticdentist/toothcoloureddentistry">
                  <ToothColouredDentistry />
                </Route>
                <Route path="/dentalservices/cosmeticdentist/dentalfillings">
                  <DentalFillings />
                </Route>
                <Route path="/dentalservices/cosmeticdentist/porcelainveneers">
                  <PorcelainVeneers />
                </Route>
                <Route path="/dentalservices/cosmeticdentist/mercuryfreedentistry">
                  <MercuryFreeDentistry />
                </Route>
                <Route path="/dentalservices/cosmeticdentist/teethwhitening">
                  <TeethWhitening />
                </Route> 
              </Route>

              <Route path="/dentalservices/preventativecare">
                <PreventativeCare />
              </Route>

              <Route path="/dentalservices/invisalign">
                <Invisalign />
              </Route>

            </Switch>
          </Route>


        {/* Other Routes */}
          <Route path="/contactus">
            <ContactUs />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/appointment">
            <Appointment />
          </Route>

          <Route path="/thankyou">
            <ThankYouPage />
          </Route>

          <Route path="/privacypolicy">
            <PrivacyPolicy />
          </Route>

          <Route path="/sitemap">
            <SiteMap/>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
