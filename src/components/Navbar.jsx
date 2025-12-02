import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import UnsaIcon from '../assets/unsa_icon.jpg'; 

const Navbar = () => {
    // 🌟 1. 모바일 메뉴 열림/닫힘 상태 추가 🌟
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // 2. 데스크탑 드롭다운 호버 상태 유지
    const [isMembersHovered, setIsMembersHovered] = useState(false); 

    // 🌟 3. 메뉴 아이콘 클릭 시 상태를 토글하는 함수
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // 모바일 메뉴를 닫을 때는 드롭다운도 닫아줍니다.
        if (isMembersHovered) setIsMembersHovered(false); 
    };

    return (
        <header className="navbar-header">
            {/* 로고와 아이콘 컨테이너 */}
            <div className="navbar-logo-container">
                <img src={UnsaIcon} alt="UNSA Icon" className="navbar-icon" />
                <Link to="/">SOONGSIL UNSA</Link>
            </div>
            
            {/* 🌟 4. 모바일 햄버거 아이콘 추가 (클릭 이벤트 연결) 🌟 */}
            <div className="menu-toggle" onClick={toggleMenu}>
                {/* isMobileMenuOpen 상태에 따라 아이콘을 햄버거 또는 X자로 변경 */}
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> 
            </div>
            
            {/* 🌟 5. 내비게이션 링크 (모바일 상태에 따라 'open' 클래스 추가) 🌟 */}
            <nav 
                className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}
                // PC 호버 이벤트는 모바일 메뉴가 닫혀 있을 때만 활성화 (터치 오작동 방지)
                onMouseLeave={() => setIsMembersHovered(false)}
            >
                <Link to="/introduction">Introduction</Link>
                
                {/* Members 드롭다운 Wrapper */}
                <div 
                    className="nav-item-dropdown-wrapper"
                    onMouseEnter={() => setIsMembersHovered(true)} 
                    // 모바일에서는 클릭으로 드롭다운을 토글
                    onClick={() => setIsMembersHovered(!isMembersHovered)} 
                >
                    <span className="nav-item member-link">
                        Members
                    </span>
                    
                    {isMembersHovered && ( 
                        <div className="dropdown-menu">
                            <Link to="/members/presidents" className="dropdown-item">지회장단</Link>
                            <Link to="/members/executive" className="dropdown-item">집행부</Link>
                        </div>
                    )}
                </div>
                
                <Link to="/activities">Activities</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Navbar;