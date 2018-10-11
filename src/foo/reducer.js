import { createAction, handleActions } from 'redux-actions';

const initialState = { counter: 1 };

function COUNTER_INCREMENT(state) {
  return { ...state, counter: (state.counter + 1) };
}

function COUNTER_DECREMENT(state) {
  return { ...state, counter: (state.counter - 1) };
}

export const incrementCounter = createAction('COUNTER_INCREMENT');
export const decrementCounter = createAction('COUNTER_DECREMENT');

export default handleActions({
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
}, initialState);
