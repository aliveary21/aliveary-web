import React from "react";
import { motion } from "framer-motion";
import "../../styles/main.css";
import "./intro.css";
import IntroTextLine from "./IntroTextLine";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.8 },
    },
};

export default function IntroScreen() {
    const lines = ["안녕하세요!", "풀스택 개발자", "강병진입니다"];

    return (
        <div className="intro-container">
            <motion.div
                className="intro-text"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {lines.map((line, index) => (
                    <IntroTextLine key={index} text={line} />
                ))}
            </motion.div>
        </div>
    );
}
