import client from "./client";

const login = (email, password) => {
  return client.post("/auth/login", { email, password });
};

const forgetPassword = (email) => {
  return client.post("/auth/forget-password", { email });
};

export default {
  login,
  forgetPassword,
};
