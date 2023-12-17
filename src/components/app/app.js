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
        {label: "I'm so fun!", important: false, like: false, id: 1},
        {label: "How are you!?", important: false, like: false, id: 2},
        {label: "How will go out with me?", important: false, like: false, id: 3}
      ],
      text: '',
      filter: 'all'
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

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);

      const oldObj = data[index];
      const newObj = {...oldObj, important: !oldObj.important};

      const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  onToggleLiked = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);

      const oldObj = data[index];
      const newObj = {...oldObj, like: !oldObj.like};

      const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  postFilter = (items, text) => {
    if (text === 0) {
      return items;
    }

    return items.filter(item => item.label.toLowerCase().indexOf(text) > -1);
  }

  filterPosts = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  updateAppStateText = (text) => {
    this.setState({text});
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, text, filter} = this.state;

    const liked = data.filter(obj => obj.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPosts(this.postFilter(data, text), filter );

    return (
      <div className="app">
        <AppHeader
          liked={liked}
          allPosts={allPosts}/>
        <div className="search-panel d-flex">
          <SearchPanel
            onFilter={this.updateAppStateText}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList 
          postsList={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}