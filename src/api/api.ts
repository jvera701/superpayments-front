import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 5000,
  timeoutErrorMessage: "Timeout error",
});

/** 
const API_IMAGES = axios.create({
  baseURL: import.meta.env.VITE_APP_IMAGES,
  timeout: 5000,
  timeoutErrorMessage: "Timeout error",
});
*/

const login = async (username: string, password: string) => {
  try {
    const response = await API.post("/auth/login", {
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
