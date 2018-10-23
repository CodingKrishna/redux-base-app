const countReducer = (state,action) => {
    switch(action.type){
        case "INC" :
        state = state + action.payload;
        break;
        case "DEC" :
        state = state - action.payload;
        break;
        default:
    }
    return state;
  }
module.exports = countReducer;