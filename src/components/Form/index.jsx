import React, {useState} from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./Form.module.css";
import Comment from "../../models/Comment";
import { useStores } from "../../hooks";

const Form = () => {

  const {uiStore} =  useStores();
  const [content, setContent] = useState("");

  const submitHandelerEvent = e => {


    e.preventDefault();
    if (content !== "" && uiStore.currentPicture) {
      new Comment({
        content,
        user: uiStore.currentUser,
        picture: uiStore.currentPicture
      })
      setContent("");
    }
  };

  return useObserver(() => (
    <>
    <form onSubmit={e => submitHandelerEvent(e)}>
            <input
            onChange={e => setContent(e.currentTarget.value)} className={styles.form__input} id='content' name='content' value={content} placeholder='Een opmerking plaatsen ...'/>
          </form>
    </>
  ))
}

 export default Form;
