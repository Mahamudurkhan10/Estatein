import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useUser = () => {
     const axiosPublic = useAxiosPublic()
     const {user} = useContext(AuthContext)
     const { refetch, data: User = [],isPending:loading } = useQuery({
          queryKey: ['users',user?.email],
          queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data;
            
          }
        });
        return [User,refetch,loading]
    
};

export default useUser;