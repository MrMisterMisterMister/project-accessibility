import React from "react";
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
            <Hero />
            <Expertise />
            <Member />
            <News />
            <Case />
            <Contact />
        </>
    );
};

export default Home;
