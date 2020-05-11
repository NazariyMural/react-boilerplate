import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import request from "../../utils/request";
import { setAuthLoading, setAuthState } from "./actions";
import { isEmpty } from "../../utils/helpers";
import { saveToken } from "../../utils/localStorage";
// import { RootState } from "../../redux/rootReducer";

// export const fetchUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getStore: () => RootState) => {
export const fetchUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(setAuthLoading(true));
        const user = await request.get("/users/1");
        if (isEmpty(user)) return user;
        dispatch(
            setAuthState({
                isAuthenticated: true,
                isLoading: false,
                user,
            })
        );
        return user;
    } catch (error) {
        dispatch(setAuthLoading(false));
        logOutUser();
        console.error("fetchUser error => ", error);
        return null;
    }
};

export const logOutUser = () => {
    return request.deleteAuthorizationToken();
};

export const getProfile = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        const res = await request.get("/api/v1/account/profile");
        console.log(res);
    } catch (error) {
        console.error("getProfile error => ", error);
        return null;
    }
};

export const loginUser = (email: string, password: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(setAuthLoading(true));
        const data = await request.post("/posts", { email, password });
        if (!isEmpty(data)) {
            request.setAuthorizationToken("xpCCuY349dm6&%3$$mscZoiGG");
            saveToken("xpCCuY349dm6&%3$$mscZoiGG", data);
            dispatch(fetchUser());
        }
        return data;
    } catch (error) {
        dispatch(setAuthLoading(false));
        console.error("loginUser error => ", error);
        console.log("Error Response => ", error.response);
        return null;
    }
};
