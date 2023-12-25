import {createStore} from 'redux'

const reducer = (state = 0, action) => {    //непосредственные действия (action)
  switch (action.type) {
    case 'INC':
      return state + 1
    default: 
      return state;
  }
}

const store = createStore(reducer);     //создаёт стор
store.subscribe(() => {                 //выполняет эту функцию после каждого изменения
  console.log(store.getState());
});

store.dispatch({type: 'INC'});          //непосредственное изменение
store.dispatch({type: 'INC'});
