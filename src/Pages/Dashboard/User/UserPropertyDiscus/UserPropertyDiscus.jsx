import React from 'react';
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UserPropertyDiscus = () => {
     const axiosPublic = useAxiosPublic()
     const { refetch, data: priceOrders = [],isPending:loading } = useQuery({
          queryKey: ['priceOrder',],
          queryFn: async () => {
            const res = await axiosPublic.get(`/priceOrder`);
            return res.data;
          }
        });
     return (
          <div className='m-[50px]'>
          <h1 className='text-center text-4xl font-semibold text-blue-700 mb-5 animate-bounce'> Make Order </h1>
          <div className='grid lg:grid-cols-4 grid-cols-1 gap-3'>
               {priceOrders.map(priceOrder => <div>
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
                         
                       

                    </div>
               </div>)}
          </div>
     </div>
     );
};

export default UserPropertyDiscus;