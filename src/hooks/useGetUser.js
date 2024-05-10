import { useState } from "react";

export const useGetUser = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchUsers() {
    await fetch(`https://reqres.in/api/users?page=${page}&per_page=3`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data);
      })
      .finally(console.log("data :>> ", users))
      .catch((error) => console.log("Error", error));
  }

  return { users, fetchUsers, page, setPage };
};
