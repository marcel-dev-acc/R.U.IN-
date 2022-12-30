import {
  AuthState,
  AuthAction,
  AddAuthAction,
  RemoveAuthAction,
} from '../types';
import {AUTH_ACTION_TYPES} from '../constants';

export const initialState: AuthState = [];

const addAuthMethod = (
  state: AuthState,
  action: AuthAction,
) => {
  const {authData} = <AddAuthAction>action;
  const {username, token, expiry} = authData;
  return [
    ...state,
    {
      username,
      token,
      expiry,
    },
  ];
};

const removeAuthMethod = (
  state: AuthState,
  action: AuthAction,
) => {
  const {username} = <RemoveAuthAction>action;
  return state.filter(auth => auth.username !== username);
};

const authList = (
  state: AuthState = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.AUTH_ADDED:
      return addAuthMethod(state, action);
    case AUTH_ACTION_TYPES.AUTH_REMOVED:
      return removeAuthMethod(state, action);
    default:
      return state;
  }
};

export default authList;