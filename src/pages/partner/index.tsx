import { UserDescription } from "../../components/user-description";
import { Header } from "../../components/header";
import { useGetUsers } from "../../hooks/useGetUsers";

export const Partner = () => {
  const { id, user } = useGetUsers();

  const headerProps = {
    firstName: user?.first_name,
    lastName: user?.last_name,
    avatar: user?.avatar,
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Header {...headerProps} />
      <UserDescription id={id} email={user?.email} />
    </>
  );
};
