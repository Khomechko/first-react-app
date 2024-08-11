import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const useGetUsers = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();

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

  return { id, user };
};
