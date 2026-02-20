import React from "react";

const Section10 = () => {
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
          <img
            className='w-full'
            src='/lead10.webp'
            alt='Marketing Technology'
          />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Marketing Technology & Tools
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            We leverage the latest marketing technology to streamline and scale
            your lead generation efforts. From CRM platforms like HubSpot and
            Salesforce to automation tools like Marketo and Pardot, we help you
            build a powerful marketing technology stack tailored to your needs.
            <br />
            <br />
            Our team has expertise in implementing, integrating, and optimizing
            these tools to work together seamlessly. We'll help you choose the
            right technology for your budget and goals, set it up correctly, and
            train your team to use it effectively for maximum ROI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section10;
