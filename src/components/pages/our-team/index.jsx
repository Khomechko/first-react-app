import React from "react";
import { Header } from "../../header";
import { UserList } from "../../user-list";

import "./style.scss";

export function OurTeam() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <div className="footer" style={{ height: "40px" }}></div>
    </div>
  );
}
