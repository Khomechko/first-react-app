import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../services/fetch-users";
import "./style.scss";

export const DEFAULT_VALUE_OF_USERS_PER_PAGE = 8;

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { numberOfUsersPerPage, totalNumberOfUsers } = useAppSelector(
    (state) => ({
      numberOfUsersPerPage: state.user.userData.per_page,
      totalNumberOfUsers: state.user.userData.total,
    })
  );

  return (
    <div className="pagination">
      {numberOfUsersPerPage < totalNumberOfUsers ? (
        <button
          className="pagination__button"
          onClick={() =>
            dispatch(
              fetchUsers(numberOfUsersPerPage + DEFAULT_VALUE_OF_USERS_PER_PAGE)
            )
          }
        >
          Показать ещё
        </button>
      ) : (
        <button
          className="pagination__button"
          onClick={() => dispatch(fetchUsers(DEFAULT_VALUE_OF_USERS_PER_PAGE))}
        >
          Скрыть
        </button>
      )}
    </div>
  );
};
