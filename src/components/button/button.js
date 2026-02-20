import Link from "next/link";
import React from "react";
import style from "./style.module.css";

const Button = ({ link, text }) => {
  return (
    <div>
      {link ? (
        <Link href={`${link}`} className={style?.button} role="button">
          {text}
        </Link>
      ) : (
        <button className={style?.button} role="button">
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
