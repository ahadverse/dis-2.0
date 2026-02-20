import React from "react";
import style from "./style.module.css";

const Our_Distinctive_Edge2 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-6 mt-6 items-center max-w-6xl mx-auto px-4 sm:px-6'>
      <div className={style.container1}>
        <h1 className='text-2xl md:text-4xl text-red-600 font-bold'>
          20+ Industries Served
        </h1>

        <div className='grid grid-cols-2 gap-3 mt-4'>
          <div className={style.imageContainer}>
            <img className='w-20 md:w-48 py-4' src='/1.png' />
          </div>
          <div className={style.imageContainer2}>
            <img className='w-20 md:w-48' src='/2.png' />
          </div>
          <div className={style.imageContainer}>
            <img className='w-20 md:w-48' src='/3.png' />
          </div>
          <div className={style.imageContainer2}>
            <img className='w-20 md:w-48' src='/4.png' />
          </div>
        </div>
      </div>

      <div className={style.container2}>
        <p className='text-3xl md:text-5xl font-extrabold'>270+</p>
        <p className='text-lg md:text-2xl capitalize'>Happy Clientbase</p>
      </div>
    </div>
  );
};

export default Our_Distinctive_Edge2;
