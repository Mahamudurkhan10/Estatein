import Section from "../../Home/Section/Section";
import ExtraSection from "../../Shared/ExtraSection/ExtraSection";
import ContactSection from "../ContactSection/ContactSection";
import GetInTouch from "../GetInTouch/GetInTouch";
import LetsConnect from "../LetsConnect/LetsConnect";
import OurLocation from "../OurLocation/OurLocation";


const Contact = () => {
     return (
          <div className="text-gray-200">
                <GetInTouch></GetInTouch>
                <ContactSection></ContactSection>
                <LetsConnect></LetsConnect>
                <OurLocation></OurLocation>
               <ExtraSection></ExtraSection>
          </div>
     );
};

export default Contact;