import React from "react";
import Header from "./components/header/index";
import UserCard from "./components/user-card/index";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

export function App() {
  const [users, setUser] = useState([]);

  async function fetchUsers() {
    await fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.log("Error", error));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main">
        {users.map((item) => (
          <UserCard
            title={item.first_name + " " + item.last_name}
            avatar={item.avatar}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
