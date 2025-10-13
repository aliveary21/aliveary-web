// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ React Router 사용
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        {/* ✅ BrowserRouter로 감싸서 모든 컴포넌트가 라우팅 기능을 사용 가능 */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
