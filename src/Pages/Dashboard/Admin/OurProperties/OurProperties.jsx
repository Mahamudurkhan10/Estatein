import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GrDocumentUpdate } from 'react-icons/gr'
import { MdCreate, MdDelete, MdLocationPin, MdOutlineHomeWork, MdUpdate } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import useProperties from '../../../../Components/Hooks/useProperties'
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic'

export default function ourProperties() {
    const [properties,refetch,loading] = useProperties()
    const axiosPublic = useAxiosPublic()
     const handleDelete = async (id) =>{
          try {
               const res = await axiosPublic.delete(`/propertyDelete/${id}`)
               if(res.data.deletedCount >0){
                    refetch()
                    Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Your create success",
                         showConfirmButton: false,
                         timer: 1500
                    });

               }
          } catch (error) {
               console.log(error);
               
          }
          
     }
     if (loading) {
          return <div className="flex flex-row justify-center space-x-4">
          <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>
      
          <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>
      
          <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>
      
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
          </div>
      </div>;
        }
     return (
          <div className='lg:ml-8 '>
               <div className='mb-9'>
                    <h1 className='text-4xl text-[#703bf7] font-bold text-center'> Our Properties  </h1>
               </div>
               <div className='mb-4 flex flex-col lg:flex-row lg:justify-evenly gap-3 lg:gap-0 lg:items-center '>
                    <div className='flex-1'>
                         <div className=" flex  w-full ">
                              <div className="flex relative rounded-md w-full  max-w-xl">
                                   <input
                                        type="text"
                                        name="q"
                                        id="query"
                                        placeholder="search"
                                        className="w-full p-3 rounded-l-md border-2 border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:border-none"
                                   />
                                   <button className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                                        <span>Search</span>
                                        <span className="hidden md:block">
                                             <svg
                                                  className="text-gray-200 h-5 w-5 p-0 fill-current"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 56.966 56.966"
                                                  width="512px"
                                                  height="512px"
                                             >
                                                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                             </svg>
                                        </span>
                                   </button>
                              </div>
                         </div>

                    </div>
                    <div className='mr-6'>
                         <div className="dropdown lg:dropdown-down ">
                              <div tabIndex={0} role="button" className="btn text-white bg-[#703bf7] animate-pulse hover:text-white hover:font-bold hover:animate-none hover:bg-[#ab1ce4] m-1"> <MdCreate className='text-lg text-yellow-400'></MdCreate> Create  </div>
                              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                  <li> <Link to={'/dashboard/createProperty'} className='bg-primary text-white font-bold'> Create a property </Link> </li>
                              </ul>
                         </div>

                    </div>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-4 gap-1'>
                    {properties.map(property => <div key={property._id}>
                         <h1>  </h1>
                         <div className='   border-4 border-base-100'>
                              <img src={property.image} alt={property.title} className='w-full shadow-lg  transition-all duration-100 hover:scale-110  p-5 h-64 object-cover' />
                              <div className='p-4'>
                                   <h3 className='text-2xl font-bold'>{property.title}  </h3>
                                   <p className='text-[12px] flex items-center gap-2  p-1 mt-2 mb-2 bg-[#141414]'> <MdLocationPin className='text-xl text-yellow-600'></MdLocationPin>  {property.location} </p>
                                   <h1> {property.description.slice(0, 70)}... </h1>


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
                                   <div className='flex justify-around mt-4'>
                                        <button onClick={()=>handleDelete(property._id)} className='btn  text-white'> <MdDelete className='text-red-700 text-xl'></MdDelete> delete </button>
                                        <Link to={`/dashboard/updateProperties/${property._id}`}><button className='btn text-white'> <GrDocumentUpdate className='text-blue-400 text-xl'> </GrDocumentUpdate> update </button></Link>
                                   </div>
                              </div>
                         </div>
                    </div>)}
               </div>
          </div>
     )
}
