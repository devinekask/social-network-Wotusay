import {decorate, action, configure, observable} from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.pictures = [];
    this.currentPicture = undefined;
    this.currentUser= undefined;
    this.posts = [];
  }

  seed(pictures) {
    this.pictures = pictures;
  }

  profilePost() {
    this.posts = this.pictures[1] ;
  }



  setCurrentUser(user) {
    this.currentUser = user;
  }

  setCurrentPicture(pic) {
    this.currentPicture = pic;
  }
}

decorate(Store, {
  pictures: observable,
  addResponse: action,
  seed: action,
  posts:observable,
  profilePost:action,
  setCurrentPicture:action,
  setCurrentUser:action,
  currentPicture:observable,
  currentUser:observable,
});

export default Store;
