import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function Hook() {
  const [count, addCount] = useState(0);

  useEffect(() => {       //Позволяет создать функцию, которая будет выполняться после каждой новой отрисовки компонента
    console.log(Math.random());
  });

  return (
    <>
      <h1>Вы кликнули {count} раз</h1>
      <button onClick={() => addCount(count + 1)}>Нажми на меня</button>
    </>
  )
}

ReactDOM.render(<Hook /> , document.getElementById('root'));