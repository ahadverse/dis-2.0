import React from "react";

const Mastered = () => {
  return (
    <div className='mt-12 px-4 sm:px-6'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold'>
        We've Mastered All Major Web Builders
      </h1>
      <p className='text-base md:text-lg text-center mt-4 max-w-2xl mx-auto'>
        Each Dev on our team has mastered major web builders, and we can
        artfully surf across a diverse line of some of the most flexible and
        unique builders out there to give your Business Website a unique style &
        feel.
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-5 max-w-6xl mx-auto mt-12 md:mt-16'>
        <div>
          <img src='/tech/1.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            HTML5
          </h1>
        </div>
        <div>
          <img src='/tech/2.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            CSS3
          </h1>
        </div>
        <div>
          <div className='w-full aspect-square rounded-2xl flex justify-center items-center bg-[#1C1C1C]'>
            <img className='w-1/3' src='/tech/3.png' />
          </div>
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            REACT
          </h1>
        </div>
        <div>
          <div className='w-full aspect-square rounded-2xl flex justify-center items-center bg-[#1C1C1C]'>
            <img className='w-1/3' src='/tech/13.png' />
          </div>
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            NEXT
          </h1>
        </div>
        <div>
          <div className='w-full aspect-square rounded-2xl flex justify-center items-center bg-[#1C1C1C]'>
            <img className='w-1/3' src='/tech/5.png' />
          </div>
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            NODE
          </h1>
        </div>
        <div>
          <div className='w-full aspect-square rounded-2xl flex justify-center items-center bg-[#1C1C1C]'>
            <img className='w-1/3' src='/tech/6.png' />
          </div>
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            VUE
          </h1>
        </div>
        <div>
          <div className='w-full aspect-square rounded-2xl flex justify-center items-center bg-[#1C1C1C]'>
            <img className='w-1/3' src='/tech/12.png' />
          </div>
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            ANGULAR
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 max-w-2xl mx-auto mt-8'>
        <div>
          <img src='/tech/7.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            Wordpress
          </h1>
        </div>
        <div>
          <img src='/tech/8.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            Shopify
          </h1>
        </div>
        <div>
          <img src='/tech/9.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            Elementor
          </h1>
        </div>
        <div>
          <img src='/tech/10.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            Brick
          </h1>
        </div>
        <div>
          <img src='/tech/11.svg' className='w-full' />
          <h1 className='text-center font-bold mt-2 text-xs md:text-sm uppercase'>
            Oxygen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mastered;
