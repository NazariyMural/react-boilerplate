import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="home-container">
            <h1>Home</h1>

            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="my-profile">My profile</Link> ( auth required )
            </div>
            <div>
                <Link to="/customer">Customer</Link> ( auth and specific role required )
            </div>
            <div>
                <Link to="/sing-in">Sing In</Link>
            </div>
            <div>
                <Link to="/sing-up">Sing Up</Link>
            </div>
        </div>
    );
};

export default HomeComponent;
