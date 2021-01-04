import client from "./client";
// const bcrypt = require("bcrypt");

const signUp = (info) => {
  return client.post("/student/signup", info);
};

// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

const updatePassword = (email, password) => {
  // const object = { email, password: hashPassword(password) };

  return client.put("/student/update-password", { email, password });
};

const updateResult = (score, quiz) => {
  return client.post("/student/updateResult", { score, quiz });
};

export default { signUp, updatePassword, updateResult };
