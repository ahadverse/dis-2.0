import React from "react";

const Section4 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col-reverse sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-7/12'>
        <h1 className='text-3xl sm:text-5xl mb-8 sm:mb-16 text-center sm:text-left font-bold'>
          Our Most Demandable Services for Digital Marketing
        </h1>
        <p className='text-lg sm:text-2xl mt-6'>
          Our Most Demandable Services for Digital Marketing :
          <li className='mt-3'>Market Research</li>
          <li className='mt-3'>Competitors Analysis </li>
          <li className='mt-3'>Making Plans & Ideas</li>
          <li className='mt-3'>Brand SMS Marketing</li>
          <li className='mt-3'>2D & 3D Video Making</li>
          <li className='mt-3'>Social Media Marketing</li>
          <li className='mt-3'>Creative Graphic Design</li>
          <li className='mt-3'>Targeted Email Marketing</li>
          <li className='mt-3'>Content/Article Development</li>
          <li className='mt-3'>Promotional Video Marketing </li>
          <li className='mt-3'>Facebook Data-Driven Marketing </li>
          <li className='mt-3'>Search Engine Optimization-SEO</li>
          <li className='mt-3'>Google Data-Driven Marketing Ads</li>
          <span className='mt-6 block'>Google Data-Driven Marketing Ads</span>
        </p>
      </div>
      <div className='w-full sm:w-5/12'>
        <img className='w-full' src='/digital4.webp' alt='Our Services' />
      </div>
    </div>
  );
};

export default Section4;
