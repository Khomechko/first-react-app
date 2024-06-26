import "./style.scss";
import React from "react";

export const ErrorModal = ({ children, modal, hideModal }) => {
  return (
    <div className={`error-modal${modal ? " active" : ""}`} onClick={hideModal}>
      <div
        className="error-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div>
          <button className="error-modal__button" onClick={hideModal}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
