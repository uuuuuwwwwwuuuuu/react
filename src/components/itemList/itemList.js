import React, { Component } from "react";
import "./itemList.scss";
import GetResource from "../../services/getResource";
import { isArray } from "lodash";

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      chars: {},
      loading: true
    }
    this.updateChars();
  }

  service = new GetResource();

  onLoaded = (chars) => {
    this.setState({chars});
  }

  updateChars() {
    this.service.getAllCharacters()
      .then(this.onLoaded)
  }

  render() {
    const {chars, loading} = this.state

    if (Array.isArray(chars)) {
      const ListElements = (chars) => {
        chars.map((item, index) => {
          const {name} = item;
          return (
            <li key={index} className="list-group-item">{name}</li>
          )
        })
      }
      console.log(chars)
    }
    
    return (
      <ul className="item-list list-group">
        {/* <li className="list-group-item">John Snow</li>
        <li className="list-group-item">Brandon Stark</li>
        <li className="list-group-item">Geremy Smith</li> */}
        {/* <ListElements chars={chars} /> */}
      </ul>
    );
  }
}

