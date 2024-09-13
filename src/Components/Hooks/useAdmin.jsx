import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const useAdmin = () => {
     const axiosSecure = useAxiosSecure()
     const {user}= useContext(AuthContext);
     const {  data: admin,isPending:isAdminLoading} = useQuery({
          queryKey: ['admin',user?.email],
          queryFn: async ()=>{
               const res = await axiosSecure.get(`/users/admin/${user.email}`)
            
               return res.data?.admin; 
          }
     })
     
     return {admin,isAdminLoading}
};

export default useAdmin;