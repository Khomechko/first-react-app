import React from "react";
import "./style.scss";

type Props = {
  children: React.ReactNode;
  classNameModifier?: string;
  onClick?: () => void;
};

export const MainButton = ({ children, onClick, classNameModifier }: Props) => {
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
