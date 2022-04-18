import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const filters = [
  "Total Score",
  "Name",
  "Games Played",
  "Last Game Score",
  "Last Week Score"
];



export default function Filters() {
  const [filter, setFilter] = useState()

  const handleChange = (event) => {
    setFilter(event.target.value);
    // filter function goes here
  }

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="LdrBoard Filter"
          onChange={handleChange}
        >
          <MenuItem value={"Total Score"}>Total Score</MenuItem>
          <MenuItem value={"Name"}>Name</MenuItem>
          <MenuItem value={"Games Played"}>Games Played</MenuItem>
          <MenuItem value={"Last Game Score"}>Last Game Score</MenuItem>
          <MenuItem value={"Last Week Score"}>Last Week Score</MenuItem>
        </Select>
      </FormControl>
    </div>
      
  );


}