import React, { useContext } from 'react';
import { NavLink, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Components/Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {
     const { googleLogin, Register, updateUserProfile } = useContext(AuthContext)
     const navigate = useNavigate()
     const location = useLocation()
     const form = location.state?.form?.pathname || "/";
     const currentDate = new Date()
     const handleRegister = (e) => {
          e.preventDefault()

          const name = e.target.name.value
          const photoURL = e.target.image.value
          const email = e.target.email.value
          const password = e.target.password.value
          console.log(name, image, email, password);
          Register(email, password)
               .then(result => {

                    return updateUserProfile(name, photoURL)

               })
         
               .then( async ()  => {
                    const userInfo = {
                         name: name,
                         email: email,
                         photoURL: photoURL,                       
                         role: "user",
                         creationDate: currentDate
                    }
                    return axios.post('http://localhost:5000/users', userInfo)
                         .then(res => {
                              if (res.data.insertedId) {
                                      
                                   Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your Login success",
                                        showConfirmButton: false,
                                        timer: 1500
                                   });
                                   navigate(form,{replace:true})
                              }
                         })
               })
               .catch(error => {
                    console.log("Error", error);
                    Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: "Something went wrong!",
                    });
               })

     }
     const googleLogin2 = () => {
          googleLogin()
          .then(result =>{
               console.log(result.user);
               const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL,
                    role:"user",
                    creationDate: currentDate
               }
               axios.post("http://localhost:5000/users",userInfo)
               .then(res =>{
                    if(res.data.insertedId){
                         Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Your Login success",
                              showConfirmButton: false,
                              timer: 1500
                         });
                          
                    }
               })
               navigate(form,{replace:true})  
          })
        
         
     }
     return (
          <div>
               <div className="bg-[#141414] rounded-lg py-2">
                    <div className="container flex flex-col mx-auto   rounded-lg  my-5">
                         <div >
                              <div className=" max-w-xl mx-auto pb-12">
                                   <div className="flex items-center ">
                                        <form onSubmit={handleRegister} className="flex flex-col w-full h-full pb-6 text-center bg-[#191919] p-12  rounded-3xl">
                                             <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Register </h3>
                                             <p className="mb-4 text-grey-700">Enter your email and password</p>
                                             <button type='button' onClick={googleLogin2} className="flex items-center justify-center w-full py-4 mb-6 border-2 border-[#703bf7] text-white text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                                  <img
                                                       className="h-5 mr-2"
                                                       src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                                                       alt=""
                                                  />
                                                  Sign in with Google
                                             </button>
                                             <div className="flex items-center mb-3">
                                                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                                  <p className="mx-4 text-grey-600">or</p>
                                                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                             </div>
                                             <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">
                                                  Name
                                             </label>
                                             <input
                                                  id="name"
                                                  type="text"
                                                  name='name'
                                                  placeholder="Type your name please"
                                                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                             />
                                             <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">
                                                  image
                                             </label>
                                             <input
                                                  id="image"
                                                  type="text"
                                                  name='image'
                                                  placeholder="Enter Your Image"
                                                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                             />
                                             <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">
                                                  Email*
                                             </label>
                                             <input
                                                  id="email"
                                                  type="email"
                                                  name='email'
                                                  placeholder="mail@loopple.com"
                                                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                             />
                                             <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">
                                                  Password*
                                             </label>
                                             <input
                                                  id="password"
                                                  type="password"
                                                  name='password'
                                                  placeholder="Enter a password"
                                                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                             />

                                             <button
                                                  type='submit'

                                                  className="relative mb-4 inline-block px-7 py-3 text-lg font-bold text-white border-2 border-[#703bf7] overflow-hidden bg-transparent transition-all duration-300 ease-in-out hover:bg-[#703bf7]"
                                             >
                                                  <span className="relative z-10"> Register </span>

                                             </button>
                                             <p className="text-sm leading-relaxed text-grey-900">
                                                  Already Have an Account?{" "}
                                                  <NavLink to={'/login'} className="font-bold text-grey-700">
                                                       Login Here
                                                  </NavLink>
                                             </p>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Register;