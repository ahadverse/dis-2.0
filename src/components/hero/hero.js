import React from "react";
import style from "./style.module.css";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";

const Hero = () => {
  return (
    <div>
      <div className=' w-11/12 m-auto pt-20'>
        <h1 className='lg:text-5xl sm:text-4xl text-gray-800 text-3xl sm:mt-20 mt-14 font-bold text-center'>
          Subscription Based <span className='text-[#DB355B]'>Website</span>{" "}
          Design & Maintenance, SEO, and Digital Marketing
        </h1>
        <p className='xl:my-10 md:md-7 my-6  text-center text-xl text-[#DB355B] md:text-xl text-md'>
          Don&apos;t Just Make a Website, Make a Fortune
        </p>
        <p className='xl:my-10 md:md-7 my-6 text-center md:text-xl text-md'>
          Our deliverable comes with affordable monthly{" "}
          <b>Website Design & Maintenance, SEO, and Digital Marketing</b>
          packages that provide everything you need to launch and maintain a
          professional online presence.
        </p>
        <Calender_Modal />
        <Logos />
      </div>
      <div className='w-full lg:mt-0 md:mt-10 max-w-[1200px] m-auto px-4'>
        <p
          className='text-[#0997e9] text-4xl sm:text-5xl mt-16 font-bold capitalize text-center'
          data-aos='fade-up'
        >
          Our solutions that work
        </p>
        <p
          className='text-black font-bold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'
          data-aos='fade-up'
        >
          From website development to website maintenance, our solutions are
          designed to take your business forward while saving your pocket!
        </p>
        <Cards />
      </div>
    </div>
  );
};

export default Hero;
