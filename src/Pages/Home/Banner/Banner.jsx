

const Banner = () => {
     return (
          <div className="bg-[#141414]  ">
               <div className=" container mx-auto  mt-5 ">
                    <div className=" flex flex-col lg:items-center lg:justify-between lg:flex-row-reverse ">
                         <img
                              src="https://i.ibb.co/8N5v8ym/Image.png"

                              className=" max-w-3xl lg:w-1/2 border relative border-black  rounded-lg shadow-2xl" />
                              <img src="https://i.ibb.co/0cp6f5s/Sub-Container.png" className=" absolute  lg:mr-[700px]  lg:mb-[200px] hover:shadow-2xl lg:mt-0  mt-[240px] " alt="" />
                         <div className=" lg:ml-[60px] px-2 py-5 lg:py-[200px]">
                              <h1 className="text-3xl lg:text-4xl lg:w-4/5  text-white font-bold">Discover Your Dream Property with Estatein</h1>
                              <p className=" mt-2 lg:w-2/3">
                                   our journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                              </p>
                              <div className="mt-4 flex   lg:gap-9  lg:justify-start justify-around">
                                   <button className="btn bg-[#141414] text-white"> Learn More </button>
                                   <button className="btn bg-[#703bf7] text-white"> Browse Properties </button>
                              </div>
                             <div className="grid grid-cols-3 gap-4  lg:w-4/5  mt-8">
                              <div className=" bg-[#191919] rounded-lg p-5">
                                   <h1 className="text-2xl font-bold text-white"> 200+ </h1>
                                   <p className="text-xl"> Happy Customers </p>
                              </div>
                              <div className=" bg-[#191919]  rounded-lg p-5">
                                   <h1  className="text-2xl font-bold text-white" > 10k+ </h1>
                                   <p className="text-xl" > Properties For Clients </p>
                              </div>
                              <div className=" bg-[#191919]  rounded-lg p-5">
                                   <h1  className="text-2xl font-bold text-white" > 16k+ </h1>
                                   <p className="text-xl" > Years of Experience </p>
                              </div>
                             </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;