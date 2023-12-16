import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList  from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css';

const App = () => {
  const data = [
    {label: "I'm so fun!", important: true},
    {label: "How are you?", important: true},
    {label: "How will go out with me?", important: true}
  ]

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList props={data} />
      <PostAddForm/>
    </div>
  )
}

export default App;