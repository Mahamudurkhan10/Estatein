import React from 'react';
import useUsers from '../../../../Components/Hooks/useUsers';
import { FaVoicemail } from 'react-icons/fa';
import { MdDelete, MdEdit, MdEmail } from 'react-icons/md';
import useAxiosPublic from '../../../../Components/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Components/Hooks/useAxiosSecure';

const ALLUsers = () => {
     const axiosSecure = useAxiosSecure()
     const [Users, refetch, loading] = useUsers()
     // console.log(Users);
     const handleUserChange = async(e,id) =>{
          e.preventDefault()
          const role = e.target.change.value;
          console.log(role);
          try {
               const res = await axiosSecure.patch(`/userUpdate/${id}`,{role})
               if(res.data.modifiedCount >0){
                    refetch()
                    Swal.fire({
                         position: "top-center",
                         icon: "success",
                         title: "Your update success",
                         showConfirmButton: false,
                         timer: 1500
                    });
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
     const handleDelete = async (id) => {
          try {
               Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
               }).then((result) => {
                    if (result.isConfirmed) {
                         axiosSecure.delete(`/userDelete/${id}`)
                              .then(res => {
                                   if (res.data.deletedCount > 0) {
                                        refetch()
                                        Swal.fire({
                                             title: "Deleted!",
                                             text: "Your file has been deleted.",
                                             icon: "success"
                                        });
                                   }

                              })

                    }
               });
          }
          catch (error) {
               console.log(error);
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again.",
               });
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
          <div className='  lg:pl-32 text-white '>
               <div>
                    <h1 className='text-5xl text-center mb-6 animate-pulse bg-orange-700 opacity-15 p-3 rounded-full text-white font-semibold'> ALL Users </h1>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
                    {
                         Users.map(user => <div key={user._id}>
                              <div className='border-2 border-blue-950 p-5  '>
                                   <div className='p-4 border-2 border-base-100'>
                                        <img src={user.photoURL
                                        } alt="" className='size-[200px] mx-auto shadow-lg  transition-all duration-100 hover:scale-110  p-5  object-cover' />

                                   </div>
                                   <div>
                                        <h1 className='text-center text-3xl font-semibold text-white'> {user.name} </h1>
                                        <p className='flex items-center text-xl gap-1 justify-center py-3'> <MdEmail></MdEmail> {user.email} </p>
                                        <h1 className='text-center text-3xl font-semibold mb-4 text-yellow-700'> {user.role} </h1>
                                   </div>
                                   <div className='text-center text-xl text-white font-semibold flex justify-around'>
                                     <form onSubmit={(e)=>handleUserChange(e,user._id)} action="">
                                     
                                        <select name='change' className="select  bg-[#191919] ">
                                             <option disabled selected > {user.role} </option>
                                             <option>admin</option>
                                             <option>user</option>
                                        </select>
                                        <input className='btn btn-info text-white rounded-full animate-pulse' type="submit" value="change role" />
                                     </form>
                                     <button onClick={()=>handleDelete(user._id)} className='flex items-center text-red-700 btn btn-ghost animate-bounce'>
                                        <MdDelete size={20}></MdDelete> delete
                                     </button>
                                   </div>
                              </div>

                         </div>)
                    }
               </div>
          </div>
     );
};

export default ALLUsers;