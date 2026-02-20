"use client";
import style from "./style.module.css";

const HeadlineCarousel = () => {
  const data = [
    "/logos/airpro-1.svg",
    "/logos/Accounting-monk.svg",
    "/logos/ACDC.svg",
    "/logos/ADvance.svg",
    "/logos/Airexel.svg",
    "/logos/All-City-Janitor.svg",
    "/logos/Aus-Energy-Consultant.svg",
    "/logos/Aus-Energy-Upgrade.svg",
    "/logos/Austar-Energy.svg",
    "/logos/Chimney-Care-Pro.svg",
    "/logos/Cleaner-Consultant.svg",
    "/logos/Cleaning-Tools.svg",
    "/logos/Clipping-Path.svg",
    "/logos/Codezzi.svg",
  ];
  const newData = [
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ];
  const data2 = [
    "/logos2/Contruction-Leadspro.svg",
    "/logos2/Digitallyx.svg",
    "/logos2/DRV-Dental-Centre.svg",
    "/logos2/DRV-Medical-Centre.svg",
    "/logos2/Dustfreetoday.svg",
    "/logos2/Eco-Power-Solution.svg",
    "/logos2/Ezze-bezze.svg",
    "/logos2/Fron-Lead-Capital.svg",
    "/logos2/HVacLeads-Pro.svg",
    "/logos2/Imperial.svg",
    "/logos2/Janitorial-Leads-Pro.svg",
    "/logos2/Kimi.svg",
    "/logos2/MCA-1.svg",
    "/logos2/Mercy.svg",
  ];
  const data3 = [
    "/logos3/Online-Gaming.svg",
    "/logos3/Price-Wholesale.svg",
    "/logos3/RAnk-Stair.svg",
    "/logos3/Roofing-Leads.svg",
    "/logos3/Sabdita.svg",
    "/logos3/SkyHope.svg",
    "/logos3/SkyLearn-1.svg",
    "/logos3/Solar-Leads.svg",
    "/logos3/Synergy.svg",
    "/logos3/Teachers-Against-Hate.svg",
    "/logos3/Techmart.svg",
    "/logos3/Unpoint.svg",
    "/logos3/Veltex.svg",
    "/logos3/Verginn-Trend.svg",
    "/logos3/Vertual-Assitat.svg",
  ];
  const newData2 = [
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
    ...data2,
  ];
  const newData3 = [
    ...data3,
    ...data3,
    ...data3,
    ...data3,
    ...data3,
    ...data3,
    ...data3,
    ...data3,
    ...data3,
  ];

  return (
    <div>
      <h2 className="text-4xl text-center font-bold">
        Serving Clients Across Industries
      </h2>
      <br />
      <br />

      <div className={`${style.container}   overflow-hidden p-2 m-auto`}>
        <div className={`${style.slide} flex`}>
          {newData.map((a, index) => (
            <div
              key={index}
              className="text-xl bg-[#1C1C1C] py-3 border flex items-center h-[80px] rounded-3xl w-[160px] mr-3"
            >
              <img className="h-[40px] px-2 w-[160px]" src={a} />
            </div>
          ))}
        </div>
      </div>
      <div className={`${style.container2}   overflow-hidden p-2 m-auto`}>
        <div className={`${style.slide2} flex`}>
          {newData2.map((a, index) => (
            <div
              key={index}
              className="text-xl bg-[#1C1C1C] py-3 border flex items-center h-[80px] rounded-3xl w-[160px] mr-3"
            >
              <img className="h-[40px] px-2 w-[160px]" src={a} />
            </div>
          ))}
        </div>
      </div>
      <div className={`${style.container}   overflow-hidden p-2 m-auto`}>
        <div className={`${style.slide} flex`}>
          {newData3.map((a, index) => (
            <div
              key={index}
              className="text-xl bg-[#1C1C1C] py-3 border flex items-center h-[80px] rounded-3xl w-[160px] mr-3"
            >
              <img className="h-[40px] px-2 w-[160px]" src={a} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlineCarousel;
