import { useParams } from "react-router-dom";
import TodoList from "./../components/TodoList";
import { UserTaskRequest } from "../utils/api";

export default function Home() {
  const [response, loading, hasError] = UserTaskRequest();

  let { id } = useParams();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : response ? (
        <TodoList apiData={response} id={id} />
      ) : (
        <>{hasError}</>
      )}
    </>
  );
}
