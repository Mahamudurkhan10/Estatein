import React from 'react';

import { MdOutlineArrowOutward } from 'react-icons/md';

const Section = () => {
     return (
         <div className='mb-5 text-slate-100 mt-5 border-4 border-base-100  container mx-auto'>
           <div className='grid gap-5 p-5  grid-cols-1  lg:grid-cols-4'>
               <div className='bg-[#191919] text-center p-5 '>
                    <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl ' ></MdOutlineArrowOutward> </h1>
                    <img  className='mx-auto' src="https://i.ibb.co/Pr72K7K/Icon-Container.png" alt="" />
                    <h1> Find Your Dream Home </h1>
               </div>
               <div className='bg-[#191919] text-center p-5 '>
                    <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl' ></MdOutlineArrowOutward> </h1>
                    <img  className='mx-auto' src="https://i.ibb.co/vsSFpsd/Icon-Container-1.png" alt="" />
                    <h1> Unlock Property Value</h1>
               </div>
               <div className='bg-[#191919] text-center p-5 '>
                    <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl' ></MdOutlineArrowOutward> </h1>
                    <img  className='mx-auto' src="https://i.ibb.co/Yc3TnzS/Icon-Container-2.png" alt="" />
                    <h1> Effortless Property Management</h1>
               </div>
               <div className='bg-[#191919] text-center p-5'>
                    <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl'></MdOutlineArrowOutward> </h1>
                    <img  className='mx-auto' src="https://i.ibb.co/NsxZ2hK/Icon-Container-3.png" alt="" />
                    <h1> Smart Investments, Informed Decisions</h1>
               </div>
            
           
          </div>
         </div>
     );
};

export default Section;