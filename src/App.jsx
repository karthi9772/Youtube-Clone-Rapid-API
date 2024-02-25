import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Feed,
} from "./components";
const App = () => (
  <Router>
    <Box sx={{ background: "#323e62" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/Channel/:id" element={<ChannelDetail />} />
        <Route path="/Search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
