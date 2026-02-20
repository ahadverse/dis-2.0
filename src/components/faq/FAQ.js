import React from "react";
import AccordianFa from "../Accordian/Accordian";

const FAQs = () => {
  return (
    <div className='sm:w-[1280px] m-auto px-4'>
      {" "}
      <p
        data-aos='fade-up'
        className='text-[#0997e9] text-4xl sm:text-5xl mt-10 font-bold capitalize text-center'
      >
        Frequently Asked Questions
      </p>
      <p
        data-aos='fade-up'
        className='text-black font-bold text-center w-full sm:w-6/12 m-auto mt-3 text-sm sm:text-base'
      >
        Hover through the questions that arise in your mind frequently before
        taking the benefit of our unmatched service.
      </p>{" "}
      <div>
        <AccordianFa />
      </div>
    </div>
  );
};

export default FAQs;
