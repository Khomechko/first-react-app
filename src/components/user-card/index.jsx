import "./style.scss";
import { Like } from "../like";

export const UserCard = ({ id, title, avatar }) => {
  // const {id, title, avatar} = props

  return (
    <div className="card">
      <img src={avatar} alt="" className="card__avatar" />
      <h2 className="card__name">{title}</h2>
      <Like id={id} />
    </div>
  );
};
