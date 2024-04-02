import React from "react";
import Header from "./components/header/index";
import UserCard from "./components/user-card/index";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    fetchUsers();
  });

  const [users, setUser] = useState([]);

  async function fetchUsers() {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    setUser(response.data.data);
  }

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
