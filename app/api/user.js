import client from "./client";

const signUp = (info) => {
  return client.post("/student/signup", info);
};

export default { signUp };
