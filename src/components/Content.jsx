import React from "react";
import Likes from './Likes';
import Comment from './Comment';
import Form from './Form';
import { useObserver } from "mobx-react-lite";
import PropTypes from "prop-types";



const Content = ({ store }) => {

  return useObserver(() => (
    <>
     <img src='assets/img/foto.png' alt='gameboy'/>
     <section className="form">
     <Likes store={store} />
     <span className='amount'> {store.amountComments} {store.amountComments === 1 ? 'Comment' : 'Comments'}</span>
     <ul className="name">
      {store.comments.map(comment => (
        <Comment comment={comment} key={comment.key} />
      ))}
     </ul>
     <Form store={store} />
     </section>
    </>
  ))
}

Content.propTypes = {
  store: PropTypes.object.isRequired
};

export default Content;
