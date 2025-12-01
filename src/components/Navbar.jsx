import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

// 🌟 아이콘 파일 import (파일명과 경로를 반드시 확인하세요!)
import UnsaIcon from '../assets/unsa_icon.jpg'; 

const Navbar = () => {
    // 드롭다운 호버 상태 State
    const [isMembersHovered, setIsMembersHovered] = useState(false);

    return (
        <header className="navbar-header">
            {/* 로고와 아이콘 컨테이너 */}
            <div className="navbar-logo-container">
                <img src={UnsaIcon} alt="UNSA Icon" className="navbar-icon" />
                <Link to="/">SOONGSIL UNSA</Link>
            </div>
            
            {/* 내비게이션 링크 */}
            <nav className="navbar-links">
                <Link to="/introduction">Introduction</Link>
                
                {/* 🌟 Members 드롭다운 Wrapper (오타 및 구조 오류 해결) 🌟 */}
                <div 
                    className="nav-item-dropdown-wrapper"
                    onMouseEnter={() => setIsMembersHovered(true)} 
                    onMouseLeave={() => setIsMembersHovered(false)} 
                >
                    {/* Members 텍스트 (클릭 기능 없이 호버 기능만 담당) */}
                    <span className="nav-item member-link">
                        Members
                    </span>
                    
                    {/* 호버 상태일 때만 드롭다운 메뉴 렌더링 */}
                    {isMembersHovered && ( 
                        <div className="dropdown-menu">
                            {/* 🌟 분리된 경로로 링크 연결 🌟 */}
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