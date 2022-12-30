// Types specific to global state

export type Auth = {
  username: string;
  token: string;
  expiry: number;
};

export type AuthState = Auth[];

export type AddAuthAction = {
  type: string;
  authData: Auth;
};

export type UpdateAuthAction = {
  type: string;
  username: string;
  authData: Auth;
};

export type RemoveAuthAction = {
  type: string;
  username: string;
};

export type AuthAction =
  | AddAuthAction
  | UpdateAuthAction
  | RemoveAuthAction;