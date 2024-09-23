import classNames from "classnames";
import { MainButton } from "ui/main-button";
import { HelloBanner } from "components/hello-banner";
import { UserProfile } from "components/user-profile";
import "./style.scss";

export type HeaderProps = {
  isOurTeam?: boolean;
};

export const Header = (props: HeaderProps) => {
  const { isOurTeam } = props;
  const headerClasses = classNames({ "header header--mobile": !isOurTeam });

  return (
    <header className={headerClasses}>
      {isOurTeam ? <HelloBanner /> : <UserProfile />}
      <MainButton classNameModifier={"main-button--right-side"}>
        Выход
      </MainButton>
    </header>
  );
};
