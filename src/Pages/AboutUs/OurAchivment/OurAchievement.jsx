

const OurAchievement = () => {
     return (
          <div className="container mx-auto mt-4 mb-9">
               <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
                    <h1>
                         <img src="https://i.ibb.co/9rC9LC6/Abstract-Design.png" alt="Featured Properties" />
                    </h1>
                    <div className='flex flex-col gap-6 lg:gap-0  lg:flex-row items-center'>
                         <div>
                              <h1 className='text-4xl text-white font-semibold'>Our Achievements</h1>
                              <p className='mt-3'>
                              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                              </p>
                         </div>
                         
                    </div>
                    <div className="grid mt-9 lg:grid-cols-3 grid-cols-1 gap-6">
                         <div className="card p-8 h-[200px] border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white" > 3+ Years of Excellence  </h1>
                              <p> with over 3 years in the industry,we've amassed a wealth of knowledge and experience,becoming a go-to resource for all things real estate. </p>
                         </div>
                         <div className="card p-8 h-[200px]  border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white" > Happy Clients</h1>
                              <p> Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
                         </div>
                         <div className="card h-[200px] p-8  border-4 border-base-100">
                              <h1 className="text-2xl mb-2 font-medium text-white" > Industry Recognition  </h1>
                              <p> We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
                         </div>
                        
                    </div>
               </div>
          </div>
     );
};

export default OurAchievement;