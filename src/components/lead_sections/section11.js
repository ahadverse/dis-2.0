import React from "react";

const Section11 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col-reverse sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Why Choose DIS for Lead Generation?
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          With over 12 years of experience, DIS has helped hundreds of
          businesses build predictable, scalable lead generation systems. Our
          proven methodologies combine strategic thinking, creative execution,
          and data-driven optimization to deliver consistent results.
          <br />
          <br />
          We don't believe in one-size-fits-all solutions. Every business is
          unique, and we take the time to understand your goals, challenges, and
          target audience. Our customized strategies are designed to work
          specifically for your business, delivering the quality and quantity of
          leads you need to achieve your growth objectives. Partner with us to
          transform your lead generation and accelerate your business growth.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/lead11.webp' className='w-full' alt='Why Choose Us' />
      </div>
    </div>
  );
};

export default Section11;
