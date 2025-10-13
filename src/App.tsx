import React from "react";
import "./styles/main.css";
import IntroTyping from "./components/intro/IntroTyping";
import AboutSection from "./components/about/AboutSection";
import ProjectSection from "./components/projects/ProjectSection";

export default function App() {
    return (
        <div className="scroll-container">
            {/* 인트로 */}
            <section className="page">
                <IntroTyping />
            </section>

            {/* 소개 */}
            <section className="page">
                <AboutSection />
            </section>

            {/* 프로젝트 */}
            <section className="page">
                <ProjectSection />
            </section>
        </div>
    );
}
