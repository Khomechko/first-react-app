import React from "react";
import "./style.css";

// const UserCard = (props) => {
//   const {title} = props
const UserCard = ({ title }) => {
  return (
    <div className="card">
      <img src="" alt="" className="card__avatar" />
      <h2 className="card__name">{title}</h2>
      <div className="like-box">
        <img src="" alt="" className="like-logo" />
      </div>
    </div>
  );
};

export default UserCard;
