import React from "react";

const Calibrated = () => {
  return (
    <div className='mt-12 px-4 sm:px-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold'>
        Calibrated Web Dev Services for Businesses
      </h1>
      <p className='text-base md:text-lg text-center mt-4 max-w-2xl mx-auto'>
        A professional Web Design & Development process needs all supporting
        limbs. With our list of core services, we create successful web
        development projects for businesses.
      </p>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8'>
        <div
          className='w-full border shadow-lg p-6 md:p-8 rounded-3xl'
          style={{
            background:
              "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
          }}
        >
          <img src='/web1.png' className='w-16 h-16 object-contain' />
          <h1 className='text-lg md:text-xl font-bold my-3'>
            Custom Website Design & Development
          </h1>
          <p className='text-sm md:text-base'>
            Creates your online presence from scratch, according to your
            business goals.
          </p>
        </div>
        <div
          className='w-full border shadow-lg p-6 md:p-8 rounded-3xl'
          style={{
            background:
              "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
          }}
        >
          <img src='/web2.png' className='w-16 h-16 object-contain' />
          <h1 className='text-lg md:text-xl font-bold my-3'>
            Responsive & Mobile-Optimized Design
          </h1>
          <p className='text-sm md:text-base'>
            Sets up your website's accessibility across all devices, pumping
            more visitors.
          </p>
        </div>
        <div
          className='w-full border shadow-lg p-6 md:p-8 rounded-3xl'
          style={{
            background:
              "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
          }}
        >
          <img src='/web3.png' className='w-16 h-16 object-contain' />
          <h1 className='text-lg md:text-xl font-bold my-3'>
            CMS Integration (WordPress, Shopify, etc.)
          </h1>
          <p className='text-sm md:text-base'>
            No time for endless lines of code, we create sites with CMS mastery.
          </p>
        </div>
        <div
          className='w-full border shadow-lg p-6 md:p-8 rounded-3xl'
          style={{
            background:
              "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
          }}
        >
          <img src='/web4.png' className='w-16 h-16 object-contain' />
          <h1 className='text-lg md:text-xl font-bold my-3'>
            SEO-Optimized Website Structure
          </h1>
          <p className='text-sm md:text-base'>
            SEO Optimized structures automatically set the site up for quick
            indexing & ranking,
          </p>
        </div>
      </div>
      <div
        className='w-full md:w-1/2 border shadow-lg p-6 md:p-8 rounded-3xl mt-6 mx-auto'
        style={{
          background:
            "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
        }}
      >
        <img src='/web5.png' className='w-16 h-16 object-contain' />
        <h1 className='text-lg md:text-xl font-bold my-3'>
          Website Maintenance and Support
        </h1>
        <p className='text-sm md:text-base'>
          Keeps your website updated, letting you add pages and products in a
          jiffy.
        </p>
      </div>
    </div>
  );
};

export default Calibrated;
