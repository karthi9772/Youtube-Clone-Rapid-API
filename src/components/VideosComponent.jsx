import { Box, Stack } from "@mui/material";

export const VideoComponent = ({ Videos }) => {
  console.log(Videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {Videos.map((item) => {
        <Box key={item.id.videoId}>
          <figure>
            <img src={item.snippet.thumbnails.high.url}></img>
          </figure>
        </Box>;
      })}
    </Stack>
  );
};
