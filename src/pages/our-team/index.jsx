import React from "react";
import { UserList } from "../../components/user-list";
import { MainButton } from "../../ui/main-button";
import "./style.scss";

export function OurTeam() {
  return (
    <>
      <div className="header">
        <div className="fake-button"></div>
        <div className="hello-banner">
          <h1 className="title">Наша команда</h1>
          <h2 className="hello-banner__subtitle">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </h2>
        </div>
        <MainButton>Выход</MainButton>
      </div>
      <UserList />
      <div className="footer" style={{ height: "40px" }}></div>
    </>
  );
}
