import Deals_cards from "../../components/deals_cards/deal1";
import Deal2 from "../../components/deals_cards/deal2";
import Deal3 from "../../components/deals_cards/deal3";
import Hero from "../../components/hero/pricing";
import React from "react";

const Pricing = () => {
  return (
    <div className='pricing'>
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
        <Deals_cards />
        <Deal2 />
        <Deal3 />
      </div>
    </div>
  );
};

export default Pricing;
