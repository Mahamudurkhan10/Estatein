import React, { useContext } from 'react';
import { FaHome, FaJediOrder, FaLandmark, FaUsers } from 'react-icons/fa';
import { MdDashboard, MdPayment, MdReportProblem } from 'react-icons/md';
import { SlLogout } from 'react-icons/sl';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Provider/AuthProvider';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome/AdminHome';
import { RiAdminFill } from 'react-icons/ri';

const Dashboard = () => {
     const { logOut } = useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
     const form = location.state?.form?.pathname || "/";

     const signOut = () => {
          logOut();
          navigate(form, { replace: true });
     }

     const Admin = true; // Adjust based on your logic to check for admin roles

     const handleNavItem = () => {
          return Admin ? (
               <div className="flex flex-col gap-5 lg:text-lg font-semibold text-blue-600">
                    <li className="text-center text-3xl text-emerald-600 font-bold uppercase">Admin Dashboard</li>
                    <li><NavLink to="/dashboard/adminHome"><RiAdminFill /> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/ourProperties"><FaLandmark />Our Properties</NavLink></li>
                    <li><NavLink to="/dashboard/allUsers"><FaUsers /> ALL Users </NavLink></li>
                    <li><NavLink to="/dashboard/makeOrder"><FaJediOrder /> Make Order </NavLink></li>
               </div>
          ) : (
               <div>
                    <li className="text-center text-2xl text-blue-900 font-bold">User Dashboard</li>
                    <li><NavLink className="text-yellow-700 text-lg font-semibold" to="/dashboard/userReport"><MdReportProblem /> User Report</NavLink></li>
               </div>
          );
     }

     return (
          <div id='dashboard' className="flex flex-col lg:flex-row min-h-screen bg-[#191919]">
               {/* Sidebar */}
               <div className=" bg-[#141414] lg:min-h-screen lg:fixed">
                    <ul className="menu p-4 space-y-4">
                         {handleNavItem()}
                         <div className="divider"></div>
                         <li><NavLink className="text-lg font-semibold text-green-600" to="/"><FaHome /> Home</NavLink></li>
                         <li><button onClick={signOut} className="btn btn-success flex items-center"><SlLogout /> <span>Logout</span></button></li>
                         <div className='lg:hidden block fixed'>
                              <a href='#dashboard'><MdDashboard className='text-4xl text-blue-800'></MdDashboard></a>
                         </div>
                    </ul>
               </div>

               {/* Main Content */}
               <div className="flex-1  ">

                    {/* Centered Outlet container with mx-auto */}
                    <div className=" lg:ml-72  lg:p-8">
                         <Outlet />
                         
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;
