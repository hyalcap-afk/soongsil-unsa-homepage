import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 

// 기존 페이지 import 유지
import { Home } from "./pages/Home.jsx"; 
import { Introduction } from "./pages/Introduction.jsx";
// import { Members } from "./pages/Members.jsx"; // 🌟 기존 Members는 이제 사용하지 않습니다.

// 🌟 새로 만들 컴포넌트들을 import 합니다.
import { Presidents } from "./pages/Presidents.jsx";
import { Executive } from "./pages/Executive.jsx";

import { Activities } from "./pages/Activities.jsx";
import { About } from "./pages/About.jsx";

export default function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        
        <Route path="/members/presidents" element={<Presidents />} />
        <Route path="/members/executive" element={<Executive />} />
        
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}