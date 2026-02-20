import React from "react";

const Section1 = () => {
  return (
    <div
      className='flex flex-col-reverse sm:flex-row w-full max-w-[1200px] m-auto justify-between items-center gap-6 px-4'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          What is Lead Generation?
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Lead generation is the process of attracting and converting prospects
          into someone who has indicated interest in your company's product or
          service. It's a fundamental point in an individual's journey to
          becoming a delighted customer. DIS provides comprehensive lead
          generation services that help businesses identify, attract, and engage
          potential customers through various digital channels.
          <br />
          <br />
          Our strategic approach combines content marketing, SEO, social media
          marketing, email campaigns, and paid advertising to create a steady
          stream of qualified leads. We focus on understanding your target
          audience, creating compelling offers, and optimizing every touchpoint
          to maximize conversion rates and ROI.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/lead1.png' className='w-full' alt='Lead Generation' />
      </div>
    </div>
  );
};

export default Section1;
