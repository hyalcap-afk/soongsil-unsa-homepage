import React from 'react';
import './Members.css'; 
// import placeholderImage from '../assets/unsa_main_bg.jpg'; 🌟 이미지 Import 제거! 🌟

// 🌟 지회장단 데이터 (photo 필드는 더 이상 필요 없습니다) 🌟
const membersData = [
    { id: 1, name: "남현진", studentId: "23학번", department: "신소재공학과", role: "지회장", team: "지회장단" },
    { id: 2, name: "나세은", studentId: "23학번", department: "사회복지학과", role: "부지회장", team: "지회장단" },
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

export const Presidents = () => {
    return (
        <div className="members-page-container">
            <h1 className="main-header">지회장단</h1>
            <p className="page-subtitle">지회장 및 부지회장 소개</p>
            
            <section className="team-section">
                <div className="members-grid team-presidents"> 
                    {membersData.map(member => (
                        <MemberCard key={member.id} {...member} />
                    ))}
                </div>
            </section>
        </div>
    );
};