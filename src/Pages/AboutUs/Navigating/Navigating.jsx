import React from 'react';

const Cards = [
  {
    id: 1,
    title: "Discover a World of Possibilities",
    description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
  },
  {
    id: 2,
    title: "Narrowing Down Your Choices",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
  },
  {
    id: 3,
    title: "Personalized Guidance",
    description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
  },
  {
    id: 4,
    title: "See It for Yourself",
    description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
  },
  {
    id: 5,
    title: "Making Informed Decisions",
    description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
  },
  {
    id: 6,
    title: "Getting the Best Deal",
    description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
  },
];

const Navigating = () => {  
  return (
    <div className="container mx-auto">
      <div className='max-w-[1400px] p-4 lg:p-0 mx-auto'>
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
        <div className="grid mt-9 lg:grid-cols-3 grid-cols-1 gap-9">
          {
            Cards.map((card, index) => (
              <div key={card.id}>
                <h1 className="border-l-4 border-[#462793] px-4 mb-2">Step {index + 1}</h1>
                <div className="border-4 h-[200px] p-6 bg-gradient-to-br from-[#21163b] via-[#010005] to-[#030000] border-[#36255c]">
                  <h1 className="text-xl text-white"> {card.title} </h1>
                  <p className="text-gray-300 mt-2"> {card.description} </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Navigating;
