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
    <div>
      <p
        data-aos='fade-up'
        className='text-[#0997e9] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 md:mt-10 font-bold capitalize text-center px-4'
      >
        Websites Built and Empowered by WebKooker
      </p>
      <p
        data-aos='fade-up'
        className='text-black font-bold text-center max-w-2xl mx-auto mt-3 px-4 text-sm md:text-base'
      >
        We use a holistic approach that's reliant on the unique needs of our
        clients and their businesses, building websites from scratch, with their
        tone, voice, feel, and power in check. Here are a few of our major
        successes.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto mt-8 md:mt-12 px-4'>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img className={classes.image} src='/project.jpg' />
          <h1 className='text-2xl mt-2 font-bold text-cyan-700 text-center'>
            City Online Limited
          </h1>
          <p className='text-md  font-bold text-[#DB355B] text-center'>
            Web Development , UX & UI Design
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img className={classes.image2} src='/project2.jpg' />
          <h1 className='text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Jack Creative Studio
          </h1>
          <p className='text-md  font-bold text-[#DB355B] text-center'>
            Web Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img className={classes.image} src='/project3.jpg' />
          <h1 className='text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Think Foodie
          </h1>
          <p className='text-md  font-bold text-[#DB355B] text-center'>
            Web Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img className={classes.image2} src='/project4.jpg' />
          <h1 className='text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Imperial Jute
          </h1>
          <p className='text-md  font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img className={classes.image} src='/project5.jpg' />
          <h1 className='text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Clean & Green Carpet Cleaning
          </h1>
          <p className='text-md  font-bold text-[#DB355B] text-center'>
            Web Development , UX & UI Design
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img className={classes.image2} src='/project6.jpg' />
          <h1 className='text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-md  font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
