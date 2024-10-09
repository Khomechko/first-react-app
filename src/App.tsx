import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Partner } from "pages/partner";
import { OurTeam } from "pages/our-team";
import "App.scss";

export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OurTeam />} />
          <Route path="/partner/:id" element={<Partner />} />
        </Routes>
      </BrowserRouter>
      <div className="footer"></div>
    </div>
  );
}
