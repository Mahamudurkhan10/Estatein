import AboutBanner from "../AboutBanner/AboutBanner";
import Navigating from "../Navigating/Navigating";
import OurAchievement from "../OurAchivment/OurAchievement";
import OurValues from "../OurValues/OurValues";


const AboutUs = () => {
     return (
          <div className="">
                 <AboutBanner></AboutBanner>
                 <OurValues></OurValues>
                 <OurAchievement></OurAchievement>
                 <Navigating></Navigating>
          </div>
     );
};

export default AboutUs;