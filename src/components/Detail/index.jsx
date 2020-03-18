import React from 'react';
import { useStores } from "../../hooks";
import Header from '../Header';
import styles from "./Detail.module.css";
import Likes from '../Likes';
import Comment from '../Comment';
import Form from '../Form';
import { useObserver } from 'mobx-react-lite';
import Back from '../Back';
import { useParams } from 'react-router-dom';
import Empty from '../Empty';


const Detail = () => {

  const {id} = useParams();
  const { dataStore } = useStores();
  const post = dataStore.getPictureById(id);

  console.log(post);

  return useObserver (() => {

    if (!post) {
      return <Empty message= {'Post not found'}/>
    }
    return(
    <>

      <Back></Back>

    <div className={styles.grid__templ}>
      <div>
        <Header user={post.comments[0].user.name} />
        <img width="590" height="499" src={'.'+post.pic} alt={post.name}/>
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
    )})
}
export default Detail;
