import React from "react";
import "./styles/layout.scss";

const Layout = (props: any) => {
    return <div className="layout">{props.children}</div>;
};

export default Layout;
