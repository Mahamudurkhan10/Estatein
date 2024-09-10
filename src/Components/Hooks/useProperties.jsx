import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProperties = () => {
     const axiosPublic = useAxiosPublic()
     const { refetch, data: properties = [],isPending:loading } = useQuery({
          queryKey: ['properties'],
          queryFn: async () => {
            const res = await axiosPublic.get(`/properties`);
            return res.data;
          }
        });
        return [properties,refetch,loading]
    
};

export default useProperties;