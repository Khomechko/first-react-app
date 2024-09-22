import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../services/fetch-users";
import { setUsersToDefault } from "../../store/reducers/userSlice";
import "./style.scss";
import { store } from "../../store";
import { selectPageAndTotalPage } from "../../store/reducers/userSlice/selectors";

export const DEFAULT_NUMBER_OF_PAGE = 1;

export const Pagination = () => {
  const dispatch = useAppDispatch();

  const { numberOfPage, numberOfTotalPage } = selectPageAndTotalPage(
    store.getState()
  );

  return (
    <div className="pagination">
      {numberOfPage < numberOfTotalPage ? (
        <button
          className="pagination__button"
          onClick={() => dispatch(fetchUsers(numberOfPage + 1))}
        >
          Показать ещё
        </button>
      ) : (
        <button
          className="pagination__button"
          onClick={() => dispatch(setUsersToDefault())}
        >
          Скрыть
        </button>
      )}
    </div>
  );
};
