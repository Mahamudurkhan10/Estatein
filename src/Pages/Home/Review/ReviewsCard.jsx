import React, { useState } from 'react';

const ReviewsCard = ({ review }) => {
     const [isExpended,setIsExpended] = useState(false)
     const { title, name, img, location, description, stars } = review;
      const newDescripton = `${description.slice(0,60)}...`
     return (
          <div className="bg-[#191919] h-[270px] shadow-md rounded-lg p-6 mb-4">
               <div className="flex justify-start gap-4 mb-4">
                    {Array.from({ length: 5 }, (_, index) => (
                         <svg
                              key={index}
                              className={`w-5  h-5 ${index < stars ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                         >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.29 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.29 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.785.57-1.84-.197-1.54-1.118l1.29-3.97a1 1 0 00-.364-1.118L2.64 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.29-3.97z" />
                         </svg>
                    ))}
               </div>
               <h2 className="text-2xl text-white  font-semibold ">{title}</h2>
               <p onClick={()=>setIsExpended(!isExpended)} className=" mb-4 text-lg text-slate-400">
                    { 
                         isExpended?description:newDescripton
                    }
                    
                    </p>

               <div className="flex items-center mb-4">
                    <img src={img} alt={name} className="w-16 h-16 rounded-full mr-4" />
                    <div>

                         <p className=" text-xl text-white">{name}</p>
                         <p className=" text-lg text-slate-300">{location}</p>
                    </div>
               </div>
          </div>
     );
};

export default ReviewsCard;