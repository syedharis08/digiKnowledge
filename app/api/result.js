import client from "./client";

const postResult = (info, user) => {
  return client.post(`/student/updateResult?_id=${user._id}`, info);
};

const getResult = (user) => {
  return client.get(`/student/getResult?id=${user._id}`);
};

export default { postResult, getResult };
