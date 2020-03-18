import { decorate, observable, action } from "mobx";


class UiStore {
  constructor() {
    this.currentUser = undefined;
  }


  setCurrentUser(user) {
    this.currentUser = user;
  }

}

decorate(UiStore, {
setCurrentUser: action,
currentUser: observable
});

export { VIEWS };
export default UiStore;
