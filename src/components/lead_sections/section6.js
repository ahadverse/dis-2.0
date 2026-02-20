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
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Lead Qualification & Scoring
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Not all leads are created equal. Our sophisticated lead scoring
            system helps you prioritize the most promising prospects. We
            evaluate leads based on demographic information, behavioral data,
            engagement levels, and buying signals to identify those most likely
            to convert into customers.
            <br />
            <br />
            This enables your sales team to focus their efforts on high-quality
            leads, improving close rates and reducing the sales cycle. We
            continuously refine our scoring models based on conversion data,
            ensuring that the system becomes more accurate over time and
            delivers increasingly better results for your business.
          </p>
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Lead Nurturing & Automation
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Most leads aren't ready to buy immediately. Our lead nurturing
            campaigns keep your brand top-of-mind while educating prospects and
            building trust. We create automated email sequences, retargeting
            campaigns, and personalized content that guides leads through the
            buyer journey at their own pace.
            <br />
            <br />
            Using marketing automation platforms, we deliver the right message
            at the right time based on each lead's behavior and interests. This
            personalized approach dramatically improves conversion rates while
            requiring minimal manual effort from your team, making your lead
            generation system truly scalable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
