import { useEffect } from "react";
import { useGetUser } from "../../hooks/useGetUser";
import { UserCard } from "../user-card";
import "./style.scss";

export const UserList = () => {
  const { users, fetchUsers } = useGetUser();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((item) => (
        <UserCard
          title={item.first_name + " " + item.last_name}
          avatar={item.avatar}
          key={item.id}
        />
      ))}
    </div>
  );
};
