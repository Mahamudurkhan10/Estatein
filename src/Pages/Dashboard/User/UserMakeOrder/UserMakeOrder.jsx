import React from 'react'
import useUserMakeOrders from '../../../../Components/Hooks/useUserMakeOrders'
import { FaCheck } from 'react-icons/fa';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';
import { GoX } from 'react-icons/go';

export default function UserMakeOrder() {
     const [userMakeOrders,refetch, loading] = useUserMakeOrders()
     console.log(userMakeOrders);
     
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
          <div className='m-[50px]'>
               <h1 className='text-center text-4xl font-semibold text-blue-700 mb-5 animate-bounce'> Property  Make Order </h1>
               <div className='grid lg:grid-cols-4 grid-cols-1 gap-3'>
                    { userMakeOrders.length > 0? userMakeOrders?.map(makeOrder => <div>
                         <div className='border p-4 hover:shadow-2xl hover:bg-slate-900'>
                              <h1 className='text-2xl font-semibold text-white'> Name: {makeOrder.name} </h1>
                              <div className='flex justify-between gap-3 text-xs text-yellow-700'>
                                   <h1> {makeOrder.email} </h1>
                                   <h1> {makeOrder.phone} </h1>
                              </div>
                              <div className='text-sm text-blue-500'>
                                   <h1> contactEmail: {makeOrder.contactEmail} </h1>
                                   <h1> contactNumber: {makeOrder.contactNumber} </h1>
                                   <h1 className='text-lg text-white'> Message : {makeOrder.message} </h1>
                              </div>
                              <h1 className='text-2xl font-semibold '> property Name: <span className='text-yellow-800'>{makeOrder.title}</span> </h1>
                              <h1 className=''> ButGet: $ <span className='font-bold text-lg'> {makeOrder.buGet}</span> </h1>
                              <h1 className='flex gap-3'> NO of Bedrooms : <span className='text-lg font-bold flex items-center gap-1'>{makeOrder.bedrooms} <MdBedroomParent></MdBedroomParent> </span></h1>
                              <h1 className='flex gap-3'> NO of Bathrooms : <span className='text-lg font-bold flex items-center gap-1'>{makeOrder.bathrooms} <MdBathroom></MdBathroom> </span></h1>

                              <h1 className='text-xl  '> Location: <span className='text-white'> {makeOrder.location} </span> </h1>
                              <div className='flex justify-around items-center mt-3'>
                                   
                                   <button  className='btn text-white animate-bounce hover:animate-none'> <GoX className='text-red-700 text-xl'></GoX> delete</button>
                              </div>

                         </div>
                    </div>):<div className="lg:ml-6  lg:col-span-4 ">
                         <section className="  px-5 bg-white  dark:bg-[#191919]">
                              <div className="">
                                   <div className=" text-center">
                                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 uppercase">
                                             DATA Not found
                                        </h1>
                                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                                             Something's missing.
                                        </p>
                                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                                             Sorry, we can't find that Data. You'll find lots to explore on the page.
                                        </p>
                                        <a href='/dashboard/userMakeOrder'

                                             className="inline-flex btn btn-info text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                                        >
                                             Back to page
                                        </a>
                                   </div>
                              </div>
                         </section>
                    </div>}
               </div>
          </div>
     )
}
