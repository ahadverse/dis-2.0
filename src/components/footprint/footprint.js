import React from "react";
import style from "./style.module.css";
import Calender_Modal from "../calendermodal/calendermodal";

const Footprint = () => {
  return (
    <div className='px-4 sm:px-6'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
        Our Geographic Footprint
      </h2>
      <p className='text-base sm:text-lg mt-4 text-center max-w-3xl mx-auto'>
        Whether you're nearby or halfway around the world, find out our
        locations strategically placed to tap into local talent and engage with
        the community.
      </p>

      <div className='mt-8'>
        <Calender_Modal />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8'>
        <div className={style.card}>
          <h1 className='text-xl md:text-2xl font-semibold'>
            TX, United States
          </h1>
          <p className='text-sm md:text-base mt-2'>
            6000 S Lake Forest Dr, McKinney, TX 75070
          </p>
          <p className='text-sm md:text-base mt-2'>+1 444 444 4444</p>
          <img src='/map1.png' className='mt-6 w-full h-auto object-cover' />
        </div>

        <div className={style.card}>
          <h1 className='text-xl md:text-2xl font-semibold'>NSW, Australia</h1>
          <p className='text-sm md:text-base mt-2'>
            59 Marshall St, Cobar, NSW 2835
          </p>
          <p className='text-sm md:text-base mt-2'>+1 444 444 4444</p>
          <img src='/map2.png' className='mt-6 w-full h-auto object-cover' />
        </div>

        <div className={style.card}>
          <h1 className='text-xl md:text-2xl font-semibold'>London, UK</h1>
          <p className='text-sm md:text-base mt-2'>
            289 Corfield Street, London, E2 0DU
          </p>
          <p className='text-sm md:text-base mt-2'>+1 444 444 4444</p>
          <img src='/map3.png' className='mt-6 w-full h-auto object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Footprint;
