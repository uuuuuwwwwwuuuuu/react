import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Header = () => {
  return <h1>Hallo World!</h1>
}

const Field = () => {
  const holder = 'Enter here';
  const styleField = {
    width: '300px'
  }

  return <input type='text' placeholder={holder} style={styleField} />
}

const Btn = () => {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? null : text}</button>
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