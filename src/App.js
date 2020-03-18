import React from 'react';
import Content from './components/Content';

import styles from "./App.module.css";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./hooks";
import Detail from './components/Detail';
import Nav from './components/Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import Discover from './components/Discover';
import DiscoverDetails from './components/DiscoverDetails';
import Profile from './components/Profile';
import { ROUTES } from './components/consts/index';


function App() {

  const {dataStore} = useStores()

  return useObserver( () => (
     <>
    <section className={styles.container}>
        <Switch>
          <Route exact path={ROUTES.home}>
            <Content />
          </Route>
          <Route exact strict path={ROUTES.detail.path}>
            <Detail/>
            </Route>

            <Route path={ROUTES.discover}>
              <Discover key="disc"/>
            </Route>

            <Route path={ROUTES.discoverDetail.path}>
              <DiscoverDetails key="pic"/>
            </Route>

            <Route path={ROUTES.profile}>
              {dataStore.currentUser === undefined ? <Redirect to={ROUTES.home} /> : <Profile /> }
            </Route>
        </Switch>
    </section>
    <Nav/>
  </>
  ));
}

export default App;
