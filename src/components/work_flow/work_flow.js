import React from "react";
import { RiNavigationLine } from "react-icons/ri";
import style from "./style.module.css";
import { PiCodeSimpleDuotone } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import { HiRocketLaunch } from "react-icons/hi2";

const Work_flow = () => {
  return (
    <div className='sm:w-[1280px] m-auto px-4'>
      {" "}
      <p
        data-aos='fade-up'
        className='text-[#0997e9] text-4xl sm:text-5xl mt-10 font-bold capitalize text-center'
      >
        Our Workflow
      </p>
      <p
        data-aos='fade-up'
        className='text-black font-bold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'
      >
        From initial consultation to final launch, we work hand-in-hand with you
        to ensure that every detail is perfect.
      </p>{" "}
      <div className='my-20 flex flex-col sm:flex-row items-center gap-6'>
        <div className='w-full sm:w-3/12'>
          <div className={style.container}>
            <RiNavigationLine className={style.icon} />{" "}
            <div className={style.container__star}>
              <div className={style.stareight}></div>
            </div>
          </div>
          <h2 className='text-lg sm:text-2xl mt-16 font-semibold text-center'>
            Discovery Session
          </h2>
        </div>
        <div className='w-full sm:w-3/12'>
          <div className={style.container}>
            <PiCodeSimpleDuotone className={style.icon} />{" "}
            <div className={style.container__star}>
              <div className={style.stareight}></div>
            </div>
          </div>
          <h2 className='text-lg sm:text-2xl mt-16 font-semibold text-center'>
            Design & Development
          </h2>
        </div>
        <div className='w-full sm:w-3/12'>
          <div className={style.container}>
            <MdOutlineReviews className={style.icon} />{" "}
            <div className={style.container__star}>
              <div className={style.stareight}></div>
            </div>
          </div>
          <h2 className='text-lg sm:text-2xl mt-16 font-semibold text-center'>
            Client Review & Feedback
          </h2>
        </div>
        <div className='w-full sm:w-3/12'>
          <div className={style.container}>
            <HiRocketLaunch className={style.icon} />{" "}
            <div className={style.container__star}>
              <div className={style.stareight}></div>
            </div>
          </div>
          <h2 className='text-lg sm:text-2xl mt-16 font-semibold text-center'>
            Launch & Maintenance
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work_flow;
