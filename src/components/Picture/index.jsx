import Likes from '../Likes';
import Comment from '../Comment';
import Form from '../Form';
import React from 'react';
import styles from "./Picture.module.css";
import { useObserver } from "mobx-react-lite";
import PropTypes from "prop-types";
import Header from '../Header';
import { useStores } from "../../hooks";
import { Link } from 'react-router-dom';
import { ROUTES } from '../consts';

const Picture = ({ picture }) => {

  const {uiStore} = useStores();
  return useObserver(() => (
    <>
    <div onMouseEnter={() => uiStore.setCurrentPicture(picture)}>
    <Header user={picture.comments[0].user.name} />

    <Link to={ROUTES.detail.to + picture.id}>
    <img width="590" height="499" className={styles.button} src={picture.pic} alt='gameboy'/>
    </Link>
     <section className={styles.form}>
     <Likes picture={picture} />
     <span className={styles.amount}> {picture.amountComments} {picture.amountComments === 1 ? 'Comment' : 'Comments'}</span>
     <ul className={styles.comments__padding}>
      {picture.comments.map(comment => (
        <Comment comment={comment} key={comment.key} />
      ))}
     </ul>
     <Form picture={picture}  />
     </section>
     </div>
    </>
  ))
}

Picture.propTypes = {
  picture: PropTypes.object.isRequired
};

export default Picture;
