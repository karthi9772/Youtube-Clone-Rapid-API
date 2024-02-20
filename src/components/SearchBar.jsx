import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

export const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        border: "1px solid #323e62",
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
        onChange={(e) => {
          e.target.value;
        }}
        style={{
          border: "none",
          background: "transparent",
          outlineWidth: "none",
        }}
      />
      <IconButton
        sx={{
          p: "10px",
          color: "red",
        }}
      >
        <Search></Search>
      </IconButton>
    </Paper>
  );
};
