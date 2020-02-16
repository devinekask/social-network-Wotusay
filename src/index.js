import './style.css';
import Store from './js/Store';
import {autorun} from 'mobx';



const renderUnread = ({unreadLength}) => {
  document.querySelector('.unread').textContent = unreadLength > 0 ? `${unreadLength} unread message${unreadLength > 1 ? 's' : ''}` : '';
};

const renderMessages = store => {
  const $list = document.querySelector('.list');
  $list.innerHTML = '';
  store.messages.forEach(message => {
    $list.appendChild(createMessage(message, store));
  });
};

const createMessage = (message, store) => {
  const $li = document.createElement('li');
  $li.classList.add('bubble',
    message.unread ? 'bubble--unread' : 'bubble--read',
    message.user === 1 ? 'bubble--right' : 'bubble--left');
  $li.textContent = message.content;
  $li.addEventListener('click', () => setAsRead(message, store));
  return $li;
};

const setAsRead = message => {
  message.setUnread();
};

const handleFormSubmit = (e, store) => {
  e.preventDefault();
  const content = e.currentTarget.content.value;
  if (content) {
    store.addMessage(content);
    e.currentTarget.reset();
  }
};

const init = () => {
  const store = new Store();

  store.seed();

  autorun(() => {
    renderMessages(store);
    renderUnread(store);
  });

  window.store = store;
  console.log(store.counterUp);
  const $form = document.querySelector('form');
  $form.addEventListener('submit', e => handleFormSubmit(e, store));
};

init();
