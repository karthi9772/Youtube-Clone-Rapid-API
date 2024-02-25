import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/Search/${searchTerm}`);
    }
    setSearchTerm("");
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
