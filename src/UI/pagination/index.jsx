import "./style.scss";

export const Pagination = ({
  page,
  totalPage,
  showMoreHandler,
  showLessHandler,
}) => {
  return (
    <div className="pagination-wrapper" style={{ margin: "auto" }}>
      {page < totalPage ? (
        <button className="pagination-button" onClick={showMoreHandler}>
          Показать ещё
        </button>
      ) : (
        <button className="pagination-button" onClick={showLessHandler}>
          Скрыть
        </button>
      )}
    </div>
  );
};
