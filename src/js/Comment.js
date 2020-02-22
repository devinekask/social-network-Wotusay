import {decorate, observable, action} from 'mobx';

class Comment {
  constructor({content, user, likes, picture, key, liked = false}) {
    this.content = content;
    this.user = user;
    this.likes = likes;
    this.picture = picture;
    this.key = key;
    this.liked = liked;
  }
  //For the liked picture
  setCommentLiked() {
    this.liked = true;
  }
}

decorate(Comment, {
  content: observable,
  likes: observable,
  liked: observable,
  setLiked: action

});

export default Comment;
