import { apiGet, apiPost } from "../../utils/apiUtils";

export const getUsersData = () => {
  return apiGet(`https://reqres.in/api/users/`);
};

export const addUser = (data) => {
  return apiPost(`https://reqres.in/api/users`, data);
};
