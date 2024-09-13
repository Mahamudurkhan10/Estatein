import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import useAdmin from "../Components/Hooks/useAdmin";





const AdminPrivateRoutes = ({ children }) => {
     const { admin, isAdminLoading } = useAdmin();
     const { user, loading } = useContext(AuthContext);
     const location = useLocation()

     if (loading || isAdminLoading) {
          return <div>
               <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>

               <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>

               <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>

               <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
               </div>
          </div>
     }
     if (user && admin) {
          return children;
     }
     return <Navigate to={'/login'} state={{ form: location }} replace></Navigate>
};

export default AdminPrivateRoutes;