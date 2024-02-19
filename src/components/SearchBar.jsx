import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

export const SearchBar = () => {
  return (
    <Paper
      sx={{
        border: "1px solid #e3e3e3",
        pl: 2,
        borderRadius: "20px",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        placeholder="Search..."
        className="search-bar"
        value={""}
        onChange={() => {}}
        sx={{ border: "none", background: "transparent", outline: "none" }}
      />
      <IconButton>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};
