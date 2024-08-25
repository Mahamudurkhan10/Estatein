import { useEffect, useRef, useState } from "react";
import QuestionCard from "./questionCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AskQuestion = () => {
     const [questions, setQuestions] = useState([]);
     const [currentIndex, setCurrentIndex] = useState(0);
     const swiperRef = useRef(null);

     useEffect(() => {
          fetch('question.json')
               .then(res => {
                    if (!res.ok) {
                         throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
               })
               .then(data => setQuestions(data))
               .catch(error => console.error('Error fetching properties:', error));
     }, []);

     const handleSlideChange = (swiper) => {
          setCurrentIndex(swiper.activeIndex);

     };

     const goToNextSlide = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slideNext();
          };
     }
     const goToPreviousSlide = () =>{
          if(swiperRef.current){
            swiperRef.current.swiper.slidePrev()
          }
     }
     return (
          <div className="container mx-auto mb-5 mt-6">
               <div className="max-w-[1400px] lg:p-0 p-4 mx-auto">
                    <h1>
                         <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex flex-col  lg:flex-row lg:gap-0 gap-2 items-center'>
                         <div>
                              <h1 className='text-4xl text-white font-bold'>Frequently Asked Questions</h1>
                              <p className='lg:w-2/3 mt-2'>
                              Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
                              </p>
                         </div>
                         <div>
                              <button className='btn mr-7'>View All FAQ's</button>
                         </div>
                    </div>
                    <div className='mt-6 relative'>
                         {questions.length > 0 && (
                              <Swiper
                                   ref={swiperRef}
                                   modules={[Navigation, Pagination]}
                                 
                                   spaceBetween={20}

                                   Pagination={{ clickable: true, type: 'custom' }}
                                   navigation={false}
                                   onSlideChange={handleSlideChange}
                                   initialSlide={0}
                                   breakpoints={{
                                       640:{
                                        slidesPerView:1
                                       }, 
                                      768:{
                                        slidesPerView:2
                                       }, 
                                      1024:{
                                        slidesPerView:3
                                       }, 
                                   }}
                              >
                                   {questions.map((question, index) => (
                                        <SwiperSlide className='p-6' key={question.id}>
                                             <QuestionCard queston={question}></QuestionCard>
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                         )}
                         <div className=' bottom-0 right-0 flex items-center space-x-2 p-4'>
                              <span className='text-white'>
                                   0{currentIndex + 1} Of {questions.length}
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
     );
};

export default AskQuestion;