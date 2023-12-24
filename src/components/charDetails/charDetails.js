import React, { Component } from "react";
import "./charDetails.css";
import ErrorMessage from "../errorMessage/errorMessage";

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
    const {name, gender, born, died, culture} = item;
    return (
      <>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
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
