import { useObserver } from "mobx-react-lite";
import styles from "./Pictureform.module.css";
import React, { useState } from 'react';
import { useStores } from "../../hooks";
import Picture from "../../models/Picture";
import Comment from '../../models/Comment';


const Pictureform = () => {

  const [state, setFile] = useState(null);
  const {dataStore,uiStore} = useStores();
  const [content, setContent] = useState("");



  console.log(state)
 /* const handleChange = e => {
    setFile({
      file: URL.createObjectURL(e.target.file)
    })

    console.log(setFile.file)
  }
*/
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


  }

}

const loadPic = e => {
  setFile({
    file: URL.createObjectURL(e.target.files[0])
  });
};


  return useObserver(() => (
    <form onSubmit={e => handleSubmit(e)} >

    {state === null ? true : <img src={state.file} alt="" srcset=''/>
 }
      <input required type="text" onChange={e => setContent(e.currentTarget.value)} id='content' />
      <input onChange={e => loadPic(e)} required type="file" accept="image/*"/>
      <input type="submit" />
    </form>
  ))
}

export default Pictureform;
