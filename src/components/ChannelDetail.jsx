import { Channelcard } from "./Channelcard";
import { VideoComponent } from "./VideosComponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [Channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    FetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  console.log(Channel, videos);
  return <Box>{id}</Box>;
};

export default ChannelDetail;
