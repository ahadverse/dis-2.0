import Hero from "../../components/hero/porfolios";
import Projects from "../../components/projects/porfolios";
import React from "react";

const Porfolios = () => {
  return (
    <div className='porto'>
      <div className='backdrop-blur-[8px] backdrop-saturate-[280%]'>
        <Hero />
        <br />
        <br />
        <br />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' /> <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' /> <br />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <br className='sm:hidden block' />
        <Projects />
      </div>
    </div>
  );
};

export default Porfolios;
