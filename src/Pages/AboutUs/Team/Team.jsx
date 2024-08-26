import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { MdWavingHand } from 'react-icons/md';
import { PiHandWavingLight } from 'react-icons/pi';

const Teams = [
  {
    id: 1,
    image: "https://i.ibb.co/4RDTwgW/lovepik-young-boys-studying-office-image-picture-501705104.jpg",
    name: "Max Mitchell",
    title: "Founder"
  },
  {
    id: 2,
    image: "https://i.ibb.co/4RDTwgW/lovepik-young-boys-studying-office-image-picture-501705104.jpg",
    name: "Sarah Johnson",
    title: "Chief Real Estate Officer"
  },
  {
    id: 3,
    image: "https://i.ibb.co/4RDTwgW/lovepik-young-boys-studying-office-image-picture-501705104.jpg",
    name: "David Brown",
    title: "Head of Property Management"
  },
  {
    id: 4,
    image: "https://i.ibb.co/4RDTwgW/lovepik-young-boys-studying-office-image-picture-501705104.jpg",
    name: "Michael Turner",
    title: "Legal Counsel"
  },

];

const Team = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    setIsTyping(event.target.value.length > 0);
  };

  return (
    <div className="container mx-auto mt-8 mb-8">
      <div className='max-w-[1400px] p-4 lg:p-0 space-y-4 mx-auto'>
        <h1>
          <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
        </h1>
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row items-center'>
          <div>
            <h1 className='text-4xl text-white font-semibold'>Navigating the Estatein Experience</h1>
            <p className='mt-3'>

              At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
            </p>
          </div>
        </div>
        <div className="grid mt-9 lg:grid-cols-4 grid-cols-1 gap-9">
          {
            Teams.map((team, index) => (
              <div className=' hover:shadow-2xl border-4 border-base-100'>
                <img src={team.image} alt={team.title} className='w-full relative rounded-3xl  p-5 h-64 object-cover' />
                <img src="https://i.ibb.co/5BzZhNz/Button.png" alt="" className='absolute -mt-10 ml-[110px]' />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-semibold text-white '>{team.name}</h3>
                  <h3 className='text-lg '>{team.title}</h3>
                  <form action="">
                    <label className="input rounded-full input-bordered mt-5  justify-between  flex items-center gap-2">
                      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFd5_VwxUuLfPmb9y00BnuMpuE2IJpJOLh6ELJW27cixpBfrR0KdCHZP_olHgD1kAgds&usqp=CAU" cll
                                     alt="" className='size-4' /> */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Say Hello"
                          className="pr-10   py-2 w-full focus:outline-none"
                          onChange={handleInputChange}
                        />
                        {!isTyping && (
                          <PiHandWavingLight className="absolute lg:right-[120px] right-[120px] top-1/2 transform -translate-y-1/2 text-yellow-400 text-xl" />
                        )}
                      </div>



                      <button className="text-2xl   font-bold   rounded-full bg-[#703bf7]">  <IoIosSend></IoIosSend> </button>
                    </label>

                  </form>

                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Team;
