import React from "react";
import style from "./style.module.css";
import course from "../../../public/courses.json";
import Link from "next/link";
import { ImCodepen } from "react-icons/im";

const TrainingCard = () => {
  return (
    <div>
      <div className={style.courseContainer}>
        {course.map((a, index) => (
          <Link key={index} href={`/our-course/${a?.permalink}`}>
            <div className={style.figure}>
              <img src={a.courseImage} alt="Mountains" />

              <figcaption className={style.figcaption}>
                {/* <ImCodepen className="text-6xl text-center m-auto" /> */}
                <img className="w-6/12 m-auto" src="/logo.png" />

                {a.name}
              </figcaption>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrainingCard;
