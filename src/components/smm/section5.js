import React from "react";

const Section5 = () => {
  return (
    <div
      className='w-full max-w-[1200px] py-20 px-4 m-auto flex flex-col-reverse sm:flex-row gap-6 justify-between items-center'
      data-aos='fade-up'
    >
      <div className='w-full sm:w-6/12'>
        {" "}
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
          How Social Media Marketing Can Help Your Business To Grow
        </h1>
        <p className='mt-6 text-base sm:text-lg'>
          As an investor and business owner, the question may arise in your mind
          how social media can help your business grow? If this question arises
          in your mind, you should know that most companies worldwide are making
          huge profits by selling their products through social campaigning.
          Research shows that 90% of marketers claim that social media marketing
          has improved the visibility of their company.
          <br />
          <br />
          91 percent of retail brands use at least two social media. Some of
          them are established for a long time on the market and some are
          beginners. Whatever your business age and the product, if you want to
          get profits quickly from your campaign, social media marketing is the
          best plan for you.
        </p>
      </div>
      <div className='w-full sm:w-6/12'>
        <img src='/smm5.webp' className='w-full' />
      </div>
    </div>
  );
};

export default Section5;
