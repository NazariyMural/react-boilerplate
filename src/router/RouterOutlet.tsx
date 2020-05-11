import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./Route";
import RouteSpinner from "../shared/components/Spinners/RouteSpinner";
import Layout from "../shared/components/Layout/Layout";

import { ROLES } from "../shared/constants";

// Lazy Routes
const Home = lazy(() => import("../app/Home/containers/Home"));
const UserProfile = lazy(() => import("../app/User/containers/UserProfile"));
const CustomerProfile = lazy(() => import("../app/Customer/containers/Customer"));
const SingIn = lazy(() => import("../app/Auth/containers/SingIn/SingIn"));
const SignUp = lazy(() => import("../app/Auth/containers/SignUp/SignUp"));
// end

const defaultFallback = <RouteSpinner />;

const routes = [
    {
        path: "/",
        exact: true,
        guard: PublicRoute,
        layout: Layout,
        component: (props: any) => (
            <Suspense fallback={defaultFallback}>
                <Home {...props} />
            </Suspense>
        ),
    },
    {
        path: "/sing-in",
        exact: true,
        guard: PublicRoute,
        component: (props: any) => (
            <Suspense fallback={defaultFallback}>
                <SingIn {...props} />
            </Suspense>
        ),
    },
    {
        path: "/sign-up",
        exact: true,
        guard: PublicRoute,
        component: (props: any) => (
            <Suspense fallback={defaultFallback}>
                <SignUp {...props} />
            </Suspense>
        ),
    },
    {
        path: "/my-profile",
        exact: true,
        guard: PrivateRoute,
        layout: Layout,
        component: (props: any) => (
            <Suspense fallback={defaultFallback}>
                <UserProfile {...props} />
            </Suspense>
        ),
    },
    {
        path: "/customer",
        exact: true,
        guard: PrivateRoute,
        layout: Layout,
        role: ROLES.CUSTOMER,
        component: (props: any) => (
            <Suspense fallback={defaultFallback}>
                <CustomerProfile {...props} />
            </Suspense>
        ),
    },
    {
        path: "",
        guard: PublicRoute,
        component: () => <h1>Not Found</h1>,
    },
];

const RouterOutlet = () => (
    <Switch>
        {routes.map((route, i) => (
            <route.guard key={i} {...route} />
        ))}
    </Switch>
);

export default RouterOutlet;
