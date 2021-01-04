import client from "./client";

const getChapterAndTopic = () => {
  return client.get("/chapter");
};

export default { getChapterAndTopic };
