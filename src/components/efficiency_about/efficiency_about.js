import React from "react";

const Efficiency_about = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center'>
        Our Expertise on Delivering You Efficiency
      </h2>

      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='text-center'>
          <img
            src='/value/4.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4'>
            Future-Ready Scalability
          </h2>
        </div>
        <div className='text-center'>
          <img
            src='/value/5.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4'>
            Unbreakable Security Frameworks
          </h2>
        </div>
        <div className='text-center'>
          <img
            src='/value/6.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4'>
            Sustainable Development Practices
          </h2>
        </div>
        <div className='text-center'>
          <img
            src='/value/7.png'
            className='mx-auto h-24 md:h-36 object-contain'
          />
          <h2 className='text-lg md:text-xl font-bold mt-4'>
            Data Driven Decisions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Efficiency_about;
