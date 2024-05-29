import { useEffect, useState } from "react";

export const useGetUsersWithPagination = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isError, setIsError] = useState(false);

  async function fetchUsers(isShowLess) {
    await fetch(`https://reqres.in/api/users?page=${page}&per_page=8/`)
      .then((response) => response.json())
      .then((data) => {
        if (isShowLess) {
          setUser(data.data);
        } else setUser((pre) => [...pre, ...data.data]);
        setTotalPage(data.total_pages);
      })
      .catch((error) => {
        console.log("Error", error);
        setIsError(true);
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

  return { showLessHandler, showMoreHandler, users, totalPage, page };
};
