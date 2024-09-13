import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useUserMakeOrders = () => {
     const axiosPublic = useAxiosPublic()
     const {user} = useContext(AuthContext)
     const { refetch, data: userMakeOrders =[],isPending:loading } = useQuery({
          queryKey: ['makeOrder',user?.email],
          queryFn: async () => {
            const res = await axiosPublic.get(`/makeOrder/${user?.email}`);
            return res.data;
          }
        });
        return [userMakeOrders,refetch,loading]
    
};

export default useUserMakeOrders;