import "./style.scss";
import React from "react";

export const ErrorModal = ({ children, visible, setVisible }) => {
  const rootClasses = ["error-modal"];

  if (visible) {
    rootClasses.push("active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className="error-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div>
          <button
            className="error-modal__button"
            onClick={() => setVisible(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
