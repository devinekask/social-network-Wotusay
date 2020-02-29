import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './stores/Store';
import Comment from './models/Comment';
import * as serviceWorker from './serviceWorker';
import App from "./App";

const store = new Store();
window.store = store;
store.seed([new Comment({content: 'Dit is mijn nieuwe console!', user: 'RetroGamer1996', likes: 0, picture: 'gameboy', liked: false})]);

ReactDOM.render(<App store={store} />, document.getElementById("root"));

serviceWorker.unregister();
