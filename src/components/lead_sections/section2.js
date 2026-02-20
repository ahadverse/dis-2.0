import React from "react";

const Section2 = () => {
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
            Multi-Channel Lead Generation
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Today's buyers interact with brands across multiple touchpoints
            before making a purchase decision. Our multi-channel lead generation
            strategy ensures you're visible wherever your potential customers
            are looking. We leverage SEO, content marketing, social media, email
            marketing, PPC advertising, and webinars to create multiple pathways
            for lead acquisition.
            <br />
            <br />
            Each channel is carefully integrated and optimized to work together
            seamlessly. We track performance across all channels, identify what
            works best for your business, and allocate resources accordingly to
            maximize lead quality and quantity while maintaining cost
            efficiency.
          </p>
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Strategic Lead Generation Process
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Our lead generation process is designed to deliver high-quality
            leads that convert. We start by identifying your ideal customer
            profile, understanding their pain points, and mapping their buyer
            journey. This research forms the foundation of our targeted
            campaigns across multiple channels.
            <br />
            <br />
            We create compelling lead magnets, optimize landing pages, implement
            marketing automation, and continuously test and refine our
            strategies. Our data-driven approach ensures that every dollar spent
            on lead generation delivers maximum return, helping you grow your
            business with a predictable and scalable lead pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
