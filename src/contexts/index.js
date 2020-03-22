import DataStore from "../stores/DataStore";
import UiStore from "../stores/UiStore";
import { createContext } from "react";
import User from '../models/User';
import Picture from '../models/Picture';
import Comment from '../models/Comment';
import { v4 } from "uuid";


const store = { dataStore: new DataStore(), uiStore: new UiStore() };

const u1 = new User({name:"DadGamer1995", store: store.dataStore})
const u2 = new User({name:"Gamerboy2000", store: store.dataStore});
const u3 = new User({name:"BigBaldGamer", store: store.dataStore});

const p1 = new Picture({pic:'../assets/img/foto.png' , id:'asdgasawie-qwqwee-00001' ,store: store.dataStore});
p1.comments = [
  new Comment ({content:'Mijn nieuwe aankoop!', picture:p1 , user: u2}),
  new Comment ({content:'Wat een zot ding !', picture:p1, user:u3})
];


const p2 = new Picture({pic:'../assets/img/switch.jpg', id: 'asdgasawie-qwqwee-013003', pictureLikes: 10, store: store.dataStore });
p2.comments = [
  new Comment ({content:'Mijn doosje voor mijn oortjes!', picture:p2 , user: u1}),
  new Comment ({content:'Waar kan ik die krijgen?', picture:p2, user:u2, likes: 10})
];

store.dataStore.seed([p1,p2]);
store.uiStore.setCurrentUser(u1);




export const storesContext = createContext(store);
