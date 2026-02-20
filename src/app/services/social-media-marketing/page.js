import Banner2 from "../../../components/banner/banner2";
import Business from "../../../components/bussiness/smm/business";
import Deals_cards from "../../../components/deals_cards/deals_cards";
import Hero from "../../../components/hero/hero_social";
import Section1 from "../../../components/smm/section1";
import Section10 from "../../../components/smm/section10";
import Section11 from "../../../components/smm/section11";
import Section2 from "../../../components/smm/section2";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Section3 from "../../../components/smm/section3";
import Section4 from "../../../components/smm/section4";
import Section5 from "../../../components/smm/section5";
import Section6 from "../../../components/smm/section6";
import Section7 from "../../../components/smm/section7";
import Section8 from "../../../components/smm/section8";
import Section9 from "../../../components/smm/section9";
import React from "react";

const SocialMarketing = () => {
  return (
    <div className='pricing'>
      <div className='backdrop-blur-[8px] backdrop-saturate-[280%]'>
        {" "}
        <Hero />
        <Business />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Section1 />
        <br />
        <br />
        <hr />
        <Section2 />
        <br />
        <br />
        <Section4 />
        <br />
        <br />
        <Section3 />
        <br />
        <br />
        <Section5 />
        <br />
        <br />
        <Section6 />
        <br />
        <br />
        <Section7 />
        <br />
        <br />
        <Section8 />
        <br />
        <br />
        <Section9 />
        <br />
        <br />
        <Section10 />
        <br />
        <br />
        <Section11 />
        <br />
        <br />
        <Deals_cards />
        <Banner2 />
        <br />
        <br />
        <br />
        <DualDirectionCarousel />
      </div>
    </div>
  );
};

export default SocialMarketing;
