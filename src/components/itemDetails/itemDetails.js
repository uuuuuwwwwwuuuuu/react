import React, { Component } from "react";
import "./itemDetails.css";
import ErrorMessage from "../errorMessage/errorMessage";

const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export {Field};

export default class itemDetails extends Component {

  state = {
    item: null,
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.update();
    }
  }

  update() {
    const {itemId} = this.props
    if (!itemId) {
      return;
    }
    const {getData} = this.props
    getData(itemId)
      .then(item => {
        this.setState({item});
      });
  }

  renderChar(item) {
    const {name} = item;
    return (
      <>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item});
            })
          }
        </ul>
      </>
    )
  }

  render() {
    
    if (!this.state.item) {
      return (
        <div className="char-details rounded">
          <ErrorMessage message="No data, select a character" />
        </div>
      );
    }

    const element = this.renderChar(this.state.item);

    return (
      <div className="char-details rounded">
        {element}
      </div>
    );
  }
}
