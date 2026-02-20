import React from "react";

const Section4 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-20 px-4 m-auto flex flex-col-reverse sm:flex-row gap-6 justify-between items-center'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-7/12'>
        <h1 className='text-3xl sm:text-5xl mb-16 text-center sm:text-left font-bold'>
          Social Media Marketing Will Help Your Business To Earn Trust
        </h1>
        <p className='text-base sm:text-lg mt-6'>
          It’s no secret if you write good Ad copy and use a social media
          marketing strategy wisely, you will get tons of traffic with lots of
          love and share. But, what is the connection between branding and
          having lots of like and share? A study found that when users notice
          their friends are sharing and recommending someone&apos;s page or
          product, their trustworthiness increases towards those products and
          businesses.
          <br />
          <br />
          Social Media helps businesses get popularity worldwide and drive
          targeted traffic, which can help your website to get a higher ranking
          in search engines and profit margins for your business.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/smm3.webp' className='w-full m-auto' />
      </div>
    </div>
  );
};

export default Section4;
