import client from "./client";

const getQuiz = () => {
  return client.get("/quiz");
};

export default { getQuiz };
