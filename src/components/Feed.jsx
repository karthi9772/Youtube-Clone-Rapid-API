import { useState, useEffect } from "react";
import { VideoComponent } from "./VideosComponent";
import { Sidebar } from "./Sidebar";
import { Stack, Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchFromAPI";
function Feed() {
  const [SelectedCategory, SetSelectedCategory] = useState("New");
  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${SelectedCategory}`).then((data) =>
      SetVideos(data.items)
    );
  }, [SelectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          SelectedCategory={SelectedCategory}
          SetSelectedCategory={SetSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {SelectedCategory}{" "}
          <span style={{ fontWeight: "bold", color: "red" }}>Videos</span>
        </Typography>
        <VideoComponent Videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
