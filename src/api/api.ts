import axios from "axios";

// Change to https://core.testing.refacil.co
const API = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 5000,
  timeoutErrorMessage: "Timeout error",
});

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
