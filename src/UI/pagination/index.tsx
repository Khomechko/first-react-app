import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../services/fetch-users";
import "./style.scss";

export const defaultValueOfUsersPerPage = 8;

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const numberOfUsersPerPage = useAppSelector(
    (state) => state.user.userData.per_page
  );
  const totalNumberOfUsers = useAppSelector(
    (state) => state.user.userData.total
  );

  return (
    <div className="pagination">
      {numberOfUsersPerPage < totalNumberOfUsers ? (
        <button
          className="pagination__button"
          onClick={() =>
            dispatch(
              fetchUsers(numberOfUsersPerPage + defaultValueOfUsersPerPage)
            )
          }
        >
          Показать ещё
        </button>
      ) : (
        <button
          className="pagination__button"
          onClick={() => dispatch(fetchUsers(defaultValueOfUsersPerPage))}
        >
          Скрыть
        </button>
      )}
    </div>
  );
};
