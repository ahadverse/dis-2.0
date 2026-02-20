import React from "react";

const Section6 = () => {
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
          <img className='w-full' src='/digtal6.webp' alt='SEO Services' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Best SEO Service Provider
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            We provide the best SEO service for small, medium, and large
            businesses. Suppose you are a doctor, real estate business owner, or
            plumber. Now you want your organic online presence. If someone
            searches by writing your desired keyword on Google or any search
            engine, they will find you quickly.
            <br />
            <br />
            Then it would help if you worked on SEO. If you want to organically
            occupy the first position in Google results, you must do SEO for
            your website. In this case, DMS will provide you with affordable SEO
            services that will quickly bring your business or website to the
            first position of Google search results. We will suggest the most
            trending and searchable keywords with low difficulties, top-class
            content optimization, on-page SEO, technical solution, and off-page,
            which means link-building services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
