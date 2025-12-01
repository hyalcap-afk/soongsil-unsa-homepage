import React from 'react';
import './Members.css'; 
// import placeholderImage from '../assets/unsa_main_bg.jpg'; 🌟 이미지 Import 제거! 🌟

// 🌟 집행부 데이터
const membersData = [
    { id: 3, name: "안종찬", studentId: "24학번", department: "정치외교학과", role: "학술부장", team: "집행부" }, 
    { id: 4, name: "송민종", studentId: "23학번", department: "신소재공학과", role: "기획부장", team: "집행부" }, 
    { id: 5, name: "박나연", studentId: "24학번", department: "사회복지학과", role: "홍보부장", team: "집행부" }, 
];

// 🌟 MemberCard 컴포넌트 (이미지 렌더링 부분 제거) 🌟
const MemberCard = ({ name, studentId, department, role, team }) => {
    return (
        <div className="member-card">
            {/* <div className="member-photo-wrapper">
                <img src={null} alt={name} className="member-photo" /> 
            </div> */}
            <h3 className="member-name">{name}</h3>
            <p className="member-role">{role}</p>
            <p className="member-info">
                <span>{studentId}</span> | <span>{department}</span>
            </p>
            <span className="member-team">{team}</span>
        </div>
    );
};

export const Executive = () => {
    return (
        <div className="members-page-container">
            <h1 className="main-header">집행부</h1>
            <p className="page-subtitle">학술부, 기획부, 홍보부 소개</p>
            
            <section className="team-section">
                <div className="members-grid team-executive">
                    {membersData.map(member => (
                        <MemberCard key={member.id} {...member} />
                    ))}
                </div>
            </section>
        </div>
    );
};