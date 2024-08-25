

const AboutBanner = () => {
     return (
          <div>
               <div className="bg-[#141414] container mx-auto  ">
                    <div className=" max-w-[1400px] mx-auto  ">
                         <div className="p-2 flex  flex-col lg:items-center lg:flex-row-reverse ">
                              <img
                                   src="https://i.ibb.co/ZmGCYTn/Sub-Container-1.png"

                                   className=" max-w-3xl lg:w-1/2 border relative border-black  rounded-lg shadow-2xl" />
                              
                              <div className="  px-2 py-5 lg:py-[150px]"> 
                                   <h1>
                                        <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                                   </h1>
                                   <h1 className="text-3xl mt-5 lg:text-4xl lg:w-4/5  text-white font-bold">Our Journey</h1>
                                   <p className=" mt-2 lg:w-2/3">
                                   Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                                   </p>
                                  
                                   <div className="grid grid-cols-3 gap-4  lg:w-4/5  mt-8">
                                        <div className=" bg-[#191919] rounded-lg p-5">
                                             <h1 className="text-2xl font-bold text-white"> 200+ </h1>
                                             <p className="text-xl"> Happy Customers </p>
                                        </div>
                                        <div className=" bg-[#191919]  rounded-lg p-5">
                                             <h1 className="text-2xl font-bold text-white" > 10k+ </h1>
                                             <p className="text-xl" > Properties For Clients </p>
                                        </div>
                                        <div className=" bg-[#191919]  rounded-lg p-5">
                                             <h1 className="text-2xl font-bold text-white" > 16k+ </h1>
                                             <p className="text-xl" > Years of Experience </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutBanner;