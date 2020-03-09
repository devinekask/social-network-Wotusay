import React from 'react';
import Content from './components/Content';
import styles from "./App.module.css";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./hooks";
import { VIEWS } from './stores/UiStore';
import Detail from './components/Detail';
import Nav from './components/Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Discover from './components/Discover';
import DiscoverDetails from './components/DiscoverDetails';
import Profile from './components/Profile';


function App() {

  const {uiStore,dataStore} = useStores()

  return useObserver( () => (
     <>
    <section className={styles.container}>
        <Switch>
          <Route exact path="/" strict>
            <Content />
          </Route>
          <Route path="/detail/:id">
              {uiStore.currentView === VIEWS.detail ? <Detail /> : <Redirect to='/'/>}
            </Route>

            <Route path='/discover'>
              <Discover key="disc"/>
            </Route>

            <Route path='/Biggerpicture/:id'>
              <DiscoverDetails key="pic"/>
            </Route>

            <Route path='/Profile'>
              {dataStore.currentUser === undefined ? <Redirect to='/' /> : <Profile /> }
            </Route>
        </Switch>
    </section>
    <Nav/>
  </>
  ));
}

export default App;
