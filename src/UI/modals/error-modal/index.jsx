import "./style.scss";
import React from "react";

export const ErrorModal = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`error-modal${visible ? " active" : ""}`}
      onClick={() => setVisible(false)}
    >
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
