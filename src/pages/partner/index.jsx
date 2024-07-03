import { UserDescription } from "../../components/user-description";
import { Header } from "../../components/header";
import { useGetUsers } from "../../hooks/useGetUsers";

export const Partner = () => {
  const { id, user } = useGetUsers();

  if (!user) {
    return null;
  }

  return (
    <>
      <Header
        firstName={user.first_name}
        lastName={user.last_name}
        avatar={user.avatar}
      />
      <UserDescription id={id} email={user.email} />
    </>
  );
};
