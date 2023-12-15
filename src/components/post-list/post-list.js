import React from "react";
import PostListItem from "../list-item/list-item";
import './post-list';

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </ul>
  )
}

export default PostList;