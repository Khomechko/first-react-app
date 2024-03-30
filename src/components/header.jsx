import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="hello-banner">
        <h1 className="hello-banner__title">Наша команда</h1>
        <h2 className="hello-banner__description">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </h2>
      </div>
      <button className="outdoor">Выход</button>
    </div>
  );
};

export default Header;
