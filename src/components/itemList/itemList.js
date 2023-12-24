import React, { Component } from "react";
import "./itemList.scss";
import GetResource from "../../services/getResource";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  service = new GetResource();

  state = {
    charList: null
  }

  renderItems(arr) {
    return arr.map((item, index) => {
      return (
        <li 
          key={index} 
          className="list-group-item" 
          onClick={ () => this.props.onSelected(41 + index)}>
          {item.name}
        </li>
      )
    })
  }

  componentDidMount() {
    this.service.getAllCharacters()
      .then(charList => this.setState({ charList }));
  }

  render() {
    const {charList} = this.state;

    if (!charList) {
      return (
        <ul className="item-list list-group bg-white">
          <Spinner />
        </ul>
      )
    }

    const items = this.renderItems(charList);

    return (
      <ul className="item-list list-group bg-white">
        {items}
      </ul>
    );
  }
}