import { v4 } from "uuid";

class User {
  constructor({name, store ,id = v4()}) {
    this.name = name;
    this.pictures = [];
    this.comments = [];
    this.store = store;
    this.id = id;

    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store.linkUser(this);
  }

  linkComment(comment) {

    !this.comments.includes(comment) && this.comments.push(comment);
  }

  linkPicture(picture) {
    !this.pictures.includes(picture) && this.pictures.push(picture);
    !picture.users.includes(this) && picture.linkUser(this);
  }


  linkStore(store) {
    !this.store.includes(store) && this.store.push(store);
  }
}

export default User;
