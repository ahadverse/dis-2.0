import React from "react";
import style from "./style.module.css";

const Why_have_website = () => {
  return (
    <div className='sm:w-[1280px] m-auto my-10 pb-16 px-4'>
      <div>
        <h2 className='font-bold text-base sm:text-lg'>Why Have a Website?</h2>
        <h3 className='w-full sm:w-8/12 mt-8 font-semibold text-3xl sm:text-5xl'>
          Because It will land you where success takes flight!
        </h3>
      </div>
      <div className='flex flex-col sm:flex-row gap-5 items-center sm:items-start my-10'>
        <div className='w-full sm:w-6/12 flex flex-col gap-5'>
          <div className='flex p-4 rounded-se-2xl shadow-lg bg-[#5DB4DC] rounded-b-2xl  gap-2 border items-center w-full sm:max-w-[400px]'>
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s1.png' />
            <h1 className='text-base sm:text-xl leading-relaxed'>
              Makes your business impossible to ignore.
            </h1>
          </div>
          <div className='flex p-4 sm:ml-auto rounded-se-2xl shadow-lg bg-[#5DB4DC] rounded-b-2xl gap-2 border items-center w-full sm:max-w-[400px]'>
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s2.png' />
            <h1 className='text-base sm:text-xl leading-relaxed'>
              Create a pipeline that doesn&apos;t miss a single lead.
            </h1>
          </div>
          <div className='flex p-4  rounded-se-2xl shadow-lg bg-[#5DB4DC] rounded-b-2xl   gap-2  border items-center w-full sm:max-w-[400px]'>
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s3.png' />
            <h1 className='text-base sm:text-xl leading-relaxed'>
              Makes you open for business, even when you&apos;re not.
            </h1>
          </div>
          <div className='flex p-4 sm:ml-auto rounded-se-2xl shadow-lg bg-[#5DB4DC] rounded-b-2xl  gap-2 border items-center w-full sm:max-w-[400px]'>
            <img className='w-8 sm:w-10 flex-shrink-0' src='/s4.png' />
            <h1 className='text-base sm:text-xl leading-relaxed'>
              Builds a competition that levels the playing field
            </h1>
          </div>
        </div>
        <div className={style.container2}>
          <div className=''>
            {" "}
            <h2 className='text-lg sm:text-2xl font-semibold'>
              Makes Your Business Impossible to Ignore
            </h2>
            <p className='text-base sm:text-lg mt-6'>
              Our affordable website development packages come up with solution
              that reflects and keeps the audience scrolling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_have_website;
