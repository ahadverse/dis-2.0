import React from "react";

const Section7 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col-reverse sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Conversion Rate Optimization (CRO)
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Generating traffic is only half the battle. Our CRO services focus on
          turning more of your website visitors into leads. We analyze user
          behavior, identify friction points, and implement improvements to your
          landing pages, forms, CTAs, and overall user experience.
          <br />
          <br />
          Through systematic A/B testing and multivariate testing, we
          continuously optimize every element of your conversion funnel. Small
          improvements in conversion rates can lead to massive increases in lead
          volume and revenue, making CRO one of the highest-ROI activities in
          digital marketing.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/lead7.webp' className='w-full' alt='CRO Services' />
      </div>
    </div>
  );
};

export default Section7;
