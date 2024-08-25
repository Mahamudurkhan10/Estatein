import { NavLink } from "react-router-dom";


const Navbar = () => {
     const navItems = <div className="flex flex-col lg:flex-row gap-8">
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/'}  ><li><a >Home</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/aboutUs'}  ><li><a >About Us</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/properties'}  ><li><a >Properties</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/services'}  ><li><a >Services</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/contactUs'}  ><li><a >Contact Us</a></li></NavLink>
    

          
     </div>
     return (
          <div className=" bg-[#191919] container mx-auto">
               <div className="navbar max-w-[1400px] mx-auto  ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   {navItems}
                              </ul>
                         </div>
                         <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end ">
                         <a className="btn px-6">Login</a>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;