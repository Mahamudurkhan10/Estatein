import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropertiesCard from './PropertiesCard';
import { NavLink } from 'react-router-dom';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch('https://estatein-server.vercel.app/properties')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setProperties(data))
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
    <div className='container text-gray-200 mt-5 mb-5 mx-auto'>
      <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
        <h1>
          <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
        </h1>
        <div className='flex flex-col gap-3 lg:gap-0   lg:flex-row items-center'>
          <div>
            <h1 className='text-4xl text-white font-bold'>Featured Properties</h1>
            <p className='lg:w-2/3 mt-2'>
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
            </p>
          </div>
          <div>
            <a href={'/properties'} className={'btn  px-9 mt-4 lg:mt-0   text-white  '}><button className=''>View All Properties</button></a>
          </div>
        </div>
        <div className='mt-6 relative'>
          {properties.length > 0 && (
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
              {properties.map((property, index) => (
                <SwiperSlide className='' key={property.id}>
                   <PropertiesCard key={property.id} property={property} ></PropertiesCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className=' bottom-0 right-0 flex items-center space-x-2 p-4'>
            <span className='text-white'> 
             { currentIndex >= 9?
              <div> {currentIndex + 1} Of {properties.length}</div>:
              <div> 0 {currentIndex + 1} Of {properties.length}</div>
            
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

export default FeaturedProperties;
