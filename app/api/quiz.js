import client from "./client";

const getQuiz = (id) => {
  return client.get(`/quiz/getQuiz?id=${id}`);
};

export default { getQuiz };
