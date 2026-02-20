import Hero from "../../../components/hero/training";
import TrainingCard from "../../../components/trainings/card";
import React from "react";

const Training = () => {
  return (
    <div className='pricing'>
      <div className='backdrop-blur-[8px] backdrop-saturate-[280%]'>
        <Hero />
        <TrainingCard />
      </div>
    </div>
  );
};

export default Training;
