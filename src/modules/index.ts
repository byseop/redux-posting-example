import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import users, { getUsersSaga } from './users';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  users
});

export function* rootSaga() {
  yield all([counterSaga(), getUsersSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
