import { getUserTodo } from "../utils/userUtils";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TodoCheckBox from "./TodoCheckBox";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserName from "./UserName";
import { getTodoStatusNumber } from "./../utils/userUtils";
import { useNavigate } from "react-router-dom";
import AddTask from "./AddTask";
const style = {
  width: "100%",
  bgcolor: "background.paper",
};

const ListBox = styled.div`
  width: 70vw;
  margin: auto;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
  }
`;

const TitlePadding = styled.div`
  padding: 16px;
  padding-left: 0px;
`;

const ComebackPadding = styled.div`
  padding: 16px;
  padding-left: 0px;
  cursor: pointer;
`;

export default function TodoList({ apiData, id }) {
  const navigate = useNavigate();

  let userByIdData = getUserTodo(id, apiData);

  let status = getTodoStatusNumber(userByIdData);
  return (
    <ListBox>
      <TitlePadding>
        {" "}
        <Typography variant="h2" component="div">
          Tarefas de <UserName id={id} />
        </Typography>
      </TitlePadding>

      <>
        {" "}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" component="div">
              Tarefas entregues
            </Typography>
            <Typography variant="h2" component="div">
              {status[0]}/{status[1]}
            </Typography>
          </CardContent>
        </Card>
        <ComebackPadding
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant="h4" component="div">
            ↤ Voltar para os usuários
          </Typography>
        </ComebackPadding>
        <AddTask />
      </>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {userByIdData.map((data) => (
          <>
            <ListItem>
              <TodoCheckBox todoObj={data} />
              <ListItemText primary={data.title} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </ListBox>
  );
}
