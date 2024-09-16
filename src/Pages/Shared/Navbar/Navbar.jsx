import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import { SlLogout } from "react-icons/sl";
import { LuLogIn } from "react-icons/lu";
import { MdCardGiftcard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import useAddCards from "../../../Components/Hooks/useAddCards";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
     const { user, logOut } = useContext(AuthContext);
     const [dropdownOpen, setDropdownOpen] = useState(false);
     const [addCards,refetch] = useAddCards()
     const signOut = () => {
          logOut();
          setDropdownOpen(false);
     };

     const toggleDropdown = () => {
          setDropdownOpen(!dropdownOpen);
     };
console.log(user?.
     photoURL
     );
     const navItems = (
          <div className="flex flex-col  text-lg text-gray-300 lg:flex-row gap-8">
              
          
               <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : "font-semibold "} to={'/'}>Home</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : "font-semibold"} to={'/aboutUs'}>About Us</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : "font-semibold"} to={'/properties'}>Properties</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : "font-semibold"} to={'/services'}>Services</NavLink>
               <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : "font-semibold"} to={'/contact'}>Contact</NavLink>
          </div>
     );

     const navItem2 = (


          <>

               <li> <NavLink to={'/dashboard'} className={"btn hover:bg-gradient-to-r from-[#703bf7] to-[#703bf7]  transition duration-500 ease-in-out "}> <a href=""> Dashboard </a> </NavLink> </li>
               <li><button onClick={signOut} className="btn bg-[#703bf7] hover:bg-gradient-to-r from-[#605d69] to-[#703bf7]  text-white flex items-center"><SlLogout />Logout</button></li>
          </>
     );

     return (
          <div className="bg-[#191919] container mx-auto">
               <div className="navbar max-w-[1400px] mx-auto">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   {navItems}
                              </ul>
                         </div>
                         <NavLink to={'/'} className="btn btn-ghost text-xl text-gray-200 animate-pulse">
                              <img src="https://i.ibb.co/qrTfx3H/Symbol.png" alt="" className="size-8" /> Estatein
                         </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                       <NavLink to={'/dashboard/addCard'}> <a className="relative"> <TiShoppingCart className="text-white" size={20}></TiShoppingCart> </a> <span className="absolute -mt-10 ml-4 text-blue-600 text-lg font-bold">{addCards.length}</span> </NavLink>
                         <div className="dropdown dropdown-end">
                             
                              {user ? (
                                   <div>
                                        <div
                                             tabIndex={0}
                                             role="button"
                                             className="btn btn-ghost btn-circle avatar"
                                             onClick={toggleDropdown}
                                        >
                                             <div className="w-10 rounded-full">
                                                  <img className="rounded-full size-10 mr-3 border-2 border-red-600" src={user?.photoURL || "https://i.ibb.co/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} title={user.displayName} />
                                             </div>
                                        </div>
                                        {dropdownOpen && (
                                             <ul className="menu space-y-3 text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#191919] rounded-box w-52">
                                                  {navItem2}
                                             </ul>
                                        )}
                                   </div>
                              ) : (
                                   <NavLink to={'/login'}>
                                        <button className="btn rounded-full bg-[#703bf7] uppercase text-white font-bold">
                                             <LuLogIn /> Login
                                        </button>
                                   </NavLink>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
