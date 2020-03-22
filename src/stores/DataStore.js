import {decorate, action, configure, observable} from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.pictures = [];
    this.users = [];
    this.users.forEach(user =>
      user.linkStore(this));
  }

  seed(pictures) {
    this.pictures = pictures;
  }

  linkPicture(picture) {
    !this.pictures.includes(picture) && this.pictures.push(picture);
  }

  linkUser(user) {
    !this.users.includes(user) && this.users.push(user);
  }

  getPictureById = id => this.pictures.find(picture => picture.id === id);

  getUserPics = use =>
    this.pictures.filter(picture =>
      picture.comments.find(comment =>  comment.user.id === use))
}

decorate(Store, {
  users: observable,
  pictures: observable,
  addResponse: action,
  seed: action,
  linkPicture: action,
  linkUser:action
});

export default Store;
