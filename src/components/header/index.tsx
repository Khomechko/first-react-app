import { MainButton } from "../../ui/main-button";
import { HelloBanner } from "../hello-banner";
import { UserProfile } from "../user-profile";
import "./style.scss";

export type HeaderProps = {
  isOurTeam?: boolean;
};

export const Header = (props: HeaderProps) => {
  const { isOurTeam } = props;

  return (
    <header className={!isOurTeam ? "header header--mobile" : ""}>
      {isOurTeam ? <HelloBanner /> : <UserProfile />}
      <MainButton classNameModifier={"right-side"}>Выход</MainButton>
    </header>
  );
};
