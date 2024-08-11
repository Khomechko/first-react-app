import "./style.scss";

type Props = {
  page: number;
  totalPage: number;
  showMoreHandler: () => void;
  showLessHandler: () => void;
};

export const Pagination = ({
  page,
  totalPage,
  showMoreHandler,
  showLessHandler,
}: Props) => {
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
