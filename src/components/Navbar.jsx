import { Link } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
// import { logo } from "../utils/constants";
import { SearchBar } from "./SearchBar";
import Play from "./Asset/play.png";
// import { Image } from "@mui/icons-material";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        postion: "sticky",
        background: "#323e62",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to={"/Youtube-Clone-Rapid-API"} style={{ display: "flex" }}>
        {/* <img
          style={{ marginLeft: "9px" }}
          src="./Asset/play.png"
          alt="logo"
          height={45}
        ></img> */}
        <img style={{ marginLeft: "9px" }} src={Play} alt="LOGO" height={45} />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: "15px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "red",
          }}
        >
          STREAM
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            ml: "2px",
          }}
        >
          PLAY
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

// <Link to={"/"}>
// <p>Feed</p>
// </Link>
// <Link to={"/video/:id"}>
// <p>Video-Detail</p>
// </Link>
// <Link to={"/Channel/:id"}>
// <p>Channel-detail</p>
// </Link>
// <Link to={"/Search/:searchTerm"}>
// <p>Search-Feed</p>
// </Link>
