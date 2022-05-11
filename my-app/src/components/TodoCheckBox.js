import Checkbox from "@mui/material/Checkbox";
import { updateLocalStorage } from "./../utils/userUtils";
import { useState } from "react";
export default function TodoCheckBox({ todoObj }) {
  const [checked, setChecked] = useState(
    JSON.parse(todoObj.completed.toLowerCase())
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    updateLocalStorage(todoObj.id, !checked);
    window.location.reload();
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
