import React from 'react';
import styles from './Discover.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../consts';

const Discover =  () => {
    const pics = ['mwytIca3qNA','IJyXoyGmiZY','VW2oU66mwbc','RMSLfydEKSI','z0ScM0','Ei5d39YRrgY',
    'BVi74hFpZfc','hIXmJH9xhoo','k4Akpt5','nCU4yq5xDEQ','FJFPuE1MAOM'];

    return(
      <div>
        <ul className={styles.grid}>
          {pics.map(id => (
            <li key={id}>
              <Link key={id} to={ROUTES.discoverDetail.to + id}>
              <img alt={id} key={id} width="250" height="250" src={`./assets/img/${id}-unsplash.jpg`}/></Link>
            </li>
          ))}
        </ul>
      </div>

    )
}

export default Discover;
