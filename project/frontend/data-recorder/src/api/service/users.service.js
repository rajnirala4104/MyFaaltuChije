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