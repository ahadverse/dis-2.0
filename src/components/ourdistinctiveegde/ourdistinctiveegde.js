import React from "react";
import style from "./style.module.css";

const Our_Distinctive_Edge = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between gap-3 sm:gap-6 mt-5 items-center mb-20  w-11/12 m-auto px-4'>
      <div className={style.container1}>
        <h1 className='text-3xl sm:text-5xl text-red-600'>
          Our Distinctive Edge
        </h1>
        <br />
        <div className='flex gap-3 justify-around flex-wrap'>
          <div className={style.imageContainer}>
            <img className='w-20 sm:w-[120px]' src='/1.png' />
          </div>
          <div className={style.imageContainer2}>
            <img className='w-24 sm:w-[200px]' src='/2.png' />
          </div>
          <div className={style.imageContainer}>
            <img className='w-20 sm:w-[130px]' src='/3.png' />
          </div>
          <div className={style.imageContainer2}>
            <img className='w-24 sm:w-[150px]' src='/4.png' />
          </div>
        </div>
      </div>
      <div className={style.container2}>
        <img className='w-full max-w-[300px] sm:max-w-full' src='/team.webp' />
        <p className='text-4xl sm:text-5xl mt-20'> 50+</p>
        <p className='text-lg sm:text-2xl capitalize'>team members</p>
      </div>
    </div>
  );
};

export default Our_Distinctive_Edge;
