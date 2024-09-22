import { UserCard } from "../user-card";
import { DEFAULT_NUMBER_OF_PAGE, Pagination } from "../../ui/pagination";
import { ErrorModal } from "../../ui/modals/error-modal";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { fetchUsers } from "../../services/fetch-users";

export const UserList = () => {
  const { users, page, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    page === 0 && dispatch(fetchUsers(DEFAULT_NUMBER_OF_PAGE));
  }, []);

  let textModal = "";
  if (error === "Failed to fetch") {
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
