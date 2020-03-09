import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';
import { useStores } from '../../hooks';


const Nav = () => {
  const {dataStore} = useStores();
  return(
    <>
    <div className={styles.nav}>
      <ul className={styles.grid}>
      <li>
        <NavLink activeClassName={styles.active} className={styles.link} exact to="/">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22V12H15V22" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} className={styles.link} to="/discover">
        <svg width="45" height="45" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6539 2.16468V6.16468" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6539 18.1647V22.1647" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.58391 5.09468L8.41391 7.92468" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8939 16.4047L19.7239 19.2347" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.65391 12.1647H6.65391" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.6539 12.1647H22.6539" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.58391 19.2347L8.41391 16.4047" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8939 7.92468L19.7239 5.09468" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </NavLink>
      </li>

      <li>
      <NavLink onClick={() => dataStore.profilePost()} activeClassName={styles.active} className={styles.link} to="/profile">
      <svg width="45" height="44" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z" stroke="#3323EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      </NavLink>
      </li>
      </ul>

    </div>
    </>
  )
}

export default Nav;
