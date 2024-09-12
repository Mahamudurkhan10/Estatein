import { FaBath, FaBed, FaChartArea } from "react-icons/fa";

import ExtraSection from "../../Shared/ExtraSection/ExtraSection";
import { IoFlashOutline } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdLocationPin } from "react-icons/md";
import Inquiry from "../PropertySection/Inquiry";
import AskQuestion from "../../Home/AskQuestion/AskQuestion";

import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";


const PropertyDetails = () => {
     const property = useLoaderData()
     const { user } = useContext(AuthContext)
     const axiosPublic = useAxiosPublic()
     const images = property?.image
     const location = useLocation()
     const navigate = useNavigate()
     const form = location.state?.form?.pathname || "/";
     const newProperty = {
          image: property?.image,
          location : property.location,
           title :property.title,
            property_size:property.property_size,
             build_year: property.build_year,
              bathrooms :property.bathrooms,
               bedrooms :property.bedrooms, 
               description : property.description,
                price :property.price,
                email:user?.email,
                id : property._id

     }
     const handleCard = async () => {
          try {
               const res = await axiosPublic.post("/addCard",newProperty)
               console.log(res);
               if (res.data.insertedId) {
                    Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Your create success",
                         showConfirmButton: false,
                         timer: 1500
                    });
                    navigate(form, { replace: true })

               }
               else if (res.data.insertedId === null){
                    Swal.fire({
                         position: "top-end",
                         icon: "error",
                         title: "Your property already exist ",
                         showConfirmButton: false,
                         timer: 1500
                    });
               }
          } catch (error) {
               console.log(error);
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
               });
          }


     }


     return (
          <div className="">
               <div>
                    <div className=" container  mx-auto ">
                         <div className="max-w-[1400px] p-4  mx-auto">
                              <div className="flex justify-between  mb-5">
                                   <div className="flex items-center  gap-6 ">
                                        <h1 className="text-3xl text-white font-semibold"> {property.title} </h1>
                                        <p className="flex items-center gap-3 text-white font-medium p-2 border border-base-100"> <MdLocationPin></MdLocationPin> {property.location} </p>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <button onClick={handleCard}
                                             className="btn bg-[#703bf7] text-white rounded-full px-4 py-2 hover:bg-[#a18dcf]"

                                        >
                                             Add to card
                                        </button>
                                        <h1 className="text-lg"> Price </h1>
                                        <p className="text-white  text-xl"> $ {property.price}  </p>
                                   </div>
                              </div>
                              <Carousel className="">

                                   {
                                        images.map(img => {
                                             return <div className="h-[500px] opacity-95">
                                                  <img src={img} alt="" className="h-full w-full object-cover" /> {/* Ensure image fills the div */}
                                             </div>
                                        })
                                   }
                              </Carousel>
                         </div>
                    </div>
                    <div className="container mx-auto">
                         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2   gap-4  mt-5">
                              <div className="border border-base-100 h-[300px] p-9">
                                   <h1 className="text-xl text-white"> Description </h1>
                                   <p> {property.description} </p>
                                   <div className="divider"></div>
                                   <div className=" grid grid-cols-3">
                                        <div>
                                             <h1 className="flex items-center gap-3"> <FaBed></FaBed> Bedrooms </h1>
                                             <h1 className="text-xl text-white"> 0{property.bedrooms} </h1>
                                        </div>
                                        <div className="border-l-2 border-base-100 px-3">
                                             <h1 className="flex items-center gap-3"> <FaBath></FaBath> Bathrooms </h1>
                                             <h1 className="text-xl text-white"> 0 {property.bathrooms} </h1>
                                        </div>
                                        <div className="border-l-2 border-base-100 px-3">
                                             <h1 className="flex items-center gap-3"> <FaChartArea></FaChartArea> Area </h1>
                                             <h1 className="text-xl text-white">  {property.property_size} sqft </h1>
                                        </div>
                                   </div>
<h1> hii </h1>
                              </div>
                              <div className="border p-6 border-base-100">
                                   <h1 className="text-xl text-white "> Key Features and Amenities </h1>
                                   <div>
                                        <h1 className="flex gap-2 bg-[#191919] p-2   ml-4 mt-5 w-4/5 border-l-2 border-indigo-500"> <IoFlashOutline className="text-xl text-white" />  Expansive oceanfront terrace for outdoor entertaining </h1>
                                        <h1 className="flex gap-2 bg-[#191919] p-2   ml-4 mt-5 w-4/5 border-l-2 border-indigo-500"> <IoFlashOutline className="text-xl text-white" />  Expansive oceanfront terrace for outdoor entertaining </h1>
                                        <h1 className="flex gap-2 bg-[#191919] p-2   ml-4 mt-5 w-4/5 border-l-2 border-indigo-500"> <IoFlashOutline className="text-xl text-white" />  Expansive oceanfront terrace for outdoor entertaining </h1>
                                        <h1 className="flex gap-2 bg-[#191919] p-2   ml-4 mt-5 w-4/5 border-l-2 border-indigo-500"> <IoFlashOutline className="text-xl text-white" />  Expansive oceanfront terrace for outdoor entertaining </h1>
                                        <h1 className="flex gap-2 bg-[#191919] p-2   ml-4 mt-5 w-4/5 border-l-2 border-indigo-500"> <IoFlashOutline className="text-xl text-white" />  Expansive oceanfront terrace for outdoor entertaining </h1>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div>
                    <Inquiry></Inquiry>
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
                                        <h1 className="text-2xl font-semibold text-white"> ${property.price}</h1>
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
                                                            <h1 className="text-xl text-white font-semibold"> ${property.price} </h1>

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