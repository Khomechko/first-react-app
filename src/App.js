import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Partner } from "./components/pages/partner";
import { OurTeam } from "./components/pages/our-team";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OurTeam />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </BrowserRouter>
  );
}
