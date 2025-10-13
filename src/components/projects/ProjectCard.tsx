// ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Next.js의 Link가 아닌 react-router-dom 사용
import "./project.css";

// ✅ props 타입 정의
interface ProjectCardProps {
    title: string;
    desc: string;
    tech: string;
    color: string;
    link: string;
}

export default function ProjectCard({ title, desc, tech, color, link }: ProjectCardProps) {
    return (
        <Link to={link} className="project-card">
            {/* 상단 컬러 박스 */}
            <div className="project-image" style={{ backgroundColor: color }}></div>

            {/* 텍스트 영역 */}
            <div className="project-info">
                <h3>{title}</h3>
                <p>{desc}</p>
                <small>{tech}</small>
            </div>
        </Link>
    );
}
