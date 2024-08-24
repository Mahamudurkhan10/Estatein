import Banner from "../Banner/Banner";
import FeaturedProperties from "../Featured Properties/FeaturedProperties";
import ReviewSection from "../Review/ReviewSection";

import Section from "../Section/Section";


const Home = () => {
     return (
          <div  >
               <Banner></Banner>
               <Section></Section>
               <FeaturedProperties></FeaturedProperties>
                <ReviewSection></ReviewSection>
          </div>
     );
};

export default Home;