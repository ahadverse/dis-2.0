import React from "react";
import style from "./style.module.css";
import Calender_Modal from "../calendermodal/calendermodal";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionTop}>
        <div className={style.content}>
          <div className='sm:w-[1280px] flex justify-between w-11/12 m-auto'>
            <div className='w-6/12'>
              <h1 className='sm:text-6xl text-4xl text-gray-800 font-bold leading-loose'>
                Professional Business
              </h1>
              <h1 className='sm:text-6xl mt-3 text-4xl text-gray-800 font-bold leading-loose'>
                Web Design &
              </h1>
              <h1 className='sm:text-6xl mt-3 text-4xl text-gray-800 font-bold leading-loose'>
                Development Services
              </h1>
              <br />
              <p className=' text-xl'>
                Make the right impact with WebKooker’s professional web design
                services that target the core elements of business
                organizations. We create websites that make their mark in first
                impressions through vibrant and attention grabbing designs to
                keep visitors hooked for the conversion.
              </p>
              <br />
              {/* <div className='w-full max-w-[415px]'>
                <Calender_Modal />
              </div> */}
            </div>
            <div className='w-full lg:w-5/12 flex justify-center'>
              <img
                src='/web_hero.png'
                className='w-full max-w-md lg:max-w-full h-auto'
                alt='Web Hero'
              />
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className='w-full px-4 mt-8 sm:mt-12'>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-between gap-6 sm:gap-4 max-w-[1000px] m-auto'>
            <div className='flex-1 min-h-[200px] sm:h-[250px] p-6 sm:p-10'>
              <img
                className='w-20 sm:w-28 m-auto'
                src='/sb1.png'
                alt='Satisfied clients'
              />
              <h2 className='text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center'>
                270+
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center'>
                Satisfied clients
              </p>
            </div>
            <div className='flex-1 min-h-[200px] sm:h-[250px] p-6 sm:p-10'>
              <img
                className='w-20 sm:w-28 m-auto'
                src='/sb2.png'
                alt='Client rating'
              />
              <h2 className='text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center'>
                5.0
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center'>
                Average client rating on Clutch
              </p>
            </div>
            <div className='flex-1 min-h-[200px] sm:h-[250px] p-6 sm:p-10'>
              <img
                className='w-20 sm:w-28 m-auto'
                src='/sb3.png'
                alt='Websites developed'
              />
              <h2 className='text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center'>
                400+
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center'>
                Websites Developed
              </p>
            </div>
          </div>
        </div>
        <br />
        {/* extra for design mantain  */}
        <div className='mt-16 sm:mt-24 md:mt-32 px-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
            Choose Our Business Web Design Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
