
import { NavLink } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
     return (
          <div className="bg-[#141414]  ">
               <div className=" container mx-auto  mt-5 ">
                    <div className=" flex flex-col lg:items-center lg:justify-between lg:flex-row-reverse ">
                         <img
                              src="https://i.ibb.co/8N5v8ym/Image.png"

                              className=" max-w-3xl lg:w-1/2 border relative border-black  rounded-lg shadow-2xl" />

                         <div className='absolute lg:mr-[700px] lg:-mt-[300px] mt-[250px]'>
                            <NavLink to={'/properties'}>  <div className="relative w-[120px]  cursor-not-allowed">
                                   <img
                                        src="https://i.ibb.co/0cp6f5s/Sub-Container.png" // Replace with your image URL
                                        alt="Loading..."
                                        className="w-full h-full  rounded-full border-2 border-gray-700 shadow-[inset_-10px_-10px_10px_#6359f8,inset_0px_-10px_10px_0px_#9c32e2,inset_10px_-10px_10px_#f36896,inset_10px_0_10px_#ff0b0b,inset_10px_10px_10px_0px#ff5500,inset_0_10px_10px_0px_#ff9500,inset_-10px_10px_10px_0px_#ffb700] hover:animate-none animate-spin"
                                   />
                              </div></NavLink>
                         </div>

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
     );
};

export default Banner;