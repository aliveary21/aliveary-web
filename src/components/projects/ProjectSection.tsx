// ProjectSection.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";

export default function ProjectSection() {
    // ✅ 프로젝트 리스트 정의
    const projects = [
        {
            title: "극한스피킹",
            desc: "음성인식 기반 영어학습 시스템. LMS + 발음 피드백 + 실시간 학습통계 기능 구현.",
            tech: "C#, .NET, MS Speech, MySQL, AWS Lightsail",
            color: "#ff6799",
            link: "/projects/extreme",
        },
        {
            title: "한말한글",
            desc: "한국어 문해력 테스트 앱. Firestore 기반 문제 랜덤화 및 일일 테스트 시스템.",
            tech: "Flutter, Firebase, Firestore",
            color: "#7BD3EA",
            link: "/projects/hanmal",
        },
        {
            title: "I Need You (아니쥬)",
            desc: "스팀 게임 메이트 매칭 서비스. Google 로그인, 실시간 채팅, FCM 알림 구현.",
            tech: "Flutter, Firebase, Steam API",
            color: "#A1EEBD",
            link: "/projects/ineedyou",
        },
        {
            title: "세지다 (세상의 지식을 다루다)",
            desc: "AI 기반 지식 공유 플랫폼. 콘텐츠 큐레이션과 맞춤 학습 추천 기능 제공.",
            tech: "Next.js, Node.js, PostgreSQL, OpenAI API",
            color: "#F6D6D6",
            link: "/projects/sejida",
        },
        {
            title: "블루마인드",
            desc: "마음 건강 관리 앱. 감정일기, 심리분석, AI 상담봇 기능 포함.",
            tech: "Flutter, Firebase, TensorFlow Lite",
            color: "#F6F7C4",
            link: "/projects/fifth",
        },
    ];

    return (
        <section className="project-section">
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        tech={project.tech}
                        color={project.color}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}
