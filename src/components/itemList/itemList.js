import React, { Component } from "react";
import "./itemList.scss";
import GetResource from "../../services/getResource";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

  service = new GetResource();

  state = {
    charList: null
  }

  

  componentDidMount() {
    this.service.getAllCharacters()
      .then(charList => this.setState({ charList }));
  }

  render() {
    const {charList} = this.state;

    const content = !charList ? <Spinner /> : <View charList={charList} />

    return (
      <ul className="item-list list-group">
        {/* <li className="list-group-item">John Snow</li>
        <li className="list-group-item">Brandon Stark</li>
        <li className="list-group-item">Geremy Smith</li> */}
        {content}
      </ul>
    );
  }
}

function View({charList}) {
  return charList.map((item, index) => {
    return (
      <li key={index} className="list-group-item">{item.name}</li>
    )
  })
}