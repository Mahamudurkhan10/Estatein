
const SmartDecision = () => {
     return (
          <div>
               <div className="bg-[#141414] container mx-auto  ">
                    <div className="  max-w-[1400px] mx-auto  mb-9 ">
                         <div className="grid lg:grid-cols-2 lg:items-center   grid-cols-1    ">
                              <div className=" px-2  ">
                                   <div>
                                        <h1>
                                             <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                                        </h1>
                                        <h1 className="text-3xl mt-5 lg:text-4xl lg:w-1/2  text-white font-semibold">Smart Investments, Informed Decisions</h1>
                                        <p className=" mt-2 lg:w-2/3">
                                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                                        </p>

                                   </div>
                                   <div>
                                        <div style={{
                                             backgroundImage: "url(https://i.ibb.co/Pc3D7qj/Card.png)",
                                        }} className="card bg-cover bg-no-repeat bg-center p-8 w-3/4 mt-5 border-4 border-base-100">
                                             <div >
                                                  <h1 className="text-2xl text-white font-semibold">Unlock Your Investment Potential</h1>
                                                
                                             </div>
                                             <p className="">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                                             <button className="btn bg-[#191919] text-white "> Learn More </button>
                                        </div>
                                   </div>

                              </div>
                              <div className=' lg:p-0 hover:shadow-2xl border-4 border-base-100  card '>
                                   <div className='p-4'>
                                        <div className='grid  grid-cols-1 lg:grid-cols-2  gap-2 '>
                                             <div className='card bg-[#191919] border-4 border-base-100 p-4'>
                                                  <h1 className='flex gap-4 items-center font-semibold text-xl'> <img src="https://i.ibb.co/ctBFj0d/Icon-Container-12.png" alt="" className='rounded-full size-[50px]' /> Market Insight </h1>
                                                  <p className='mt-5'>Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions </p>
                                             </div>
                                             <div className='card bg-[#191919] border-4 border-base-100 p-4'>
                                                  <h1 className='flex gap-4 items-center font-semibold text-xl'> <img src="https://i.ibb.co/3BzGC5Q/Icon-Container-13.png" alt="" className='rounded-full size-[50px]' /> ROI Assessment </h1>
                                                  <p className='mt-5'>Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments</p>
                                             </div>
                                        </div>

                                        <div className='grid grid-cols-1 mt-2  lg:grid-cols-2  gap-2  '>
                                             <div className='card bg-[#191919] border-4 border-base-100 p-4'>
                                                  <h1 className='flex gap-4 items-center font-semibold text-xl'> <img src="https://i.ibb.co/2yQ1DKy/Icon-Container-14.png" alt="" className='rounded-full size-[50px]' /> Customized Strategies </h1>
                                                  <p className='mt-5'>Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs</p>
                                             </div>

                                             <div className='card bg-[#191919] border-4 border-base-100 p-4'>
                                                  <h1 className='flex gap-4 items-center font-semibold text-xl'> <img src="https://i.ibb.co/NsxZ2hK/Icon-Container-3.png" alt="" className='rounded-full size-[50px]' /> Diversification Mastery </h1>
                                                  <p className='mt-5'>Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations</p>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SmartDecision;