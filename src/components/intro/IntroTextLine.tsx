import React from "react";
import { motion, Variants } from "framer-motion";

// 🔹 각 텍스트 라인의 등장 애니메이션 설정
const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

// 🔹 props 타입 정의
interface IntroTextLineProps {
    text: string;
}

// 🔹 개별 텍스트 라인 컴포넌트
export default function IntroTextLine({ text }: IntroTextLineProps) {
    return (
        <motion.h1 className="intro-line" variants={item}>
            {text}
        </motion.h1>
    );
}
