import "./style.scss";
import { Like } from "components/like";
import { memo } from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  avatar: string;
};

export const UserCard = memo(({ id, title, avatar }: Props) => {
  return (
    <div className="card" tabIndex={0}>
      <Link to={`/partner/${id}`}>
        <img src={avatar} alt="" className="card__avatar" />
      </Link>
      <h2 className="card__name">{title}</h2>
      <Like id={id} />
    </div>
  );
});
