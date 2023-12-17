import React, {Component} from "react";
import './post-status-filter.scss';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', buttonText: 'Все'},
      {name: 'like', buttonText: 'Понравилось'},
    ]
  }

  render() {
    const buttons = this.buttons.map(({name, buttonText}) => {
      const active = this.props.filter === name;
      const className = active ? 'btn btn-info' : 'btn-outline-secondary';
      return (
        <button key={name}  
        type="button" 
        className={`btn ${className}`}
        onClick={() => this.props.onFilterSelect(name)}>{buttonText}</button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    ) 
  }
}

