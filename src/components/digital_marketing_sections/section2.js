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
          <img
            className='w-full'
            src='/digital2.webp'
            alt='Digital Marketing'
          />
        </div>
        <div className='w-full sm:w-6/12'>
          <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>
            How to Get Maximum DIS Through Digital Marketing
          </h1>
          <p className='mt-6 text-base sm:text-lg'>
            It is possible to generate maximum DIS through digital marketing
            because, in the digital process, you can reach your marketing
            activities to specific or targeted audiences who need your promotion
            and products. By doing digital marketing, you can easily double your
            investment. In this process, campaigns are run targeting specific
            people.
            <br />
            <br />
            As we used to see in traditional marketing, it is done on TV, radio,
            billboard, newspaper, pamphlet, leaflet, etc. where the general
            audience saw your ads. In this method, you could not promote your
            product to specific people, as well as it is expensive. So it is not
            possible to generate maximum DIS in the traditional format of
            marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
