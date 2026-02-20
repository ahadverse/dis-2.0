"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../button/button";

const Cards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const aos = (defaultAos) => (isMobile ? "fade-up" : defaultAos);

  return (
    <div className='flex flex-wrap mt-14 justify-center items-center gap-6 m-auto w-full px-4'>
      <div
        className='w-full sm:w-[380px] h-[380px] group border border-[#0997e9] shadow-md shadow-cyan-500/50 px-5 py-12'
        data-aos={aos("fade-right")}
      >
        <div className='flex justify-between items-center mb-2'>
          <p className='font-semibold text-xs'>Development & Maintenance</p>
          <img
            alt='startup icon'
            className='animate-pulse w-8 h-8'
            src='/work-image/image1.png'
          />
        </div>
        <div className='my-6'>
          <p className='text-3xl text-[#0997e9] font-semibold'>
            Startup Website
          </p>
          <p className='mt-5 text-sm sm:text-base'>
            Provides emerging businesses with a customized, scalable, and secure
            website designed to reflect their brand and support your growth.
          </p>
        </div>
        <button className='text-lg sm:text-2xl hover:bg-white hover:text-[#0997e9] border border-white hover:border-[#0997e9] flex items-center gap-5 group-hover:rounded-r-[50px] duration-500 my-10 bg-[#0997e9] text-white px-5 sm:px-12 py-2 w-full justify-center'>
          Learn More{" "}
          <FaArrowRight className='group-hover:ml-16 ease-in duration-300' />
        </button>
      </div>

      <div
        className='w-full sm:w-[380px] h-[380px] group border border-[#0997e9] shadow-md shadow-cyan-500/50 px-5 py-12'
        data-aos={aos("fade-up")}
      >
        <div className='flex justify-between items-center mb-2'>
          <p className='font-semibold text-xs'>Development & Maintenance</p>
          <img
            alt='business icon'
            className='animate-pulse w-8 h-8'
            src='/work-image/image2.png'
          />
        </div>
        <div className='my-6'>
          <p className='text-3xl text-[#0997e9] font-semibold'>
            Business Website
          </p>
          <p className='mt-5 text-sm sm:text-base'>
            Designed for large businesses to enhance their online presence,
            ensuring their website is optimized for user experience, search
            engine visibility and mobile compatibility.
          </p>
        </div>
        <button className='text-lg sm:text-2xl hover:bg-white hover:text-[#0997e9] border border-white hover:border-[#0997e9] flex items-center gap-5 group-hover:rounded-r-[50px] duration-500 my-10 bg-[#0997e9] text-white px-5 sm:px-12 py-2 w-full justify-center'>
          Learn More{" "}
          <FaArrowRight className='group-hover:ml-16 ease-in duration-300' />
        </button>
      </div>

      <div
        className='w-full sm:w-[380px] h-[380px] group border border-[#0997e9] shadow-md shadow-cyan-500/50 px-5 py-12'
        data-aos={aos("fade-left")}
      >
        <div className='flex justify-between items-center mb-2'>
          <p className='font-semibold text-xs'>Development & Maintenance</p>
          <img
            alt='ecommerce icon'
            className='animate-pulse w-8 h-8'
            src='/work-image/image3.png'
          />
        </div>
        <div className='my-6'>
          <p className='text-3xl text-[#0997e9] font-semibold'>
            E-Commerce Website
          </p>
          <p className='mt-5 text-sm sm:text-base'>
            Delivers a seamless, secure, and scalable experience, equipped with
            advanced features like inventory management, integrated payment
            solutions, and user-friendly navigation.
          </p>
        </div>
        <button className='text-lg sm:text-2xl hover:bg-white hover:text-[#0997e9] border border-white hover:border-[#0997e9] flex items-center gap-5 group-hover:rounded-r-[50px] duration-500 my-10 bg-[#0997e9] text-white px-5 sm:px-12 py-2 w-full justify-center'>
          Learn More{" "}
          <FaArrowRight className='group-hover:ml-16 ease-in duration-300' />
        </button>
      </div>
    </div>
  );
};

export default Cards;
