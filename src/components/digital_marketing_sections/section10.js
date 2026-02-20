import React from "react";

const Section10 = () => {
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
          <img className='w-full' src='/digital11.webp' alt='Facebook Ads' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Facebook Ads
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Facebook is a giant platform for promoting a business through
            organic and paid marketing. Facebook Ads is a paid marketing that is
            very popular for maximum business owners. Monthly more than 2
            billion people use Facebook. Facebook&apos;s popularity in product
            and service marketing is increasing daily.
            <br />
            <br />
            Facebook Ads allows advertisers to target particular audiences based
            on geography, interests, behaviors, and demographics. You can run
            your ads in various formats, for instance, videos, images,
            carousels, etc. Advanced Facebook ads are much more controlled, and
            targeted advertising campaigns should be run by an experienced ad
            expert. DMS has enough Facebook ad experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
