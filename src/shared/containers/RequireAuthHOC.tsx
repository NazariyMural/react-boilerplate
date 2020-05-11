import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { authSelector } from "../../redux/selectors";
import request from "../../utils/request";
import { getToken } from "../../utils/localStorage";
import { fetchUser } from "../../app/Auth/services";

const RequireAuth = (props: any) => {
    const auth = useSelector(authSelector);
    const dispatch = useDispatch();

    request.setAuthorizationToken(getToken());
    if (auth.isLoading === null) {
        dispatch(fetchUser());
    }
    if ((!auth.isAuthenticated && auth.isLoading !== null && !auth.isLoading) || !getToken()) {
        return <Redirect to="/sing-in" />;
    }
    if (auth.isLoading === false && auth.isAuthenticated) {
        if (props.role && props.role !== auth.user.role) {
            return <Redirect to="/my-profile" />;
        }
        return props.children;
    }
    return null;
};

export default RequireAuth;
