import React from "react";
import PostListItem from "../list-item/list-item";
import './post-list';

const PostList = ({props}) => {
  const elements = props.map((item) => {
    return (
      <li className="list-group-item">
        <PostListItem 
        label={item.label}
        important={item.important} />
      </li>
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;