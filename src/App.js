import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Partner } from "./components/pages/partner";
import { OurTeam } from "./components/pages/our-team";
import "./App.scss";

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OurTeam />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
