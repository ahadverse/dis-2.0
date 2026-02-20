import React from "react";

const Section2 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(284deg, #1badff -13.73%, #E0F2FE 84.32%)",
      }}
    >
      <div
        className='w-full max-w-[1200px] py-20 px-4 m-auto flex flex-col sm:flex-row gap-6 justify-between items-center'
        data-aos='fade-up'
      >
        <div className='w-full sm:w-6/12'>
          <img src='/smm2.webp' className='w-full' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            Short Summary Of Social Media Marketing
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            Social media marketing uses Social Media platforms to connect with
            your audience to build a Brand, Increase sales, and drive website
            traffic. It helps you to target a specific community, age, location,
            and many more. The best thing about SMM is that it is
            cost-effective. Whether you want to sell your product or service,
            you can advertise them at less cost with so many people than doing
            it physically and practically.
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
