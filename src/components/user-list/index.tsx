import { UserCard } from "../user-card";
import { DEFAULT_NUMBER_OF_PAGE, Pagination } from "../../ui/pagination";
import { ErrorModal } from "../../ui/modals/error-modal";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { fetchUsers } from "../../services/fetch-users";
import { setUsersToDefault } from "../../store/reducers/userSlice";

export const UserList = () => {
  const users = useAppSelector((state) => state.user.userData.data);
  const page = useAppSelector((state) => state.user.userData.page);
  const errorMessage = useAppSelector((state) => state.user.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    page === 0
      ? dispatch(fetchUsers(DEFAULT_NUMBER_OF_PAGE))
      : dispatch(setUsersToDefault());
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
