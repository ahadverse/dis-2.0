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
    <div className='mt-16 sm:mt-20 md:mt-28 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-[1070px] m-auto'>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img
            className={classes.image}
            src='/project.jpg'
            alt='City Online Limited'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            City Online Limited
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development , UX & UI Design
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img
            className={classes.image2}
            src='/project2.jpg'
            alt='Jack Creative Studio'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Jack Creative Studio
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img
            className={classes.image}
            src='/project3.jpg'
            alt='Think Foodie'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Think Foodie
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img
            className={classes.image2}
            src='/project4.jpg'
            alt='Imperial Jute'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Imperial Jute
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img
            className={classes.image}
            src='/project5.jpg'
            alt='Clean & Green Carpet Cleaning'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Clean & Green Carpet Cleaning
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Web Development , UX & UI Design
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img
            className={classes.image2}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img
            className={classes.image}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img
            className={classes.image2}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img
            className={classes.image}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img
            className={classes.image2}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-right")}>
          <img
            className={classes.image}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
          <h1 className='text-xl sm:text-2xl mt-2 font-bold text-cyan-700 text-center'>
            Photo Fix Zone
          </h1>
          <p className='text-sm sm:text-md font-bold text-[#DB355B] text-center'>
            Business Website Development
          </p>
        </div>
        <div className='w-full' data-aos={aos("fade-left")}>
          <img
            className={classes.image2}
            src='/project6.jpg'
            alt='Photo Fix Zone'
          />
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
