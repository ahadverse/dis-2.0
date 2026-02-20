import React from "react";
import style from "./style.module.css";
import Calender_Modal from "../calendermodal/calendermodal";

const Banner1 = () => {
  return (
    <div className='bg-sky-100 p-20 mt-10'>
      <div className={style.container}>
        <h1 className='text-3xl sm:text-5xl text-center m-auto w-full sm:w-8/12 px-4'>
          Our Websites Might Make Your Business Too Successful!
        </h1>
        <p className='text-center text-lg sm:text-2xl mt-8 m-auto w-full sm:w-9/12 px-4'>
          Handle with care obtaining the website development and maintenance
          service that will lead you wherever you want!
        </p>
        <Calender_Modal />
      </div>
    </div>
  );
};

export default Banner1;
