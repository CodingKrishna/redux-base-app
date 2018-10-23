import { createStore } from 'redux';

const reducer = (state,action) => {
    switch(action.type){
        case "ADD" :
        state = state + action.payload;
        case "SUB" :
        state = state - action.payload;
    }
    return state;
}

const store = createStore(reducer,1);

store.subscribe(()=>{
    console.log(store.getState());
    console.log(store.action.type);
})

store.dispatch({type:"ADD", payload:10});

