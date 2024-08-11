import { MainButton } from "../../ui/main-button";
import { useNavigate } from "react-router-dom";
import { HeaderProps } from "../header";
import "./style.scss";

type Props = Omit<HeaderProps, "isOurTeam">;

export const UserProfile = ({ firstName, lastName, avatar }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="user-profile">
      <MainButton onClick={() => navigate(-1)} classNameModifier={"left-side"}>
        Назад
      </MainButton>
      <div className="user-profile__inner">
        <img src={avatar} alt="" className="user-profile__avatar" />
        <div className="user-profile__description">
          <h1 className="title">{firstName + " " + lastName}</h1>
          <h2 className="user-profile__subtitle">Партнер</h2>
        </div>
      </div>
    </div>
  );
};
