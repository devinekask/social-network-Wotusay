import { useObserver } from "mobx-react-lite";
import styles from "./Content.module.css";
import Picture from "../Picture";
import React from 'react';
import { useStores } from "../../hooks";

const Content = () => {

  const {dataStore} = useStores();
  return useObserver(() => (
    <ul className={styles.pictures}>
      {dataStore.pictures.map(picture => (
        <Picture picture={picture} key={picture.id} />
      ))}
    </ul>
  ))
      }

export default Content;
