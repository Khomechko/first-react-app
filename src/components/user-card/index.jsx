import "./style.scss";
import { Like } from "../like";
import { Link } from "react-router-dom";

export const UserCard = ({ id, title, avatar }) => {
  // const {id, title, avatar} = props

  return (
    <div className="card">
      <Link to={`/partner/${id}`}>
        <img src={avatar} alt="" className="card__avatar" />
      </Link>
      <h2 className="card__name">{title}</h2>
      <Like id={id} />
    </div>
  );
};
