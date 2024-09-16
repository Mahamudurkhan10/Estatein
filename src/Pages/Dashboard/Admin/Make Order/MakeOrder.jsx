import React from 'react';
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { MdArrowRight, MdBathroom, MdBedroomBaby, MdBedroomParent, MdRampRight } from 'react-icons/md';
import { FaRightLeft } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { GoX } from 'react-icons/go';

const MakeOrder = () => {
     const axiosPublic = useAxiosPublic()
     const { refetch, data: makeOrders = [], isPending: loading } = useQuery({
          queryKey: ['makeOrder'],
          queryFn: async () => {
               const res = await axiosPublic.get(`/makeOrder`);
               return res.data;
          }
     });
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
          <div className='m-[50px] text-gray-200'>
               <h1 className='text-center text-4xl font-semibold text-blue-700 mb-5 animate-bounce'> Make Order </h1>
               <div className='grid lg:grid-cols-4 grid-cols-1 gap-3'>
                    {makeOrders.map(makeOrder => <div>
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
                                   <button className='btn text-white  animate-bounce'> <FaCheck className='text-blue-400'/> accept </button>
                                   <button className='btn text-white animate-bounce'> <GoX className='text-red-700 text-xl'></GoX> Reject </button>
                              </div>

                         </div>
                    </div>)}
               </div>
          </div>
     );
};

export default MakeOrder;
