import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import getStore from './store';
import increament from './actions';
const App = () => (
  <div>
    <h1>Hello Redux base thing to understand.</h1>
    <h2>Open the console and see the logs to understand the redux.</h2>
  </div>
);

render(<App />, document.getElementById("root"));

const store = getStore();
store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch(increament());
store.dispatch(increament());

/*
const reducer = (state,action) => {
  console.log("Prv state", state, "action", action);
  switch(action.type){
      case "ADD" :
      state = state + action.payload;
      break;
      case "SUB" :
      state = state - action.payload;
      break;
      default:
  }
  return state;
}

const store = createStore(reducer,1);

store.subscribe(()=>{
  console.log('Subscriber 1', store.getState());
})
store.subscribe(()=>{
  console.log('Subscriber 2', store.getState());
})
store.subscribe(()=>{
  console.log('Subscriber 3', store.getState());
})

store.dispatch({type:"ADD", payload:10});
store.dispatch({type:"SUB", payload:15});
*/