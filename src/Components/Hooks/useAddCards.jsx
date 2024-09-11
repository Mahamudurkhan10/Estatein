import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useAddCards = () => {
     const axiosPublic = useAxiosPublic()
     const {user} = useContext(AuthContext)
     const { refetch, data: cards = [],isPending:loading } = useQuery({
          queryKey: ['addCard', user?.email],
          queryFn: async () => {
            const res = await axiosPublic.get(`/addCard/${user?.email}`);
            return res.data;
          }
        });
        return [cards,refetch,loading]
    
};

export default useAddCards;