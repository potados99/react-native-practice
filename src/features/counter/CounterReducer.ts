import {decrementAction, incrementAction, setAction} from './CounterActions';
import {createReducer} from '@reduxjs/toolkit';

export type CounterState = {
  counter: {
    amount: number;
  };
};

const initialState = {
  counter: {
    amount: 0,
  },
};

// Next state generator
export default createReducer<CounterState>(initialState, {
  [incrementAction as any]: state => {
    state.counter.amount += 1;
  },
  [decrementAction as any]: state => {
    state.counter.amount -= 1;
  },
  [setAction as any]: (state, action) => {
    state.counter.amount += parseInt(action.payload);
  },
});
