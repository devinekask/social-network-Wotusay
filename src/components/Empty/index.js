import React from "react";
import style from "./Empty.module.css";


const Empty = ({ message }) => {
  return (
    <section className={style.center} >
      <h2 className={style.title} >{message}</h2>
    </section>
  );
};

export default Empty;
