import React from 'react';

const LetsConnect = () => {
     return (




          <div className="container mx-auto mt-9 mb-9">
               <div className="max-w-[1400px] mx-auto">
                    <div className='mb-3'>
                         <h1>
                              <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                         </h1>
                         <div className='flex flex-col gap-3 lg:gap-0   lg:flex-row items-center'>
                              <div>
                                   <h1 className='text-4xl text-white font-bold'>Let's Connect</h1>
                                   <p className=' mt-3'>
                                        We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
                                   </p>
                              </div>

                         </div>
                    </div>
                    <div>
                         <div className="mt-[50px]">
                              <div className="p-10 border-2 border-base-100 mt-5 rounded shadow-sm ">
                                   <form>
                                        <div className="grid grid-cols-2 lg:grid-cols-3  gap-6">
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       First Name

                                                  </label>
                                                  <input
                                                       type="text"
                                                       placeholder="Enter  Your First Name"
                                                       className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                                  />
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       Last Name

                                                  </label>
                                                  <input
                                                       type="text"
                                                       placeholder="Enter Your Last Name "
                                                       className="mt-2 px-4 py-2  bg-[#191919] shadow rounded"
                                                  />
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       Email

                                                  </label>
                                                  <input
                                                       type="email"
                                                       placeholder="Enter your Email"
                                                       className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                                  />
                                             </div>


                                        </div>
                                        <div className="grid grid-cols-2 items-center lg:grid-cols-3 gap-6" >
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                     Number

                                                  </label>
                                                  <input
                                                       type="number"
                                                       placeholder="Enter your Number"
                                                       className="mt-2 px-4 py-3  bg-[#191919] shadow rounded"
                                                  />
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                  Inquiry Type

                                                  </label>
                                                  <select className="select bg-[#191919] mt-3 w-full ">
                                                       <option disabled selected>Select Your Location</option>
                                                       <option>Han Solo</option>
                                                       <option>Greedo</option>
                                                  </select>
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                  How Did You Hear About Us?

                                                  </label>
                                                  <select className="select bg-[#191919] mt-3 w-full ">
                                                       <option disabled selected>Select Property Type</option>
                                                       <option>Han Solo</option>
                                                       <option>Greedo</option>
                                                  </select>
                                             </div>


                                        </div>


                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Message

                                             </label>
                                             <textarea
                                                  rows="5"
                                                  placeholder=""
                                                  className="mt-2 bg-[#191919] text-white px-6 py-2 shadow rounded"
                                             ></textarea>
                                        </div>
                                        <div className="flex justify-between flex-col lg:flex-row">
                                             <div className="form-control flex flex-row items-center gap-3">

                                                  <input type="checkbox" className="checkbox" />
                                                  <label className="label ">
                                                       I agree with Terms of Use and Privacy Policy

                                                  </label>
                                             </div>
                                             <div className="text-end" >
                                                  <button
                                                       type="submit"
                                                       className=" bg-[#703bf7] rounded-xl  py-4 px-10 font-semibold text-white shadow hover:bg-blue-500"
                                                  >
                                                       Send Message
                                                  </button>

                                             </div>
                                        </div>

                                   </form>
                              </div>
                         </div>

                    </div>
               </div>
          </div>
     );
};




export default LetsConnect;