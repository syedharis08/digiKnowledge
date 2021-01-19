import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.110:5000/api",
});

export default apiClient;
