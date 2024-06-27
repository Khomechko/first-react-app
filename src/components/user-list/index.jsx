import { UserCard } from "../user-card";
import { Pagination } from "../../ui/pagination";
import { ErrorModal } from "../../ui/modals/error-modal";
import { useGetUsersWithPagination } from "../../hooks/useGetUsersWithPagination";
import "./style.scss";

export const UserList = () => {
  const {
    users,
    showLessHandler,
    showMoreHandler,
    totalPage,
    page,
    modal,
    hideModal,
    errorMessage,
  } = useGetUsersWithPagination();

  let textModal = "";

  if (errorMessage === "Failed to fetch") {
    textModal = "Неудалось получить пользователей";
  } else textModal = "Ошибка сервера";

  return (
    <div className="user-list-wrapper">
      <ErrorModal modal={modal} hideModal={hideModal}>
        {textModal}
      </ErrorModal>
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
      <Pagination
        page={page}
        totalPage={totalPage}
        showMoreHandler={showMoreHandler}
        showLessHandler={showLessHandler}
      />
    </div>
  );
};
