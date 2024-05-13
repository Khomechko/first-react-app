import React from "react";
import { Header } from "../../header";
import { UserList } from "../../user-list";

export function OurTeam() {
  return (
    <>
      <Header />
      <UserList />
      <div className="footer" style={{ height: "40px" }}></div>
    </>
  );
}
