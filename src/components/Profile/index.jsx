import React from 'react';
import styles from './Profile.module.css';
import Likes from '../Likes';
import Comment from '../Comment';
import Form from '../Form';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header';
import { useStores } from '../../hooks';

const Profile = () => {
  const {dataStore,uiStore} = useStores();

  const user =  uiStore.currentUser.id;
  const post = dataStore.getUserPics(user);

  return useObserver(() => (
    post.map(
      picture =>
      picture.comments[0].user.id === user ?       <>
      <div className={styles.strech}>
  <Header user={uiStore.currentUser.name} />
  <img width="560" height="499" src={picture.pic} alt={picture.pic} />
  <div className={styles.form}>
  <Likes picture={picture} />
 <span className={styles.amount}> {picture.amountComments} {picture.amountComments === 1 ? 'Comment' : 'Comments'}</span>
 <ul className={styles.comments__padding}>
  {picture.comments.map(comment => (
    <Comment comment={comment} key={comment.key} />
  ))}
 </ul>
 <div className={styles.input}>
 <Form /></div></div>
 </div>
  </>
  :
    false
   ) ))
}

export default Profile;
