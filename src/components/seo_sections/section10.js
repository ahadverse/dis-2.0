import React from "react";

const Section10 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <div
        className='w-full max-w-[1200px] px-4 py-20 m-auto flex flex-col-reverse sm:flex-row gap-6 justify-between items-center'
        data-aos='fade-up'
      >
        <div className='w-full sm:w-6/12'>
          <img src='/digital11.webp' className='w-full' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Our Advanced Local SEO Service
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            We will provide you with advanced local SEO services. By getting the
            service, you can bring certain keywords of your business to the
            first position of the search engine in a certain area in an organic
            way. Local SEO is currently the most popular marketing strategy
            through which your business will grow exponentially within a short
            period of time. <br />
            <br /> So our advanced local search engine optimization service
            could be the turning point for your local business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
