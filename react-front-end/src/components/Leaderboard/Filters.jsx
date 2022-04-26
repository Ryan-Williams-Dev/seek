import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";

const filters = [
  "Total Score",
  "Games Played",
];

const Filters = (props) => {
  const { filter, setFilter } = props;

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ width: 300, marginTop: '0.8em' }} size="small">
        <InputLabel id="simple-select-label">Filter By...</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={filter}
          label="LdrBoard Filter"
          onChange={handleChange}
        >
          {filters.map((filter, index) => (
            <MenuItem key={index} value={filter}>{filter}</MenuItem>
          ))};
        </Select>
      </FormControl>
    </div>
  );
}

export default Filters;