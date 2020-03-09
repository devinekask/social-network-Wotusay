import React from 'react';
import styles from "./back.module.css";
import { useHistory } from "react-router-dom";

const Back = () => {
  const history = useHistory();

  return(
    <button className={styles.back__btn} onClick={() => {history.goBack()}}>
      &larr; back
    </button>
  )
}

export default Back;
