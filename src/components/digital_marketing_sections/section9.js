import React from "react";

const Section9 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Video Marketing Services
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Video marketing means creating video content and sharing it to promote
          a brand. Videos will be descriptive, describing your products or
          services in detail through video creation. You can do video marketing
          on various mediums like Facebook, YouTube, Twitter, Instagram, etc.
          <br />
          <br />
          Video marketing is crucial for a business because it can convince
          customers quickly. People prefer to watch video content rather than
          read it because it doesn&apos;t waste time, and they can easily
          understand the quality of the products by watching the video.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img className='w-full' src='/digital9.webp' alt='Video Marketing' />
      </div>
    </div>
  );
};

export default Section9;
