import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList  from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "I'm so fun!", important: true, id: 1},
        {label: "How are you!?", important: false, id: 2},
        {label: "How will go out with me?", important: false, id: 3}
      ]
    }

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return { data: newArr };
    });
  }

  addItem = (message) => {
    const newPost = {
      label: message,
      important: false,
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [newPost,  ...data];

      return {
        data: newArr
      }
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList 
          postsList={data}
          onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}