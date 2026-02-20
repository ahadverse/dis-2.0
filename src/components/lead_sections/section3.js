import React from "react";

const Section3 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <div
        className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-6'
        data-aos='fade-up'
      >
        <div className='w-full sm:w-6/12'>
          <img
            className='w-full'
            src='/lead3.webp'
            alt='Multi-Channel Approach'
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
