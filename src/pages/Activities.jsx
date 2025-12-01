import React from 'react';
import './Activities.css'; // Activities 전용 CSS 파일을 연결합니다.

// 🌟 1. 활동 데이터 정의 (photoUrl 필드 제거) 🌟
const activitiesData = [
    { id: 1, title: "UN의 날 기념 평화 캠페인", date: "2025. 10. 24", description: "캠퍼스 내에서 UN의 역할과 평화의 중요성을 알리는 행사를 진행했습니다." },
    { id: 2, title: "UN 본부 견학 및 모의 회의", date: "2025. 09. 15", description: "팀원들과 함께 UN 관련 기관을 견학하고, 모의 회의를 통해 국제 이슈에 대한 심도 있는 이해도를 높였습니다." },
    { id: 3, title: "새내기 환영회 및 OT", date: "2025. 03. 05", description: "신입 부원들을 위한 환영회와 동아리 활동 방향을 소개하는 오리엔테이션을 진행했습니다." },
    { id: 4, title: "학술 토론회 개최: 기후 난민 문제", date: "2025. 11. 01", description: "기후 변화로 인해 발생하는 난민 문제에 대해 심도 깊은 토론을 진행하고 결과를 발표했습니다." },
    { id: 5, title: "학교 축제 부스 운영", date: "2025. 05. 20", description: "학교 축제 기간 동안 UN의 지속가능개발 목표(SDGs)를 알리는 부스를 운영하여 인식 제고에 기여했습니다." },
];

// 🌟 2. ActivityCard 컴포넌트 (photoUrl prop 제거) 🌟
const ActivityCard = ({ title, date, description }) => { 
    return (
        <div className="activity-card">
            {/* 사진 영역 (placeholder 유지: CSS에서 크기 정의) */}
            <div className="activity-photo-wrapper">
                <span className="photo-placeholder">PHOTO</span>
            </div>
            
            {/* 정보 영역 */}
            <div className="activity-info">
                <h3 className="activity-title">{title}</h3>
                <span className="activity-date">{date}</span>
                <p className="activity-description">{description}</p>
            </div>
        </div>
    );
};

// 🌟 3. 메인 Activities 컴포넌트 🌟
export const Activities = () => {
    return (
        <div className="activities-page-container">
            <h1 className="main-header">SOONGSIL UNSA 주요 활동</h1>
            <p className="page-subtitle">한 학기 동안의 활동 기록을 확인해 보세요.</p>
            
            <div className="activities-grid">
                {activitiesData.map(activity => (
                    <ActivityCard 
                        key={activity.id} 
                        // 🌟 photoUrl을 전달하지 않습니다. 🌟
                        title={activity.title}
                        date={activity.date}
                        description={activity.description}
                    />
                ))}
            </div>
        </div>
    );
};