import React from "react";
import style from "./style.module.css";
import Calender_Modal from "../calendermodal/calendermodal";

const Banner2 = () => {
  return (
    <div
      className='px-4  sm:px-6 md:px-10 py-12 md:py-20'
      style={{
        background: "linear-gradient(284deg, #1badff , #E0F2FE )",
      }}
    >
      <div className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center`}>
        <div className='w-full md:w-6/12 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
            Our Websites Might Make Your Business Too Successful!
          </h1>
          <div className='w-full mt-6'>
            <Calender_Modal />
          </div>
        </div>
        <div className='w-full md:w-6/12 flex justify-center md:justify-end mt-6 md:mt-0'>
          <img
            className='w-full md:w-10/12 max-w-md object-contain'
            src='/web11.png'
            alt='Web design illustration'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
