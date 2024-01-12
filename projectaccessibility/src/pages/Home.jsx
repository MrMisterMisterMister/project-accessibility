import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Member from "../components/Member";
import News from "../components/News";
import Case from "../components/Case";
import Contact from "../components/Contact";

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
