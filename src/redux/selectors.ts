import { createSelector } from "reselect";
import { RootState } from "../redux/rootReducer";
import { UserType } from "../app/Auth/types";

// auth selectors
export const isAuthenticatedSelector = (state: RootState) => state.auth.isAuthenticated;
export const isAuthLoadingSelector = (state: RootState) => state.auth.isLoading;
export const authUserSelector = (state: RootState) => state.auth.user;
export const userSelector = createSelector(authUserSelector, (user: UserType) => user);

export const authSelector = createSelector(
    isAuthenticatedSelector,
    isAuthLoadingSelector,
    userSelector,
    (isAuthenticated, isLoading, user) => ({
        isAuthenticated,
        isLoading,
        user,
    })
);
// end
