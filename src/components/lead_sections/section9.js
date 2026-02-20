import React from "react";

const Section9 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col-reverse sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          B2B Lead Generation Expertise
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          B2B lead generation requires a different approach than B2C. We
          understand the complexities of longer sales cycles, multiple
          decision-makers, and higher-value transactions. Our B2B lead
          generation strategies focus on building thought leadership, creating
          valuable content, and establishing trust with key stakeholders.
          <br />
          <br />
          We leverage LinkedIn marketing, industry-specific content,
          account-based marketing (ABM), and strategic partnerships to reach
          decision-makers in your target companies. Our approach generates not
          just leads, but qualified opportunities that your sales team can
          convert into long-term, high-value customers.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/lead9.webp' className='w-full' alt='B2B Lead Generation' />
      </div>
    </div>
  );
};

export default Section9;
