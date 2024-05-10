import { useEffect } from "react";
import { UserCard } from "../user-card";
import { useState } from "react";
import "./style.scss";

export const UserList = () => {
  // const { users, fetchUsers } = useGetUser();
  // const { page, setPage } = useGetUser();
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totlaPage, setTotalPage] = useState(0);

  async function fetchUsers() {
    await fetch(`https://reqres.in/api/users?page=${page}&per_page=8`)
      .then((response) => response.json())
      .then((data) => {
        setUser((pre) => [...pre, ...data.data]); // в душе не ебу как это работает
        setTotalPage(data.total_pages);
      })
      .catch((error) => console.log("Error", error));
  }

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div className="user-list-wrapper">
      <div className="user-list">
        {users.map((item) => (
          <UserCard
            title={item.first_name + " " + item.last_name}
            avatar={item.avatar}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
      {/* почему в onClick передаем анонимную функцию? */}
      {page < totlaPage && (
        <button className="paginationBtn" onClick={() => setPage(page + 1)}>
          Показать ещё
        </button>
      )}
    </div>
  );
};
