import {AUTH_ACTION_TYPES} from '../constants';
import type {AddAuthAction, RemoveAuthAction} from '../types';

export const addAuth = (
  username: string,
  token: string,
  expiry: number,
): AddAuthAction => ({
  type: AUTH_ACTION_TYPES.AUTH_ADDED,
  authData: {
    username: username,
    token: token,
    expiry: expiry,
  },
});

export const removeAuth = (username: string): RemoveAuthAction => ({
  type: AUTH_ACTION_TYPES.AUTH_REMOVED,
  username: username,
});