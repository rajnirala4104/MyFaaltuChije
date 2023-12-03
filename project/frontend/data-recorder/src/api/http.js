import axios from "axios";
import { BASE_URL, TIMEOUTE } from "./constants";

export const http = axios.create({
   baseURL: BASE_URL,
   timeout: TIMEOUTE,
});
