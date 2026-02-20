import React from "react";
import style from "./style.module.css";
import { ImCheckboxChecked } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

const About_section = () => {
  return (
    <div className={style.main}>
      <div className={style.container1}>
        <p className='text-4xl'> 400+</p>
        <p className='text-xl capitalize'>successful projects</p>
      </div>
      <div className={style.container2}>
        <h1 className='text-lg sm:text-xl font-semibold'>ABOUT US</h1>
        <h2 className='mt-10 text-3xl sm:text-5xl font-semibold'>
          We Commit to Your Constant Excellence
        </h2>
        <div className='mt-10'>
          <li className='list-none mt-5 flex items-start  gap-3'>
            <ImCheckboxChecked className='text-cyan-600  w-6 sm:w-8 text-lg sm:text-xl mt-2 flex-shrink-0' />
            <p className='text-base sm:text-xl'>
              Get a mind-blowing website without emptying your wallet.
            </p>
          </li>
          <li className='list-none mt-5 flex items-start gap-3'>
            <ImCheckboxChecked className='text-cyan-600  w-6 sm:w-8 text-lg sm:text-xl mt-2 flex-shrink-0' />
            <p className='text-base sm:text-xl'>
              We&apos;re your website&apos;s personal trainer, keeping it in top
              with dedicated support..
            </p>
          </li>
          <li className='list-none mt-5 flex items-start gap-3'>
            <ImCheckboxChecked className='text-cyan-600   w-6 sm:w-8 text-lg sm:text-xl mt-2 flex-shrink-0' />
            <p className='text-base sm:text-xl'>
              Your site will load faster than a cheetah chasing a laser pointer.
            </p>
          </li>
        </div>
        <br />
        <br />
        <br />

        <button className='text-lg sm:text-2xl group  hover:border-[#0997e9] flex items-center w-fit gap-5 rounded-r-[50px] duration-500 mb-5 bg-[#0997e9] text-white sm:px-12 px-5 py-2'>
          Discover More{" "}
          <FaArrowRight className='group-hover:ml-20  ease-in duration-300' />
        </button>
      </div>
    </div>
  );
};

export default About_section;
