import './style.css';
import Store from './js/Store';
import Comment from './js/Comment';
import {autorun} from 'mobx';



const renderComment = comments => {
  const $list = document.querySelector('.list');
  $list.innerHTML = '';
  console.log(comments);
  comments.forEach(comment => {
    $list.appendChild(createComment(comment));
  });
};

const createComment = comment => {
  const $li = document.createElement('li');
  const $span = document.createElement(`span`);
  $li.appendChild($span);
  $span.classList.add('user');
  $span.textContent = comment.user;
  $li.innerHTML += comment.content;
  return $li;

};

const handleFormSubmit = (e, store) => {
  e.preventDefault();
  const content = e.currentTarget.content.value;
  console.log(store.comments);
  console.log(content);
  if (content) {
    store.addResponse(content);
    e.currentTarget.reset();
  }
};




const init = () => {
  const store = new Store();

  store.seed([new Comment({content: 'Dit is mijn nieuwe console!', user: 'RetroGamer1996'})]);

  autorun(() => {
    renderComment(store.comments);
  });

  window.store = store;
  const $form = document.querySelector('form');
  $form.addEventListener('submit', e => handleFormSubmit(e, store));
};

init();





