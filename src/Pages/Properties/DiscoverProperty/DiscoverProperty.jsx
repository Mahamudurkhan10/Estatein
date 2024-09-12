import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PropertiesCard from '../../Home/Featured Properties/PropertiesCard';
import { IoSearch } from 'react-icons/io5';
import { MdCalendarMonth, MdCameraEnhance, MdVilla } from 'react-icons/md';
import { LuBox } from 'react-icons/lu';
import axios from 'axios';
import { CiLocationOn } from 'react-icons/ci';

const DiscoverProperty = () => {
    const [properties, setProperties] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filters, setFilters] = useState({
        search:'',
        location: '',
        propertyType: '',
        priceRange: '',
        size: '',
        buildYear: ''
    });
    const swiperRef = useRef(null);

    // Fetch properties with filters using Axios
    const fetchProperties = () => {
        const queryString = new URLSearchParams(filters).toString();
        // console.log(queryString);
        axios.get(`http://localhost:5000/properties?${queryString}`)
            .then(response => setProperties(response.data))
            .catch(error => console.error('Error fetching properties:', error));
    };

    useEffect(() => {
        fetchProperties();
    }, [filters]);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const goToNextSlide = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };

    const goToPreviousSlide = () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };

    return (
        <div className='container bg-[#141414] mx-auto mb-5'>
            <div className='max-w-[1400px] mx-auto mt-8 mb-9'>
                <div className='mb-9'>
                    <div className='lg:w-3/5 mx-auto bg-[#191919]'>
                        <form className='border-2 border-base-100 p-4'>
                            <label className="flex items-center gap-2">
                                <input
                                    type="text"
                                    name="search"
                                    className="grow p-3 text-white border-base-100 rounded-l-lg focus:outline-none"
                                    placeholder="Search For a Property"
                                    onChange={handleFilterChange}
                                />
                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-white rounded-r-lg font-semibold btn bg-[#703bf7]"
                                    onClick={fetchProperties}
                                >
                                    <IoSearch /> Find Property
                                </button>
                            </label>
                        </form>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 lg:w-3/4 bg-[#191919] p-4 mx-auto'>
                        <div>
                            <label htmlFor="location" className='flex items-center gap-3'>
                                <CiLocationOn className='text-2xl' />
                                <select name="location" className="select select-bordered w-full max-w-xs" onChange={handleFilterChange}>
                                    <option value="">Your Location</option>
                                    {/* Add more location options here */}
                                    <option value="321 Ocean Drive, Malibu, CA 90265, USA">321 Ocean Drive, Malibu, CA 90265, USA</option>
                                    <option value="789 Central Park West, New York, NY 10025, USA">789 Central Park West, New York, NY 10025, USA</option>
                                    {/* Add more options as needed */}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="propertyType" className='flex gap-3 items-center'>
                                <MdVilla className='text-2xl' />
                                <select name="propertyType" className="select select-bordered w-full max-w-xs" onChange={handleFilterChange}>
                                    <option value="">Property Type</option>
                                    {/* Add more property type options here */}
                                    <option value="Seaside Serenity Villa">Seaside Serenity Villa</option>
                                    <option value="Metropolitan Haven">Metropolitan Haven</option>
                                    {/* Add more options as needed */}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="priceRange" className='flex items-center gap-3'>
                                <MdCameraEnhance className='text-2xl' />
                                <select name="priceRange" className="select select-bordered" onChange={handleFilterChange}>
                                    <option value="">Price Range</option>
                                    {/* Add more price range options here */}
                                    <option value="100000-500000">100000-500000</option>
                                    <option value="500000-1000000">500000-1000000</option>
                                    {/* Add more options as needed */}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="size" className='flex items-center gap-3'>
                                <LuBox className='text-2xl' />
                                <select name="size" className="select select-bordered" onChange={handleFilterChange}>
                                    <option value="">Property Size</option>
                                    {/* Add more size options here */}
                                    <option value="1200-1500 ">1200-1500 sqft</option>
                                    <option value="1500-2000 ">1500-2000 sqft</option>
                                    {/* Add more options as needed */}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="buildYear" className='flex items-center gap-3'>
                                <MdCalendarMonth />
                                <select name="buildYear" className="select select-bordered" onChange={handleFilterChange}>
                                    <option value="">Build Year</option>
                                    {/* Add more build year options here */}
                                    <option value="1990-2000">1990-2000</option>
                                    <option value="2000-2010">2000-2010</option>
                                    {/* Add more options as needed */}
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row items-center'>
                        <div>
                            <h1 className='text-4xl text-white font-bold'>Discover a World of Possibilities</h1>
                            <p className='mt-2'>
                                Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.
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
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {properties.map((property) => (
                                    <SwiperSlide key={property._id}>
                                        <PropertiesCard property={property} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                        <div className='absolute bottom-0 right-0 flex items-center justify-end gap-5 w-full p-4'>
                            {currentIndex > 0 && (
                                <button
                                    onClick={goToPreviousSlide}
                                    className='bg-gray-800 text-white text-xl p-2 rounded-full hover:bg-gray-700'
                                >
                                    <FaArrowLeft />
                                </button>
                            )}
                            {currentIndex < properties.length - 1 && (
                                <button
                                    onClick={goToNextSlide}
                                    className='bg-gray-800 text-blue-500 text-xl p-2 rounded-full hover:bg-gray-700'
                                >
                                    <FaArrowRight />
                                </button>
                            )}
                        </div>
                        <div className='bottom-0 right-0 flex items-center space-x-2 p-4'>
                            <span className='text-white'>
                                {currentIndex >= 9 ? `${currentIndex + 1} Of ${properties.length}` : `0${currentIndex + 1} Of ${properties.length}`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverProperty;
