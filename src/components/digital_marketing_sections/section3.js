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
          <img className='w-full' src='/digital3.png' alt='Market Research' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-3xl sm:text-4xl font-bold text-center sm:text-left'>
            Market Research & Competitors Analysis
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Market Research and Competitors Analysis is a significant portion of
            any business. Because of which business you are looking to build,
            you must know about the market demand and competition in that
            particular niche. To know all this, you must do market research and
            competitor analysis.
            <br />
            <br />
            DMS implements the highest strategy for market research and
            competitor analysis to give you a detailed audit report. By having
            the information, you will get a clear conception of your
            business&apos;s market demand and competition, which will help you
            in decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
