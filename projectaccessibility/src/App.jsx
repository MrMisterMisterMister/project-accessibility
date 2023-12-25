import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO FIX ROUTING
function App () {
    return (
        <Router>
            <Header />
            <Home />
            <Footer />
        </Router>
    );
}

export default App;
