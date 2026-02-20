import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Business_web = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-11/12 max-w-[1200px] m-auto px-4">
      <div className="w-full lg:w-6/12 order-2 lg:order-1">
        <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
          <IoMdCheckmarkCircleOutline className="text-sky-600 text-3xl sm:text-4xl flex-shrink-0" /> Experienced
          Team
        </h2>
        <p className="text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
          WebDev gurus on the job building your website like clockwork using
          refined & strategic procedures for maximum functionality.
        </p>
        <h2 className="text-2xl sm:text-3xl mt-6 sm:mt-8 font-semibold flex items-center gap-2">
          <IoMdCheckmarkCircleOutline className="text-sky-600 text-3xl sm:text-4xl flex-shrink-0" />
          Custom Solutions
        </h2>
        <p className="text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
          Your Business is unique, we'll calibrate your website to represent
          your business in the most organic way possible.
        </p>
        <h1 className="text-2xl sm:text-3xl mt-6 sm:mt-8 font-semibold flex items-center gap-2">
          <IoMdCheckmarkCircleOutline className="text-sky-600 text-3xl sm:text-4xl flex-shrink-0" /> Client-Centric
          Approach
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
          We aim for client satisfaction as our primary focus, bridging the gap
          between requirements & our capabilities.
        </p>
      </div>
      <div className="w-full lg:w-5/12 order-1 lg:order-2 flex justify-center">
        <img src="/bw.png" className="w-full max-w-md lg:max-w-full h-auto" alt="Business Web" />
      </div>
    </div>
  );
};

export default Business_web;
