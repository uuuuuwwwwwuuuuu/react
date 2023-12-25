import { createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        case "RND":
            return state + action.value;
        default:
            return state;
    }
};

const store = createStore(reducer);
const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = (value) => ({ type: "RND", value });

const update = () => {
    document.querySelector("#counter").textContent = store.getState();
};

store.subscribe(update);

document.querySelector("#inc").addEventListener("click", () => {
    store.dispatch(inc());
});

document.querySelector("#dec").addEventListener("click", () => {
    store.dispatch(dec());
});

document.querySelector("#rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10);
    store.dispatch(rnd(value));
});
