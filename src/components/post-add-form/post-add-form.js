import React from "react";
import './post-add-form.scss'

const PostAddForm = ({onAdd}) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чём вы думаете?"
        className="form-control new-post-label"
      />
      <button 
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Hallo')}>
        Добавить</button>
    </div>
  )
}

export default PostAddForm;