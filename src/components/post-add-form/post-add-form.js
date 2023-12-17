import React, {Component} from "react";
import './post-add-form.scss'

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    }
  }

  onValueChange = (e) => {
    this.setState({textValue: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.textValue);
    this.setState({textValue: ''})
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чём вы думаете?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.textValue}
        />
        <button 
          type="submit"
          className="btn btn-outline-secondary">
          Добавить</button>
      </form>
    )
  }
}

