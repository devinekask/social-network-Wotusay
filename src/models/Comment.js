import {decorate, observable, action} from 'mobx';
import { v4 } from "uuid";

class Comment {
  constructor({content, user, likes = 0, picture, liked = false, id = v4()}) {
    if (!user) {
      throw new Error("A Comment must have a user");
    }

    if (!picture) {
      throw new Error('You need an picture to comment!');
    }

    if (!content || content === '') {
      throw new Error('You need content for your comment!');
    }
    this.content = content;
    this.likes = likes;
    this.picture = picture;
    this.liked = liked;
    this.id = id;
    this.user = user;
    this.user.linkComment(this);
    this.picture.linkComment(this);
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
  likes: observable,
  liked: observable,
  setCommentLiked: action,
  setCommentUnLike: action
});

export default Comment;
