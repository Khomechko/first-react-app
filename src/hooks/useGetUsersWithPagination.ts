import { useEffect, useState } from "react";
import { useBoolState } from "./useBoolState";
import { User } from "./useGetUsers";

interface Modal {
  modal: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export const useGetUsersWithPagination = () => {
  const [users, setUser] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [modal, showModal, hideModal] = useBoolState(false);
  const [errorMessage, setErrorMessage] = useState();

  async function fetchUsers(isShowLess: boolean) {
    await fetch(`https://reqres.in/api/users?page=${page}&per_page=8/`)
      .then((response) => response.json())
      .then((data) => {
        if (isShowLess) {
          setUser(data.data);
        } else setUser((pre) => [...pre, ...data.data]);
        setTotalPage(data.total_pages);
      })
      .catch((error) => {
        console.log("Error", error.message);
        setErrorMessage(error.message);
        showModal();
      });
  }
  const showLessHandler = () => {
    setPage(1);
  };

  const showMoreHandler = () => {
    setPage((prew) => prew + 1);
  };

  useEffect(() => {
    fetchUsers(page === 1);
  }, [page]);

  return {
    showLessHandler,
    showMoreHandler,
    users,
    totalPage,
    page,
    hideModal,
    modal,
    errorMessage,
  };
};
