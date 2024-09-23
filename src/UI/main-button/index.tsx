import React from "react";
import "./style.scss";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  classNameModifier?: string;
  onClick?: () => void;
};

export const MainButton = ({ children, onClick, classNameModifier }: Props) => {
  const mainButtonClasses = classNames("main-button", classNameModifier);

  return (
    <>
      <button className={mainButtonClasses} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
