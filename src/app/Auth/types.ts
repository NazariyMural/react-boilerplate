import { SET_IS_AUTHENTICATED, SET_AUTH_LOADING, SET_USER, SET_AUTH_STATE } from "./constants";
// types
export type UserType = {
    name?: string;
    role?: string;
};

// auth state
export type AuthState = {
    user: UserType;
    isLoading: boolean | null;
    isAuthenticated: boolean;
};

interface LoadingAction {
    type: typeof SET_AUTH_LOADING;
    payload: null | boolean;
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: UserType;
}

interface SetAuthAction {
    type: typeof SET_IS_AUTHENTICATED;
    payload: boolean;
}


interface SetAuthStateAction {
    type: typeof SET_AUTH_STATE;
    payload: AuthState;
}

export type AuthActionTypes = LoadingAction | SetUserAction | SetAuthAction | SetAuthStateAction;
