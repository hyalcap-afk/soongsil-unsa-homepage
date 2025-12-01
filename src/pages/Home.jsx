import React from 'react';
import './Home.css'; 

// 🌟 1. 이 경로와 파일명을 1단계에서 저장한 파일명과 정확히 일치시켜야 합니다!
import UNSABackground from '../assets/unsa_main_bg.jpg'; 

export const Home = () => {
    return (
        // 🌟 2. style 속성을 사용하여 불러온 이미지를 배경으로 설정합니다.
        <div 
            className="home-container" 
            style={{ backgroundImage: `url(${UNSABackground})` }}
        >
            <div className="home-content">
                <h1 className="home-title"></h1>
                <p className="home-subtitle"></p>
                <button className="home-button"></button>
            </div>
           
        </div>
    );
};