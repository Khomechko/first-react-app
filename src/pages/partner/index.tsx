import { UserDescription } from "../../components/user-description";
import { Header } from "../../components/header";
import { useGetUsers, User } from "../../hooks/useGetUsers";
import { createContext } from "react";

export const UsersContext = createContext<User | undefined>(undefined);

export const Partner = () => {
  const { id, user } = useGetUsers();

  if (!user) {
    return null;
  }

  return (
    <>
      <UsersContext.Provider value={user}>
        <Header />
        <UserDescription id={id} />
      </UsersContext.Provider>
    </>
  );
};
