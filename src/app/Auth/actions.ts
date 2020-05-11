import { SET_AUTH_LOADING, SET_USER, SET_IS_AUTHENTICATED, SET_AUTH_STATE } from "./constants";
import type { AuthActionTypes, UserType, AuthState } from "./types";

export const setUser = (user: UserType): AuthActionTypes => ({
    type: SET_USER,
    payload: user,
});

export const setAuthLoading = (isLoading: boolean | null): AuthActionTypes => ({
    type: SET_AUTH_LOADING,
    payload: isLoading,
});

export const setAuth = (isAuthenticated: boolean): AuthActionTypes => ({
    type: SET_IS_AUTHENTICATED,
    payload: isAuthenticated,
});

export const setAuthState = (authState: AuthState) => ({
    type: SET_AUTH_STATE,
    payload: authState,
});
