import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import { Channelcard } from "./Channelcard";
export const VideoComponent = ({ Videos }) => {
  console.log(Videos);
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      gap={2}
    >
      {Videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <Channelcard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
