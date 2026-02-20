import Banner2 from "../../../components/banner/banner2";
import Business_web from "../../../components/bussiness/bussiness_web/business_web";
import Calibrated from "../../../components/calibrated/calibrated";
import Deals_cards from "../../../components/deals_cards/deals_cards_website";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Hero from "../../../components/hero/hero_website";
import Mastered from "../../../components/mastered/mastered";
import Projects from "../../../components/projects/projects_website";
import Workflow from "../../../components/workFlow/workflow";
import React from "react";

const Website = () => {
  return (
    <div className='pricing'>
      <div className='backdrop-blur-[8px] backdrop-saturate-[280%]'>
        <Hero />
        <Business_web />
        <br />
        <br />
        <br />

        <Calibrated />
        <br />
        <br />
        <br />
        <Workflow />
        <br />
        <br />
        <br />
        <Mastered />
        <br />
        <br />
        <br />
        <Deals_cards />
        <br />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <br />
        <Banner2 />
        <br />
        <br />
        <br />
        <DualDirectionCarousel />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Website;
