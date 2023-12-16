import React, {Component} from "react";
import './list-item.css';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false
    }
  }

  onImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }));
  }

  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }));
  }

  render() {
    const {label} = this.props;
    const {important,  like} = this.state;
    let classList = 'app-list-item d-flex justify-content-between';
    if (important) {
      classList += ' important';
    }
 
    if (like) {
      classList += ' like';
    }
 
    return (
      <div className={classList} onDoubleClick={this.onLike }>
        <span className="app-list-item-lable">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
} 