import React, { useContext } from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { MdPayment, MdReportProblem } from 'react-icons/md';
import { SlLogout } from 'react-icons/sl';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Provider/AuthProvider';

const Dashboard = () => {
     const {logOut} = useContext(AuthContext)
     const location = useLocation()
     const navigate = useNavigate()
     const form = location.state?.form?.pathname || "/";
     const signOut = ()=>{
          logOut()
          navigate(form,{replace:true})
     }
     const Admin = true;
     const handleNavItem = () => <>
          {
               Admin ? <div className="flex flex-col gap-5 lg:text-lg font-semibold text-blue-600">
                    <li className="text-center text-3xl text-emerald-600 font-bold uppercase"> Admin Dashboard </li>
                    <li> <NavLink to="/dashboard/adminHome"> <FaUsers /> Admin Home </NavLink> </li>
                    <li> <NavLink to="/dashboard/ourProperties"> <FaUsers />Our Properties </NavLink> </li>
                    <li> <NavLink to="/dashboard/responseSurvey"> <FaUsers /> Responses Survey </NavLink> </li>
                    <li> <NavLink to="/dashboard/payment"> <MdPayment /> All Payments </NavLink> </li>
               </div> :
                    <div>
                         <li className="text-center text-2xl text-blue-900 font-bold"> User Dashboard </li>
                         <li> <NavLink className="text-yellow-700 text-lg font-semibold" to="/dashboard/userReport"> <MdReportProblem /> User Report </NavLink> </li>

                    </div>
          }
     </>
     return (
          <div className='lg:flex  bg-[#191919]'>
               <div className="lg:w-64    lg:h-screen bg-[#141414]">
                    <ul className="menu p-4 space-y-4">
                         {
                              handleNavItem()
                         }

                         <div className="divider"></div>

                         <li> <NavLink className="text-lg font-semibold text-green-600" to="/"> <FaHome /> Home </NavLink> </li>
                         <li> <button onClick={signOut} className="btn btn-success flex items-center"> <SlLogout></SlLogout>  <a> Logout </a></button> </li>
                    </ul>
               </div>
               <div className=" flex-1  ">
                    <Outlet />
               </div>
          </div>
     );
};

export default Dashboard;
