import "./style.scss";

export const Pagination = ({ page, totlaPage, setPage }) => {
  return (
    <div className="pagination-wrapper" style={{ margin: "auto" }}>
      {/* почему в onClick передаем анонимную функцию? */}
      {page < totlaPage && (
        <button className="pagination-button" onClick={() => setPage(page + 1)}>
          Показать ещё
        </button>
      )}
    </div>
  );
};
