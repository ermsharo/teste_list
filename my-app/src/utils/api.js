import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const checklistApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});
