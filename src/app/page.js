import About_section from "../components/about_section/about_section";
import Banner1 from "../components/banner/banner1";
import FAQ from "../components/faq/faq";
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";
import Subcribe from "../components/subscribe/subcribe";
import Deals_cards from "../components/deals_cards/deals_cards";
import Why_have_website from "../components/why_have_website/why_have_website";
import Work_flow from "../components/work_flow/work_flow";
import Our_Distinctive_Edge from "../components/ourdistinctiveegde/ourdistinctiveegde";

export const metadata = {
  title: "DIS Private LTD",
  description: "",
};

export default function Home() {
  return (
    <div className='pricing'>
      <div className='backdrop-blur-[8px] backdrop-saturate-[280%]'>
        <Hero />

        <Deals_cards />

        <Projects />
        <br />
        <hr className='my-10' />
        <About_section />

        <Our_Distinctive_Edge />
        <br />
        <br />
        <Work_flow />
        <br />
        <br />
        <FAQ />
        <br />
        <br />
        <Banner1 />
        <br />

        <Why_have_website />
        <Subcribe />
      </div>
    </div>
  );
}
