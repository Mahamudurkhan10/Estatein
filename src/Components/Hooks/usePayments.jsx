import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const usePayments = () => {
     const axiosPublic = useAxiosPublic()
     const { refetch, data: payments = [],isPending:loading } = useQuery({
          queryKey: ['payments'],
          queryFn: async () => {
            const res = await axiosPublic.get(`/payments`);
            return res.data;
          }
        });
        return [payments,refetch,loading]
    
};

export default usePayments;