import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

class WhoAmI extends Component {        //Можно менять значение props
  constructor(props) {
    super(props);
    this.state = {
      age: 26,
    }
    // this.nextAge = this.nextAge.bind(this)    //Первый способ
    // this.nextAge = () => {                       //Второй способ
    //   this.setState(state => ({
    //     age: ++state.age,
    //   }));
    // }
  }

  // nextAge() {                                 //Первый способ
  //   this.setState(state => ({
  //     age: ++state.age,
  //   }));
  // }

  nextAge = () => {                              //Третий способ
    this.setState(state => ({
      age: ++state.age
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    const {age} = this.state;
    return (
      <>
        <button onClick={this.nextAge}>++</button>
        <h1>My name {name}, sername - {surname}, age: {age}</h1>
        <a href={link}>YouTube</a>
      </>
    )
  }
}

// function WhoAmI(props) {        //Ничего менять после этого нельзя, props можно диструктурировать
//   return (
//     <>
//       <h1>My name {props.name}, sername - {props.surname}</h1>
//       <a href={props.link}>YouTube</a>
//     </>
//   )
// }

function AllPeople() {
  return (
    <div>
      <WhoAmI name='Denis' surname='Voronin' link='https://www.youtube.com/' />
      <WhoAmI name='Alya' surname='Semenova' link='https://www.youtube.com/' />
      <WhoAmI name='Dima' surname='Bartosevich' link='https://www.youtube.com/' />
    </div>
  )
}

root.render(
  // <App/>
  <AllPeople />
);