import client from "./client";

const signUp = (info) => {
  return client.post("/users/signup", info);
};

export default { signUp };
