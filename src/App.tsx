import React from "react";
import "./styles/main.css";
//import IntroScreen from "./components/intro/IntroScreen";
import IntroTyping from "./components/intro/IntroTyping";


import AboutSection from "./components/about/AboutSection";
//import ProjectSection from "./components/projects/ProjectSection";
//import ContactSection from "./components/contact/ContactSection";

export default function App() {
    return (
        <div className="scroll-container">
            <section className="page">
                {/*<IntroScreen />*/}
                <IntroTyping/>
            </section>



            <section className="page">
                <AboutSection />
            </section>
            {/*
            <section className="page">
                <ProjectSection />
            </section>

            <section className="page">
                <ContactSection />
            </section>
            */}
        </div>
    );
}

