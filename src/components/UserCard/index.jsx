import React from "react";
import "./style.scss";
import { Like } from "../Like";

export const UserCard = (props) => {
  return (
    <div className="card">
      <img src={props.avatar} alt="" className="card__avatar" />
      <h2 className="card__name">{props.title}</h2>
      <Like />
    </div>
  );
};
