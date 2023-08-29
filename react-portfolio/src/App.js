import "./App.css";
import "./components/css/navbar.css";
import "./components/css/projects.css";
import "./components/css/responsive.css";
import "./components/css/aboutme.css";
import "./components/css/custom-animations.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
