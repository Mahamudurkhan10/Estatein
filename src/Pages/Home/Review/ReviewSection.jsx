import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


import ReviewsCard from './ReviewsCard';


const ReviewSection = () => {
     const [reviews , setReviews] = useState([])
     const [currentIndex,setCurrentIndex] = useState(0)
     const swiperRef = useRef(null)
     useEffect(()=>{
          fetch('http://localhost:5000/reviews')
          .then(res => res.json())
          .then(data =>{
               setReviews(data)
          })
     })
     const handleSlideChange = (swiper) =>{
          setCurrentIndex(swiper.activeIndex)
     }
     const goToNextSlide = ()=>{
      if(swiperRef.current){
          swiperRef.current.swiper.slideNext()
      }
     }
     const goToPreviousSlide = ()=>{
      if(swiperRef.current){
          swiperRef.current.swiper.slidePrev()
      }
     }
     return (
          <div className="container mx-auto mb-5 mt-5">
               <div className="max-w-[1400px] p-4 lg:p-0 mx-auto">
                    <h1>
                         <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex gap-3 lg:gap-0 flex-col lg:flex-row items-center lg:justify-between'>
                         <div>
                              <h1 className='text-4xl text-white font-bold'>What Our Clients Say</h1>
                              <p className='lg:w-2/3 mt-2'>
                              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                              </p>
                         </div>
                         <div>
                              <button className='btn '>View All Testimonials</button>
                         </div>
                    </div>
                    <div>
                         <div className='mt-6 relative'>
                              {reviews.length > 0 && (
                                   <Swiper
                                        ref={swiperRef}
                                        modules={[Navigation, Pagination]}
                                      
                                        spaceBetween={20}

                                        pagination={{ clickable: true, type: 'custom' }}
                                        navigation={false}
                                        onSlideChange={handleSlideChange}
                                        initialSlide={0}
                                        breakpoints={{
                                             640: {
                                               slidesPerView: 1, 
                                             },
                                             768: {
                                               slidesPerView: 2, 
                                             },
                                             1024: {
                                               slidesPerView: 3, 
                                             },
                                           }}
                                   >
                                        {reviews.map((review, index) => (
                                             <SwiperSlide className='' key={review.id}>
                                                <ReviewsCard review={review}></ReviewsCard>
                                             </SwiperSlide>
                                        ))}
                                   </Swiper>
                              )}
                              <div className=' bottom-0 right-0 flex items-center space-x-2 p-4'>
                                   <span className='text-white'>
                                        0{currentIndex + 1} Of {reviews.length}
                                   </span>
                              </div>
                              <div className='absolute bottom-0 right-0 flex items-center justify-end gap-5 w-full p-4'>
                                   {currentIndex > 0 ?
                                        <button
                                             onClick={goToPreviousSlide}
                                             className='bg-gray-800 text-white text-xl p-2 rounded-full hover:bg-gray-700'
                                        >
                                             <FaArrowLeft></FaArrowLeft>
                                        </button> :
                                        <button
                                             onClick={goToPreviousSlide}
                                             className='bg-gray-800 text-xl text-gray-500 p-2 rounded-full hover:bg-gray-700'
                                        >
                                             <FaArrowLeft></FaArrowLeft>
                                        </button>
                                   }

                                   <button
                                        onClick={goToNextSlide}
                                        className='bg-gray-800 text-blue-500 text-xl p-2 rounded-full hover:bg-gray-700'
                                   >
                                        <FaArrowRight /> 
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ReviewSection;