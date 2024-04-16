import React from "react";
import Header from "./components/header/index";
import { UserCard } from "./components/user-card/index";
import "./App.scss";
import { useEffect } from "react";
import { useGetUser } from "./hooks/useGetUser";

export function App() {
  const { users, fetchUsers } = useGetUser();

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
