import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import {inc, dec, rnd} from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const update = () => {
    document.querySelector("#counter").textContent = store.getState();
};
store.subscribe(update);

const incDispatch = bindActionCreators(inc, dispatch);      //создаёт dispatch генератор
const decDispatch = bindActionCreators(dec, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);

document.querySelector("#inc").addEventListener("click", incDispatch);

document.querySelector("#dec").addEventListener("click", decDispatch);

document.querySelector("#rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value);
});
