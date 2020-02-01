import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../modules';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const Counter = () => {
  const state = useSelector((state: RootReducerType) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseAsync());
  }

  const handleDecrease = () => {
    dispatch(decreaseAsync());
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={handleIncrease}>up</button>
      <button onClick={handleDecrease}>down</button>
    </>
  );
};

export default Counter;
