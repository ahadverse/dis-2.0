import React from "react";

const Section5 = () => {
  return (
    <div
      className='w-full max-w-[1200px] px-4 py-20 m-auto flex flex-col sm:flex-row gap-6 justify-between items-center'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          How SEO Can Be a Real Shot for Your Business
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          E-Commerce Sales Are Predicted to Hit $6.5 Trillion by 2023. By doing
          proper Search Engine Optimization, you can drive unique visitors. It
          can help you get ranked in the search engines, increase your
          conversion rate, and engage more customers on your site, reducing
          bounce rates. That way, your business will get popular all over the
          world and locally.
          <br />
          <br />
          All of the outcomes will make your website valuable. After doing
          proper Search Engine strategies, your website may work for you as a
          money-making machine.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/seo5.webp' className='w-full' />
      </div>
    </div>
  );
};

export default Section5;
