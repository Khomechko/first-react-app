export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type FetchUsersData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

export type UserResponse = {
  users: User[];
  totalPages: number;
};
