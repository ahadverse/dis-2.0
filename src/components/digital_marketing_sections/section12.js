import React from "react";

const Section12 = () => {
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
          <img className='w-full' src='/digital12.webp' alt='SMS Marketing' />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            SMS Marketing
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            SMS Marketing SMS marketing is a popular marketing method through
            which you can target your desired audience. It is mobile marketing
            which is done by collecting lead numbers and marketing using text
            messages.
            <br />
            <br />
            SMS marketing is a cost-effective marketing method that can be done
            very quickly. Copywriting is the most critical aspect of SMS
            marketing because if your short message text is not catchy enough,
            the consumer will not be attracted to your service or product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section12;
