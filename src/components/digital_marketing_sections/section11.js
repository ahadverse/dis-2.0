import React from "react";

const Section11 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-12 sm:py-20 m-auto flex flex-col sm:flex-row justify-between items-center px-4 gap-6'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Google Ads
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Google Ad is a Google-recognized paid advertising process. You can
          promote your product or service through Google Ads by following
          Google&apos;s rules and regulations.
          <br />
          <br />
          Through Google Ad., you will always get the desired audience, because,
          in the process of Google Search Ad., the consumers will search for
          your service or product according to their needs. Due to this the
          conversion rate increases. DMS provides a variety of google ads such
          as google search ads, Display ads, Video ads, Shopping ads, App ads,
          etc.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img className='w-full' src='/digital10.webp' alt='Google Ads' />
      </div>
    </div>
  );
};

export default Section11;
