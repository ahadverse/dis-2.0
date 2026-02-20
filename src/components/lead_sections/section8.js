import React from "react";

const Section8 = () => {
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
          <img className='w-full' src='/lead8.webp' alt='Analytics' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Data-Driven Analytics & Reporting
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            We believe in transparent, data-driven decision making. Our
            comprehensive analytics and reporting give you complete visibility
            into your lead generation performance. Track key metrics like cost
            per lead, lead quality scores, conversion rates, and ROI across all
            channels in real-time.
            <br />
            <br />
            Our detailed monthly reports break down performance by channel,
            campaign, and audience segment. We provide actionable insights and
            recommendations for continuous improvement, ensuring your lead
            generation strategy evolves with your business and market
            conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
