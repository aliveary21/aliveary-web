import React from "react";
import { motion } from "framer-motion";
import "../../styles/main.css";
import "./about.css";

export default function AboutSection() {
    return (
        <motion.section
            id="about-section"
            className="about-container"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} // 스크롤 시 1회만 실행
        >
            {/* 🔹 왼쪽 이미지 (scale+opacity 등장) */}
            <motion.div
                className="about-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            ></motion.div>

            {/* 🔹 오른쪽 텍스트 (x축 슬라이드 + staggerChildren) */}
            <motion.div
                className="about-text"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.3,
                        staggerChildren: 0.2,
                    },
                }}
                viewport={{ once: true }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    안녕하세요. 사용자 경험 중심의 서비스를 만드는 <b>풀스택 개발자</b> 강병진입니다.
                    <br />
                    <br />
                    저는 기획부터 디자인, 개발, 배포까지 전체 프로세스를 직접 경험하며{" "}
                    <b>“작동하는 서비스”</b>가 가지는 가치에 집중해왔습니다.
                    <br />
                    <br />
                    프론트엔드에서는 <b>React / Next.js</b>로, 백엔드에서는{" "}
                    <b>Spring Boot / Firebase</b>를 활용해 실제 사용자에게 전달되는 기능을 완성도 있게
                    구현하는 걸 좋아합니다.
                    <br />
                    <br />
                    개발은 제게 ‘도전과 완성의 반복’입니다. 매일 조금씩 더 나은 서비스를 만드는 과정을
                    즐깁니다.
                </motion.p>
            </motion.div>
        </motion.section>
    );
}
