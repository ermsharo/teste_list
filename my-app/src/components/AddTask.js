import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import styled from "styled-components";

const AddLine = styled.div`
  padding: 8px;
  padding-left: 0px;
  display: inline-flex;
  justify-content: space-around;
  width: 100%;
`;

export default function AddTask() {

  const [task, setTask] = React.useState('');
  const handleChange = (event) => {
    setTask(event.target.value);
  };



  return (
    <>
       <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" component="div">Adicionar tarefa</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
     
    >
      <AddLine>
      <TextField
        id="fullWidth"
        fullWidth
        label="Nova tarefa"
        value={task}
        onChange={handleChange}
      />
     <Button variant="contained" size="large">
         Adicionar
        </Button>


      </AddLine>
    
    </Box>
        </AccordionDetails>
      </Accordion>
     
    </div>
    </>
  );
}
