import axios from "axios";
import { useState, useEffect } from "react";
export const userApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const checklistApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const UserRequest = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    userApi
      .get("/")
      .then((response) => {
        setResponse(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        setHasError(true);
        setLoading(false);
      });
  }, []);

  return [response, loading, hasError];
};

export const UserTaskRequest = (url, opts) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    checklistApi
      .get("/")
      .then((response) => {
        setResponse(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        setHasError(true);
        setLoading(false);
      });
  }, [url]);

  return [response, loading, hasError];
};
