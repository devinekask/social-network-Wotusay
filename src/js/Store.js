import Message from './Message';
import {decorate, observable, action, computed, configure, values} from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.messages = [];
    this.counter = 0;
  }

  addMessage(content) {
    this.messages.push(new Message({content, user: 1}));
  }

  get unreadLength() {
    this.counter ++;
    return this.messages.filter(message => message.unread).length;
  }

  seed() {
    this.messages.push(new Message({content: 'Hey', user: 2}));
    this.messages.push(new Message({content: 'Joow', user: 1}));
    this.messages.push(new Message({content: 'Hoe is het?', user: 2, unread: true}));
    this.messages.push(new Message({content: 'Lang niet gezien', user: 2, unread: true}));
  }

}

decorate(Store, {
  addMessage: action,
  unreadLength: computed,
  seed: action,
});

export default Store;
