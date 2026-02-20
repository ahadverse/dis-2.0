import React from "react";

const Section4 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col-reverse sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full'>
        <h1 className='text-3xl sm:text-3xl mb-8 sm:mb-16 text-center sm:text-left font-bold'>
          Our Lead Generation Services Include
        </h1>
        <p className='text-lg sm:text-2xl mt-6'>
          <li className='mt-3'>
            Target Audience Research & Persona Development
          </li>
          <li className='mt-3'>
            Lead Magnet Creation (eBooks, Whitepapers, Tools)
          </li>
          <li className='mt-3'>Landing Page Design & Optimization</li>
          <li className='mt-3'>Content Marketing Strategy</li>
          <li className='mt-3'>Email Marketing Campaigns</li>
          <li className='mt-3'>Social Media Lead Generation</li>
          <li className='mt-3'>PPC & Display Advertising</li>
          <li className='mt-3'>SEO & Organic Lead Generation</li>
          <li className='mt-3'>Marketing Automation Setup</li>
          <li className='mt-3'>Lead Scoring & Qualification</li>
          <li className='mt-3'>CRM Integration</li>
          <li className='mt-3'>Conversion Rate Optimization</li>
          <li className='mt-3'>Analytics & Performance Tracking</li>
        </p>
      </div>
      {/* <div className='w-full sm:w-5/12'>
        <img className='w-full' src='/lead4.webp' alt='Our Services' />
      </div> */}
    </div>
  );
};

export default Section4;
