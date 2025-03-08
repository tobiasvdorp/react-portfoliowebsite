import "./index.css";
import "./App.css";
import "./components/css/navbar.css";
import "./components/css/projects.css";
import "./components/css/responsive.css";
import "./components/css/aboutme.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./i18n";
import { DisorderedProvider } from "./components/js/DisorderedContext";

function App() {
  return (
    <div>
      <DisorderedProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DisorderedProvider>
    </div>
  );
}

export default App;
