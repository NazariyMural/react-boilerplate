import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../shared/components/Layout/Layout";
import RequireAuthHOC from "../shared/containers/RequireAuthHOC";

type RouteProps = {
    path: string;
    exact?: boolean;
    layout?: React.ElementType;
    component: React.ElementType;
    role?: string;
};

export const PublicRoute = (route: RouteProps) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
                <>
                    {!route.layout ? (
                        <DefaultLayout {...props}>
                            {/* <route.component {...props} routes={route.routes} /> */}
                            <route.component {...props} />
                        </DefaultLayout>
                    ) : (
                        <route.layout {...props}>
                            <route.component {...props} />
                        </route.layout>
                    )}
                </>
            )}
        />
    );
};

export const PrivateRoute = (route: RouteProps) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => (
                <>
                    {!route.layout ? (
                        <DefaultLayout {...props}>
                            <RequireAuthHOC {...props} role={route.role}>
                                <route.component {...props} />
                            </RequireAuthHOC>
                        </DefaultLayout>
                    ) : (
                        <route.layout {...props}>
                            <RequireAuthHOC {...props} role={route.role}>
                                <route.component {...props} />
                            </RequireAuthHOC>
                        </route.layout>
                    )}
                </>
            )}
        />
    );
};
