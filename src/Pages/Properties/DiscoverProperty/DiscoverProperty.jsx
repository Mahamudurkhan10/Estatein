
import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropertiesCard from '../../Home/Featured Properties/PropertiesCard';
import { IoIosSend } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
const DiscoverProperty = () => {
     const [properties, setProperties] = useState([]);
     const [currentIndex, setCurrentIndex] = useState(0);
     const swiperRef = useRef(null);
     const [location,setLocation] =useState('')
 console.log(location);
     useEffect(() => {
          fetch('/property.json')
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
     const handleLocationChange = (e) => {
          e.preventDefault()
          setLocation(e.target.value)
     };
     return (
          <div className='container bg-[#141414] mx-auto mb-5'>
               <div className='max-w-[1400px] mx-auto mt-8 mb-9'>
                    <div className='mb-9 ' >
                         <div className='lg:w-3/5 mx-auto bg-[#191919]'>
                              <form action="" className='border-2 border-base-100 p-4'>
                                   <label className=" flex items-center gap-2">

                                        <input
                                             type="text"
                                             className="grow p-3 text-white  border-base-100 rounded-l-lg focus:outline-none"
                                             placeholder="Search For a Property"
                                        />
                                        <button className=" flex items-center gap-2  text-white rounded-r-lg font-semibold  btn bg-[#703bf7]">
                                             <IoSearch></IoSearch> Find Property
                                        </button>
                                   </label>
                              </form>
                         </div>
                         <div className='grid  grid-cols-2 lg:grid-cols-5 gap-4 lg:w-3/4 bg-[#191919]   p-4 mx-auto '>
                              <div>
                                   <select value={location} onChange={handleLocationChange} className="select select-bordered w-full max-w-xs">
                                        <option  selected>Location</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                   </select>
                              </div>
                              <div>
                                   <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Who shot first?</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                   </select>
                              </div>
                              <div>
                                   <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Who shot first?</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                   </select>
                              </div>
                              <div>
                                   <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Who shot first?</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                   </select>
                              </div>
                              <div>
                                   <select className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Who shot first?</option>
                                        <option>Han Solo</option>
                                        <option>Greedo</option>
                                   </select>
                              </div>
                         </div>
                    </div>
                    <div>
                         <div className=''>
                              <h1>
                                   <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                              </h1>
                              <div className='flex flex-col gap-3 lg:gap-0   lg:flex-row items-center'>
                                   <div>
                                        <h1 className='text-4xl text-white font-bold'>Discover a World of Possibilities</h1>
                                        <p className=' mt-2'>
                                             Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
                                        </p>
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
                                             {currentIndex >= 9 ?
                                                  <div> {currentIndex + 1} Of {properties.length}</div> :
                                                  <div> 0 {currentIndex + 1} Of {properties.length}</div>

                                             }
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
          </div>
     );
};

export default DiscoverProperty;