import React from "react";
import style from "./style.module.css";

const About_section = () => {
  console.log("test");
  return (
    <div className='mt-12'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold'>
        Our Comprehensiveness Truely Reflects in Our Expertise
      </h1>

      <div className={style.main}>
        <div className={style.container1}>
          <p className='text-2xl md:text-4xl font-extrabold'>13</p>
          <p className='text-base md:text-xl capitalize'>years in business</p>
        </div>

        <div className={style.container2}>
          <h2 className='mt-6 md:mt-10 text-xl md:text-3xl lg:text-5xl font-semibold'>
            400+ successfully developed websites
          </h2>

          <div className='mt-6 md:mt-10'>
            <p className='text-sm md:text-base'>
              'We've crafted over 40 bespoke websites, each a testament to our
              commitment to excellence and innovation.'
            </p>
          </div>

          <div className='mt-6 flex items-center gap-3'>
            <img className='w-10 md:w-14 rounded-full' src='/user1.png' />
            <div>
              <h1 className='font-bold'>Jonny Stan</h1>
              <p className='text-sm'>CEO, VOXE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_section;
