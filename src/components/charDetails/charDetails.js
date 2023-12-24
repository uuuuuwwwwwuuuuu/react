import React, { Component } from "react";
import "./charDetails.css";
import GetResource from "../../services/getResource";
import ErrorMessage from "../errorMessage/errorMessage";

export default class CharDetails extends Component {
  service = new GetResource();

  state = {
    char: null,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar() {
    const {charId} = this.props
    if (!charId) {
      return;
    }
    this.service.getCharacter(charId)
      .then(char => {
        this.setState({char});
      });
  }

  renderChar(char) {
    const {name, gender, born, died, culture} = char;
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
    
    if (!this.state.char) {
      return (
        <div className="char-details rounded">
          <ErrorMessage message="No data, select a character" />
        </div>
      );
    }

    const element = this.renderChar(this.state.char);

    return (
      <div className="char-details rounded">
        {element}
      </div>
    );
  }
}
