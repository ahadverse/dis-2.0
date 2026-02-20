import React from "react";
import style from "./style3.module.css";
import Calender_Modal from "../calendermodal/calendermodal";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionTop}>
        <div className={style.content}>
          <div className='sm:w-[1280px] flex justify-center w-11/12 m-auto'>
            <div className='w-8/12'>
              <h1 className='sm:text-6xl text-center text-4xl text-gray-800 font-bold leading-loose'>
                Our Trainings
              </h1>

              <br />
              <p className=' text-xl  text-center'>
                Our Special courses are live ( Team Viewer, Skype, Facebook
                Live, Over Phone Call ) online courses developed by DIS Private
                Limited and Highly Trained instructors, who are often engaged in
                discussion through the duration of the course. In Our Special
                courses offer a Statement of Accomplishment issued by the
                instructor upon successful completion. To participate in one of
                these Special Courses learning opportunities, visit the course
                name and information given below
              </p>
              <br />
              <div>
                <Calender_Modal />
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='flex  justify-between w-[1000px] m-auto'>
            <div className='h-[250px]  p-10'>
              <img className='w-28 m-auto' src='/sb1.png' />
              <h2 className='text-4xl mt-5 font-bold text-center'>5000+</h2>
              <p className='mt-5 text-xl text-center'>Satisfied Students</p>
            </div>
            <div className='h-[250px]  p-10'>
              <img className='w-28 m-auto' src='/sb2.png' />
              <h2 className='text-4xl mt-5 font-bold text-center'>5.0</h2>
              <p className='mt-5 text-xl text-center'>
                Average Students rating
              </p>
            </div>
            <div className='h-[250px]  p-10'>
              <img className='w-28 m-auto' src='/sb3.png' />
              <h2 className='text-4xl mt-5 font-bold text-center'>6000+</h2>
              <p className='mt-5 text-xl text-center'>Trained Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
