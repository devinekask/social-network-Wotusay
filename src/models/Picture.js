import { decorate, observable, action, computed } from "mobx";
import {v4} from "uuid";

class Picture {
  constructor({pic, comments= [], users = [], pictureLikes= 200 , pictureLiked = false, store , id = v4()}) {
    this.pic =  pic;
    this.comments = comments;
    this.users = users;
    this.id = id;
    this.store = store;
    this.pictureLiked = pictureLiked;
    this.pictureLikes = pictureLikes;
    this.store.linkPicture(this);
    this.users.forEach(user => user.linkPicture(this));
  }

  linkComment(comment) {
    !this.comments.includes(comment) && this.comments.push(comment);
  }

  linkUser(user){
    !this.users.includes(user) && this.users.push(user);
    !user.pictures.includes(user) && user.linkPicture(this);
  }

  get amountComments() {
    return this.comments.length
  }

  setLiked() {
    this.pictureLiked = true;
    this.pictureLikes ++;
  }

  setUnLike() {
    this.pictureLiked = false;
    this.pictureLikes --;
  }

}

decorate(Picture, {
  linkComment:action,
  comments: observable,
  addComments: action,
  amountComments: computed,
  setLiked: action,
  pictureLiked: observable,
  setUnLike: action
});

export default Picture;
