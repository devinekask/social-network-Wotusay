import {decorate, action, configure, observable} from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.pictures = [];
    this.currentPicture = undefined;
    this.currrentUser= undefined;
  }

  seed(pictures) {
    this.pictures = pictures;
  }

  setCurrrentUser(user) {
    this.currrentUser = user;
  }

  setCurrentPicture(pic) {
    this.currentPicture = pic;
  }
}

decorate(Store, {
  pictures: observable,
  addResponse: action,
  seed: action,
  setCurrentPicture:action,
  setCurrrentUser:action,
  currentPicture:observable,
  currrentUser:observable,
});

export default Store;
