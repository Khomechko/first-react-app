import React from "react";
import "./style.scss";

export const HelloBanner = () => {
  return (
    <div className="hello-banner">
      <div className="hello-banner__inner">
        <h1 className="title">Наша команда</h1>
        <h2 className="hello-banner__subtitle">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </h2>
      </div>
    </div>
  );
};
