import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsEmojiKissFill } from 'react-icons/bs';
import { MdOutlineDomainAdd } from 'react-icons/md';
import { IoFlash } from 'react-icons/io5';

const OurClient = () => {
  const [clients, setClients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch('/client.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setClients(data))
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

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className='container mt-9 mb-5 mx-auto'>
      <div className='max-w-[1400px] p-4 lg:p-0 space-y-5 mx-auto'>
        <h1>
          <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Our Valued Clients" />
        </h1>
        <div className='flex flex-col gap-3 lg:gap-0  lg:flex-row items-center'>
          <div>
            <h1 className='text-4xl text-white font-bold'>Our Valued Clients</h1>
            <p className='mt-2'>
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving
            </p>
          </div>
          
        </div>
        <div className='mt-6 relative'>
          {clients.length > 0 && (
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
           
              spaceBetween={10}
            
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
                  slidesPerView: 2, 
                },
              }}
            >
              {clients.map((client, index) => (
                <SwiperSlide className='p-6' key={client.id}>
                   <div className='border-4 border-base-100 hover:shadow-2xl lg:h-[450px] p-8'>
                      <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 lg:justify-between'>
                         <div>
                              <p className='text-lg'> Since  <span className='text-slate-400 font-bold'>{client.added_date}</span> </p>
                              <h1 className='text-2xl text-white font-semibold'> {client.company_name} </h1>
                         </div>
                         <button className='btn text-white'> Visit Website </button>
                      </div>
                      <div className='flex lg:justify-around flex-col lg:flex-row lg:gap-0 gap-3 p-5'>
                         <div className='text-xl '>
                              <p className='flex items-center gap-3'>  <MdOutlineDomainAdd />  Domain   </p>
                              <h1 className='text-white text-2xl'> {client.domain_name} </h1>
                         </div>
                         <div  className='lg:border-l-4 text-xl lg:px-5 border-base-100' >
                              <p className='flex items-center gap-3'> <IoFlash /> Category </p>
                              <h1 className='text-2xl text-white'> {client.category_name} </h1>
                         </div>
                      </div>
                      <div className='border p-6 border-base-100'>
                         <p className='flex items-center gap-4 text-xl mb-4'> what they said <BsEmojiKissFill className='text-yellow-400'  />  </p>
                         <p> {client.review_description} </p>
                      </div>
                   </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className=' bottom-0 right-0 flex items-center space-x-2 p-4'>
            <span className='text-white'>
             { currentIndex >= 9?
              <div> {currentIndex + 1} Of {clients.length}</div>:
              <div> 0 {currentIndex + 1} Of {clients.length}</div>
            
             }
            </span>
          </div>
          <div className='absolute bottom-0 right-0 flex items-center justify-end gap-5 w-full p-4'>
           {currentIndex >0?
            <button
              onClick={goToPreviousSlide}
              className='bg-gray-800 text-white text-xl p-2 rounded-full hover:bg-gray-700'
            >
              <FaArrowLeft></FaArrowLeft>
            </button>:
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
             <FaArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
