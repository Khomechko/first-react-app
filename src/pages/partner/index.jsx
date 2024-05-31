import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainButton } from "../../ui/main-button";
import { UserDescription } from "../../components/user-description";

import "./style.scss";

export const Partner = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      await fetch(`https://reqres.in/api/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data.data);
        })
        .catch((error) => alert(error));
    }
    getUser();
  }, [id]);

  if (!user) {
    return "";
  }
  return (
    <>
      <div className="header">
        <MainButton onClick={() => navigate(-1)}>Назад</MainButton>
        <div className="user-profile">
          <div className="user-profile__inner">
            <img src={user.avatar} alt="" className="user-profile__avatar" />
            <div className="user-profile__description">
              <h1 className="title">
                {user.first_name + " " + user.last_name}
              </h1>
              <h2 className="user-profile__subtitle">Партнер</h2>
            </div>
          </div>
        </div>
        <MainButton>Выход</MainButton>
      </div>
      <UserDescription id={id} email={user.email} />
    </>
  );
};
