import {decorate, observable, action} from 'mobx';
import { v4 } from "uuid";

class Comment {
  constructor({content, user, likes = 0, picture, liked = false}) {
    this.content = content;
    this.user = user;
    this.likes = likes;
    this.picture = picture;
    this.key = v4();
    this.liked = liked;

    if (!picture) {
      throw new Error('You need an picture to comment!');
    }

    if (!content) {
      throw new Error('You need content for your comment!');
    }
  }

  //For the liked comment
  setCommentLiked() {
    this.liked = true;
    this.likes ++;
  }

  setCommentUnLike() {
    this.liked = false;
    this.likes --;
  }
}

decorate(Comment, {
  content: observable,
  likes: observable,
  liked: observable,
  setCommentLiked: action,
  setCommentUnLike: action


});

export default Comment;
