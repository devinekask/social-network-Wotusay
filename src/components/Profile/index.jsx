import React from 'react';
import styles from './Profile.module.css';

import { useObserver } from 'mobx-react-lite';
import Header from '../Header';
import { useStores } from '../../hooks';

const Profile = () => {
  const {dataStore} = useStores();
  console.log(dataStore.posts)
  console.log(dataStore.currentUser.name)
  return useObserver(() => (
    <>
    <div className={styles.strech}>
    <Header user={dataStore.currentUser.name} />
      <ul>
        <img alt={dataStore.posts.pic} src={dataStore.posts.pic}/>
      </ul></div>
    </>
   ) )
}

export default Profile;
