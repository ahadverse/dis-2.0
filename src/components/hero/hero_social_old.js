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
                Best Social Media
              </h1>

              <h1 className='sm:text-6xl mt-3 text-4xl text-gray-800 font-bold leading-loose'>
                Marketing Agency
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
              <div className='w-[415px]'>
                <Calender_Modal />
              </div>
            </div>
            <div className='w-5/12'>
              <img src='/smm_hero.png' />
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className=''>
          <div className='flex  justify-between w-[1000px] m-auto'>
            <div className='h-[250px]  p-10'>
              <img className='w-28 m-auto' src='/sb1.png' />
              <h2 className='text-4xl mt-5 font-bold text-center'>270+</h2>
              <p className='mt-5 text-xl text-center'>Satisfied clients</p>
            </div>
            <div className='h-[250px]  p-10'>
              <img className='w-28 m-auto' src='/sb2.png' />
              <h2 className='text-4xl mt-5 font-bold text-center'>5.0</h2>
              <p className='mt-5 text-xl text-center'>
                Average client rating on Clutch
              </p>
            </div>
            <div className='h-[250px]  p-10'>
              <img className='w-28 m-auto' src='/sb3.png' />
              <h2 className='text-4xl mt-5 font-bold text-center'>65+</h2>
              <p className='mt-5 text-xl text-center'>Project Completed</p>
            </div>
          </div>
        </div>
        <br />
        {/* extra for design mantain  */}
        <div className='mt-32'>
          <h1 className='text-4xl font-semibold text-center'>
            Our Top SMM Analytics And Strategy Management
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
