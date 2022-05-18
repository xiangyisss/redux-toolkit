import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by amount
      </button>
    </div>
  );
};
