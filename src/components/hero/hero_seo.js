import React from "react";
import style from "./style.module.css";
import { FaCalendarDays } from "react-icons/fa6";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionTop}>
        <div className={style.content}>
          <div className='w-11/12 max-w-[1280px] flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-4 m-auto px-4'>
            <div className='w-full lg:w-6/12'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold leading-tight sm:leading-loose'>
                Best SEO
              </h1>

              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-3 text-gray-800 font-bold leading-tight sm:leading-loose'>
                Service Provider
              </h1>
              <br />
              <p className='text-base sm:text-lg md:text-xl leading-relaxed'>
                Make the right impact with WebKooker's professional web design
                services that target the core elements of business
                organizations. We create websites that make their mark in first
                impressions through vibrant and attention grabbing designs to
                keep visitors hooked for the conversion.
              </p>
              <br />
              <div className='w-full max-w-[415px]'>
                <Calender_Modal />
              </div>
            </div>
            <div className='w-full lg:w-5/12 flex justify-center'>
              <img
                src='/seo_hero.png'
                className='w-full max-w-md lg:max-w-full h-auto'
                alt='SEO Hero'
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
                alt='Websites ranked'
              />
              <h2 className='text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center'>
                20+
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center'>
                Websites Ranked
              </p>
            </div>
          </div>
        </div>
        <br />
        {/* extra for design mantain  */}
        <div className='mt-16 sm:mt-24 md:mt-32 px-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
            Our Top SEO Services And Strategy Management
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
