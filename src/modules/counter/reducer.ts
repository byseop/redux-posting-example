import { INCREASE, DECREASE, CounterActionType } from './actions';

const initialState = 0;

const counter = (
  state: number = initialState,
  action: CounterActionType
): number => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
