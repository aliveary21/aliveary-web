import React, { useState, useEffect } from "react";
import "../../styles/main.css";
import "./intro.css";

export default function IntroTyping() {
    const lines = ["안녕하세요!", "풀스택 개발자", "강병진입니다"];
    const [displayedText, setDisplayedText] = useState<string[]>([""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false); // ✅ 전체 타이핑 완료 여부

    useEffect(() => {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => {
                        const updated = [...prev];
                        updated[lineIndex] += lines[lineIndex][charIndex];
                        return updated;
                    });
                    setCharIndex(charIndex + 1);
                }, 90);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    if (lineIndex + 1 === lines.length) {
                        // ✅ 마지막 줄까지 완료되면
                        setIsFinished(true);
                    } else {
                        setDisplayedText((prev) => [...prev, ""]);
                        setLineIndex(lineIndex + 1);
                        setCharIndex(0);
                    }
                }, 500);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, lineIndex]);

    // ✅ 타이핑 완료 후 2초 뒤 자동 스크롤
    useEffect(() => {
        if (isFinished) {
            const timer = setTimeout(() => {
                const aboutSection = document.getElementById("about-section");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isFinished]);

    return (
        <div className="intro-container">
      <pre className="typing-strong">
        {displayedText.map((line, i) => (
            <div key={i} className="typing-line">
            <span
                className={i === 1 ? "highlight" : ""}
                dangerouslySetInnerHTML={{ __html: line }}
            />
                {i === lineIndex && !isFinished && <span className="cursor" />}
            </div>
        ))}
      </pre>
        </div>
    );
}
