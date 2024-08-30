

const UnlockValue = () => {
     return (
          <div className="container mx-auto mt-4 mb-9">
               <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
                    <h1>
                         <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex flex-col gap-6 lg:gap-0  lg:flex-row items-center'>
                         <div>
                              <h1 className='text-4xl text-white font-semibold'>Unlock Property Value</h1>
                              <p className='mt-3'>
                                   Discover the true worth of your property with our expert valuation services.
                              </p>
                         </div>

                    </div>
                    <div className="grid mt-9 lg:grid-cols-3 grid-cols-1 gap-6">
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/NF4p0wf/Icon-Container-8.png" alt="" className="size-11" />  Valuation Mastery</h1>
                              <p> Selling a property requires more than just a listing; it demands a strategic marketing approach.</p>
                         </div>
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/pQgssJp/Icon-Container-9.png" alt="" className="size-11" />  Strategic Marketing</h1>
                              <p> Negotiating the best deal is an art, and our negotiation experts are masters of it.</p>
                         </div>
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/r6ywNtB/Icon-Container-10.png" alt="" className="size-11" />  Negotiation Wizardry</h1>
                              <p> A successful sale is not complete until the closing. We guide you through the intricate closing process.</p>
                         </div>
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white flex gap-3" > <img src="https://i.ibb.co/WzxSs9F/Icon-Container-11.png" alt="" className="size-11" />  Closing Success</h1>
                              <p> with over 3 years in the industry,we've amassed a wealth of knowledge and experience,becoming a go-to resource for all things real estate. </p>
                         </div>
                         <div style={{
                              backgroundImage: "url(https://i.ibb.co/Pc3D7qj/Card.png)",
                         }} className="card bg-cover bg-no-repeat bg-center p-8  lg:col-span-2 border-4 border-base-100">
                              <div className="flex  justify-between">
                                   <h1 className="text-2xl text-white font-semibold">Unlock the Value of Your Property Today</h1>
                                   <button className="btn text-white"> Learn More </button>
                              </div>
                              <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                         </div>


                    </div>
               </div>
          </div>
     );
};

export default UnlockValue;