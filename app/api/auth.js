import client from "./client";

const login = (email, password) => {
  return client.post("/auth/login", { email, password });
};

export default {
  login,
};
