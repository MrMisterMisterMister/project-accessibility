import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./section/Hero";
import Expertise from "./section/Expertise";
import Member from "./section/Member";
import News from "./section/News";
import Case from "./section/Case";
import Contact from "./section/Contact";

// Home page
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Expertise />
            <Member />
            <News />
            <Case />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
