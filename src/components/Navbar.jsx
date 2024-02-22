import { Link } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
// import { logo } from "../utils/constants";
import { SearchBar } from "./SearchBar";
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
      <Link to={"/"} style={{ display: "flex" }}>
        <img
          style={{ marginLeft: "9px" }}
          src="/play.png"
          alt="logo"
          height={45}
        ></img>
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
          YOU
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
          TUBE
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
