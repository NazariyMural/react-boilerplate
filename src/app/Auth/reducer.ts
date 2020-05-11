import { SET_AUTH_LOADING, SET_USER, SET_IS_AUTHENTICATED, SET_AUTH_STATE } from "./constants";
import type { AuthState, AuthActionTypes } from "./types";

const initialState: AuthState = {
    isAuthenticated: false,
    user: {},
    isLoading: null,
};

export default (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case SET_AUTH_LOADING: {
            return { ...state, isLoading: action.payload };
        }
        case SET_USER: {
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    role: action.payload.role,
                },
            };
        }
        case SET_IS_AUTHENTICATED: {
            return { ...state, isAuthenticated: action.payload };
        }
        case SET_AUTH_STATE: {
            return action.payload;
        }
        default:
            return state;
    }
};
