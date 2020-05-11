import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterOutlet from "./router/RouterOutlet";

function App() {
    return (
        <Router>
            <RouterOutlet />
        </Router>
    );
}

export default App;
