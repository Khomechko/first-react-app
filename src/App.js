import React from "react";
import { Header } from "./components/header/index";
import { UserList } from "./components/user-list";
import "./App.scss";

export function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <div className="footer" style={{ height: "40px" }}></div>
    </div>
  );
}
