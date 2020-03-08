import React from 'react';
import Content from './components/Content';
import styles from "./App.module.css";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./hooks";
import { VIEWS } from './stores/UiStore';
import Detail from './components/Detail';


function App() {

  const {uiStore} = useStores()

  return useObserver( () => (
     <>
    <section className={styles.container}>
      {uiStore.currentView === VIEWS.list ? <Content/> : <Detail/>}

    </section>

  </>
  ));
}

export default App;
