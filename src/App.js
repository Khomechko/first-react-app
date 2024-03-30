import React from "react";
import Header from "./components/header";
import UserCard from "./components/user-card";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
