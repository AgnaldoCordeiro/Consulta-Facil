import axios from "axios";
import { getUserLocalStorage } from "data/context/AuthProvider/util";
const url = "http://localhost:3001/auth/";
const token = "b2ad9e0026f2048483d023ab72dec9";

export const ApiService = axios.create({
  baseURL: url,
  timeout: 1000 * 5,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: token,
  },
});

ApiService.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
