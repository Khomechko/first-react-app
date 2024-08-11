import { MainButton } from "../../ui/main-button";
import { HelloBanner } from "../hello-banner";
import { UserProfile } from "../user-profile";
import "./style.scss";

export type HeaderProps = {
  isOurTeam?: boolean;
  firstName?: string;
  lastName?: string;
  avatar?: string;
};

export const Header = (headerProps: HeaderProps) => {
  const { isOurTeam, ...rest } = headerProps;

  return (
    <header className={!isOurTeam ? "header header--mobile" : ""}>
      {isOurTeam ? <HelloBanner /> : <UserProfile {...rest} />}
      <MainButton classNameModifier={"right-side"}>Выход</MainButton>
    </header>
  );
};
