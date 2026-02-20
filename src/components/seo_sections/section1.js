import React from "react";

const Section1 = () => {
  return (
    <div
      className='flex flex-col sm:flex-row w-full max-w-[1200px] px-4 m-auto justify-between items-center gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Search Engine Optimization
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Digital Marketing Solution Pvt Ltd is the best SEO service provider in
          Bangladesh. We are skilled in full-stack digital marketing services.
          DMS has over 12 years of experience in this particular section. We
          offer professional and affordable SEO services to get more customers
          from all Search Engines. DMS provides advanced Local SEO services,
          Global Search Engine Optimization services, On-page and off-page
          detail audit reports, profitable keyword research, optimized content
          writing, on-page strategies implementation, and off-page or
          link-building services.
          <br />
          <br />
          SEO is the proper area for all kinds of business growth. Implementing
          the right and appropriate strategy can bring success faster, rather
          than enforcing physical marketing policies. Online marketing
          strategies consist of several parts. Search Engine Optimization is one
          of them.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/seo1.webp' className='w-full' />
      </div>
    </div>
  );
};

export default Section1;
