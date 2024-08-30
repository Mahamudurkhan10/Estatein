import { FaMapLocation } from "react-icons/fa6";
import { MdEmail, MdLocationCity, MdLocationPin, MdPhone } from "react-icons/md";


const OurLocation = () => {
     return (
          <div className="container mx-auto mt-4 mb-9">
               <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
                    <h1>
                         <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex flex-col gap-6 lg:gap-0  lg:flex-row items-center'>
                         <div>
                              <h1 className='text-4xl text-white font-semibold'>Discover Our Office Locations</h1>
                              <p className='mt-3'>
                                   Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you
                              </p>
                         </div>

                    </div>
                    <div className="grid mt-9 lg:grid-cols-2 grid-cols-1 gap-6">
                         <div className="card p-8  border-4 border-base-100">
                              <h1 className=" mb-2 font-medium text-slate-200" > Main Headquarters</h1>
                              <h1 className="text-3xl mb-2 font-medium text-white" > 123 Estatein Plaza, City Center, Metropolis</h1>
                              <p> Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
                              <div className="flex mt-5 justify-between">
                                   <h1 className="btn rounded-full"> <MdEmail></MdEmail> info@estatein.com </h1>
                                   <h1 className="btn rounded-full"> <MdPhone></MdPhone> +1 (123) 456-7890</h1>
                                   <h1 className="btn rounded-full"> <MdLocationPin /> Metropolis</h1>
                              </div>
                              <button className="btn mt-5 bg-[#703bf7] hover:bg-[#703bf7] text-white">Get Direction</button>
                         </div>
                         <div className="card p-8  border-4 border-base-100">
                              <h1 className=" mb-2 font-medium text-slate-200" > Regional Offices</h1>
                              <h1 className="text-3xl mb-2 font-medium text-white" > 456 Urban Avenue, Downtown District, Metropolis</h1>
                              <p> Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.</p>
                              <div className="flex mt-5 justify-between">
                                   <h1 className="btn rounded-full"> <MdEmail></MdEmail> info@estatein.com </h1>
                                   <h1 className="btn rounded-full"> <MdPhone></MdPhone> +1 (123) 456-7890</h1>
                                   <h1 className="btn rounded-full"> <MdLocationPin /> Metropolis</h1>
                              </div>
                              <button className="btn mt-5 bg-[#703bf7] hover:bg-[#703bf7] text-white">Get Direction</button>
                         </div>



                    </div>
                    <div style={{ background: 'url("https://i.ibb.co/Pc3D7qj/Card.png")' }} className="bg-cover bg-no-repeat bg-center p-9 mt-5" >
                         <div className="grid grid-cols-4  gap-4">
                              <div className="col-span-2"> <img src="https://i.ibb.co/rmpS9yh/Image-4.png" alt="" /> </div>
                              <div className="col-span-2"> <img src="https://i.ibb.co/0BJdpkp/Image-5.png" alt="" /> </div>
                              <div className="col-span-2"> <img src="https://i.ibb.co/HHMCScT/Image-6.png" alt="" /> </div>
                              <div className="col-span-1 border"> <img className="h-full" src="https://i.ibb.co/rmpS9yh/Image-4.png" alt="" /> </div>
                              <div className="col-span-1 border"> <img className="h-full" src="https://i.ibb.co/rmpS9yh/Image-4.png" alt="" /> </div>
                              <div className=" p-7 col-span-2">
                                   <h1>
                                        <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                                   </h1>
                                   <h1 className="text-3xl font-semibold text-white">Explore Estatein's World</h1>
                                   <p>
                                        Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
                                   </p>
                              </div>
                              <div className="col-span-2"> <img src="https://i.ibb.co/rmpS9yh/Image-4.png" alt="" /> </div>

                         </div>
                    </div>

               </div>
          </div>
     );
};

export default OurLocation;