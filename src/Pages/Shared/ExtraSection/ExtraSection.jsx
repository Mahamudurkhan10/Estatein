

const ExtraSection = () => {
     return (
          <div className=" container mx-auto lg:border-2  lg:border-base-100 mb-7 mt-9">
              <div
                    className="lg:bg-cover lg:bg-center lg:bg-no-repeat lg:h-[190px] lg:p-6" 
                    style={{
                         backgroundImage: "url(https://i.ibb.co/gWRbMzd/CTA.png)",
                    }}>
                    
                    <div className="lg:max-w-[1400px] lg:mx-auto  ">
                         <div className="flex flex-col lg:flex-row p-3 lg:p-0 lg:justify-between items-center">
                              <div>
                              <h1 className="text-4xl text-white mb-4 font-semibold">Start Your Real Estate Journey Today</h1>
                              <p className="lg:w-3/4">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                              </div>
                              <button className="btn bg-[#703bf7] px-6 mt-4 lg:mt-0  mr-7 text-white hover:bg-[#572fbd]">Explore Properties</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection;