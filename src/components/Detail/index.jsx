import React from 'react';
import { useStores } from "../../hooks";
import Header from '../Header';
import styles from "./Detail.module.css";
import Likes from '../Likes';
import Comment from '../Comment';
import Form from '../Form';
import { useObserver } from 'mobx-react-lite';

const Detail = () => {

  const {uiStore} = useStores();
  const post = uiStore.currentPost;
  return useObserver ( () => (
    <>
    <div className={styles.grid__templ}>
      <div>
        <Header user={post.comments[0].user.name} />
        <img src={post.pic} alt='gameboy'/>
      </div>

      <div className={styles.form}>
     <Likes picture={post} />
     <span className={styles.amount}> {post.amountComments} {post.amountComments === 1 ? 'Comment' : 'Comments'}</span>
     <ul className={styles.comments__padding}>
      {post.comments.map(comment => (
        <Comment comment={comment} key={comment.key} />
      ))}
     </ul>
     <div className={styles.input}>
     <Form picture={post}  /></div>
      </div>
    </div>
    </>
  ))
}
export default Detail;
