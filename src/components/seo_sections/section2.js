import React from "react";

const Section2 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <div
        className='w-full max-w-[1200px] px-4 py-20 m-auto flex flex-col-reverse sm:flex-row gap-6 justify-between items-center'
        data-aos='fade-up'
      >
        <div className='w-full sm:w-6/12'>
          <img src='/seo2.png' className='w-full' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Summary Of The SEO Strategy
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Summary Of The SEO Strategy Search engine optimization is a proven
            way to give your business website quick results by reaching organic
            visitors and targeted visitors. It consists of targeted keywords for
            business or individual websites and suggests a targeted website in
            the top list of search engines, ensuring more organic traffic to the
            company or particular website. An effective On-page and off-page
            detail audit report can also help to get ranked in the search
            engines and increases the chance of more profitability from
            searchers.
            <br />
            <br />
            Your website may not be ranking as highly as it should be, and the
            quickest and most effective method to figure out why is to have a
            full audit performed. Our SEO Audit agency is completely open and
            honest, and we examine the technical, on-page, and off-page aspects
            of your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
