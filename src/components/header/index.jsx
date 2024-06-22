import React from "react";
import { MainButton } from "../../ui/main-button";
import "./style.scss";

export const Header = () => {
  return (
    <>
      <div className="header">
        <MainButton>Выход</MainButton>
      </div>
    </>
  );
};
