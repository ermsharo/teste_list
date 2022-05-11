import styled from "styled-components";
import { useState, useEffect } from "react";
import { checklistApi } from "../utils/api";
import { useParams } from "react-router-dom";

import TodoList from "./../components/TodoList";
import { useNavigate } from "react-router-dom";
import { UserRequest } from "../utils/api";
import { getUserNameById } from "../utils/userUtils";

const HomeBox = styled.div`
  width: 60vw;
  margin: auto;
`;

export default function UserName({ id }) {
  const [response, loading, hasError] = UserRequest();
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : response ? (
        <span>{getUserNameById(response, id)}</span>
      ) : (
        <>error</>
      )}
    </>
  );
}
