import {decorate, observable, action} from 'mobx';

class Comment {
  constructor({content, user, likes = 0, picture, key, liked = false}) {
    this.content = content;
    this.user = user;
    this.likes = likes;
    this.picture = picture;
    this.key = key;
    this.liked = liked;

    if (!picture) {
      throw 'You need an picture to comment!';
    }

    if (!content) {
      throw 'You need content for your comment!';
    }
  }

  //For the liked comment
  setCommentLiked() {
    this.liked = true;
    this.likes ++;
  }
}

decorate(Comment, {
  content: observable,
  likes: observable,
  liked: observable,
  setLiked: action

});

export default Comment;
