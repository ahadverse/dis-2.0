import React from "react";

const Section10 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <div
        className='w-full max-w-[1200px] py-20 px-4 gap-6 m-auto flex flex-col sm:flex-row justify-between items-center'
        data-aos='fade-up'
      >
        <div className='w-full sm:w-6/12'>
          <img src='/smm10.webp' className='w-full' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Optimize Your Accounts
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            You need to make sure that your social media profiles are optimized.
            For example, fill in your profile biography, set your profile photo
            or logo, check whether the resolution of the image or logo is
            correct or not, add your business website link or check whether the
            links are working, and add your contact number and address. Our
            social media experts will optimize your accounts in the best way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
