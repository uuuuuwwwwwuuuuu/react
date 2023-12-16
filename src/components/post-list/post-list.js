import React from "react";
import PostListItem from "../list-item/list-item";
import './post-list';

const PostList = ({postsList}) => {
  const elements = postsList.map((item) => {
    const {id, ...itemProps} = item

    return (
      <li className="list-group-item" key={id}>
        <PostListItem {...itemProps} />
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