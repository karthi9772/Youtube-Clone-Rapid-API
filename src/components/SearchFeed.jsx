import { useState, useEffect } from "react";
import { VideoComponent } from "./VideosComponent";
import { Stack, Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const { searchTerm } = useParams();

  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      SetVideos(data.items);
    });
  }, [searchTerm]);
  console.log(searchTerm);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          showing results for{" "}
          <span style={{ fontWeight: "bold", color: "red" }}>{searchTerm}</span>
        </Typography>
        <VideoComponent Videos={videos} />
      </Box>
    </Stack>
  );
}

export default SearchFeed;
