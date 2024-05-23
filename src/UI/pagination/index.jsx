import "./style.scss";

export const Pagination = ({
  page,
  totalPage,
  showMoreHandler,
  showLessHandler,
}) => {
  return (
    <div className="pagination">
      {page < totalPage ? (
        <button className="pagination__button" onClick={showMoreHandler}>
          Показать ещё
        </button>
      ) : (
        <button className="pagination__button" onClick={showLessHandler}>
          Скрыть
        </button>
      )}
    </div>
  );
};
