import "./style.scss";

export const MainButton = ({ children, onClick, classNameModifier }) => {
  return (
    <>
      <button
        className={`main-button ${
          classNameModifier ? `main-button--${classNameModifier}` : ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
