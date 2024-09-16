import ExtraSection from "../../Shared/ExtraSection/ExtraSection";
import AboutBanner from "../AboutBanner/AboutBanner";
import Navigating from "../Navigating/Navigating";
import OurAchievement from "../OurAchivment/OurAchievement";
import OurClient from "../OurClient/OurClient";
import OurValues from "../OurValues/OurValues";
import Team from "../Team/Team";


const AboutUs = () => {
     return (
          <div className="text-gray-200">
                 <AboutBanner></AboutBanner>
                 <OurValues></OurValues>
                 <OurAchievement></OurAchievement>
                 <Navigating></Navigating>
                 <Team></Team>
                 <OurClient></OurClient>
                 <ExtraSection></ExtraSection>
          </div>
     );
};

export default AboutUs;