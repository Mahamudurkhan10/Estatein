import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
     return (
          <div className="bg-[#141414] ">
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Main;