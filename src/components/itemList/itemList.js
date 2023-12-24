import React, { Component } from "react";
import "./itemList.scss";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  renderItems(arr) {
    return arr.map((item, index) => {
      const label = this.props.renderItem(item);

      return (
        <li 
          key={index} 
          className="list-group-item" 
          onClick={ () => this.props.onSelected(41 + index)}>
          {label}
        </li>
      )
    })
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then(itemList => this.setState({ itemList }));
  }

  render() {
    const {itemList} = this.state;

    if (!itemList) {
      return (
        <ul className="item-list list-group bg-white">
          <Spinner />
        </ul>
      )
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group bg-white">
        {items}
      </ul>
    );
  }
}