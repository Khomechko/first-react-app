import "./style.scss";

export const MainButton = ({ children, onClick }) => {
  return (
    <div className="main-button__container">
      <button className="main-button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
