import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
    return (
        <Router>
            <Routes>
                {Pages.map((page, index) => (
                    <Route
                        key={index}
                        path={page.path}
                        element={<page.element />}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
