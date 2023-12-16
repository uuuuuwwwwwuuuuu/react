import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList  from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.scss';

const App = () => {
  const data = [
    {label: "I'm so fun!", important: true, id: 'esavw'},
    {label: "How are you!?", important: false, id: 'vewcew'},
    {label: "How will go out with me?", important: false, id: 'fcverfqw'}
  ]

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList postsList={data} />
      <PostAddForm/>
    </div>
  )
}

export default App;