import React from "react";
import style from "./style.module.css";
import { ImCheckboxChecked } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

const Expertise = () => {
  return (
    <div className='mt-8'>
      <div className={style.main}>
        <div className={style.container1}>
          <img src='/users1.png' className='w-24 md:w-32' />
          <p className='text-3xl md:text-4xl mt-6 md:mt-28 font-bold'>50+</p>
          <p className='text-base md:text-xl capitalize'>Heads of Expertise</p>
        </div>

        <div className={style.container2}>
          <h2 className='mt-4 md:mt-5 text-xl md:text-3xl lg:text-5xl font-semibold'>
            20+ Remote Expertise
          </h2>
          <div className='mt-3'>
            <h1 className='text-lg md:text-3xl'>Working All Over the globe</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
