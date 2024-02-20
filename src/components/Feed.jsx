import { useState, useEffect } from "react";
import { Videos } from "./Videos";
import { Sidebar } from "./Sidebar";
import { Stack, Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchFromAPI";
function Feed() {
  const [SelectedCategory, SetSelectedCategory] = useState("New");
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${SelectedCategory}`);
  }, []);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          New{} <span style={{ fontWeight: "bold", color: "red" }}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
}

export default Feed;
