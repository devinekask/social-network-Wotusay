import React from 'react';
import Back from '../Back';
import styles from './DiscoverDetails.module.css';
import { useParams } from 'react-router-dom';

const DiscoverDetails = () => {

  const { id } = useParams();
  return (
    <>
    <Back />
    <div className={styles.mid}>
      <img alt={id} width="500" heigth="500" src={`../assets/img/${id}-unsplash.jpg`} /></div>
      </>
  )

}

export default DiscoverDetails;
