

const ExtraSection = () => {
     return (
          <div className=" container mx-auto mb-5 mt-5">
              

               
               <div
                    className="object-cover  " 
                    style={{
                         backgroundImage: "url(https://i.ibb.co/gWRbMzd/CTA.png)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="p-24 ">
                         <div className="flex justify-between items-center">
                              <div>
                              <h1 className="text-3xl text-white mb-4 font-semibold">Start Your Real Estate Journey Today</h1>
                              <p className="w-3/4">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                              </div>
                              <button className="btn bg-[#703bf7] text-white hover:bg-[#572fbd]">Explore Properties</button>
                         </div>
                    </div>
               </div>
              
          </div>
     );
};

export default ExtraSection;