import React from 'react';

const Management = () => {
     return (
          <div className="container mx-auto mt-4 mb-9">
               <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
                    <h1>
                         <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex flex-col gap-6 lg:gap-0  lg:flex-row items-center'>
                         <div>
                              <h1 className='text-4xl text-white font-semibold'>Effortless Property Management</h1>
                              <p className='mt-3'>
                              Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you
                              </p>
                         </div>

                    </div>
                    <div className="grid mt-9 lg:grid-cols-3 grid-cols-1 gap-6">
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/gTg9pXS/Icon-Container-16.png" alt="" className="size-11" />  Tenant Harmony</h1>
                              <p> Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
                         </div>
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/hBznSNb/Icon-Container-17.png" alt="" className="size-11" />  Maintenance Ease</h1>
                              <p> Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.</p>
                         </div>
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/988KHKb/Icon-Container-18.png" alt="" className="size-11" />  Financial Peace of Mind</h1>
                              <p> Managing property finances can be complex. Our financial experts take care of rent collection</p>
                         </div>
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/NsxZ2hK/Icon-Container-3.png" alt="" className="size-11" />  Legal Guardian</h1>
                              <p> Stay compliant with property laws and regulations effortlessly.</p>
                         </div>
                         <div style={{
                              backgroundImage: "url(https://i.ibb.co/Pc3D7qj/Card.png)",
                         }} className="card bg-cover bg-no-repeat bg-center p-8   lg:col-span-2 border-4 border-base-100">
                              <div className="flex justify-between">
                                   <h1 className="text-2xl text-white font-semibold">Experience Effortless Property Management</h1>
                                   <button className="btn text-white"> Learn More </button>
                              </div>
                              <p>Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                         </div>


                    </div>
               </div>
          </div>
     );
};

export default Management;