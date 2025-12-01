import React from 'react';
import './About.css'; // 🌟 About 페이지 전용 CSS 파일을 연결합니다.

export const About = () => {

    const instagramUrl = "https://www.instagram.com/unsa_ssu?igsh=MXN3ZThpcWZ6YnNudA=="; 
    
    return (
        <div className="about-page-container">
            <h1 className="main-header">SOONGSIL UNSA 인스타그램</h1>
            <p className="page-subtitle">다양한 활동 소식을 인스타그램에서 만나보세요.</p>

            <div className="channel-section">
                
                {/* 🌟 인스타그램 아이콘 링크 🌟 */}
                <a 
                    href={instagramUrl} 
                    target="_blank" // 새 탭에서 열기
                    rel="noopener noreferrer" 
                    className="social-link instagram-link"
                >
                    {/* Font Awesome 아이콘 사용 (fa-instagram) */}
                    <i className="fa-brands fa-instagram"></i>
                </a>
                
                {/* 🌟 기타 채널을 추가할 수 있습니다. 🌟 
                <a href="URL" target="_blank" className="social-link other-link">
                    <i className="fab fa-facebook-f social-icon"></i>
                    <span className="channel-name">Facebook</span>
                </a>
                */}
            </div>
            
            <section className="contact-info">
                <h2>문의 정보</h2>
                <p>E-mail: thd6999@naver.com</p>
            </section>
        </div>
    );
};