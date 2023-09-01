import axios from "axios";
import { Response } from "../interfaces";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 5000,
  timeoutErrorMessage: "Timeout error",
});

const login = async (username: string, password: string) => {
  try {
    const response = await API.post<Response>("/auth/login", {
      username: username,
      password: password,
    });
    return response.data;
  } catch (e) {
    return {
      error: "Error",
    };
  }
};

export { login };
