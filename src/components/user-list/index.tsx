import { UserCard } from "../user-card";
import { defaultValueOfUsersPerPage, Pagination } from "../../ui/pagination";
import { ErrorModal } from "../../ui/modals/error-modal";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { fetchUsers } from "../../services/fetch-users";

export const UserList = () => {
  const users = useAppSelector((state) => state.user.userData.data);
  const errorMessage = useAppSelector((state) => state.user.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(defaultValueOfUsersPerPage));
  }, []);

  let textModal = "";
  if (errorMessage === "Failed to fetch") {
    textModal = "Не удалось получить пользователей";
  } else textModal = "Ошибка сервера";

  return (
    <div className="user-list-wrapper">
      <ErrorModal>{textModal}</ErrorModal>
      <div className="user-list">
        {users?.map((item) => (
          <UserCard
            title={item.first_name + " " + item.last_name}
            avatar={item.avatar}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};
