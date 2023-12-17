import React, {Component} from "react";
import './search-panel.scss';

export default class SearchPanel extends Component {
  onUpdateSearch = (e) => {
    this.props.onFilter(e.target.value.toLowerCase());
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    )
  }
}

