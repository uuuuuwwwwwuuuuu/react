import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// Обязательно оборачивать все эллементы в какой-то тег
const elem = (
  <div>
    <h1>Hallo World!</h1>
    <input type='text' placeholder='something' />
  </div>
)

// Это равно примеру ниже
// const elem = React.createElement('h1', null, 'Hallo World!');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  elem
);