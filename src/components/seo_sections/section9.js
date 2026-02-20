import React from "react";

const Section9 = () => {
  return (
    <div
      className='w-full max-w-[1200px] px-4 py-20 m-auto flex flex-col sm:flex-row gap-6 justify-between items-center'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          Deliver the Right Message to Get the Most Benefits
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          Since Google released the Panda update in 2011, one of the most
          important components of search engine optimization has been creating
          high-quality content. The search engine&apos;s attention is now being
          directed to the high relevancy of the content that is provided on your
          website, as well as the value that it may offer to the user.
          <br />
          <br />
          Active content generation may be used by the vast majority of
          websites. However, not all of those websites believe it to be
          productive. The reason for this is that optimizing written material is
          required in order to make the most of its potential. Copywriting
          optimized for search engines is a direct response to search engines
          requirements for high-quality materials.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/seo9.webp' className='w-full' />
      </div>
    </div>
  );
};

export default Section9;
