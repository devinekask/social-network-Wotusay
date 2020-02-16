import Comment from './Comment';
import {decorate, action, configure, observable} from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.comments = [];
  }

  seed(data) {
    //this.messages = data;
    this.comments.push(...data);
  }

  addResponse(content) {
    this.comments.push(new Comment({content, user: 'DadGammer'}));
  }
}

decorate(Store, {
  comments: observable,
  addResponse: action,
  seed: action
});

export default Store;
