import React from "react";

const Mission = () => {
  return (
    <div className='bg-[#E0F2FE] py-12 px-4 sm:px-6 md:px-12'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2'>
          <h2 className='text-2xl md:text-4xl font-bold'>
            What Drives Our Future and Guides Our Actions?
          </h2>
        </div>

        <div className='md:w-1/2'>
          <h1 className='text-xl md:text-2xl font-bold'>Mission</h1>
          <p className='text-base md:text-lg mt-2'>
            We're on a mission to develop websites that are not only affordable
            in investment but supercharged for peak performance.
          </p>

          <h3 className='text-xl md:text-2xl font-bold mt-6'>VISION</h3>
          <p className='text-base md:text-lg mt-2'>
            Our goal is to be the architects of the web's future, building
            online experiences ensuring every user journey is an adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
