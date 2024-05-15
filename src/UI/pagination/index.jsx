import "./style.scss";

export const Pagination = ({ page, totalPage, setPage }) => {
  return (
    <div className="pagination-wrapper" style={{ margin: "auto" }}>
      {page < totalPage && (
        <button className="pagination-button" onClick={() => setPage(page + 1)}>
          Показать ещё
        </button>
      )}
    </div>
  );
};
