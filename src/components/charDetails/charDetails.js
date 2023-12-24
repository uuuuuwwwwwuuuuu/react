import React, { Component } from "react";
import "./charDetails.css";
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

export default class CharDetails extends Component {

  state = {
    item: null,
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.update();
    }
  }

  update() {
    const {charId} = this.props
    if (!charId) {
      return;
    }
    const {getData} = this.props
    getData(charId)
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
