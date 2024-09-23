import axios from "axios";
import { MdCreate } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure";


const CreateProperty = () => {
     const axiosSecure = useAxiosSecure()
     const location = useLocation()
     const navigate = useNavigate()
     const form = location.state?.form?.pathname || "/dashboard/ourProperties";
     const handleCreate = async(e) => {
          e.preventDefault()
          const image1 = e.target.image1.value;
          const image2 = e.target.image2.value;
          const image3 = e.target.image3.value;
          const image4 = e.target.image4.value;
          const location = e.target.location.value;
          const title = e.target.title.value;
          const property_size = e.target.propertySize.value;
          const build_year = e.target.buildYear.value;
          const bathrooms = e.target.bathroom.value;
          const bedrooms = e.target.bedroom.value;
          const description = e.target.description.value;
          const price = e.target.price.value;
          const property = {
               image:[image1,image2,image3,image4],
               location,title,property_size:`${property_size} sqft`,build_year,bathrooms,bedrooms,description,price
          }
         
         try {
           const res = await axiosSecure.post("/properties",property)
           console.log(res);
           if(res.data.insertedId){
               Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your create success",
                    showConfirmButton: false,
                    timer: 1500
               });
               navigate(form,{replace:true})

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
          <div className="ml-8">
               <div>
                    <div className="mt-[50px] text-gray-300 bg-[#141414]">
                         <div className="p-10 border-2 border-base-100 mt-5 rounded shadow-sm ">
                              <form onSubmit={handleCreate}>
                                   <div className="grid grid-cols-2 lg:grid-cols-4  gap-6">
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Image 1

                                             </label>
                                             <input
                                                  name="image1"
                                                  type="text"
                                                  placeholder="image 1 here "
                                                  className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                             />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Image 2

                                             </label>
                                             <input
                                                  name="image2"
                                                  type="text"
                                                  placeholder="image 2 here "
                                                  className="mt-2 px-4 py-2  bg-[#191919] shadow rounded"
                                             />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Image 3

                                             </label>
                                             <input
                                                  name="image3"
                                                  type="text"
                                                  placeholder="image 3 here"
                                                  className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                             />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Image 4

                                             </label>
                                             <input
                                                  name="image4"
                                                  type="text"
                                                  placeholder="image 4 here"
                                                  className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                             />
                                        </div>

                                   </div>
                                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" >
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Location

                                             </label>
                                             <select name="location" className="select bg-[#191919] mt-3 w-full max-w-xs">
                                                  <option disabled selected>Select Your Location</option>
                                                  <option value={"321 Ocean Drive, Malibu, CA 90265, USA"}>321 Ocean Drive, Malibu, CA 90265, USA</option>
                                                  <option value={"789 Central Park West, New York, NY 10025, USA"}>789 Central Park West, New York, NY 10025, USA</option>
                                                  <option value={"456 Mountain Road, Asheville, NC 28801, USA"}>456 Mountain Road, Asheville, NC 28801, USA</option>
                                                  <option value={"123 Maple Street, Springfield, IL 62704, USA"}>123 Maple Street, Springfield, IL 62704, USA</option>
                                                  <option value={"456 Oak Avenue, New York, NY 10001, USA"}>456 Oak Avenue, New York, NY 10001, USA</option>
                                                  <option value={"789 Lakeview Drive, Lakewood, CO 80226, USA"}>789 Lakeview Drive, Lakewood, CO 80226, USA</option>
                                                  <option value={"789 Downtown Ave, Los Angeles, CA 90017, USA "}>789 Downtown Ave, Los Angeles, CA 90017, USA</option>
                                                  <option value={"123 Wine Country Lane, Napa, CA 94558, USA"}>123 Wine Country Lane, Napa, CA 94558, USA</option>
                                                  <option value={"456 Elm Street, Austin, TX 78704, USA"}>456 Elm Street, Austin, TX 78704, USA</option>
                                                  <option value={"789 Alpine Road, Boulder, CO 80302, USA"}>789 Alpine Road, Boulder, CO 80302, USA</option>
                                                  <option value={"321 Seaside Blvd, Miami, FL 33139, USA"}>321 Seaside Blvd, Miami, FL 33139, USA </option>


                                             </select>
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Property Type

                                             </label>
                                             <select name="title" className="select bg-[#191919] mt-3 w-full max-w-xs">
                                                  <option disabled selected>Select Property Type</option>
                                                  <option value={"Seaside Serenity Villa"}>Seaside Serenity Villa</option>
                                                  <option value={"Metropolitan Haven"}>Metropolitan Haven</option>
                                                  <option value={"Rustic Retreat Cottage"}>Rustic Retreat Cottage</option>
                                                  <option value={"Beachfront Condo with Ocean Views"}>Beachfront Condo with Ocean Views</option>
                                                  <option value={"Mountain Chalet with Scenic Views"} >Mountain Chalet with Scenic Views</option>
                                                  <option value={"Charming Bungalow in the Suburbs"} >Charming Bungalow in the Suburbs</option>
                                                  <option value={"Country Estate with Vineyard"} >Country Estate with Vineyard</option>
                                                  <option value={"Urban Loft with City Views"} >Urban Loft with City Views</option>
                                                  <option value={"Cozy Cottage by the Lake"} >Cozy Cottage by the Lake</option>
                                                  <option value={"Luxury Condo in Downtown"} >Luxury Condo in Downtown</option>
                                                  <option value={"Modern Family Home"} >Modern Family Home</option>

                                             </select>
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  No. Of Bathrooms

                                             </label>
                                             <select name="bathroom" className="select bg-[#191919] mt-3 w-full max-w-xs">
                                                  <option disabled selected>Select  No. Of Bathrooms</option>
                                                  <option value={"1"}>1</option>
                                                  <option value={"2"}>2</option>
                                                  <option value={"3"}>3</option>
                                                  <option value={"4"}>4</option>
                                                  <option value={"5"}>5</option>
                                                  <option value={"6"}>6</option>
                                             </select>
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  No. Of Bedrooms

                                             </label>
                                             <select name="bedroom" className="select bg-[#191919] mt-3  w-full max-w-xs">
                                                  <option disabled selected>Select  No. Of Bedrooms</option>
                                                  <option value={"1"}>1</option>
                                                  <option value={"2"}>2</option>
                                                  <option value={"3"}>3</option>
                                                  <option value={"4"}>4</option>

                                             </select>
                                        </div>

                                   </div>
                                   <div className="grid lg:grid-cols-3  gap-5">
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Price

                                             </label>
                                             <input
                                                  name="price"
                                                  type="number"
                                                  placeholder="Enter your Price"
                                                  className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                             />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Build Year

                                             </label>
                                             <input
                                                  name="buildYear"
                                                  type="number"
                                                  min={1990}
                                                  placeholder="Enter your Build Year"
                                                  className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                             />
                                        </div>
                                        <div className="flex flex-col mb-4">
                                             <label>
                                                  Property Size

                                             </label>
                                             <input
                                                  name="propertySize"
                                                  type="number"
                                                  placeholder="Enter your area"
                                                  className="mt-2 px-4 py-2 bg-[#191919] shadow rounded"
                                                  min={1200}
                                             />
                                        </div>

                                   </div>

                                   <div className="flex flex-col mb-4">
                                        <label>
                                             Description

                                        </label>
                                        <textarea
                                             name="description"
                                             rows="5"
                                             placeholder=""
                                             className="mt-2 bg-[#191919] text-white px-6 py-2 shadow rounded"
                                        ></textarea>
                                   </div>
                                   <div className="">

                                        <div className="text-end" >
                                             <button
                                                  type="submit"
                                                  className="  bg-[#703bf7] rounded-xl  btn font-semibold text-white shadow hover:bg-blue-500"
                                             >
                                                  Create <MdCreate className="text-yellow-300" />
                                             </button>

                                        </div>
                                   </div>

                              </form>
                         </div>
                    </div>

               </div >
          </div >
     );
};

export default CreateProperty;