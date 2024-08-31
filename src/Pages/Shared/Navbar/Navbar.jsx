import { NavLink } from "react-router-dom";


const Navbar = () => {
     const navItems = <div className="flex flex-col text-xl lg:flex-row gap-8">
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/'}  ><li><a >Home</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/aboutUs'}  ><li><a >About Us</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/properties'}  ><li><a >Properties</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/services'}  ><li><a >Services</a></li></NavLink>
       <NavLink className={({isActive}) => isActive?'font-bold text-primary':"font-semibold" } to={'/contact'}  ><li><a >Contact</a></li></NavLink>

    

          
     </div>
     return (
          <div className=" bg-[#191919] container  mx-auto">
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
                        <NavLink to={'/'} >    <a  className="btn btn-ghost text-xl"> <img src="https://i.ibb.co/qrTfx3H/Symbol.png" alt="" className="size-8" />  Estatein </a></NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItems}
                         </ul>
                    </div>
                    <div className="navbar-end ">
                         <NavLink to={'/login'} className="btn px-6 text-xl bg-[#703bf7] hover:bg-[#703bf7] text-white ">Login</NavLink>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;