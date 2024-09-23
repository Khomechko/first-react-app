import "./style.scss";
import { MainButton } from "../../ui/main-button";
import { useNavigate } from "react-router-dom";
import { useGetUserById } from "../../hooks/useGetUserById";

export const UserProfile = () => {
  const navigate = useNavigate();
  const user = useGetUserById();

  return (
    <div className="user-profile">
      <MainButton
        onClick={() => navigate(-1)}
        classNameModifier={"main-button--left-side"}
      >
        Назад
      </MainButton>
      <div className="user-profile__inner">
        <img src={user?.avatar} alt="" className="user-profile__avatar" />
        <div className="user-profile__description">
          <h1 className="title">{user?.first_name + " " + user?.last_name}</h1>
          <h2 className="user-profile__subtitle">Партнер</h2>
        </div>
      </div>
    </div>
  );
};
