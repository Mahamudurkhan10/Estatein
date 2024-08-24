import { useState } from "react";
import { FaBath, FaBed, FaHome } from "react-icons/fa";
import { MdBathroom, MdOutlineHomeWork } from "react-icons/md";


const PropertiesCard = ({property}) => {
     const [isExpended,setIsExpended] = useState(false)
     const {description} = property;
     const newDescripton = `${description.slice(0,70)}...`
     return (
          <div>
                    <div className='property-slide hover:shadow-2xl border border-black '>
                    <img src={property.image} alt={property.title} className='w-full h-64 object-cover' />
                    <div className='p-4'>
                      <h3 className='text-xl font-bold'>{property.title}</h3>
                      <p onClick={()=>setIsExpended(!isExpended)} >
                         {
                              isExpended?description:newDescripton
                              
                         }
                          <button className="btn btn-ghost" onClick={()=>setIsExpended(!isExpended)}>
                         {
                              isExpended?"view Less":"view More"
                         }
                      </button>
                      </p>
                     
                      
                      <div className="flex  mt-4 mb-4 gap-2 flex-col lg:flex-row">

                      <p className="btn rounded-3xl"> <FaBed className="text-xl"></FaBed> {property.bedrooms} -Beds  </p>
                      <p className="btn rounded-3xl"> <FaBath className="text-lg"></FaBath> {property.bathrooms} -Bathrooms  </p>
                      <p className="btn rounded-3xl"> <MdOutlineHomeWork className="text-xl"></MdOutlineHomeWork> villa </p>
                      
                      
                      </div>
                     
                     
                     <div className="flex justify-between">
                     <div>
                         <p> Price </p>
                     <p className='text-gray-100 text-lg'>${property.price.toLocaleString()}</p>
                     </div>
                     <button className='btn w-2/3 mt-2 text-white bg-[#703bf7] btn-primary'>View Details</button>
                     </div>
                      
                    </div>
                  </div>
          </div>
     );
};

export default PropertiesCard;