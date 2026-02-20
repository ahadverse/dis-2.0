import Banner2 from "../../../components/banner/banner2";
import Business from "../../../components/bussiness/seo/business";
import Deals_cards from "../../../components/deals_cards/deals_cards_website";
import Hero from "../../../components/hero/hero_seo";
import Section1 from "../../../components/seo_sections/section1";
import Section10 from "../../../components/seo_sections/section10";
import Section2 from "../../../components/seo_sections/section2";
import Section3 from "../../../components/seo_sections/section3";
import Section4 from "../../../components/seo_sections/section4";
import Section5 from "../../../components/seo_sections/section5";
import Section6 from "../../../components/seo_sections/section6";
import DualDirectionCarousel from "../../../components/dualdirectioncarousel/dualdirectioncarousel";
import Section7 from "../../../components/seo_sections/section7";
import Section8 from "../../../components/seo_sections/section8";
import Section9 from "../../../components/seo_sections/section9";
import React from "react";
import Section11 from "../../../components/seo_sections/section11";

const SEO = () => {
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

export default SEO;
