import Comment from './Comment';
import {decorate, action, configure, observable } from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.comments = [];
    this.pictureLiked = false;
    this.pictureLikes =  200;
  }

  seed(data) {
    //this.messages = data;
    this.comments.push(...data);
  }

  addResponse(content) {
    this.comments.push(new Comment({content, user: 'DadGammer', likes: 0, picture: 'gameboy', key: 0, liked: false}));
  }

  setLiked() {
    this.pictureLiked = true;
    this.pictureLikes++;
  }

  setUnLike() {
    this.pictureLiked = false;
    this.pictureLikes--;
  }
}

decorate(Store, {
  comments: observable,
  addResponse: action,
  seed: action,
  setLiked: action,
  pictureLiked: observable,
  setUnLike: action
});

export default Store;
