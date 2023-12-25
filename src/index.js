import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function Hook() {
  const [count, setCount] = useState(0);        //Принимает в себя базовое значение и функцию по изменению этого значения (стэйта)
  const [data, refreshData] = useState([{name: 'Ivan', sex: ' Male'}])

  return (
    <div className='m-4'>
      <h1>Вы кликнули: {count} раз</h1>
      <button className='p-2' onClick={() => setCount(count + 1)}>+1</button> {/* Добавит и отрисует + 1 с коунтеру */}
      {data.map(item => {
        return (
          <h1>Name: {item.name}, sex: {item.sex}</h1>
        )
      })}
      <button onClick={() => refreshData(data => [...data, {name: 'Alex', sex: 'male'}])}>Add data</button> {/* Добавит данные */}
    </div>
  )
}

ReactDOM.render(<Hook /> , document.getElementById('root'));