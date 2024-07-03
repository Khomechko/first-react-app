import React from "react";
import { MainButton } from "../../ui/main-button";
import { HelloBanner } from "../hello-banner";
import { UserProfile } from "../user-profile";
import "./style.scss";

export const Header = (props) => {
  const { isOurTeam, ...rest } = props;

  return (
    <header>
      {isOurTeam ? <HelloBanner /> : <UserProfile {...rest} />}
      <MainButton classNameModifier={"header"}>Выход</MainButton>
    </header>
  );
};
