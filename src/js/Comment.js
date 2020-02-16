import {decorate, observable} from 'mobx';

class Comment {
  constructor({content, user}) {
    this.content = content;
    this.user = user;
  }
}

decorate(Comment, {
  content: observable
});

export default Comment;
