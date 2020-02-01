import {
  GetUsersActionsType,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from './actions';
import { UsersType } from './types';
import { AxiosError } from 'axios';

type State = {
  loading: boolean;
  data: UsersType[] | null;
  error: AxiosError | null;
};

const initiaState = {
  loading: false,
  data: null,
  error: null
};

export default function users(
  state: State = initiaState,
  action: GetUsersActionsType
): State {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
