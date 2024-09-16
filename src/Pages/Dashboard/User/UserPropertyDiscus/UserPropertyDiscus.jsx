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
          <h1 className='text-center text-4xl font-semibold text-blue-700 mb-5 animate-bounce'> Make Order </h1>
          <div className='grid lg:grid-cols-4 grid-cols-1 gap-3'>
               { priceOrders.length >0 ? priceOrders.map(priceOrder => <div>
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
                                        <a href='/dashboard/userPropertyDiscus'

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

export default UserPropertyDiscus;