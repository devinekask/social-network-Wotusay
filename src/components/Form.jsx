import React, {useState} from "react";
import { useObserver } from "mobx-react-lite";
import PropTypes from "prop-types";

const Form = ({ store }) => {

  const [content, setContent] = useState("");

  const submitHandelerEvent = e => {
    e.preventDefault();
    if (content) {
      store.addResponse(content);
      setContent("");
    }
  };

  return useObserver(() => (
    <>
    <form onSubmit={e => submitHandelerEvent(e)}>
            <input
            onChange={e => setContent(e.currentTarget.value)} className='form__input' id='content' name='content' value={content} placeholder='Een opmerking plaatsen ...'/>
          </form>
    </>
  ))
}

Form.propTypes = {
  store: PropTypes.object.isRequired
};
 export default Form;
