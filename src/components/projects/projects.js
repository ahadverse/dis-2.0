"use client";

import React, { useEffect, useState } from "react";
import classes from "./projects.module.css";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1020);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const aos = (defaultAos) => (isMobile ? "fade-up" : defaultAos);

  return (
    <div className='px-4 py-20'>
      <p
        data-aos='fade-up'
        className='text-[#0997e9] text-4xl sm:text-5xl mt-10 font-bold capitalize text-center'
      >
        Our Projects
      </p>
      <p
        data-aos='fade-up'
        className='text-black font-bold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'
      >
        Our projects exemplify our dedication to converting ideas into
        professional, high-quality websites.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 w-full max-w-[1070px] m-auto mt-12'>
        <div className='w-full ' data-aos={aos("fade-right")}>
          <img className={classes.image} src='/project.jpg' />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            City Online Limited
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development , UX & UI Design
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img className={classes.image2} src='/project2.jpg' />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Jack Creative Studio
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img className={classes.image} src='/project3.jpg' />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Think Foodie
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img className={classes.image2} src='/project4.jpg' />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Imperial Jute
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img className={classes.image} src='/project5.jpg' />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Clean & Green Carpet Cleaning
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development , UX & UI Design
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img className={classes.image2} src='/project6.jpg' />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
