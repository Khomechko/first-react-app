import { useParams } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";

export const useGetUserById = () => {
  const users = useAppSelector((state) => state.user.users);
  const { id } = useParams();
  const numberId = Number(id);
  const [user] = users.filter((item) => item.id === numberId);
  return user;
};
