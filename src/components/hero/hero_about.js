import React from "react";
import style from "./style.module.css";
import { FaCalendarDays } from "react-icons/fa6";
import Logos from "../logos/logos";
import Cards from "../work_cards/cards";
import Calender_Modal from "../calendermodal/calendermodal";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionTop}>
        <div className={style.content}>
          <div className='sm:w-8/12 w-11/12 m-auto'>
            <h1 className='sm:text-6xl text-4xl text-gray-800 font-bold text-center'>
              The Root to Our Unique Identity
            </h1>
            <p className='sm:my-8 my-10 text-center text-xl text-[#DB355B]'>
              Don&apos;t Just Make a Website, Make a Fortune
            </p>
            <p className='my-5 text-center text-xl'>
              As a sister venture of Digitalytix LLC, our team of web
              development experts specializes in conjuring up cutting-edge
              websites and ensuring they run like a dream.
            </p>
            <br />
            <Calender_Modal />
            <Logos />
          </div>
        </div>
        <div>
          <img className='m-auto shadow-lg rounded-xl' src='/about1.png' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
