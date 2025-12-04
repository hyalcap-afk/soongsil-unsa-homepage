import React from 'react';
import './Introduction.css'; 

export const Introduction = () => {
    return (
        <div className="intro-page-container">
            {/* 🌟 메인 헤더: 역사 및 공인 상태 강조 🌟 */}
            <h1 className="main-header">유엔한국학생협회 (UNSA)</h1>
            <p className="page-subtitle">1952년 창설된 공인 학생 단체이며, 총 776명의 회원이 활동하고 있습니다.</p>

            {/* 1. 협회 목적 및 비전 섹션 (텍스트 2열 배치) */}
            <section className="intro-section mission-section">
                <h2>협회 목적 및 비전</h2>
                <div className="intro-content-grid">
                    <div className="mission-card purpose-card">
                        <h3>PURPOSE</h3>
                        <p>
                            유엔한국학생협회는 국제사회에 관심이 많은 청년들이 글로벌 리더로 성장할 수 있도록 다양한 경험과 인사이트를 제공하는 것을 목적으로 하고 있습니다.
                        </p>
                    </div>
                </div>
                <div className="intro-content-grid">
                    <div className="mission-card purpose-card">
                        <h4>VISION</h4>
                        <p>
                            지속가능발전목표(SDGs)와 국제 이슈 학습을 기반으로 청년 세대의 목소리를 대변하는 플랫폼입니다. 글로벌 파트너십 구축을 통해 지속 가능한 미래를 위한 실질적인 변화를 선도하는 것이 우리의 비전입니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. 공인 및 글로벌 네트워크 섹션 (3단 카드) */}
            <section className="intro-section values-section">
                <h2>공인 및 글로벌 네트워크</h2>
                <div className="values-list">
                    <div className="value-item">
                        <h3>외교부 등록 공인 단체</h3>
                        <p>외교부 등록 공인 법인인 유엔한국협회(UNA-ROK)의 공식 산하 단체입니다. 높은 공신력 아래 활동을 수행합니다.</p>
                    </div>
                    <div className="value-item">
                        <h3>WFUNA 글로벌 네트워크</h3>
                        <p>유엔협회세계연맹(WFUNA)이라는 글로벌 네트워크에 속해 있으며, 세계적인 연대 활동에 참여합니다.</p>
                    </div>
                    <div className="value-item">
                        <h3>SDSN Korea 협력</h3>
                        <p>한국 지속가능발전해법네트워크 (SDSN Korea)의 협력 단체로서, 지속가능발전목표(SDGs) 실현에 기여합니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};