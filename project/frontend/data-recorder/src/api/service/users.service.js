import { ENDPOINTS } from "../constants";
import { http } from "../http";

export const getAllUsers = () => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return http.get(ENDPOINTS.api, config);
};

export const insertUserInDatabase = (data) => {
  return http.post(ENDPOINTS.users, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const deleteUserFromDatabase = (userId) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return http.delete(`${ENDPOINTS.users}/${userId}`, config);
};

export const updateUserApiCall = (userId, updatedData) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  return http.post(`${ENDPOINTS.update}/${userId}`, updatedData, config);
};
