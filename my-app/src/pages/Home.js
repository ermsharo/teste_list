import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {userApi} from "../utils/api";

const HomeBox = styled.div`
  width: 60vw;
  margin: auto;
`;


const UserRequest = (url, opts) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  console.log("Chamou aqui");

  

  useEffect(() => {
    setLoading(true);
    userApi
    .get("/")
    .then((response) => {
      setResponse(response.data)
      setLoading(false);
      console.log(response.data)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      setHasError(true);
      setLoading(false);
    });

  }, [url]);

  return [response, loading, hasError];
};

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function Home(){



  const [response, loading, hasError] = UserRequest("https://jsonplaceholder.typicode.com/users");

console.log("Response here ",response)
  return (
    <>
        {loading ? <div>Loading...</div> : (response ? <div>Temos resposta.

         <> <List sx={{ width: '100%', bgcolor: 'background.paper' }}>{response.map(data => ( <ListItem>
        <ListItemAvatar>
          <Avatar {...stringAvatar(data.name)} />
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={data.company.name} />
      </ListItem>))} 
     
     
    </List></>

        </div> : (<>error</>))}
    </>
)
  }
