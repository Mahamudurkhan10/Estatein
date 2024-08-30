
import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ContactSection = () => {
     return (
          <div className='mb-5 mt-5 border-4 border-base-100  container mx-auto'>
               <div className='grid gap-5 p-5  grid-cols-1  lg:grid-cols-4'>
                    <div className='bg-[#191919] text-center p-5 '>
                         <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl ' ></MdOutlineArrowOutward> </h1>
                         <img className='mx-auto' src="https://i.ibb.co/S7dp7KB/Icon-Container-19.png" alt="" />
                         <h1> info@estatein.com</h1>
                    </div>
                    <div className='bg-[#191919] text-center p-5 '>
                         <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl' ></MdOutlineArrowOutward> </h1>
                         <img className='mx-auto' src="https://i.ibb.co/dfjkY8c/Icon-Container-21.png" alt="" />
                         <h1> +1(123) 456-7890</h1>
                    </div>
                    <div className='bg-[#191919] text-center p-5 '>
                         <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl' ></MdOutlineArrowOutward> </h1>
                         <img className='mx-auto' src="https://i.ibb.co/p1hHt67/Icon-Container-22.png" alt="" />
                         <h1> Main Headquarters</h1>
                    </div>
                    <div className='bg-[#191919] text-center p-5'>
                         <h1 className="lg:ml-[270px]"> <MdOutlineArrowOutward className='text-xl'></MdOutlineArrowOutward> </h1>
                         <img className='mx-auto' src="https://i.ibb.co/dWTNgNH/Icon-Container-23.png" alt="" />
                         <div className='flex justify-between mt-1 items-center'>
                              <h1>Instagram</h1>
                              <h1>LinkedIn</h1>
                              <h1>Facebook</h1>
                         </div>
                    </div>


               </div>
          </div>
     );
};

export default ContactSection;