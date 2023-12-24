import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Example extends Component {
  render() {
    return this.props.children
  }
}

ReactDOM.render(<Example>
  <h1>Hallo!</h1> 
</Example>, document.getElementById('root')); // В props.children можно передать всё что угодно