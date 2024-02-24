import { Channelcard } from "./Channelcard";
import { VideoComponent } from "./VideosComponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, SetchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      SetchannelDetail(data?.items[0])
    );
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );

    //   const fetchResults = async () => {
    //     const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

    //     SetchannelDetail(data?.items[0]);

    //     const videosData = await FetchFromAPI(
    //       `search?channelId=${id}&part=snippet%2Cid&order=date`
    //     );

    //     setVideos(videosData?.items);
    //   };

    //   fetchResults();
  }, [id]);

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

  //     SetchannelDetail(data?.items[0]);

  //     const videosData = await FetchFromAPI(
  //       `search?channelId=${id}&part=snippet%2Cid&order=date`
  //     );

  //     setVideos(videosData?.items);
  //   };

  //   fetchResults();
  // }, [id]);

  console.log(channelDetail);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(195,34,183,1) 0%, rgba(199,31,187,1) 26%, rgba(171,110,218,1) 50%, rgba(121,140,232,1) 70%, rgba(45,185,253,1) 100%)",

            zIndex: 10,
            height: "300px",
          }}
        />
        <Channelcard channelDetail={channelDetail} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Box } from "@mui/material";

// import { Channelcard } from "./Channelcard";
// import { FetchFromAPI } from "../utils/fetchFromAPI";
// const ChannelDetail = () => {
//   const [channelDetail, setChannelDetail] = useState();
//   const [videos, setVideos] = useState(null);

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchResults = async () => {
//       const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

//       setChannelDetail(data?.items[0]);

//       const videosData = await FetchFromAPI(
//         `search?channelId=${id}&part=snippet%2Cid&order=date`
//       );

//       setVideos(videosData?.items);
//     };

//     fetchResults();
//   }, [id]);

//   console.log(channelDetail);
//   return (
//     <Box minHeight="95vh">
//       <Box>
//         <div
//           style={{
//             height: "300px",
//             background:
//               "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
//             zIndex: 10,
//           }}
//         />
//         <Channelcard channelDetail={channelDetail} marginTop="-93px" />
//       </Box>
//       <Box p={2} display="flex">
//         <Box sx={{ mr: { sm: "100px" } }} />
//         {/* <Videos videos={videos} /> */}
//       </Box>
//     </Box>
//   );
// };

// export default ChannelDetail;
