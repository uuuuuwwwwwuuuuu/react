import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Header = () => {
  return <h1>Hallo World!</h1>
}

const Field = () => {
  return <input type='text' placeholder='something' />
}

const Btn = () => {
  return <button/>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
);