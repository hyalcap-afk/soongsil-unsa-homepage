import React from 'react';
import './Introduction.css'; // 🌟 Introduction 전용 CSS 파일 연결

export const Introduction = () => {
    return (
        <div className="intro-page-container">
            <h1 className="main-header">SOONGSIL UNSA, 우리의 비전</h1>
            <p className="page-subtitle">숭실대학교 UN 학생 연합의 목표와 가치를 소개합니다.</p>

            {/* 1. 비전 및 목표 섹션 (2단 텍스트) */}
            <section className="intro-section mission-section">
                <h2>유엔과 함께하는 평화 실현</h2>
                <div className="intro-content-grid">
                    <p>SOONGSIL UNSA는 단순한 대학 동아리를 넘어, 유엔이 추구하는 평화, 인권, 지속가능개발 목표(SDGs)를 대학생의 시각에서 실현하고자 노력합니다. 우리는 학술 활동과 대외 캠페인을 통해 국제 문제에 대한 인식을 높이고, 실천적인 참여를 독려합니다.</p>
                    <p>우리의 활동은 캠퍼스를 넘어 지역 사회, 나아가 국제 사회에 긍정적인 영향을 미치는 것을 목표로 합니다. 젊은 인재들이 글로벌 시민으로서 성장할 수 있는 플랫폼을 제공합니다.</p>
                </div>
            </section>

            {/* 2. 핵심 가치 섹션 (3단 카드) */}
            <section className="intro-section values-section">
                <h2>UNSA의 핵심 가치</h2>
                <div className="values-list">
                    <div className="value-item">
                        <h3>학술적 통찰</h3>
                        <p>국제 정세에 대한 깊이 있는 분석과 토론을 통해 학문적 역량을 강화합니다.</p>
                    </div>
                    <div className="value-item">
                        <h3>실천적 참여</h3>
                        <p>이론을 넘어 캠페인, 봉사 활동 등을 통해 실질적인 변화를 만듭니다.</p>
                    </div>
                    <div className="value-item">
                        <h3>글로벌 연대</h3>
                        <p>국내외 UN 관련 단체와의 교류를 통해 연대 의식을 함양합니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};