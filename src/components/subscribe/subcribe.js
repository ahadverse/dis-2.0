"use client";
import React from "react";

const Subcribe = ({ blog }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };
  return (
    <div
      className={`${
        blog
          ? "text-black  py-0   my-1"
          : "bg-slate-900  py-12   my-10  text-white"
      }`}
    >
      <div className='w-full flex items-center justify-center px-4'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row w-full max-w-[600px] items-center justify-center gap-3 sm:gap-0'
        >
          <input
            className='bg-white py-3 sm:py-4 px-4 sm:px-6 rounded-full w-full sm:w-6/12 text-sm sm:text-base'
            placeholder='Share Your Email'
          />
          <button
            type='submit'
            className='text-lg sm:text-2xl bg-[#0997e9] text-white sm:px-12 px-5 py-3 rounded-lg w-full sm:w-auto'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subcribe;
