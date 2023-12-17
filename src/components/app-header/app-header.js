import React, {Component} from "react";
import './app-header.scss';

export default class AppHeader extends Component {
  render() {
    const {liked, allPosts} = this.props

    return (
      <div className="app-header d-flex">
        <h1>Денис Воронин</h1>
        <h2>{allPosts} записей, из них понравилось {liked}</h2>
      </div>
    )
  }
}

