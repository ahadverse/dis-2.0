import React from "react";
import style from "./style.module.css";
import Calender_Modal from "../calendermodal/calendermodal";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionTop}>
        <div className={style.content}>
          <div className='w-11/12 max-w-[1280px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 m-auto px-4'>
            <div className='w-full lg:w-6/12'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 font-bold leading-tight sm:leading-loose'>
                Professional Lead
              </h1>

              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-3 text-gray-800 font-bold leading-tight sm:leading-loose'>
                Generation Services
              </h1>
              <br />
              <p className='text-base sm:text-lg md:text-xl leading-relaxed'>
                Transform your business with our expert lead generation
                services. We help you attract, engage, and convert high-quality
                leads through data-driven strategies, targeted campaigns, and
                proven methodologies that deliver measurable results.
              </p>
              <br />
              <div className='w-full max-w-[415px]'>
                <Calender_Modal />
              </div>
            </div>
            <div className='w-full lg:w-5/12 flex justify-center'>
              <img
                src='/lead2.png'
                className='w-full max-w-md lg:max-w-full h-auto'
                alt='Lead Generation Hero'
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
                alt='Leads Generated'
              />
              <h2 className='text-3xl sm:text-4xl mt-4 sm:mt-5 font-bold text-center'>
                10K+
              </h2>
              <p className='mt-3 sm:mt-5 text-lg sm:text-xl text-center'>
                Qualified Leads Generated
              </p>
            </div>
          </div>
        </div>
        <br />
        {/* extra for design mantain  */}
        <div className='mt-16 sm:mt-24 md:mt-32 px-4'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
            Our Comprehensive Lead Generation Strategy & Management
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
