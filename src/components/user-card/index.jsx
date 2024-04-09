import React from "react";
import "./style.scss";

const UserCard = (props) => {
  return (
    <div className="card">
      <img src={props.avatar} alt="" className="card__avatar" />
      <h2 className="card__name">{props.title}</h2>
      <div className="like">
        <img src="" alt="" className="like-logo" />
      </div>
    </div>
  );
};

export default UserCard;
