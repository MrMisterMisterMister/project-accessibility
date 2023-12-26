import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
    return (
        <Router>
            <Header />
            <Routes>
                {Pages.map((page, index) => (
                    <Route
                        key={index}
                        path={page.path}
                        element={<page.element />}
                    />
                ))}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
