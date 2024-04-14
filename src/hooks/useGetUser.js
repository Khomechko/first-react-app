import { useState } from "react";

export const useGetUser = () => {
  const [users, setUser] = useState([]);

  async function fetchUsers() {
    await fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.log("Error", error));
  }

  return { users, fetchUsers };
};
