import { decorate, observable, action } from "mobx";


class UiStore {
  constructor() {
    this.currentUser = undefined;
    this.currentPicture = undefined;
  }


  setCurrentUser(user) {
    this.currentUser = user;
  }

  setCurrentPicture(picture) {
    this.currentPicture = picture;
  }

}

decorate(UiStore, {
setCurrentUser: action,
setCurrentPicture: action,
currentPicture: observable,
currentUser: observable
});

export default UiStore;
