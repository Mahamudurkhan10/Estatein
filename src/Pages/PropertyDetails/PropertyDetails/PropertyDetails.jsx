import AskQuestion from "../../Home/AskQuestion/AskQuestion";
import ExtraSection from "../../Shared/ExtraSection/ExtraSection";


const PropertyDetails = () => {
     return (
          <div className="">
               <div>
                    <div>

                    </div>
                    <div>

                    </div>
               </div>
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
               <div>
                    <div className="container mx-auto ">
                         <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
                              <h1>
                                   <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                              </h1>
                              <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center'>
                                   <div>
                                        <h1 className='text-4xl  text-white font-semibold'>Navigating the Estatein Experience</h1>
                                        <p className='mt-4'>
                                             At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
                                        </p>
                                   </div>
                              </div>
                              <div className="flex gap-5 border-2 p-4 items-center mt-9 border-base-100 bg-[#191919]">
                                   <h1 className="text-2xl font-semibold text-white"> Note </h1>
                                   <p className="border-l-4 border-gray-600 px-4"> The figures provided above are estimates and may vary depending on the property, location, and individual circumstances. </p>
                              </div>
                              <div className=" flex  mt-6  ">
                                   <div className="w-1/4">
                                        <p> Listing </p>
                                        <h1 className="text-2xl font-semibold text-white"> $1,250,000 </h1>
                                   </div>
                                   <div className="w-full grid grid-cols-1 gap-4  ">
                                        <div className="border p-12 border-base-100">
                                             <div className="flex justify-between">
                                                  <h1 className="text-2xl text-white font-medium"> Additional Fees </h1>
                                                  <button className="btn text-white"> Learn More </button>
                                             </div>
                                             <div className="divider"></div>
                                             <div className="grid grid-cols-2">
                                                  <div>
                                                       <p> Property Transfer Tax </p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $25,000 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Based on the sale price and local regulations </p>
                                                       </div>
                                                  </div>
                                                  <div className="border-l-4 border-base-100 pl-4">
                                                       <p> Legal Fees </p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-white text-xl font-semibold" > $3000 </h1>
                                                            <p className="bg-[#191919]  rounded-full p-2"> Approximate cost for legal services, including title transfer</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="divider pt-5"></div>
                                             <div className="grid grid-cols-2">
                                                  <div>
                                                       <p> Home Inspection</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $500 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Recommended for due diligence</p>
                                                       </div>
                                                  </div>
                                                  <div className="border-l-4 border-base-100 pl-4">
                                                       <p> Property Insurance</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-white text-xl font-semibold" > $1,200 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Annual cost for comprehensive property insurance</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="divider"></div>
                                             <div className="  border-base-100 ">
                                                  <p> Mortgage Fees</p>
                                                  <div className="flex items-center mt-3 gap-9">
                                                       <h1 className="text-white text-xl font-semibold" > Varies </h1>
                                                       <p className="bg-[#191919] rounded-full p-2"> If applicable, consult with your lender for specific details</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="border p-12 border-base-100">
                                             <div className="flex justify-between">
                                                  <h1 className="text-2xl text-white font-medium"> Monthly Costs</h1>
                                                  <button className="btn"> Learn More </button>
                                             </div>
                                             <div className="divider"></div>
                                             <div className="">
                                                  <div>
                                                       <p> Property Taxes</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $1,250 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Approximate monthly property tax based on the sale price and local rates</p>
                                                       </div>
                                                  </div>
                                                 
                                             </div>
                                             <div className="divider pt-5"></div>
                                             <div className="">
                                                  <div>
                                                       <p> Homeowners' Association Fee</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $300 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Monthly fee for common area maintenance and security</p>
                                                       </div>
                                                  </div>
                                                  
                                             </div>
                                            
                                             
                                        </div>
                                        <div className="border p-12 border-base-100">
                                             <div className="flex justify-between">
                                                  <h1> Total Initial Costs</h1>
                                                  <button className="btn"> Learn More </button>
                                             </div>
                                             <div className="divider"></div>
                                             <div className="grid grid-cols-2">
                                                  <div>
                                                       <p> Listing Price</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $1,250,000 </h1>
                                                            
                                                       </div>
                                                  </div>
                                                  <div className="border-l-4 border-base-100 pl-4">
                                                       <p> Additional Fees</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-white text-xl font-semibold" > $19,700 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Property transfer tax, legal fees, inspection, insurance</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="divider pt-5"></div>
                                             <div className="grid grid-cols-2">
                                                  <div>
                                                       <p> Down Payment</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $250,000 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> 20%</p>
                                                       </div>
                                                  </div>
                                                  <div className="border-l-4 border-base-100 pl-4">
                                                       <p> Mortgage Amount</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-white text-xl font-semibold" > $1,000,000 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> If applicable</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             
                                        </div>
                                        <div className="border p-12 border-base-100">
                                             <div className="flex justify-between">
                                                  <h1> Monthly Expenses</h1>
                                                  <button className="btn"> Learn More </button>
                                             </div>
                                             <div className="divider"></div>
                                             <div className="grid grid-cols-2 ">
                                                  <div>
                                                       <p> Property Taxes</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> $1,250 </h1>
                                                            
                                                       </div>
                                                  </div>
                                                  <div className="border-l-4 border-base-100 pl-4">
                                                       <p> Homeowners' Association Fee</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-white text-xl font-semibold" > $300 </h1>

                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="divider pt-5"></div>
                                             <div className="grid grid-cols-2">
                                                  <div>
                                                       <p> Mortgage Payment</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-xl text-white font-semibold"> Varies based on terms and interest rate</h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> If applicable</p>
                                                       </div>
                                                  </div>
                                                  <div className="border-l-4 border-base-100 pl-4">
                                                       <p> Property Insurance</p>
                                                       <div className="flex items-center mt-3 gap-9">
                                                            <h1 className="text-white text-xl font-semibold" > $100 </h1>
                                                            <p className="bg-[#191919] rounded-full p-2"> Approximate monthly cost</p>
                                                       </div>
                                                  </div>
                                             </div>
                                             
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <AskQuestion></AskQuestion>
               <ExtraSection></ExtraSection>
          </div>
     );
};

export default PropertyDetails;