import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⭐️ 여기서 Router를 한 번만 선언합니다.
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🌟 App 컴포넌트 전체를 <BrowserRouter>로 감싸줍니다. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);