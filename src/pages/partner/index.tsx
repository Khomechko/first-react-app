import { UserDescription } from "../../components/user-description";
import { Header } from "../../components/header";
import { useAppSelector } from "../../hooks/reduxHooks";

export const Partner = () => {
  const user = useAppSelector((state) => state.user.userData.data);

  if (!user) {
    return null;
  }

  return (
    <>
      <Header />
      <UserDescription />
    </>
  );
};
