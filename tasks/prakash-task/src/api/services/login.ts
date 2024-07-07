import { loginData } from "../apiInterfaces"
import { ENDPOINTS } from "../constants"
import { http } from "../http"

export const login = (data: loginData) => {
   return http.post(ENDPOINTS.login, data)
}