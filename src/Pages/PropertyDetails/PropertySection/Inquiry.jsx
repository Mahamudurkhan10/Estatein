
import React from 'react';

const Inquiry = () => {
     return (
          <div>
               <div className="mt-9">
                    <div className="container mx-auto mt-9 mb-9">
                         <div className="max-w-[1400px] flex justify-between  mx-auto">
                              <div className='mb-3 w-1/2 '>
                                   <h1>
                                        <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                                   </h1>
                                   <div className='flex flex-col gap-3 lg:gap-0   lg:flex-row items-center'>
                                        <div>
                                             <h1 className='text-4xl  text-white font-bold'>Inquire About Seaside Serenity Villa</h1>
                                             <p className=' w-3/5 mt-3'>
                                                  Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
                                             </p>
                                        </div>

                                   </div>
                              </div>
                              <div className="w-full">
                                   <div className=" ">
                                        <div className="p-10 border-2 border-base-100 mt-5 rounded shadow-sm ">
                                             <form>
                                                  <div className="grid grid-cols-2 lg:grid-cols-2  gap-6">
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
                                                       <div className="flex flex-col mb-4">
                                                            <label>
                                                                 Phone

                                                            </label>
                                                            <input
                                                                 type="number"
                                                                 placeholder="Enter your Number"
                                                                 className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                                            />
                                                       </div>

                                                  </div>

                                                  <div className="">
                                                       <div className="flex flex-col mb-4 " >
                                                            <label >
                                                                 Buget

                                                            </label>
                                                            <select className="select bg-[#191919]  mt-5  w-full ">
                                                                 <option disabled selected>Select  No. Of Bedrooms</option>
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
                                                  <div className="flex justify-between flex-col gap-5 lg:flex-row">
                                                       <div className="form-control flex flex-row items-center gap-3">

                                                            <input type="checkbox" className="checkbox" />
                                                            <label className="label ">
                                                                 I agree with Terms of Use and Privacy Policy

                                                            </label>
                                                       </div>
                                                       <div className="text-end" >
                                                            <button
                                                                 type="submit"
                                                                 className=" bg-[#703bf7] rounded-xl btn  text-white shadow hover:bg-blue-500"
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
               </div>
          </div>
     );
};

export default Inquiry;