import axios from "axios";

export const API = axios.create({
  baseURL: "/api/",
  withCredentials: true,
  validateStatus: (status) => status >= 200 && status < 500,
});
