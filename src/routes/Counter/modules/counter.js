// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const ADD_COUNTER = 'ADD_COUNTER'
// export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
// export const COUNTER_RESET = 'COUNTER_RESET'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (index, value = 1 ) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value,
    index
  }
}

export function addCounter () {
  return {
    type : ADD_COUNTER
  }
}

// export function decrement (value = 1) {
//   return {
//     type    : COUNTER_DECREMENT,
//     payload : value
//   }
// }

// export function reset () {
//   return {
//     type    : COUNTER_RESET
//   }
// }

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch(increment(getState().counter))
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  increment,
  addCounter,
  // doubleAsync,
  // reset
}

const initialState = [{counter:0}]

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT] : counterIncrement,
  [ADD_COUNTER] : (state, action) => state.concat({counter:0})
  // [COUNTER_DECREMENT] : (state, action) => state - action.payload,
  // [COUNTER_RESET] : (state, action) => state = initialState
}

function counterIncrement(state, action){
  return state.map((counter, idx) => {
    if(idx !== action.index) return counter;
    counter.counter += action.payload;
    return counter;
  });
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function countersReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
