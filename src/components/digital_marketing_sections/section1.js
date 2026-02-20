import React from "react";

const Section1 = () => {
  return (
    <div
      className='flex flex-col sm:flex-row w-full max-w-[1200px] m-auto justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Best Digital Marketing Services
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Subscribe for the best DIS focused digital marketing services to gain
          success in your business. DMS is an Agency that provides the best DIS
          focused marketing solutions digitally, including SEO, SMM, PPC,
          design, and development services. Digital marketing and digital
          solution are prevalent and necessary topics in the present era.
          <br />
          <br />
          Traditional Marketing methods are not as flexible as digital
          marketing, which is why people are turning away from Traditional
          Marketing. Digital marketing is getting more popular daily, so your
          marketing should proceed digitally. Here we will discuss our best DIS
          focused digital Marketing service below.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img className='w-full' src='/digital1.webp' alt='Digital Marketing' />
      </div>
    </div>
  );
};

export default Section1;
