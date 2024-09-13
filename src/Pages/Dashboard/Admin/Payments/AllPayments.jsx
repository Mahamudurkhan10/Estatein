import React from 'react';
import usePayments from '../../../../Components/Hooks/usePayments';
import { MdDelete } from 'react-icons/md';

const AllPayments = () => {
     const [payments, refetch] = usePayments()
     return (
          <div className='lg:ml-56'>
               <div className='text-3xl font-semibold text-blue-700 mb-5 text-center'>
                    <h1> ALL Payments  </h1>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 '>
                    {payments.length > 0 ? payments?.map(p => <div key={p._id}>

                         <div className=' p-3   border-4 border-base-100'>
                               <h1 className='text-lg text-yellow-600'> {p.email} </h1>
                               <h1>  Date : {p.date.split('T')[0]} </h1>
                              <img src={p.image} alt={p.
                                   PropertyTitle} className='w-full shadow-lg  transition-all duration-100 hover:scale-110  p-5 h-64 object-cover' />
                              <div className='p-4'>
                                   <h3 className='text-2xl font-bold'>{p.
                                        PropertyTitle}  </h3>
                             </div>


                              <div className="flex justify-between">
                                   <div>
                                        <p> Price </p>
                                        <p className='text-gray-100 text-lg'>${p.price.toLocaleString()}</p>
                                   </div>


                              </div>
                              <div className='flex justify-around mt-4'>
                                   <button  className='btn  text-white'> <MdDelete className='text-red-700 text-xl'></MdDelete> delete </button>

                              </div>
                         </div>
                    </div>
                    ) : <div className="lg:ml-6  lg:col-span-4 ">
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
                                        <a href='/dashboard/ourProperties'

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
     );
};

export default AllPayments;