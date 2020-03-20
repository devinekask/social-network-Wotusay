import { useObserver } from "mobx-react-lite";
import styles from "./Pictureform.module.css";
import React, { useState } from 'react';
import { useStores } from "../../hooks";
import Picture from "../../models/Picture";
import Comment from '../../models/Comment';
import { useHistory } from "react-router-dom";



const Pictureform = () => {

  const [state, setFile] = useState(null);
  const {dataStore,uiStore} = useStores();
  const [content, setContent] = useState("");
  const home = useHistory();
  
const handleSubmit = e  => {
  e.preventDefault();
  if (state !== null && uiStore.currentUser && content !== "") {
   const pic = new Picture({
      pic: state.file,
      store: dataStore,
      pictureLikes: 0
    });

    pic.comments = [
      new Comment({
        content: content,
        user: uiStore.currentUser,
        picture: pic
      })
    ]

    home.goBack();

  }

}

const loadPic = e => {
  if (e.target.files[0] !== undefined){
      setFile({
   file: URL.createObjectURL(e.target.files[0])
  });
  }

};


  return useObserver(() => (
    <form className={styles.gridform} onSubmit={e => handleSubmit(e)} >

    {state === null ? <p className={styles.emptystate}>Voorbeeld foto ziet u hier!</p> : <img className={styles.img} width="590" height="499" src={state.file} alt="yourpic" />
 }

 <div className={styles.background}>
      <label className={styles.desc} htmlFor="content"> Voeg een beschrijving toe</label>
      <input className={styles.text} required type="text" placeholder="Kijk naar mijn nieuwe foto!" onChange={e => setContent(e.currentTarget.value)} id='content' />
      <input className={styles.input} onInput={e => loadPic(e)} required type="file" accept="image/*"/>
      <input className={styles.submit} value="Plaatsen" type="submit" />
 </div>

    </form>
  ))
}

export default Pictureform;
