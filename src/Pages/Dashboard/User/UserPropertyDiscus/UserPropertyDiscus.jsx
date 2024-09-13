import React, { useContext } from 'react';
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Components/Provider/AuthProvider';

const UserPropertyDiscus = () => {
     const axiosPublic = useAxiosPublic()
     const {user} = useContext(AuthContext)
     const { refetch, data: priceOrders = [],isPending:loading } = useQuery({
          queryKey: ['priceOrder',user?.email],
          queryFn: async () => {
            const res = await axiosPublic.get(`/priceOrder/${user?.email}`);
            return res.data;
          }
        });
     return (
          <div className='m-[50px]'>
          <h1 className='text-center text-4xl font-semibold text-blue-700 mb-5 animate-bounce'> Make Order </h1>
          <div className='grid lg:grid-cols-4 grid-cols-1 gap-3'>
               {priceOrders.map(priceOrder => <div>
                    <div className='border p-4 hover:shadow-2xl hover:bg-slate-900'>
                         <h1 className='text-2xl font-semibold text-white'> Name: {priceOrder.name} </h1>
                         <div className='text-xl'>
                         <h1 className='text-lg'> Email: {priceOrder.email} </h1>
                         <h1 > Phone : {priceOrder.phone} </h1>
                         </div>
                          <div className=''>
                          
                          <h1 className='text-lg text-white'> Message : {priceOrder.message} </h1>
                          <h1 > BuGet : ${priceOrder.buGet} </h1>
                          </div>
                         
                       

                    </div>
               </div>)}
          </div>
     </div>
     );
};

export default UserPropertyDiscus;