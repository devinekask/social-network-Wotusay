import React from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from "prop-types";
import styles from "./Likes.module.css";

const Likes = ({ picture }) => {

  const handleClickEvent = e => {
    picture.pictureLiked === true ? picture.setUnLike() : picture.setLiked();
  };

  const likedState = <svg width='16' height='22' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M9.5 0.669998C9.5 0.669998 10.24 3.32 10.24 5.47C10.24 7.53 8.89 9.2 6.83 9.2C4.76 9.2 3.2 7.53 3.2 5.47L3.23 5.11C1.21 7.51 0 10.62 0 14C0 18.42 3.58 22 8 22C12.42 22 16 18.42 16 14C16 8.61 13.41 3.8 9.5 0.669998ZM7.71 19C5.93 19 4.49 17.6 4.49 15.86C4.49 14.24 5.54 13.1 7.3 12.74C9.07 12.38 10.9 11.53 11.92 10.16C12.31 11.45 12.51 12.81 12.51 14.2C12.51 16.85 10.36 19 7.71 19Z' fill='#EE2323'/>
</svg>;

const notLikedState = <svg width='16' height='22' viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M9.5 0.65509C9.5 0.65509 10.24 3.30509 10.24 5.45509C10.24 7.51509 8.89 9.18509 6.83 9.18509C4.76 9.18509 3.2 7.51509 3.2 5.45509L3.23 5.09509C1.21 7.49509 0 10.6051 0 13.9851C0 18.4051 3.58 21.9851 8 21.9851C12.42 21.9851 16 18.4051 16 13.9851C16 8.59509 13.41 3.78509 9.5 0.65509ZM7.71 18.9851C5.93 18.9851 4.49 17.5851 4.49 15.8451C4.49 14.2251 5.54 13.0851 7.3 12.7251C9.07 12.3651 10.9 11.5151 11.92 10.1451C12.31 11.4351 12.51 12.7951 12.51 14.1851C12.51 16.8351 10.36 18.9851 7.71 18.9851Z' fill='#ADABAB'/>
</svg>;

  return useObserver(() => (
    <>
          <div className={styles.likes}>
            <button onClick={handleClickEvent}>
              {picture.pictureLiked === true ? likedState : notLikedState}
            </button>
            <span className={styles.lits}>{picture.pictureLikes} lit's</span>
            <button><svg width='15' height='19' viewBox='0 0 15 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12.8735 0.067749H2.87354C1.77354 0.067749 0.883535 0.967749 0.883535 2.06775L0.873535 18.0677L7.87354 15.0677L14.8735 18.0677V2.06775C14.8735 0.967749 13.9735 0.067749 12.8735 0.067749ZM12.8735 15.0677L7.87354 12.8877L2.87354 15.0677V2.06775H12.8735V15.0677Z' fill='#3323EE'/>
            </svg>
            </button>
          </div>
          </>
  ))
}

Likes.propTypes = {
  picture: PropTypes.object.isRequired
};

 export default Likes;
