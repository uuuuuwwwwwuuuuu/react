import React, { Component } from "react";
import "./itemList.scss";

export default class ItemList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">John Snow</li>
        <li className="list-group-item">Brandon Stark</li>
        <li className="list-group-item">Geremy Smith</li>
      </ul>
    );
  }
}