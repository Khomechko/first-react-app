import "./style.scss";

export const MainButton = ({ children, onClick, classNameModifier }) => {
  return (
    <div
      className={`main-button__container ${
        classNameModifier ? `main-button__container--${classNameModifier}` : ""
      }`}
    >
      <button className="main-button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
