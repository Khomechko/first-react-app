import React from "react";
import Header from "./components/header/index";
import UserCard from "./components/user-card/index";
import "./App.css";

const users = [
  { title: "Mikhail Khom" },
  { title: "piskaman Bryyev" },
  { title: "Chlenmman Bryyev" },
  { title: "piskaman Bryyev" },
  { title: "Chlenmman Bryyev" },
];

export function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {users.map((item, index) => (
          <UserCard key={index} title={item.title} />
        ))}
      </div>
    </div>
  );
}
