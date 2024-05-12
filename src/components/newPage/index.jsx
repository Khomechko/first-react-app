import React from "react";
import "./style.scss";

export const Header = (props) => {
  return (
    <div className="header">
      <button className="outdoor">Выход</button>
      <img src={props.avatar} alt="" className="card__avatar" />
      <h2 className="card__name">{props.title}</h2>
    </div>
  );
};
