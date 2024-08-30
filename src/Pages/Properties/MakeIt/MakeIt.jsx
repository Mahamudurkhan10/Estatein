

const MakeIt = () => {
     return (
          <div className="container mx-auto mt-9 mb-9">
               <div className="max-w-[1400px] mx-auto">
                    <div className='mb-3'>
                         <h1>
                              <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                         </h1>
                         <div className='flex flex-col gap-3 lg:gap-0   lg:flex-row items-center'>
                              <div>
                                   <h1 className='text-4xl text-white font-bold'>Let's Make it Happen</h1>
                                   <p className=' mt-3'>
                                        Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
                                   </p>
                              </div>

                         </div>
                    </div>
                    <div>
                         <div className="mt-[50px]">
                              <div className="p-10 border-2 border-base-100 mt-5 rounded shadow-sm ">
                                   <form>
                                        <div className="grid grid-cols-2 lg:grid-cols-4  gap-6">
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
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" >
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       Preferred Location

                                                  </label>
                                                  <select className="select bg-[#191919] mt-3 w-full max-w-xs">
                                                       <option disabled selected>Select Your Location</option>
                                                       <option>Han Solo</option>
                                                       <option>Greedo</option>
                                                  </select>
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       Property Type

                                                  </label>
                                                  <select className="select bg-[#191919] mt-3 w-full max-w-xs">
                                                       <option disabled selected>Select Property Type</option>
                                                       <option>Han Solo</option>
                                                       <option>Greedo</option>
                                                  </select>
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       No. Of Bathrooms

                                                  </label>
                                                  <select className="select bg-[#191919] mt-3 w-full max-w-xs">
                                                       <option disabled selected>Select  No. Of Bathrooms</option>
                                                       <option>Han Solo</option>
                                                       <option>Greedo</option>
                                                  </select>
                                             </div>
                                             <div className="flex flex-col mb-4">
                                                  <label>
                                                       No. Of Bedrooms

                                                  </label>
                                                  <select className="select bg-[#191919] mt-3  w-full max-w-xs">
                                                       <option disabled selected>Select  No. Of Bedrooms</option>
                                                       <option>Han Solo</option>
                                                       <option>Greedo</option>
                                                  </select>
                                             </div>

                                        </div>
                                        <div className="grid lg:grid-cols-2  gap-5">
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
                                             <div>
                                                  <label htmlFor="">
                                                       Preferred Contact Method
                                                       <div className="grid grid-cols-2 items-center gap-5">


                                                            <div>

                                                                 <label className="input bg-[#191919] input-bordered mt-5 flex items-center gap-2">
                                                                      <svg
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           viewBox="0 0 16 16"
                                                                           fill="currentColor"
                                                                           className="h-4 w-4 opacity-70"
                                                                      >
                                                                           <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                                                           <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                                                      </svg>
                                                                      <input
                                                                           type="text"
                                                                           className="grow"
                                                                           placeholder="Enter Your Email"
                                                                      />

                                                                 </label>

                                                            </div>
                                                            <div>
                                                                 <label className="input input-bordered mt-5 flex bg-[#191919] items-center gap-2">
                                                                      <svg
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           viewBox="0 0 24 24"
                                                                           fill="currentColor"
                                                                           className="h-4 w-4 opacity-70"
                                                                      >
                                                                           <path d="M3 2.25a.75.75 0 0 1 .75.75v2.618a.75.75 0 0 1-.579.726 9.745 9.745 0 0 0-.691 3.384c0 2.563 1.004 5.044 2.814 6.854 1.81 1.81 4.29 2.814 6.854 2.814 1.179 0 2.346-.163 3.384-.691a.75.75 0 0 1 .726-.579H21a.75.75 0 0 1 .75.75v2.618a.75.75 0 0 1-.75.75h-3.75c-6.456 0-11.75-5.294-11.75-11.75V3a.75.75 0 0 1 .75-.75h2.618A.75.75 0 0 1 9 3v3.375a.75.75 0 0 1-.879.743A7.251 7.251 0 0 1 4.25 9H3.75a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75h2.25Z" />
                                                                      </svg>
                                                                      <input
                                                                           type="text"
                                                                           className="grow w-full"
                                                                           placeholder="Enter Your  Number"
                                                                      />
                                                                 </label>


                                                            </div>
                                                       </div>
                                                  </label>
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

export default MakeIt;