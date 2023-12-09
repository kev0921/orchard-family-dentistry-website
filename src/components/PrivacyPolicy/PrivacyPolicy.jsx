import React, { useState, useEffect } from "react";
import family1 from "../../images/family1.jpg"

const PrivacyPolicy = () => {
  return (
<div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        (“Important Information About Your Privacy”) Orchard Family Dentistry is committed to respecting your privacy.
        We provide this notice to inform you of Orchard Family Dentistry’s practices & procedures to keep your information private.
        This statement is subject to change without notice to you. Please read this statement each time you visit the web site
        so that you will be fully informed regarding Orchard Family Dentistry’s privacy policies.
      </p>
      <p style={styles.paragraph}>
        Orchard Family Dentistry’s Privacy Statement addresses only the use & disclosure of information collected in this web site.
        Orchard Family Dentistry disclaims any & all responsibility for private information that you, the User, may disclose to any third parties
        who may be linked to this web site. These other linked web sites may have different rules & procedures about the use or disclosure
        of personal information, & we suggest that you review the Privacy Statements of each web site that you visit, whether you directly
        access such web sites or link to them from this web site.
      </p>
      <p style={styles.paragraph}>
      In general, you can visit this web site without disclosing any personally identifiable information. However, as a courtesy, Orchard Family Dentistry 
      maintains a number of forms that you may use to contact us &/or request information from us, more specifically, without limitation, the “Contact Us” 
      form; & the “Request an Appointment” form. These forms require the User to submit certain personal information, including but not limited to, the User’s 
      name, address, e-mail address, & telephone number. Orchard Family Dentistry may, however, use this information to contact the User regarding the User’s inquiries. 
      Orchard Family Dentistry will not sell, rent or otherwise disseminate this information to entities not affiliated with Orchard Family Dentistry unless required to do so by law.
      </p>
      <p style={styles.paragraph}>
      LIKE MANY WEB SITES, THIS WEB SITE DOES USE “COOKIES” TO KEEP TRACK OF INFORMATION RELATING TO THE USERS’ USE OF THIS WEB SITE. THE COOKIES MAY COLLECT 
      INFORMATION SUCH AS YOUR EMAIL ADDRESS & THE SERVER THAT YOU USE &, IF YOU SUPPLY US WITH INFORMATION ABOUT YOURSELF IN CONNECTION WITH A FORM OR AN EMAIL, 
      OR IN ANY OTHER MANNER, THAT INFORMATION MAY BE COMBINED WITH THE COOKIES WE OBTAIN FROM YOU. ORCHARD FAMILY DENTISTRY USES THIS INFORMATION FOR INTERNAL PURPOSES ONLY 
      SUCH AS TO ANALYZE THIS DATA FOR TRENDS & STATISTICS & TO HELP US IMPROVE OUR WEB SITE & TAILOR IT TO MEET OUR USERS’ NEEDS. ORCHARD FAMILY DENTISTRY DOES NOT SELL OR SHARE 
      ANY PERSONALLY IDENTIFIABLE INFORMATION &, EXCEPT AS PROVIDED HEREIN, ORCHARD FAMILY DENTISTRY WILL NOT KNOWINGLY DISSEMINATE INFORMATION ABOUT YOU TO PARTIES NOT AFFILIATED 
      WITH ORCHARD FAMILY DENTISTRY UNLESS REQUIRED TO DO SO BY LAW.
      </p>
      <p style={styles.paragraph}>
      You should be aware, however, that persons not associated with Orchard Family Dentistry may engage in unauthorized practices with the purpose of obtaining your personal 
      information. Orchard Family Dentistry discourages this type of activity, but cannot guarantee that it will not occur. The Internet is openly accessible to all & therefore, 
      it can take on a life of its own. Thus, Orchard Family Dentistry cannot guarantee against inadvertent or unknowing disclosures of information about you to others. To the extent 
      permitted by law, Orchard Family Dentistry disclaims all liability for any & all such inadvertent disclosures.
      </p>
      <p style={styles.paragraph}>
        This site uses reCAPTCHA v3 and your use of reCAPTCHA v3 is subject to the Google Privacy Policy and Terms of Use.
        reCAPTCHA may only be used to fight spam and abuse on this site.
      </p>
      <p style={styles.paragraph}>
        This site uses reCAPTCHA and that your use of reCAPTCHA is subject to the Google Privacy Policy and Terms of Use.
      </p>
      <p style={styles.paragraph}>
        By accessing this web site, you, the User, are giving your consent & approval to the privacy practices & procedures of Orchard Family Dentistry.
        This Privacy Statement is incorporated into the Terms & Conditions of Orchard Family Dentistry as though set forth in its entirety.
      </p>
      <p style={styles.paragraph}>
      © 2023 Orchard Family Dentistry, all rights reserved
      </p>
    </div>
  );
};
const styles = {
container: {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
},
header: {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
},
paragraph: {
  marginBottom: '15px',
},
};


export default PrivacyPolicy;
