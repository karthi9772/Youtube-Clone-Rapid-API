import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import { Channelcard } from "./Channelcard";
// import { useState } from "react";
// import Skeleton from "@mui/material/Skeleton";

export const VideoComponent = ({ Videos, direction }) => {
  // const [isLoading, SetIsLoading] = useState(true);
  // console.log(Videos);
  // if (isLoading){
  //   return(

  //   );
  // }
  return (
    <Stack
      direction={direction || "row"}
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
