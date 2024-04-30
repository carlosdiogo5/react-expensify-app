import { createStore } from "redux";

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy,
  };
};

const resetCount = () => {
  return {
    type: 'RESET',
  }
};

const setCount = ({ setBy } = {}) => {
  return {
    type: 'SET',
    setBy
  }
};

// Reducers
// 1. Reducers are "pure" functions
// Never change state or action 

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count : state.count + action.incrementBy,
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy,
      };
    case 'SET':
      return {
        count: action.setBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions

// I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ setBy: 101 }));

store.dispatch(incrementCount());


