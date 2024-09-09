import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { MdDelete, MdOutlineHomeWork, MdUpdate } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function OurProducts() {
     const [properties, setProperties] = useState([])

     useEffect(() => {
          axios("http://localhost:5000/properties")
               .then(res => setProperties(res.data))
     }, [])
     console.log(properties);
     return (
          <div className='container mx-auto'>
               <div className='grid grid-cols-4 gap-4'>
                    {properties.map(property => <div key={property._id}>
                         <div className='   border-4 border-base-100'>
                              <img src={property.image} alt={property.title} className='w-full shadow-lg  transition-all duration-100 hover:scale-110  p-5 h-64 object-cover' />
                              <div className='p-4'>
                                   <h3 className='text-xl font-bold'>{property.title}</h3>
                                   <h1> {property.description.slice(0,70)}... </h1>


                                   <div className=" flex flex-row gap-1 mt-4 mb-4 ">

                                        <p className="btn rounded-3xl"> <FaBed className="text-xl"></FaBed> {property.bedrooms} -Beds  </p>
                                        <p className="btn rounded-3xl"> <FaBath className="text-lg"></FaBath> {property.bathrooms} -Bathrooms  </p>
                                        <p className="btn rounded-3xl"> <MdOutlineHomeWork className="text-xl"></MdOutlineHomeWork> villa </p>


                                   </div>


                                   <div className="flex justify-between">
                                        <div>
                                             <p> Price </p>
                                             <p className='text-gray-100 text-lg'>${property.price.toLocaleString()}</p>
                                        </div>

                                        <NavLink to={`/propertyDetails/${property._id}`}><button className='btn  mt-2 text-white bg-[#703bf7] btn-primary'>View Details</button> </NavLink>
                                   </div>
                                  <div>
                                    <button className='btn '> <MdDelete className='text-red-700 text-xl'></MdDelete> delete </button>
                                    <button>  </button>
                                  </div>
                              </div>
                         </div>
                    </div>)}
               </div>
          </div>
     )
}
